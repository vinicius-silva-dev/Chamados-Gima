# chamados-gima

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Requisitos funcionais

# login/user
[x] - Deve ser possível logar, na aplicação, usando e-mail e senha;
[x] - Em caso de esquecimento da senha, deve ser possível redefinir a senha, usando um código de verificação enviado no e-mail do usuário;
[x] - Deve ser possível criar uma nova conta;
[x] - Deve ser possível editar usuário;
[x] - Deve ser possível listar usuário;
[] - Deve ser possível deletar usuário;

# chamado 
[x] - Deve ser pssível abrir um chamado;
[x] - Deve ser possível o usuário vizualizar apenas os chamado que ele abriu;
[x] - Deve ser possível o usuário compartilhar atulizações/informações dentro do chamado

### Regras de negócio

# login/user

[x] - Usuário não pode cadastrar um e-mail invalido ou inexistente;
[] - A senha tem que ter no minímo 6 caracteres, podendo ser letras, numeros ou caracteres especiais;
[x] - Todos os campos, no cadastro de usuários, são obrigatórios;
[x] - Não pode cadastrar e-mails repetidos;

# chamados

[x] - O sistema deve exibir apenas os chamados que pertence ao usuário, se ele for um usuário padrão;
[] - Somente o analista pode atender o chamado e encerrar, desde que coloque uma descrição quando for encerrar o chamado;
[] - O usuário pode cancelar o chamado, mediante a uma justificativa;
[] - Os chamado que estiverem com o status resolvido ou cancelados, devem ser removidos do front-end, ficando salvo apenas no banco de dados;
[] - Os chamados de prioridade alta devem ficar listados em primeiro, depois seguem a ordem de abertura;

### Requisitos não funcionais
# login/user

[x] - A autenticação deve utilizar jwt;

