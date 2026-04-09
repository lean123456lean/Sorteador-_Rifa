#  Sorteio Rifa — Roleta de Sorteio

> Um projeto feito com amor para um momento especial.

---

##  A História por Trás do Projeto

Esse sorteador nasceu de uma ideia carinhosa da minha esposa **Vanusa**, que criou uma rifa para ajudar a custear o nosso casamento. Para tornar o sorteio mais divertido, transparente e especial, desenvolvi esta aplicação web — porque nada melhor do que celebrar o amor com um pouco de tecnologia!

---

##  Sobre o Projeto

A **Roleta de Sorteio** é uma aplicação web para realizar sorteios de rifas de forma animada e transparente. A aplicação exibe os participantes, o prêmio, um resumo financeiro da rifa e realiza o sorteio com uma animação visual antes de revelar o número vencedor.

### Funcionalidades

-  **Sorteio animado** — efeito de rolagem antes de revelar o número sorteado
-  **Controle de números** — evita repetição de números já sorteados
-  **Lista de compradores** — exibe o nome do participante vinculado a cada número
-  **Resumo financeiro** — mostra total arrecadado, custos e resultado líquido
-  **Exibição do prêmio** — imagem e descrição do item sorteado
-  **Reiniciar sorteio** — limpa todos os números sorteados para um novo sorteio

---

##  Tecnologias Utilizadas

| Tecnologia                                    | Versão | Finalidade                            |
| --------------------------------------------- | ------ | ------------------------------------- |
| [React](https://react.dev/)                   | 18.3   | Interface da aplicação                |
| [TypeScript](https://www.typescriptlang.org/) | —      | Tipagem estática                      |
| [Vite](https://vitejs.dev/)                   | —      | Bundler e servidor de desenvolvimento |
| [Tailwind CSS](https://tailwindcss.com/)      | 3.4    | Estilização                           |
| [Lucide React](https://lucide.dev/)           | 0.344  | Ícones                                |
| [Supabase](https://supabase.com/)             | 2.57   | Backend / banco de dados              |

---

##  Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- npm

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre na pasta do projeto
cd Roleta_Rifa/project

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

### Outros comandos

```bash
# Build para produção
npm run build

# Visualizar build de produção
npm run preview

# Verificar tipagem
npm run typecheck

# Lint
npm run lint
```

---

## Estrutura do Projeto

```
project/
├── src/
│   ├── App.tsx          # Componente principal da aplicação
│   ├── main.tsx         # Ponto de entrada React
│   ├── index.css        # Estilos globais
│   └── assets/             # Imagens (fundo, prêmio)
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

##  Detalhes da Rifa

| Item              | Valor     |
| ----------------- | --------- |
| Total de números  | 35        |
| Valor por número  | R$ 10,00  |
| Total arrecadado  | R$ 350,00 |
| Custo cartório    | R$ 320,00 |
| Resultado líquido | R$ 30,00  |

**Prêmio:** Jogo de colher para cozinha na cor vermelha — perfeito para adicionar estilo e funcionalidade à sua cozinha. 

---

## Criamos um test simples usando javascrit puro

na pasta do projeto pode rodar direto usando
## node simular.js

PS C:\Sorteio_Rifa\project> node simular.js
Resultado após 10.000 sorteios:

Irmã Lurdes: 4882 vitórias (48.82%)
Ana Paula: 1150 vitórias (11.50%)
Ana Lucia: 795 vitórias (7.95%)
Karine: 602 vitórias (6.02%)
Irmã Ana Paula: 592 vitórias (5.92%)
Ana Lucia: 795 vitórias (7.95%)
Karine: 602 vitórias (6.02%)
Ana Lucia: 795 vitórias (7.95%)
Ana Lucia: 795 vitórias (7.95%)
Karine: 602 vitórias (6.02%)
Ana Lucia: 795 vitórias (7.95%)
Karine: 602 vitórias (6.02%)
Ana Lucia: 795 vitórias (7.95%)
Ana Lucia: 795 vitórias (7.95%)
Karine: 602 vitórias (6.02%)
Irmã Ana Paula: 592 vitórias (5.92%)
Irmã Gracinha: 586 vitórias (5.86%)
Fernanda: 554 vitórias (5.54%)
Ana Lucia: 795 vitórias (7.95%)
Karine: 602 vitórias (6.02%)
Irmã Ana Paula: 592 vitórias (5.92%)
Irmã Gracinha: 586 vitórias (5.86%)
Ana Lucia: 795 vitórias (7.95%)
Karine: 602 vitórias (6.02%)
Irmã Ana Paula: 592 vitórias (5.92%)
Ana Lucia: 795 vitórias (7.95%)
Karine: 602 vitórias (6.02%)
Ana Lucia: 795 vitórias (7.95%)
Ana Lucia: 795 vitórias (7.95%)
Karine: 602 vitórias (6.02%)
Irmã Ana Paula: 592 vitórias (5.92%)
Irmã Gracinha: 586 vitórias (5.86%)
Fernanda: 554 vitórias (5.54%)
Hariel: 287 vitórias (2.87%)
Pedro: 284 vitórias (2.84%)
Paula Kassimiro: 268 vitórias (2.68%)
PS C:

##  Dedicatória

Este projeto é dedicado à **Vanusa**, minha esposa, pela ideia criativa e pelo amor que nos une. Que esse casamento seja o começo de uma história linda.

---

##  Licença

Projeto de uso pessoal. Sinta-se à vontade para se inspirar!
