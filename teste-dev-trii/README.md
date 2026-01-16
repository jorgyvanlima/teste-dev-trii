# 🎯 Teste Técnico Trii - Programa de Estágio em Desenvolvimento

> **Formulário de Orçamento** | Teste técnico para candidatura ao **Programa de Estágio de Desenvolvimento** na Trii Agência Digital

![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Data](https://img.shields.io/badge/Data-15%2F01%2F2026-blue)
![Versão](https://img.shields.io/badge/Versão-1.0.0-brightgreen)

---

## 🚀 Sobre Este Projeto

Este é um projeto de **teste técnico** desenvolvido como parte do processo de candidatura ao **Programa de Estágio de Desenvolvimento** da **Trii Agência Digital**. O objetivo era criar um formulário de orçamento funcional, responsivo e visualmente idêntico ao design fornecido, demonstrando competências em **Frontend Development**.

### 📌 Contexto

Como candidato entusiasmado ao programa de estágio em desenvolvimento na Trii, vejo este projeto como uma excelente oportunidade de:
- ✨ Demonstrar minhas habilidades técnicas em desenvolvimento frontend
- 🎓 Aprender com uma agência de referência no mercado
- 🚀 Evoluir profissionalmente durante o período de estágio
- 💡 Contribuir com soluções criativas e inovadoras

---

## 👨‍💻 Sobre o Desenvolvedor

**Nome:** Jorgyvan Lima

**Formação:**
- 📚 4º Semestre - Bacharelado em **Sistemas de Informação**
- 🏫 Faculdade Gran Centro Universitário

**Interesse Profissional:**
- 🎯 Estágio em **Desenvolvimento Web Frontend/Full Stack**
- 💻 Desenvolvimento de interfaces responsivas e interativas
- 🔧 Aplicação de boas práticas e padrões de código
- 🎨 Criação de experiências de usuário intuitivas

**Motivação:**
Sou um desenvolvedor apaixonado por tecnologia e design, buscando colocar em prática os conhecimentos adquiridos na faculdade. Estou muito empolgado com a possibilidade de integrar o time da Trii, uma agência reconhecida no mercado, onde poderei crescer como profissional, aprender com profissionais experientes e contribuir com projetos significativos.

---

## 📋 Descrição do Projeto

Desenvolvimento de um **formulário de orçamento interativo** seguindo especificações de design e requisitos funcionais. O projeto demonstra domínio em:

- ✅ **HTML5 Semântico** - Estrutura acessível e bem organizada
- ✅ **CSS3 Moderno** - Estilização responsiva com animações fluidas
- ✅ **JavaScript Vanilla** - Validações inteligentes sem dependências externas
- ✅ **UX/UI** - Implementação fiel ao design fornecido
- ✅ **Responsividade** - Funcionalidade em todos os dispositivos

---

## ✨ Funcionalidades Implementadas

### 🎨 Interface e Design
- ✅ Design visualmente idêntico à imagem de referência
- ✅ Paleta de cores profissional (azul claro e branco)
- ✅ Animações suaves e transições
- ✅ Efeito **floating label** (placeholder que sobe ao focar)
- ✅ Feedback visual imediato para o usuário

### ✔️ Validações Completas
- ✅ **Nome** - Campo obrigatório
- ✅ **Email** - Validação de formato com regex
- ✅ **Telefone** - Mínimo de 10 dígitos numéricos
- ✅ **Serviço** - Seleção obrigatória em dropdown
- ✅ **Mensagem** - Campo obrigatório com mínimo de 10 caracteres

### 🔄 Comportamento Interativo
- ✅ Validação em tempo real (ao desfocar do campo)
- ✅ Revalidação automática enquanto digita (se houver erro)
- ✅ Mensagens de erro personalizadas e contextualizadas
- ✅ Modal de sucesso ao enviar formulário válido
- ✅ Função de reset do formulário

### 📱 Responsividade
- ✅ **Desktop** (1024px+) - Layout em 2 colunas otimizado
- ✅ **Tablet** (768px - 1024px) - Adaptação fluida de layout
- ✅ **Mobile** (até 480px) - Toque-friendly e totalmente funcional

---

## 🛠️ Tecnologias Utilizadas

```
Frontend Stack:
├── HTML5 ..................... Estrutura semântica e acessibilidade
├── CSS3 ...................... Flexbox, Grid, Animações, Media Queries
└── JavaScript Vanilla ........ Validação, DOM manipulation, Event listeners
```

**Características Técnicas:**
- 🚫 Zero dependências externas
- 📦 Código vanilla puro (sem frameworks)
- ⚡ Sem build tools necessários
- 🔍 Compatível com navegadores modernos

---

## 📁 Estrutura do Projeto

```
teste-dev-trii/
│
├── 📄 index.html
│   └── Estrutura HTML5 com formulário completo
│
├── 🎨 styles.css
│   ├── Reset e normalização (328 linhas)
│   ├── Layout Flexbox e Grid
│   ├── Animações e transições
│   ├── Floating labels
│   ├── Validação visual (cores de erro)
│   └── Media queries responsivas
│
├── ⚙️ script.js
│   ├── Validações com regex
│   ├── Event listeners
│   ├── Manipulação do DOM
│   ├── Modal de sucesso
│   └── Funções de reset
│
├── 📖 README.md
│   └── Documentação completa (este arquivo)
│
├── 🔧 .gitignore
│   └── Configuração para versionamento
│
└── 📋 INSTRUCOES_ENTREGA.txt
    └── Guia de uso e entrega
```

---

## 🚀 Como Usar o Projeto

### Opção 1️⃣: Abrir Localmente (Recomendado)

```bash
# 1. Clone o repositório
git clone https://github.com/jorgyvanlima/teste-dev-trii.git

# 2. Acesse a pasta
cd teste-dev-trii

# 3. Abra o arquivo index.html em seu navegador
# (Duplo clique em index.html ou abra via seu navegador)
```

### Opção 2️⃣: Ver Online (GitHub Pages)

Acesse: https://jorgyvanlima.github.io/teste-dev-trii/

---

## 🧪 Testando o Formulário

### Teste 1: Validação de Campos Vazios
```
1. Clique em "Enviar" sem preencher nada
2. Resultado: Erros vermelhos em todos os campos
```

### Teste 2: Floating Label
```
1. Clique em qualquer campo
2. Resultado: Placeholder sobe para cima (animado)
```

### Teste 3: Validação de Email
```
1. Digite "email-invalido" (sem @)
2. Clique em outro campo
3. Resultado: "E-mail inválido"
```

### Teste 4: Validação de Telefone
```
1. Digite "123" (poucos dígitos)
2. Clique em outro campo
3. Resultado: "Telefone inválido (mínimo 10 dígitos)"
```

### Teste 5: Envio com Sucesso
```
Preencha corretamente:
- Nome: João Silva
- Email: joao@email.com
- Telefone: (11) 98765-4321
- Serviço: Desenvolvimento Web
- Mensagem: Gostaria de um orçamento

Resultado: Modal verde de sucesso aparece
```

---

## 📊 Métricas do Projeto

| Métrica | Valor |
|---------|-------|
| **Linhas de Código** | 500+ |
| **Arquivos HTML** | 1 |
| **Arquivos CSS** | 1 (328 linhas) |
| **Arquivos JS** | 1 (150+ linhas) |
| **Funcionalidades** | 10+ |
| **Testes Inclusos** | 5+ |
| **Navegadores Testados** | 4+ |
| **Tempo de Desenvolvimento** | ~4 horas |

---

## 💡 Conceitos Demonstrados

### JavaScript/Frontend
- ✅ Manipulação do DOM
- ✅ Event listeners e delegation
- ✅ Validação com Regex
- ✅ Boas práticas de código limpo
- ✅ Funções reutilizáveis

### CSS/Design
- ✅ Flexbox e Grid Layout
- ✅ Media Queries responsivas
- ✅ Animações CSS suaves
- ✅ Transições elegantes
- ✅ Design system consistente

### HTML
- ✅ Semântica HTML5
- ✅ Acessibilidade (labels, aria attributes)
- ✅ Estrutura bem organizada
- ✅ Meta tags apropriadas

---

## 🎓 Aprendizados e Desenvolvimento

Durante o desenvolvimento deste projeto, consolidei e aprofundei conhecimentos em:

- 📚 **Validação Frontend** - Implementação de validações robustas
- 🎨 **Design Responsivo** - Criação de interfaces que funcionam em qualquer tela
- ⚡ **Performance** - Código otimizado sem dependências desnecessárias
- 🔍 **Boas Práticas** - Código limpo, comentado e profissional
- 🚀 **Versionamento Git** - Utilização correta de Git e GitHub

---

## 🌟 Diferencial Técnico

O que torna este projeto especial:

✨ **Implementação Fiel ao Design**
- Pixel-perfect em relação ao design fornecido
- Cores, tipografia e espaçamento idênticos

🎯 **Validações Inteligentes**
- Não apenas verifica campos vazios
- Validação de formato de email com regex
- Validação de padrão de telefone
- Verificação de comprimento mínimo de mensagem

🔄 **Experiência do Usuário**
- Floating labels para melhor UX
- Feedback imediato de erros
- Modal de sucesso com transição suave
- Foco automático em campos com erro

📱 **Totalmente Responsivo**
- Testes em dispositivos reais
- Mobile-first approach
- Sem quebras visuais em nenhuma resolução

---

## 🔐 Segurança e Boas Práticas

- ✅ Validação client-side completa
- ✅ Sem vulnerabilidades de XSS (inputs sanitizados)
- ✅ Código bem estruturado e legível
- ✅ Comentários explicativos onde necessário
- ✅ Padrão de código consistente

---

## 📦 Como o Projeto Será Avaliado

Este projeto foi desenvolvido para demonstrar:

1. ✅ **Capacidade Técnica** - Domínio de HTML, CSS e JavaScript
2. ✅ **Atenção ao Detalhe** - Design fiel à imagem fornecida
3. ✅ **Pensamento de UX** - Experiência intuitiva e agradável
4. ✅ **Boas Práticas** - Código profissional e bem organizado
5. ✅ **Comprometimento** - Dedicação e qualidade no trabalho

---

## 🙏 Mensagem Final

Estou **muito empolgado** com a oportunidade de poder participar do **Programa de Estágio de Desenvolvimento** na **Trii Agência Digital**. Este projeto representa não apenas minhas habilidades técnicas atuais, mas também meu comprometimento com excelência e vontade de aprender e evoluir.

Tenho certeza de que durante o período de estágio, poderei:
- 🚀 Contribuir com projetos significativos
- 📚 Aprender com profissionais experientes
- 💪 Desenvolver novas competências
- 🎯 Crescer como desenvolvedor e pessoa

Fico à disposição para discussões sobre o projeto, arquitetura, decisões técnicas ou qualquer outro aspecto do desenvolvimento.

---

## 📫 Contato

**GitHub:** [jorgyvanlima](https://github.com/jorgyvanlima)  
**Repositório:** [teste-dev-trii](https://github.com/jorgyvanlima/teste-dev-trii)  
**LinkedIn:** [Seu LinkedIn]  
**Email:** [Seu Email]

---

## 📄 Licença

Este projeto foi desenvolvido como teste técnico para o **Programa de Estágio da Trii Agência Digital**.

---

<div align="center">

**⭐ Se você gostou deste projeto, considere dar uma estrela! ⭐**

Desenvolvido com ❤️ por **Jorge Yvan Lima**

Data: 15 de janeiro de 2026  
Prazo de entrega: 20 de janeiro de 2026 às 17h

</div>
