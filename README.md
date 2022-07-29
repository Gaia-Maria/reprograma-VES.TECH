
# VES.TECH - Projeto Final {Reprograma}


## 📦 Dependencias - npm

**Instalações base**

```bash
Package.json em JS:
npm init -y

Express, cors e node_modules:
npm i express cors

Nodemon:
npm i -D nodemon
```

**Banco de dados**
```bash
Mongoose:
npm i mongoose
```

**Autententicação**

```bash
Jwt:
npm install jsonwebtoken -- save

Bcrypt:
npm install bcrypt -- save
```
**Variaveis de ambiente**
```bash
Dotenv:
npm install dotenv-safe -- save
```

**Testes**

```bash
ESlint:
npm install --save-dev eslint@8.16.0

npx eslint --init

    How would you like to use ESLint? · style
    What type of modules does your project use? · commonjs
    Which framework does your project use? · none
    Does your project use Type? · No
    Where does your code run? · node
    How would you like to define a style for your project? · guide
    Which style guide do you want to follow? · airbnb
    What format do you want your config file to be in? · JSON
    Would you like to install them now? · Yes
    Which package manager do you want to use? · npm

Jest:
npm install --save-exact jest@28.1.0
```

**Documentação**

```bash
Swagger:
npm i swagger-autogen swagger-ui-express
```

**E-mail e mensageria**
```bash
Sendgrid:
npm @sendgrid/mail
```


## 🏗️ Arquitetura MVC

```bash
  📁 reprograma-VES.TECH    
  |   
  |-  📁 node_modules (.gitignore)  
  |  
  |-  📁 Swagger    
  |         |- 📄 swagger_output.json   
  |  
  |-  📁 src 
  |    |  
  |    |- 📁 database  
  |         |- 📄 mongooseConnect.js    
  |  
  |    |- 📁 controllers    
  |         |- 📄 coursesController.js    
  |         |- 📄 institutionsController.js    
  |         |- 📄 usersController.js 
  |
  |    |- 📁 models  
  |         |- 📄 coursesModel.js    
  |         |- 📄 institutionsModel.js    
  |         |- 📄 usersModel.js 
  |
  |    |- 📁 routes  
  |         |- 📄 coursesRoutes.js     
  |         |- 📄 institutionsRoutes.js   
  |         |- 📄 usersRoutes.js    
  |         |- 📄 usersRoutes.js 
  |
  |    |- 📄 app.js  
  |  
  |-  📁 test 
  |         |- 📄 courses.test.js 
  |         |- 📄 institutions.test.js  
  |
  |- 📄 Procfile 
  |- 📄 Swagger.js 
  |- 📄 .eslintrc     
  |- 📄 .env  (.gitignore)
  |- 📄 .env.example   
  |- 📄 .gitignore    
  |- 📄 package-lock.json   
  |- 📄 pakage.json   
  |- 📄 README.md 
  |- 📄 server.js   
  ```
## 🔒 Variáveis de Ambiente

**Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env**

`PORT=NUMERO_PORTA`  
`SECRET=CHAVE_HASH_SEM_ESPAÇO`  
`DATABASE_URI=CONEXÃO_COM_MONGO_SEM_ASPAS`  
`SENDGRID_API_KEY=CHAVE_API_KEY_SEM_ESPAÇO`  

## Documentação da API

#### Retorna todos os itens

```http
```

| Tipo   | Rota       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `GET`      | `/courses` |  acessar todos os cursos |
| `GET`      | `/users/courses/:id` | **ID obrigatório** acessar curso por ID |
| `GET`      | `/courses/coursetitle` |  acessar curso por título|
| `GET`      | `/courses/affirmativepolicie` | acessar cursos por políticas afirmativas |
| `GET`      | `/courses/available` |  acessar cursos por disponibilidade |
| `GET`      | `/courses/category` | acessar cursos por categoria |
| `GET`      | `/courses/categoryandaffirmativepolicies` | acessar cursos por politicas afirmativas |
| `GET`      | `/institution` | acessar todas as instituições |
| `GET`      | `/institutions/:id` | **ID obrigatório** acessar instituição por ID |
| `GET`      | `/users/` | acessar todos os usuarios |
| `POST`      | `string` | **Obrigatório**. O ID do item que você quer |
| `POST`      | `string` | **Obrigatório**. O ID do item que você quer |
| `POST`      | `string` | **Obrigatório**. O ID do item que você quer |
| `POST`      | `string` | **Obrigatório**. O ID d
