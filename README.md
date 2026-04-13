# 📊 Matriz SWOT — Análise Estratégica com IA

Aplicativo web para análise SWOT guiada, com geração de relatório por Inteligência Artificial.

---

## 🚀 Opção 1 — Rodar localmente (VSCode)

### Pré-requisito
Instale o Node.js: https://nodejs.org (versão 18 ou superior)

### Passos
```bash
# 1. Abra o terminal na pasta do projeto
cd swot-app

# 2. Instale as dependências
npm install

# 3. Inicie o servidor
npm start

# 4. Abra no navegador
# http://localhost:3000
```

---

## ☁️ Opção 2 — Hospedar na nuvem GRATUITAMENTE (Render.com)

> Ideal para uso em sala de aula: qualquer aluno acessa pelo celular ou computador, sem instalar nada.

### Passo a passo completo

#### 1. Crie uma conta no GitHub
- Acesse https://github.com e crie uma conta gratuita

#### 2. Crie um repositório
- Clique em **"New repository"**
- Nome: `swot-app`
- Marque **"Public"**
- Clique em **"Create repository"**

#### 3. Faça upload dos arquivos
- Clique em **"uploading an existing file"**
- Arraste os arquivos da pasta `swot-app`:
  - `server.js`
  - `package.json`
  - pasta `public/` com o `index.html`
- Clique em **"Commit changes"**

#### 4. Crie uma conta no Render
- Acesse https://render.com
- Clique em **"Get Started for Free"**
- Faça login com sua conta do GitHub

#### 5. Crie o Web Service
- Clique em **"New +"** → **"Web Service"**
- Selecione seu repositório `swot-app`
- Configure:
  - **Name**: `swot-analise` (ou qualquer nome)
  - **Runtime**: `Node`
  - **Build Command**: `npm install`
  - **Start Command**: `npm start`
- Clique em **"Create Web Service"**

#### 6. Aguarde o deploy
- O Render irá compilar e publicar automaticamente (≈ 2 minutos)
- Você receberá um link como: `https://swot-analise.onrender.com`

#### 7. Compartilhe com os alunos
- Envie o link pelo WhatsApp, e-mail ou projete na tela
- Qualquer pessoa com o link pode usar o aplicativo

---

## 🔑 Sobre a API Key

A chave da Anthropic já está configurada no `server.js`.
Se precisar trocar futuramente, edite a linha no `server.js`:

```js
const API_KEY = process.env.ANTHROPIC_API_KEY || 'SUA_CHAVE_AQUI';
```

No Render, você pode configurar a chave como variável de ambiente em:
**Dashboard → seu serviço → Environment → Add Environment Variable**
- Key: `ANTHROPIC_API_KEY`
- Value: `sua-chave-aqui`

---

## 📱 Fluxo do aplicativo

1. **Tela inicial** — Visual da Matriz SWOT + botão Começar
2. **Integrantes** — Nomes dos membros do grupo (dinâmico com +)
3. **Contexto** — Segmento da empresa + problema do cliente
4. **S — Forças** — Fatores internos positivos
5. **W — Fraquezas** — Fatores internos negativos
6. **O — Oportunidades** — Fatores externos positivos
7. **T — Ameaças** — Fatores externos negativos
8. **Revisão** — Matriz completa para conferência
9. **Relatório IA** — Análise estratégica + soluções + PDF

---

## 🖨 Salvar como PDF

Na tela do relatório, clique em **"Salvar como PDF"**.
- No Chrome/Edge: selecione **"Salvar como PDF"** na impressora
- No Firefox: selecione **"Microsoft Print to PDF"** ou **"Salvar como PDF"**
