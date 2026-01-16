# Formulário de Orçamento - Teste Técnico Trii

Teste técnico do Programa de Estágio da Trii. Formulário de contato responsivo com validação de campos e mensagem de sucesso.

## 📋 Descrição

Implementação de um formulário de orçamento baseado em design fornecido, com validação em tempo real e feedback visual ao usuário.

## ✨ Funcionalidades

- ✅ Formulário com 5 campos: Nome, Email, Telefone, Serviço e Mensagem
- ✅ Validação em tempo real de todos os campos
- ✅ Mensagens de erro personalizadas para cada tipo de validação
- ✅ Efeito de floating label (placeholder que sobe ao focar)
- ✅ Mensagem de sucesso ao enviar formulário válido
- ✅ Design responsivo (desktop, tablet e mobile)
- ✅ Interface intuitiva e amigável

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização com animações
- **JavaScript Vanilla** - Validação e interatividade

## 📁 Estrutura do Projeto

```
teste-dev-trii/
├── index.html       # Arquivo HTML principal
├── styles.css       # Estilos CSS
├── script.js        # Lógica JavaScript
├── README.md        # Este arquivo
└── .gitignore       # Configuração Git
```

## 🚀 Como Usar

1. Clone ou baixe o projeto
2. Abra o arquivo `index.html` em um navegador web
3. Preencha os campos do formulário
4. Clique no botão "Enviar"

## 📝 Validações Implementadas

- **Nome**: Campo obrigatório
- **Email**: Campo obrigatório com validação de formato
- **Telefone**: Campo obrigatório com mínimo de 10 dígitos
- **Serviço**: Seleção obrigatória
- **Mensagem**: Campo obrigatório com mínimo de 10 caracteres

## 🎨 Design

O design segue a imagem de referência com:
- Fundo azul claro (gradiente)
- Card branco com sombra
- Botão azul claro para ações
- Layout em duas colunas para desktop
- Layout responsivo que se adapta a telas menores

## 📱 Responsividade

- ✅ Desktop (1024px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (até 480px)

## 🔄 Comportamento do Formulário

1. **Interação do Usuário**: Ao começar a digitar em um campo, o placeholder sobe para a parte superior (floating label)
2. **Validação**: Ao sair do campo (blur), a validação é acionada
3. **Feedback Visual**: Campos com erro exibem borda vermelha e mensagem de erro
4. **Sucesso**: Ao enviar um formulário válido, aparece modal com mensagem de sucesso

## 🔐 Notas de Segurança

- O formulário não envia dados para servidor (sem backend PHP)
- Validações são realizadas no cliente (JavaScript)
- Para uso em produção, adicionar validações no servidor

## 📧 Contato

Enviado para: rafaelalves@trii.com.br

## 📄 Licença

Projeto desenvolvido para teste técnico - Trii Agência Digital

---

**Data de Criação**: 15 de janeiro de 2026  
**Prazo**: 20 de janeiro de 2026 às 17h
