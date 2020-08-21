# send_message_Linkedin

### Utilizados nesse desenvolvimento
  
* Node.js: https://nodejs.org/en/download/
* Visual Studio Code: https://code.visualstudio.com/download
* Cypress: https://www.cypress.io/

### Para executar os testes:
Rodar os comandos:

* npm run cypress:open — executa os testes abrindo o browser e podendo ver as interações;
* npm run cypress:run — executa os testes onde mostra apenas os status através do terminal. Possibilita gravar e registrar a execução.

A especificação dos testes está em 

   ![image](https://user-images.githubusercontent.com/69819910/90885222-95b55300-e387-11ea-92de-cd2dadff558b.png)
   
Considerar a especificação de teste send_first_message_linkedin.spec.js para a avaliação.

Nessa especificação é acessada a página web do Linkedin e feito o login e verificado o seu sucesso. Logo após é acessada a aba Mensagem, localizando o usuário Simony de Almeida Azevedo para o envio de uma mensagem.

Esse teste considera que é a primeira mensagem que está sendo enviada para o usuário selecionado.
