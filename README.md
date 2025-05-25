# 📱 Mapeamento de Motos em Pátio

Este é um aplicativo mobile desenvolvido em **React Native** com o objetivo de simular o mapeamento de motos dentro de um pátio. A solução permite o cadastro, listagem, resumo e exibição de informações relevantes para o gerenciamento visual e prático dos veículos.

---

## 🚀 Funcionalidades Implementadas

- 📋 Cadastro de motos com formulário controlado
- 📑 Listagem dinâmica das motos cadastradas
- 📊 Tela de resumo das informações salvas
- 💾 Armazenamento local com `AsyncStorage`
- 📚 Tela com informações do projeto e ajuda
- 🔁 Navegação entre 5 rotas usando React Navigation

---

## 🧩 Tecnologias e Bibliotecas

- React Native
- Expo
- React Navigation (Drawer)
- AsyncStorage
- useState / useEffect

---

## ⚙️ Requisitos

- Node.js (versão LTS recomendada)
- Expo CLI instalado globalmente:  
  `npm install -g expo-cli`

---

## 🛠️ Como rodar localmente

```bash
# 1. Clone este repositório
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

# 2. Instale as dependências
npm install

# 3. Rode o projeto com Expo
npx expo start
```

Abra o app Expo Go no seu celular e escaneie o QR code, ou use um emulador no computador.

---

## ✅ Estrutura de Navegação

- **Cadastro e Listagem de Motos**: tela principal do app
- **Resumo**: exibe informações salvas e o total de cadastros
- **Sobre**: descrição do projeto
- **Ajuda**: instruções de uso
- **Drawer Navigation**: navegação lateral entre as rotas

---

## 📂 Organização de Arquivos

```
.
├── App.tsx
├── MotoModulo.tsx
├── Resumo.tsx
├── Sobre.tsx
├── Ajuda.tsx
└── ...
```

---

## 🧠 Observações

- Os dados são armazenados localmente no dispositivo com `AsyncStorage`
- Projeto idealizado para fins acadêmicos na disciplina de Desenvolvimento Mobile

---

## 📧 Contato

Projeto desenvolvido por **Nathália Gomes e Francesco Di Benedetto**
