# Formulário de Inscrição Rocket Camp

Este projeto é um sistema de formulário de inscrição para o evento Rocket Camp, desenvolvido em React. Ele permite que os usuários preencham informações pessoais, enviem comprovantes de pagamento e finalizem a inscrição de forma prática e segura. O sistema inclui suporte para rastreamento de parâmetros UTM e envio de dados para um webhook integrado.

---

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface do usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **CSS**: Estilização personalizada para os componentes.
- **Fetch API**: Para envio de dados ao webhook.
- **React Router**: Gerenciamento de rotas no projeto.

---

## 📋 Funcionalidades

### 1. **Formulário Multi-etapas**
O formulário está dividido em três etapas:
- **Etapa 1**: Captura de informações básicas do participante.
- **Etapa 2**: Dados adicionais e de responsáveis, quando aplicável.
- **Etapa 3**: Upload do comprovante de pagamento e finalização.

### 2. **Rastreamento de UTM**
- O sistema captura automaticamente os parâmetros UTM da URL e os anexa aos dados enviados para o webhook.

### 3. **Integração com Webhook**
- Os dados do formulário, incluindo o comprovante de pagamento, são enviados para o endpoint configurado no webhook.

### 4. **Feedback para o Usuário**
- Indicação visual de carregamento durante o envio dos dados, garantindo uma experiência de usuário transparente.

---
