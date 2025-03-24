<h1><strong>Detona Ralph Game | React ⚛️</strong></h1>

**Visão Geral**

Este é um projeto React inspirado no clássico jogo "Whac-A-Mole", tematicamente adaptado para o universo de "Detona Ralph". O objetivo do jogador é acertar o Ralph que aparece aleatoriamente em diferentes caixas dentro de um limite de tempo e com um número limitado de vidas.

## 📍Sobre o Projeto

Este projeto é uma recriação do desafio "Detona Ralph", originalmente desenvolvido em **HTML**, **CSS** e **JavaScript** puro como parte do curso **Ri Happy - Front-end do Zero da DIO**.  A versão original, mantida na branch ``first-version``, serve como um registro do meu progresso inicial.

Com o objetivo de aprimorar minhas habilidades em React, decidi reconstruir o jogo usando esta poderosa biblioteca. ⚛️ O resultado é um aplicativo responsivo, otimizado para dispositivos móveis (mobile-first), adaptado com media queries, para tablets e desktops. ️

## 🧩Funcionalidades ️

* **Tela Inicial:** Permite ao jogador inserir seu nome (com validação de 3 a 5 caracteres) antes de iniciar o jogo.
* **Tela de Jogo (GameDashboard):**
    * Interface de jogo com nove caixas onde o Ralph aparece aleatoriamente.
    * Sistema de pontuação que aumenta em 1 a cada acerto no Ralph.⭐
    * Contador de vidas, começando com 3, perdendo 1 vida a cada clique em caixa errada.❤️
    * Cronômetro regressivo de 60 segundos.⏱️
    * **Efeitos Sonoros:**
        * **Música de fundo:** Uma trilha sonora com temática arcade é reproduzida durante a tela de jogo para imersão.
        * **Som de acerto:** Um efeito sonoro específico é reproduzido quando o jogador clica com sucesso no Ralph.
    * Lógica de fim de jogo: O jogo termina quando o tempo se esgota ou quando as vidas do jogador chegam a zero, exibindo uma mensagem de Game Over e a pontuação final.
* **Design Responsivo:** A interface do usuário é adaptada para diferentes tamanhos de tela, incluindo dispositivos móveis, tablets e desktops, utilizando Media Queries CSS para otimizar a experiência em diversos dispositivos.
* **Gerenciamento de Estado:** Utiliza o Context API do React para gerenciar o nome do jogador (`NameContext`) e a pontuação final do jogo (`ScoreContext`), permitindo que esses dados sejam acessados por diferentes componentes.
* **Navegação:** Utiliza `react-router-dom` para navegar entre a tela inicial (`/`), a tela de jogo (`/gamescreen`) e a tela de placar (`/scoreboard`).

## 🛠️Tecnologias Usadas
<div align='center'>
<a href="https://reactjs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="40" /></a> 
<a href="https://www.w3schools.com/css/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" /></a>
</div>

* **React**
* **React Router DOM**
* **Context API** (para gerenciamento de estado)
* **CSS**(com Media Queries para responsividade)
* **Arquivos de Áudio** (`.mp3` para compatibilidade)
* **`useRef`** (para controlar elementos de áudio)
* **Font Awesome:** Para os ícones incríveis!

## 📂**Estrutura de Pastas**
```
detona-ralph-game/
├── build/
│   └── ... (outros arquivos pra produção)
├── public/
│   └── index.html
│   └── ... (outros arquivos públicos)
├── src/
│   ├── assets/
│   │   ├── audio/
│   │   │   ├── game_background_music.mp3
│   │   │   └── ralph_hit.mp3
│   │   ├── font/
│   │   │   └── joystix monospace.otf
│   │   └── imgs/
│   │       ├── desktop/
│   │       │   └── ... (imagens para desktop)
│   │       ├── mobile/
│   │       │   └── ... (imagens para mobile)
│   │       └── ... (outras imagens)
│   ├── components/
│   │   ├── gamescreen/
│   │   │   ├── GameScreen.js
│   │   │   ├── GameScreen.css
│   │   │   ├── dashboard/
│   │   │   │   ├── Dashboard.js
│   │   │   │   └── Dashboard.css
│   │   │   └── gamedashboard/
│   │   │        ├── GameDashboard.js
│   │   │        └── GameDashboard.css
│   │   ├── homescreen/
│   │   │   ├── HomeScreen.js
│   │   │   └── HomeScreen.css
│   │   ├── namecontext/
│   │   │   └── NameContext.js
│   │   ├── scoreboard/
│   │   │   └── Scoreboard.js
│   │   │   └── Scoreboard.css
│   │   └── scorecontext/
│   │        ├── NameContext.js
│   │        └── ScoreContext.js
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   └── ... (outros arquivos src)
├── .gitignore
├── License
├── package.json
├── README.md
└── ... (outros arquivos de configuração)

```

## 🕹️Como Jogar ️
* 1.Acesse o jogo Detona Ralph Game através deste link: [Detona Ralph Game](https://detona-ralph-game-gamma.vercel.app/)
* 2.Divirta-se!

## 📷 Preview
Aqui estão algumas capturas de tela do projeto em diferentes dispositivos:

<p align="center"><strong>Mobile</strong></p>
<p align="center">
  <img alt="Projeto Detona Ralph Game versão mobile" src="./src/assets/imgs/readme-mobile.gif" width="20%">
</p>

<p align="center"><strong>Desktop</strong></p>
<p align="center">
  <img alt="Projeto Detona Ralph Game versão desktop" src="./src/assets/imgs/readme-desktop.gif" width="50%">
</p>

## 🫱🏻‍🫲🏻Contribuição
Sinta-se à vontade para contribuir com este projeto! Abra uma issue para discutir novas funcionalidades ou envie um pull request com suas melhorias.

## Agradecimentos
Agradeço à <a href="https://web.dio.me/">DIO</a> por fornecer o desafio original e por me inspirar a aprimorar minhas habilidades em React. Um agradecimento especial à comunidade <a href="https://pt-br.legacy.reactjs.org/">React</a> por sua incrível documentação e suporte!

## 📜Licença
Este projeto está sob a [licença MIT](./License).

## ✨ Developer
👨‍💻 Este projeto foi desenvolvido por <strong>Bruno Teixeira</strong> como parte do meu portfólio de desenvolvimento Front-End. Sinta-se à vontade para entrar em contato ou contribuir com o projeto!

- [![LinkedIn](https://custom-icon-badges.demolab.com/badge/LinkedIn-0A66C2?logo=linkedin-white&logoColor=fff)](https://www.linkedin.com/in/brunotxrs/)

- [![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white)](https://github.com/brunotxrs)

-----------------------------------