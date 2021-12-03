<h1 align="center"> ResiliaBooks API </h1>

![capabooks](https://user-images.githubusercontent.com/72519573/144651920-4c7637c5-e59f-4881-8fe6-98630b383e83.jpg)

<h3> Sobre o projeto </h3>

<p>Trata-se do desenvolvimento de uma API para uma livraria.Ela possui todas as rotas básicas do CRUD e faz parte do projeto final do quarto módulo do curso de Desenvolvimento Web da Resilia.</p>

<p> Foram criadas quatro entidades conforme demonstra o diagrama a seguir: </p>

![diagrama](https://user-images.githubusercontent.com/72519573/144657598-135fb5dd-be10-4cd5-8f94-2a9590ab6910.jpg)

<h3> Dependências utilizadas para o desenvolvimento </h3>

- ![alt ou título da imagem](https://camo.githubusercontent.com/6f61ce982d7a61713d63c947148300012945bd4a4cafb8b9313e2426c5a1f273/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f457870726573732e6a732d3430344435393f7374796c653d666f722d7468652d6261646765)
- ![alt ou título da imagem](https://camo.githubusercontent.com/20f8a4f1e9c33b1cffb1968cda82ced5b6cd5d6c5a09865eab911724b1917d76/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d7973716c2d2532333030662e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d6d7973716c266c6f676f436f6c6f723d7768697465)
- ![alt ou título da imagem](https://camo.githubusercontent.com/0a4aff6e255d17730282bc6b00ed6c73a3f09bca95365a4f5d73462106f8a789/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d53657175656c697a6526636f6c6f723d323232323232266c6f676f3d53657175656c697a65266c6f676f436f6c6f723d353242304537266c6162656c3d)
- ![alt ou título da imagem](https://img.shields.io/badge/cors-%20-yellowgreen)
- ![alt ou título da imagem](https://img.shields.io/badge/nodemon-green)

<h3> Instalações necessárias </h3>

<p>O projeto deve ser executado localmente. Recomendamos a instalação do Banco de dados MySQL e do Insomnia em sua máquina. Você pode fazer o download de ambos clicando nos links a seguir:</p>

- [MySQL](https://dev.mysql.com/downloads/workbench/)
- [Insomnia](https://insomnia.rest/download)

### Clone este repositório em sua máquina
```
$ git clone https://github.com/elderschmoeller/Projeto-Modulo-4.git
```
### Como rodar 
1. Instale NodeJS em seu computador;

2. Crie um banco de dados no sistema SQL de sua preferência: MySQL, Postegree, SQL Server, SQLITE; 

3. Crie uma tabela com o nome resiliabooks no banco de sua preferência;

4. Instale via terminal utilizando os seguintes comandos: 
```
 npm init
 npm install -g
 npm install express 
 npm install mysql2 
 npm install sequelize sequelize-cli path 
 npm install cors
 npm install --save-dev nodemon

```
<p>Em seguida, com o projeto já rodando em sua máquina, abra o Insomnia para testar as rotas GET, POST, PUT e DELETE. Apenas a título de exemplo, vamos fazer um passo a passo a seguir utilizando a entidade Clientes.</p>

<h3>Usando o GET</h3>

- `/clientes`: Retorna as informações de todos os clientes salvos no banco de dados.

<h3>Usando o POST</h3>

- `/clientes`: Cria um cliente no banco de dados. É necessário enviar um body no formato JSON com as informações a seguir:
  
   ```javascript
    {
        "nome_completo": "",
        "email":"",
        "idade": "",
        "cpf: "",
        "endereco": "",
        "telefone": ""
    }
  ```
  
<h3>Usando o PUT</h3>

- `/clientes/:id`: Atualiza o nome, email, idade cpf, endereco, telefone do cliente com a `id` informada no banco de dados. Também é possível atualizar apenas uma dessas informações substindo o :id pelo atributo específico que deseja alterar. Caso não exista um cliente com a respectiva com a id é retornado um erro com status 404. É necessário enviar no body da requisição um JSON:

  ```javascript
    {
        "nome_completo": "",
        "email":"",
        "idade": "",
        "cpf: "",
        "endereco": "",
        "telefone": ""
    }
  ```

<h3>Usando o DELETE</h3>

- `/clientes/:id`: Remove o cliente com a `id` informada do banco de dados. Caso não exista um cliente com a respectiva id é retornado um erro com status 404.

<h3>Equipe</h3>

- <a href="https://www.linkedin.com/in/daniel-duarte-29a164204/">Daniel Duarte</a>
- <a href="https://www.linkedin.com/in/elderschmoeller/">Elder Schmöeller</a>
- <a href="https://www.linkedin.com/in/sophiablazizza/">Sophia Blazizza</a>
- <a href="https://www.linkedin.com/in/vitorrgermano/">Vitor Rodrigues Germano</a>
