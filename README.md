<h1 align="center">
    <img alt="eClinic" title="#eClinic" src="./assets/banner.png" />
</h1>

<h4 align="center"> 
	🚧 eClinic 1.0 🚀 em construção... 🚧
</h4>

## 💻 Sobre o projeto

eClinic - é uma maneira de conectar de forma eficiente clínicas e consultórios aos pacientes que precisam realizar alguma consulta/avaliação, sem precisar sair de casa ou ficar pesquisando de outras formas. Ou seja, basta a pessoa informar pelo aplicativo qual especialidade ela deseja realizar a consulta que serão listadas clínicas e consultórios de acordo com a especialidade escolhida.

As clínicas e consultórios poderão se cadastrar na plataforma web enviando:
- uma imagem da instituição
- nome da entidade, cnpj, email, whatsapp e telfone fixo
- e o endereço para que ele possa aparecer no mapa
- além de selecionar uma ou mais especialidades na qual a clínica atende

Os pacientes terão acesso ao aplicativo móvel, onde poderão:
- navegar pelo mapa para ver as instituições cadastradas
- entrar em contato com a clínica através do Whatsapp, Telefone ou E-mail

Projeto desenvolvido com finalidade de estudos, onde coloco em prática os aprendizados adquiridos.


### Mobile

<p align="center">
  <img alt="eClinic" title="#eClinic" src="./assets/home-mobile.png" width="200px">

  <img alt="eClinic" title="#eClinic" src="./assets/detalhes-mobile.svg" width="200px">
</p>

### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="eClinic" title="#eClinic" src="./assets/web.svg" width="400px">

  <img alt="eClinic" title="#eClinic" src="./assets/sucesso-web.svg" width="400px">
</p>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Expo][expo]
- [Node.js][nodejs]
- [React][reactjs]
- [React Native][rn]
- [TypeScript][typescript]


## 🚀 Como executar o projeto

Podemos considerar este projeto como sendo divido em três partes:
1. Back End (pasta server) 
2. Front End (pasta web)
3. Mobile (pasta mobile)

💡Tanto o Front End quanto o Mobile precisam que o Back End esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs]. 
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode]

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/geovanirp13/eClinic

# Acesse a pasta do projeto no terminal/cmd
$ cd eClinic

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server

# O servidor inciará na porta:3333 - acesse http://localhost:3333 
```

### 🧭 Rodando a aplicação web (Front End)

```bash
# Clone este repositório
$ git clone https://github.com/geovanirp13/eClinic

# Acesse a pasta do projeto no seu terminal/cmd
$ cd eClinic

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

### 📱Rodando a aplicação mobile 

🚧 Em construção... 🚧

## 😯 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)


## 📝 Autor

Desenvolvido por Geovani Ragazzi 👋🏽 [Entre em contato pelo Linkedin!](https://www.linkedin.com/in/geovani-ragazzi/)

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[license]: https://opensource.org/licenses/MIT
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[rs]: https://rocketseat.com.br