# Criando Backend do TO-DO

## Configurando servidor com express e nodemon 
- Primeiro instale o express e o nodemon rodando os seguintes comandos 
yarn add express 
yarn add nodemon -D 
(O '-D' server para que essa lib seja instala como dependência de desenvolvimento, ou seja, não suba para produção)

- Dentro do arquivo package.json crio um script que se utiliza do nodemon para observar os arquivos quando forem alterados e dar um re-start no servidor automaticamente  :
"scripts": {
    "dev": "nodemon"
  }
OBS: Preste atenção ao que está escrito em "main" altere para "main": ""src/server.js" que será o caminho para o arquivo de configuração do nosso servidor

- Agora iremos criar uma pasta src e dentro um arquivo server.js para configurar nosso servidor 
- Importamos o express
- Instaciamos uma variável server que recebe todos os métodos dentro de express
- Permitimos que a aplicação entenda o Json
- usamos essa variável para chamar uma porta onde nosso servidor estará escutando ()

## Configurando rotas 
- Dentro da pasta src criaremos outra pasta chamada routes, esta pasta ira armazenar as rotas usadas em nossa aplicação
- Criamos um arquivo todo.routes.js
- Iremos importar o método Router de dentro do express, ele permite usarmos os métodos HTPP, exemplo: GET, POST, PUT, DELETE
- Instaciamos uma variável 
- Criamos uma rota get com um caminho todo que por enquanto irá apenas retornar algo em nosso console
-Por fim não se esqueça de exporta essa rota.
- Agora dentro de server.js importamos esse rota e a deixamos disponível para ser usada

- Testamos essa rota criando uma nova requisição no Insomnia 

## Criando rotas 
### Criando método Get 
- Iremos primeiro criar o método que retornará todos os nossos todos 
- Primeiro criamos um array de nome todos onde serão armazenados 
- Depois dentro do método get retornaremos todos os todos dentro do aray

### Criando método POST
- Adicionamos a lib uuidv4 que irá gerar os nossos IDs
- Criamos uma nota rota post 
- Buscamos os dados do insomnia usando request.body
- Criamos o ID usando o uuid 
- Realizamos uma verificamos sobre a veracidade daquele Id
- Criamos um objeto unindo os dados recebidos pelo body e o id 
- Adiconamos esse objeto ao array 
- Retornamos o objeto

### Alterar o estado isDone do TO-DO

- Buscamos o id do todo que pretendemos alterar através da URL

- Com esse ID buscamos seu index (sua posição) dentro do array de todos 

- Caso não encontremos nenhum retornamos um erro 

- Buscamos o isDone do body do insomnia 

- Setamos o novo estado do todo de acordo com o recebido 

- Buscamos o todo alteado pelo seu ID

- Retornamos o todo

## Deletando os todos
- Buscamos o id do todo que pretendemos alterar através da URL

- Com esse ID buscamos seu index (sua posição) dentro do array de todos 

- Caso não encontremos nenhum retornamos um erro 

- Retiro o todo de dentro do array 

- Retorno uma mensagem de sucesso

