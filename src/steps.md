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

