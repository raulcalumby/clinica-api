<h1>Agendamento de Consultas</h1>
<p>Este sistema permite que usuários agendem consultas com profissionais de saúde. Ele utiliza o padrão JWT para autenticação de usuários e fornece as seguintes rotas:</p>

<h2>Autenticação</h2>
<p>Para autenticar, é preciso enviar uma requisição POST para a rota /api/auth/login com as seguintes informações no corpo da requisição:</p>
<ul>
  <li>email: endereço de email do usuário</li>
  <li>password: senha do usuário</li>
</ul>
<p>A resposta incluirá um token JWT que deve ser incluído em todas as requisições futuras como uma string "Authorization" no cabeçalho.</p>

<h2>Usuários</h2>
<p>As rotas para gerenciamento de usuários incluem:</p>
<ul>
  <li>GET /users: retorna a lista de todos os usuários</li>
  <li>GET /users/:id: retorna as informações do usuário com o ID especificado</li>
  <li>POST /users: cria um novo usuário com as informações enviadas no corpo da requisição</li>
  <li>PATCH /users/:id: atualiza as informações do usuário com o ID especificado</li>
  <li>DELETE /users/:id: exclui o usuário com o ID especificado</li>
</ul>

<h2>Agendamento</h2>
<p>As rotas para gerenciamento de agendamentos incluem:</p>
<ul>
  <li>GET /sheduling: retorna a lista de todos os agendamentos</li>
  <li>GET /sheduling/:id: retorna as informações do agendamento com o ID especificado</li>
  <li>POST /sheduling: cria um novo agendamento com as informações enviadas no corpo da requisição</li>
  <li>PATCH /sheduling/:id: atualiza as informações do agendamento com o ID especificado</li>
  <li>DELETE /sheduling/:id: exclui o agendamento com o ID especificado</li>
</ul>

<p>As requisições do projeto podem ser testadas usando o Postman. Um arquivo com as requisições já pré-configuradas está disponível <a href="https://github.com/raulcalumby/clinica-api/tree/master/postman">aqui</a>.</p>

 