// Validação de Email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validação de Telefone
function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\-\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Obter elementos do formulário
const form = document.getElementById('budgetForm');
const inputs = form.querySelectorAll('.form-input');
const successMessage = document.getElementById('successMessage');

// Adicionar eventos de validação em tempo real
inputs.forEach(input => {
    input.addEventListener('blur', validateField);
    input.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            validateField.call(this);
        }
    });
});

// Validar campo individual
function validateField(event) {
    const field = event ? event.target : this;
    const fieldName = field.id;
    const fieldValue = field.value.trim();
    const errorElement = document.getElementById(`erro-${fieldName}`);

    let isValid = true;
    let errorMessage = '';

    // Validar campo vazio
    if (!fieldValue) {
        isValid = false;
        errorMessage = 'Este campo é obrigatório';
    } else {
        // Validações específicas
        switch (fieldName) {
            case 'email':
                if (!isValidEmail(fieldValue)) {
                    isValid = false;
                    errorMessage = 'E-mail inválido';
                }
                break;
            case 'telefone':
                if (!isValidPhone(fieldValue)) {
                    isValid = false;
                    errorMessage = 'Telefone inválido (mínimo 10 dígitos)';
                }
                break;
            case 'servico':
                if (!fieldValue) {
                    isValid = false;
                    errorMessage = 'Selecione um serviço';
                }
                break;
            case 'mensagem':
                if (fieldValue.length < 10) {
                    isValid = false;
                    errorMessage = 'Mensagem deve ter pelo menos 10 caracteres';
                }
                break;
        }
    }

    // Atualizar visual do campo
    if (isValid) {
        field.classList.remove('error');
        errorElement.classList.remove('show');
        errorElement.textContent = '';
    } else {
        field.classList.add('error');
        errorElement.classList.add('show');
        errorElement.textContent = errorMessage;
    }

    return isValid;
}

// Validar todos os campos
function validateForm() {
    let isFormValid = true;

    inputs.forEach(input => {
        const isFieldValid = validateField.call(input);
        if (!isFieldValid) {
            isFormValid = false;
        }
    });

    return isFormValid;
}

// Submeter formulário
form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (validateForm()) {
        // Mostrar mensagem de sucesso
        successMessage.classList.remove('hidden');
        
        // Scroll para a mensagem de sucesso
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Limpar formulário após 2 segundos (opcional)
        setTimeout(() => {
            form.reset();
            inputs.forEach(input => {
                input.classList.remove('error');
            });
        }, 500);
    }
});

// Resetar formulário e voltar ao início
function resetForm() {
    successMessage.classList.add('hidden');
    form.reset();
    inputs.forEach(input => {
        input.classList.remove('error');
        const errorElement = document.getElementById(`erro-${input.id}`);
        if (errorElement) {
            errorElement.classList.remove('show');
            errorElement.textContent = '';
        }
    });
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Efeito de floating label ao carregar a página
window.addEventListener('load', function() {
    inputs.forEach(input => {
        if (input.value) {
            input.classList.add('filled');
        }
    });
});
