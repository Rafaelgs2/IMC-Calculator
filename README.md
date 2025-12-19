# 🏥 Calculadora de IMC Avançada

> Uma aplicação web interativa e acessível para calcular o Índice de Massa Corporal com suporte especializado para diferentes grupos etários

![Status](https://img.shields.io/badge/Status-Ativo-brightgreen?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

---

## 📋 Índice
- [Visão Geral](#visão-geral)
- [Características Principais](#características-principais)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Competências Técnicas Demonstradas](#competências-técnicas-demonstradas)
- [Instalação e Execução](#instalação-e-execução)
- [Contribuindo](#contribuindo)

---

## 👀 Visão Geral

A **Calculadora de IMC Avançada** é uma aplicação web moderna e responsiva que oferece cálculos precisos do Índice de Massa Corporal adaptados para diferentes grupos etários: crianças, adultos e idosos. Desenvolvida com foco em acessibilidade, usabilidade e experiência do usuário premium.

### 🎯 Objetivo
Criar uma ferramenta educacional e prática para cálculo de IMC, demonstrando competências em desenvolvimento front-end com implementação de boas práticas de código, design responsivo e acessibilidade web.

---

## ✨ Características Principais

### 🎨 Interface Premium
- Design moderno com gradientes dinâmicos e animações suaves
- Paleta de cores profissional (#1a2980 e #26d0ce)
- Responsive design que funciona perfeitamente em dispositivos mobile, tablet e desktop
- Efeitos visuais sofisticados com backdrop-filter e blur effects

### 📱 Responsividade
- Totalmente adaptável para todos os tamanhos de tela
- Navegação intuitiva com menu colapsável em mobile
- Touch-friendly com elementos otimizados para dispositivos móveis

### ♿ Acessibilidade Web (WCAG)
- Tags semânticas HTML5 apropriadas
- Atributos ARIA para navegação e conteúdo dinâmico
- Suporte a leitores de tela
- Contraste de cores adequado
- Navegação por teclado completa
- Skip links para conteúdo principal

### 🧮 Cálculos Especializados
- **Crianças**: Classificação baseada em percentis específicos por idade e sexo
- **Adultos**: Classificação OMS padrão
- **Idosos**: Fórmula adaptada com interpretações específicas

### 🔄 Validação Robusta
- Validação de entrada de dados em tempo real
- Mensagens de erro claras e construtivas
- Prevenção de valores inválidos

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Styling avançado com flexbox, grid e animações
- **JavaScript (Vanilla)** - Lógica pura sem dependências desnecessárias

### Frameworks & Bibliotecas
- **Bootstrap 5.3.2** - Framework CSS responsivo (base estrutural)
- **Bootstrap Icons** - Ícones escaláveis e profissionais
- **Google Fonts (Poppins)** - Tipografia moderna

### 🎨 Arquitetura de Estilos (Diferenciais)
```
css/ (6 arquivos + 645+ linhas de CSS customizado)
├── style.css         # Estilos globais com animações avançadas
├── adulto.css        # Estilo especializado - adultos
├── crianca.css       # Estilo especializado - crianças
├── idoso.css         # Estilo especializado - idosos
├── forms.css         # Estilo formulários com validação visual
└── age.css           # Estilo seletor de categoria
```
**💡 Estratégia**: Bootstrap como base responsiva + CSS customizado robusto para design premium

### Técnicas Implementadas
- CSS Grid Layout + Flexbox
- CSS Animations com `@keyframes` (gradientAnimation, bounce)
- Media queries responsivas
- Pseudo-classes e pseudo-elementos
- Gradientes dinâmicos lineares e radiais
- **Backdrop filters com blur effects (glassmorphism)**
- **Modularização CSS por componente**
- Mobile-First Approach
- Progressive Enhancement
- DOM Manipulation (Vanilla JS)

---

## 🚀 Funcionalidades

### Páginas Principais

#### 1️⃣ Página Inicial (`index.html`)
- Hero section com chamada à ação
- Seções informativas sobre IMC
- Links para calculadoras especializadas
- Design atraente com animações

#### 2️⃣ Calculadora de Adultos (`pages/adultos.html`)
- Entrada de peso e altura
- Cálculo instantâneo de IMC
- Classificação según tabela OMS
- Interpretação com recomendações

#### 3️⃣ Calculadora de Crianças (`pages/criancas.html`)
- Captura de idade e sexo da criança
- Cálculo baseado em percentis
- Tabelas de referência por faixa etária
- Alertas sobre desenvolvimento

#### 4️⃣ Calculadora de Idosos (`pages/idosos.html`)
- Fórmula adaptada para terceira idade
- Interpretações específicas para o grupo
- Considerações médicas relevantes

### Componentes Interativos
- Formulários com validação em tempo real
- Botões com feedback visual
- Cards informativos
- Modal com resultados detalhados
- Indicadores visuais de status

---

## 💻 Como Usar

### Acesso Rápido
1. Acesse a página inicial
2. Selecione o grupo etário (Crianças, Adultos ou Idosos)
3. Preencha os dados solicitados (peso, altura, e dados adicionais conforme necessário)
4. Clique em "Calcular"
5. Visualize o resultado com interpretação e recomendações

### Fluxo de Uso
```
Início → Selecionar Categoria → Preencher Dados → Calcular → Ver Resultado
```

---

## 📁 Estrutura do Projeto

```
calculadora-imc/
│
├── index.html                    # Página inicial
├── README.md                     # Este arquivo
│
├── pages/                        # Páginas da aplicação
│   ├── adultos.html             # Calculadora para adultos
│   ├── criancas.html            # Calculadora para crianças
│   ├── idosos.html              # Calculadora para idosos
│   └── age.html                 # Seletor de categoria etária
│
├── css/                          # Estilos da aplicação
│   ├── style.css                # Estilos globais
│   ├── adulto.css               # Estilos específicos - adultos
│   ├── crianca.css              # Estilos específicos - crianças
│   ├── idoso.css                # Estilos específicos - idosos
│   ├── forms.css                # Estilos de formulários
│   └── age.css                  # Estilos do seletor de idade
│
└── js/                           # Scripts JavaScript
    ├── calculadora.js           # Lógica de cálculo de IMC
    ├── script.js                # Script principal
    ├── form-adulto.js           # Lógica do formulário - adultos
    ├── form-crianca.js          # Lógica do formulário - crianças
    └── form-idoso.js            # Lógica do formulário - idosos
```

---

## 🎓 Competências Técnicas Demonstradas

### Frontend Development
✅ **HTML5 Semântico**
- Uso correto de tags semânticas
- Estrutura acessível com ARIA labels
- Meta tags para SEO

✅ **CSS3 Avançado**
- Flexbox e Grid layouts profissionais
- Animações fluidas com `@keyframes` personalizadas
- Media queries estratégicas
- Pseudo-classes e pseudo-elementos
- Gradientes lineares e radiais dinâmicos
- **Backdrop filters com blur effects**
- **6 arquivos CSS modularizados** (645+ linhas de código customizado)
- **Estratégia híbrida eficiente**: Bootstrap + CSS próprio para diferencial visual

✅ **JavaScript (Vanilla)**
- Manipulação eficiente do DOM
- Validação de formulários em tempo real
- Cálculos matemáticos precisos (IMC, percentis)
- Event handling avançado
- Separação de responsabilidades
- Sem frameworks JS desnecessários

### UX/UI
✅ **Design Responsivo**
- Mobile-first approach
- Breakpoints bem definidos com media queries
- Testes em múltiplos dispositivos
- Efeitos visuais que escalam com a tela

✅ **Design Premium (Diferenciais)**
- Paleta de cores profissional (#1a2980 e #26d0ce)
- Animações elegantes com `@keyframes` personalizadas
- **Glassmorphism com backdrop filters e blur effects**
- **Micro-interações em hover/focus**
- Transições fluidas e naturais

✅ **Acessibilidade Web**
- WCAG 2.1 compliance
- Atributos ARIA semânticos
- Suporte completo a teclado
- Leitores de tela
- Skip links para conteúdo principal
- Contraste de cores adequado

### Best Practices
✅ **Organização de Código**
- Modularização de CSS em 6 arquivos
- Scripts separados por funcionalidade
- Nomenclatura semântica e clara

✅ **Performance**
- Carregamento otimizado de assets
- CSS organizado por componente
- Lazy loading considerado

✅ **Versionamento**
- Repositório Git organizado
- Histórico de commits claro
- Branches para diferentes categorias

---

## 🔧 Instalação e Execução

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Git (opcional, para clonar o repositório)

### Passos para Executar

1. **Clone o repositório** (ou faça download)
```bash
git clone https://github.com/Rafaelgs2/IMC-Calculator.git
cd calculadora-imc
```

2. **Abra a aplicação**
   - Opção A: Duplo clique em `index.html`
   - Opção B: Use um servidor local
```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server
```

3. **Acesse no navegador**
```
https://imccalculator-steel.vercel.app/
```

---

## 📊 Exemplos de Uso

### Calcular IMC de um Adulto
- Peso: 75 kg
- Altura: 180 cm
- **Resultado**: IMC = 23.15 (Peso Normal)

### Calcular IMC de uma Criança
- Peso: 35 kg
- Altura: 135 cm
- Idade: 9 anos
- Sexo: Masculino
- **Resultado**: Comparação com percentis de referência

### Calcular IMC de um Idoso
- Peso: 70 kg
- Altura: 170 cm
- **Resultado**: IMC com interpretação adaptada

---

## 🌐 Compatibilidade

| Browser | Versão Mínima | Status |
|---------|---------------|--------|
| Chrome  | 90+           | ✅ Completo |
| Firefox | 88+           | ✅ Completo |
| Safari  | 14+           | ✅ Completo |
| Edge    | 90+           | ✅ Completo |

---

## 📝 Funcionalidades Futuras

- [ ] Gráficos de histórico de IMC
- [ ] Integração com banco de dados
- [ ] API REST para integração
- [ ] Aplicativo mobile (React Native/Flutter)
- [ ] Suporte multilíngue (EN, ES, FR)
- [ ] Sistema de recomendações personalizadas
- [ ] Integração com dados médicos

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Autor

**Rafael Silva**
- GitHub: [Rafaelgs2](https://github.com/Rafaelgs2)
- LinkedIn: [rafaelgsilva2](https://www.linkedin.com/in/rafaelgsilva2)
- Email: rafagsilva1312@gmail.com

---

**⭐ Se este projeto foi útil para você, considere deixar uma estrela!**

---

*Última atualização: Dezembro 2025*
