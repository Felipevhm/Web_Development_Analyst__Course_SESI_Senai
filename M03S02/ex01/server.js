// Importando a biblioteca interna 'http'
const http = require('http');

// Criando o servidor com http.createServer
const server = http.createServer((request, response) => {
  // Verifica se a URL acessada é '/fundamentos' e o método é GET
  if (request.url === '/fundamentos' && request.method === 'GET') {
    // Define o cabeçalho da resposta (status 200 e tipo de conteúdo)
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Envia a resposta com a mensagem desejada
    response.end('Hello world, fundamentos nodejs aplicado.');
  } else {
    // Caso a rota não seja encontrada, retorna 404
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Rota não encontrada.');
  }
});

// Definindo a porta que o servidor irá escutar
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
