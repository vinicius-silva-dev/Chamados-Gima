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
[] - Deve ser possível editar usuário;
[] - Deve ser possível listar usuário;
[] - Deve ser possível deletar usuário;

### Regras de negócio

# login/user

[] - Usuário não pode cadastrar um e-mail invalido ou inexistente;
[] - A senha tem que ter no minímo 6 caracteres, podendo ser letras, numeros ou caracteres especiais;
[] - Todos os campos, no cadastro de usuários, são obrigatórios;
[] - Não pode cadastrar e-mails repetidos;


### Requisitos não funcionais
# login/user

[] - A autenticação deve utilizar jwt;

