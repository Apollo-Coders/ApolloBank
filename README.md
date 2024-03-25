<h1 align="center">  Apollo Bank :bank:  </h1>

## 📝 Projeto

Aplicação de projeto de Banco/Fintech.

<a href="https://apollo-bank.vercel.app/">Acesso o nosso sistema!</a>

## 🔎 Descrição

O projeto ApolloBank faz parte de um desafio de hackadev proposto pelo programa SharpCoders da Imã Tech. É uma aplicação  web de um Banco Digital que inclui funcionalidades como armazenamento dos dados dos usuários (registro e login) com persistência dos dados, serviços de saque, depósito e transferência, histórico de transações e tela do usuário.

## 🕐 Status da aplicação

✅ Front-End

✅ Back-end

## 🖥️ Features

| Feature | Descrição |
| --- | --- |
| Tela de registro | Na tela de registro, o usuário consegue criar sua conta ApolloBank, informando os dados necessários para a criação de uma conta em um banco digital. |
| Tela de Login | A tela de Login permite o usuário entrar em sua conta já cadastrada. O acesso é feito pelo CPF e a senha informados na tela de registro. |
| Tela de HomePage | A tela de Home é a primeira tela que o usuário irá acessar em nosso banco, nele, tem uma pequena prévia da nossa aplicação e funciona como uma tela de bem-vindo, permitindo que o usuário cria sua conta ou entre em ajuda. |
| Tela de Minha Conta | Essa é a tela principal da aplicação, onde o usuário acessa após fazer seu login. Nela, o usuário pode acessar todas as funcionalidades: saque, depósito, transferências, pix cartões e histórico de suas transações, o extrato. |
| Modais Transações | Nossos modais realizam as funções de transações como: transferência, depósito e saque. |
| Tela de Histórico | A tela de histórico permite ao usuário acompanhar seus gastos e ganhos, saber qual o método de pagamento das transações, quem enviou, quem recebeu, quanto foi, etc, em ordem cronológica e com opções de filtros, como filtrar transações do último mês, últimos 6 meses, ou todas e também filtrar por metódo de pagamento ou então procurar via pesquisa. |
| Tela de Ajuda | A tela de ajuda é uma tela adicional que serve  para trazer alguns detalhes sobre nosso banco e como nos encontrar. |

## 🔧 Tecnologias e Ferramentas Utilizadas

- Front-End
    - Figma
    - Angular
    - Bootstrap
    - Bootstrap-icons
- Backend
    - C# / [ASP.NET](http://asp.net/) Core
    - Sqlite
    - JWT Bearer
    - Swagger

<a href="https://github.com/Apollo-Coders/apollobank-backend">Acesse aqui o repositório do nosso back-end com a sua documentação.</a>

## Implementações futuras

No backend, criamos alguns endpoints que gostariamos de integrar ainda com o front-end e que, infelizmente, ainda não tivemos tempo. Os endpoints são da nossa controller de Cartão de Crédito e Faturas, assim como nosso endpoint de transferência agendada, em nossa Controller de Transações. Futuramente iremos implementar essas novas funcionalidades pra deixar o nosso projeto ainda mais completo.

## 👨🏼‍🏫 Construção, Idealização e Gerência

Criar um projeto para 12 pessoas colaborarem não é algo simples e precisa de um planejamento concreto. A divisão de responsabilidade, e ferramentas para acompanhar o desenvolvimento são cruciais. Para dividir as responsabilidades, definir prazos e detalhar o funcionamento da tela, usamos o Trello. O Trello é uma ferramenta para gerenciamento de tarefas baseado no método Kanban, de divisão de tarefas. Nele, é possível criar fluxos de progresso (a fazer, fazendo, feito) e criar Cards (tarefas) onde é possível descrever detalhadamente as tarefas e inserir os usuários responsáveis por cada card. Exemplo do Trello gerenciado no front-end:

https://github.com/Apollo-Coders/ApolloBank/assets/78491545/837b3e18-3d95-420f-9b1b-d2fa5c19d500

Em relação ao desenvolvimento em duplas e acesso ao repositório, seguimos o conceito do git flow, onde temos a branch principal, a main, e uma de desenvolvimento, a develop, e então criamos branchs de feature para cada tarefa, que no caso seria tela, por exemplo `feature/login` , nessa branch seria desenvolvido toda a tela de login e após finalizar, fazemos o merge dessa branch na branch develop através de um Pull Request, onde o monitor ou vice monitor validam se a tela está atendendo o que foi solicitado no Trello ou se falta algo, depois de aceitar essa PR, o código entra na branch develop. Depois de todas as telas finalizadas, fazemos uma release, que seria o merge da develop com a main, isso geraria uma nova versão de produção da aplicação.

## Autores

Criado com empenho por um grupo talentoso e dedicado: ApolloCoders! 💙

<div align="center"><img src="https://github.com/GuiDuarte07.png" width="100px;"/></div>
<div align="center"><a href="https://github.com/GuiDuarte07">Guilherme Duarte - Monitor</a></div>
</br></br>

<div align="center"><img src="https://github.com/luizaferreirafonseca.png" width="100px;"/></div>
<div align="center"><a href="https://github.com/luizaferreirafonseca">Luiza Ferreira - Vice Monitor</a></div>
</br></br>

<div align="center"><img src="https://github.com/buen0-o5.png" width="100px;"/></div>
<div align="center"><a href="https://github.com/buen0-o5">Brenda Bueno</a></div>
</br></br>

<div align="center"><img src="https://github.com/caiohxp.png" width="100px;"/></div>
<div align="center"><a href="https://github.com/caiohxp">Caio Cesar</a></div>
</br></br>

<div align="center"><img src="https://github.com/CarlaDudaMorais.png" width="100px;"/></div>
<div align="center"><a href="https://github.com/CarlaDudaMorais">Carla Morais</a></div>
</br></br>

<div align="center"><img src="https://github.com/Daaaiii.png" width="100px;"/></div>
<div align="center"><a href="https://github.com/Daaaiii">Daiane Bolzan</a></div>
</br></br>

<div align="center"><img src="https://github.com/LucasViniciuus.png" width="100px;"/></div>
<div align="center"><a href="https://github.com/LucasViniciuus">Lucas Vinícius</a></div>
</br></br>

<div align="center"><img src="https://github.com/luizcarneiro90.png" width="100px;"/></div>
<div align="center"><a href="https://github.com/luizcarneiro90">Luiz Carneiro</a></div>
</br></br>

<div align="center"><img src="https://github.com/vitorpatrickmoraes.png" width="100px;"/></div>
<div align="center"><a href="https://github.com/vitorpatrickmoraes">Vítor Moraes</a></div>
</br></br>

<div align="center"><img src="https://github.com/YasminGomes97.png" width="100px;"/></div>
<div align="center"><a href="https://github.com/YasminGomes97">Yasmin Gomes</a></div>
