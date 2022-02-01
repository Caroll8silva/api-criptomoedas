
![carteira](https://user-images.githubusercontent.com/63256085/148707402-10656320-9ed2-42a4-9ae0-b3d11ba78f01.png)


# API REST CARTEIRA DE CRIPTOMOEDAS 

Desafio referente a 3º Sprint, onde o objetivo foi a criação de uma Api semelhante a uma carteira de criptomoedas, capaz de criar e excluir uma carteira, depositar, transferir e sacar fundos.
<br>
<br>
<br>


## TECNOLOGIAS UTILIZADAS PARA O DESENVOLVIMENTO DA API

![tec](https://user-images.githubusercontent.com/63256085/148708224-7a9ff2cd-686f-4f43-919f-baa378bcc41b.png)

Para o funcionamento da API é preciso ter instalado em sua maquina as tecnologias acima.

## PACOTES PARA O FUNCIONAMENTO DA API

- body-parser
- express
- mysql2
- path
- sequelize
- sequelize-cli

## EXECUTANDO A API

- Após clonar o repositorio e abrir no seu editor de código, vá até a pasta config, abra o arquivo config.json e adicione os dados do seu banco de dados.
<br>

![database](https://user-images.githubusercontent.com/63256085/148708450-e80f9dd2-ba77-4654-aa10-f06c3213a364.PNG)

- Rode os seguintes comandos para a criação das tabelas no seu banco de dados
<br>

![tab](https://user-images.githubusercontent.com/63256085/148708885-2bcc82fd-adbc-40e0-8375-c76611afbbd4.PNG)

![seed](https://user-images.githubusercontent.com/63256085/148708995-b76797c1-fc4b-4a0d-bf73-2c00b97adcba.PNG)

## ACESSANDO AS ROTAS

- Rota para listar todas as carteiras (GET)

![get1](https://user-images.githubusercontent.com/63256085/148709217-5f25047a-a1f5-4318-8f6b-43909de00b70.PNG)

- Rota para listar apenas uma carteira (GET)

![get2](https://user-images.githubusercontent.com/63256085/148709268-36042b68-6385-401d-a97a-f20d9ad6883a.PNG)

- Rota para criar uma carteira (POST)

![post](https://user-images.githubusercontent.com/63256085/148709378-da71a0d9-1077-43f3-9d1b-ebfe8345b1e4.PNG)

- Rota para transferir fundos de uma carteira (POST)

![post2](https://user-images.githubusercontent.com/63256085/148709567-c5fbe039-c400-4b78-9492-5e20568f769a.PNG)

- Rota para atualizar uma carteira (PUT)

![put](https://user-images.githubusercontent.com/63256085/148709535-1a0bb39e-84ad-4748-9261-d9532e4c559a.PNG)

- Rota para apagar uma carteira (DELETE)

![delete](https://user-images.githubusercontent.com/63256085/148709627-a724b149-3287-4da5-aac0-7d655a2e899e.PNG)






