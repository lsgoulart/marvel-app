# Marvel Comics

Este projeto foi construído a partir da API pública disponível pela Marvel e tem como objetivo demonstrar o conhecimento técnico na Stack utilizada.
Disponível em [https://lsgoulart.github.io/marvel-app/](https://lsgoulart.github.io/marvel-app/)

## Scripts disponíveis

Na pasta raiz do projeto, voce pode rodar os seguintes comandos:

### `yarn start`

Roda o projeto em modo desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para ver no navegador.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Executa os testes.

### `yarn build`

Gera a versão de produção na pasta `build`.


## Stack

O projeto utiliza alguns pacotes externos para a construção das telas, são eles:

[styled-components](https://styled-components.com/) - Utilizado para estilização dos componentes dentro do proprio JS
[framer-motion](https://www.framer.com/motion/) - Utilizado para adicionar transições e animações aos componentes
[@reach/router](https://reach.tech/router/) - Utilizado para criar sistema de rotas na aplicação
[react-paginate](https://github.com/AdeleD/react-paginate) - Utilizado para auxiliar na criação da paginação dos quadrinhos


## Qualidade do código

Durante a execução do projeto em modo desenvolvimento é feita a análise estática do código por conta do Eslint, que esta configurado com os padrões sugeridos pelo AirBnb.
