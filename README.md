# Marvel Comics

Este projeto foi construído a partir da API pública disponível pela Marvel e consiste em uma listagem paginada de quadrinhos disponíveis pela API disposto em formato de grid e uma tela de detalhes dos quadrinhos.
Ao clicar em um quadrinho ele será selecionado e uma barra de compartilhamento irá aparecer no rodapé da página. Nesta barra é possível preencher o campo e compartilhar os quadrinhos selecionados via e-mail.
Ao clicar nos quadrinhos selecionados é feita a remoção da seleção do quadrinho.
Acima do grid existe um campo de pesquisa onde é possível preencher com os termos desejados e será feita a busca por título dos quadrinhos na API com os termos preenchidos.

Disponível em [https://lsgoulart.github.io/marvel-app/](https://lsgoulart.github.io/marvel-app/)

## Scripts disponíveis

Na pasta raiz do projeto, voce pode rodar os seguintes comandos:

### `yarn start`

Roda o projeto em modo desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para ver no navegador.\


### `yarn test`

Executa os testes.

### `yarn build`

Gera a versão de produção na pasta `build`.


## Stack

O projeto utiliza alguns pacotes externos para a construção das telas, são eles:

[styled-components](https://styled-components.com/) - Utilizado para estilização dos componentes dentro do proprio JS\
[framer-motion](https://www.framer.com/motion/) - Utilizado para adicionar transições e animações aos componentes\
[@reach/router](https://reach.tech/router/) - Utilizado para criar sistema de rotas na aplicação\
[react-paginate](https://github.com/AdeleD/react-paginate) - Utilizado para auxiliar na criação da paginação dos quadrinhos


## Qualidade do código

Durante a execução do projeto em modo desenvolvimento é feita a análise estática do código por conta do Eslint, que esta configurado com os padrões sugeridos pelo AirBnb.
