# FATEC-217-2026-1-DWIII - Projeto 02

## Sistema de Extração de Metadados - Node.js

**Aluno:** Vinicius Carneiro

---

## 📌 Descrição

Este projeto consiste no desenvolvimento de um script em Node.js capaz de ler um arquivo Markdown e extrair referências externas (links) utilizando Expressões Regulares (RegEx).

O sistema identifica links no formato Markdown:

```
[Nome](URL)
```

E exibe no console os dados de forma estruturada.

---

## ⚙️ Funcionalidades

* Leitura assíncrona de arquivos com `fs/promises`
* Extração de dados utilizando RegEx
* Tratamento de erros com `try/catch`
* Exibição de mensagens de erro com `chalk`
* Saída formatada no console contendo:

  ```
  Tag: Nome | Url: Link
  ```

---

## 📂 Estrutura do Projeto

* `app.js` → Código principal
* `package.json` → Dependências do projeto
* `arquivo.md` → Arquivo utilizado para leitura e testes

---

## 🚀 Como executar

1. Instale as dependências:

```
npm install -y
npm install chalk
```

2. Execute o projeto:

```
node app.js
```

---

## 🧠 Tecnologias utilizadas

* Node.js
* JavaScript
* RegEx
* Chalk

---
