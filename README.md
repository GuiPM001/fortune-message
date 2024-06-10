<div align="center">
  <img src="./images/logo.png" alt="Logo" height="80">

  <h3 align="center">Fortune Message Generator</h3>

  <p align="center">
    A fortune message generator, integrated with GPT to generate different messages every day.
    <br />
    <a target="_blank" href="https://fortune-message.vercel.app/">View Demo</a>
  </p>
</div>

## ✦ About The Project
![Product Screen Shot][project-image]
The project consists of a single screen where you can click on the fortune cookie to get a message.

The system is integrated with GPT so that it is possible to generate different messages every time the cookie is broken, in addition to the message received being saved, making it possible to obtain a new message only the following day.

Furthermore, the website adapts to the language of the browser used (support only for English and Portuguese), automatically translating the information displayed.

### Built With
[![React][React-image]][React-url]
[![TypeScript][Typescript-image]][Typescript-url]
[![CSS][CSS-image]][CSS-url]
[![OpenAI][OpenAI-image]][OpenAI-url]

## ✦ Getting Started
### Installation
1. Get a free API Key at [Open AI - API Keys](https://platform.openai.com/api-keys)
2. Clone the repo
   ```sh
   git clone https://github.com/GuiPM001/fortune-message
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `open-ai.service.ts`
   ```js
   const API_KEY = 'ENTER YOUR KEY';
   ```

[project-image]: images/project-image.png
[React-image]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/
[Typescript-image]:https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[CSS-image]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: https://www.w3schools.com/css/
[OpenAI-image]: https://img.shields.io/badge/ChatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white
[OpenAI-url]: https://platform.openai.com/docs/overview
