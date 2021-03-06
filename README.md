
# VES.TECH - Projeto Final {Reprograma}


## 馃摝 Dependencias - npm

**Instala莽玫es base**

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

**Autententica莽茫o**

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

    How would you like to use ESLint? 路 style
    What type of modules does your project use? 路 commonjs
    Which framework does your project use? 路 none
    Does your project use Type? 路 No
    Where does your code run? 路 node
    How would you like to define a style for your project? 路 guide
    Which style guide do you want to follow? 路 airbnb
    What format do you want your config file to be in? 路 JSON
    Would you like to install them now? 路 Yes
    Which package manager do you want to use? 路 npm

Jest:
npm install --save-exact jest@28.1.0
```

**Documenta莽茫o**

```bash
Swagger:
npm i swagger-autogen swagger-ui-express
```

**E-mail e mensageria**
```bash
Sendgrid:
npm @sendgrid/mail
```


## 馃彈锔? Arquitetura MVC

```bash
  馃搧 reprograma-VES.TECH    
  |   
  |-  馃搧 node_modules (.gitignore)  
  |  
  |-  馃搧 Swagger    
  |         |- 馃搫 swagger_output.json   
  |  
  |-  馃搧 src 
  |    |  
  |    |- 馃搧 database  
  |         |- 馃搫 mongooseConnect.js    
  |  
  |    |- 馃搧 controllers    
  |         |- 馃搫 coursesController.js    
  |         |- 馃搫 institutionsController.js    
  |         |- 馃搫 usersController.js 
  |
  |    |- 馃搧 models  
  |         |- 馃搫 coursesModel.js    
  |         |- 馃搫 institutionsModel.js    
  |         |- 馃搫 usersModel.js 
  |
  |    |- 馃搧 routes  
  |         |- 馃搫 coursesRoutes.js     
  |         |- 馃搫 institutionsRoutes.js   
  |         |- 馃搫 usersRoutes.js    
  |         |- 馃搫 usersRoutes.js 
  |
  |    |- 馃搫 app.js  
  |  
  |-  馃搧 test 
  |         |- 馃搫 courses.test.js 
  |         |- 馃搫 institutions.test.js  
  |
  |- 馃搫 Procfile 
  |- 馃搫 Swagger.js 
  |- 馃搫 .eslintrc     
  |- 馃搫 .env  (.gitignore)
  |- 馃搫 .env.example   
  |- 馃搫 .gitignore    
  |- 馃搫 package-lock.json   
  |- 馃搫 pakage.json   
  |- 馃搫 README.md 
  |- 馃搫 server.js   
  ```
## 馃敀 Vari谩veis de Ambiente

**Para rodar esse projeto, voc锚 vai precisar adicionar as seguintes vari谩veis de ambiente no seu .env**

`PORT=NUMERO_PORTA`  
`SECRET=CHAVE_HASH_SEM_ESPA脟O`  
`DATABASE_URI=CONEX脙O_COM_MONGO_SEM_ASPAS`  
`SENDGRID_API_KEY=CHAVE_API_KEY_SEM_ESPA脟O`  

## Documenta莽茫o da API

#### Retorna todos os itens

```http
```

| Tipo   | Rota       | Descri莽茫o                                   |
| :---------- | :--------- | :------------------------------------------ |
| `GET`      | `/courses` |  acessar todos os cursos |
| `GET`      | `/users/courses/:id` | **ID obrigat贸rio** acessar curso por ID |
| `GET`      | `/courses/coursetitle` |  acessar curso por t铆tulo|
| `GET`      | `/courses/affirmativepolicie` | acessar cursos por pol铆ticas afirmativas |
| `GET`      | `/courses/available` |  acessar cursos por disponibilidade |
| `GET`      | `/courses/category` | acessar cursos por categoria |
| `GET`      | `/courses/categoryandaffirmativepolicies` | acessar cursos por politicas afirmativas |
| `GET`      | `/institution` | acessar todas as institui莽玫es |
| `GET`      | `/institutions/:id` | **ID obrigat贸rio** acessar institui莽茫o por ID |
| `GET`      | `/users/` | acessar todos os usuarios |
| `POST`      | `string` | **Obrigat贸rio**. O ID do item que voc锚 quer |
| `POST`      | `string` | **Obrigat贸rio**. O ID do item que voc锚 quer |
| `POST`      | `string` | **Obrigat贸rio**. O ID do item que voc锚 quer |
| `POST`      | `string` | **Obrigat贸rio**. O ID d
