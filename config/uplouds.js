const multer = require('multer');
// Carrega o módulo 'multer', que é um middleware para manipulação de arquivos enviados em requisições HTTP (upload de arquivos).

const storage = multer.diskStorage({
  // Define uma configuração de armazenamento para o multer, especificando que os arquivos serão armazenados no disco.

  destination: (req, file, cb) => {
    // Define a função para especificar o diretório de destino onde os arquivos enviados serão armazenados.
    cb(null, 'uploads/');
    // Chama o callback 'cb' com 'null' como primeiro argumento (indicando que não houve erro) e 'uploads/' como segundo argumento (o diretório onde os arquivos serão armazenados).
  },

  filename: (req, file, cb) => {
    // Define a função para especificar o nome do arquivo no armazenamento.
    cb(null, Date.now() + '-' + file.originalname);
    // Chama o callback 'cb' com 'null' como primeiro argumento (indicando que não houve erro) e uma string concatenada como segundo argumento. Essa string é composta pela data/hora atual (em milissegundos desde 1 de janeiro de 1970) seguida de um hífen e do nome original do arquivo. Isso garante que os nomes dos arquivos sejam únicos.
  },
});

const upload = multer({ storage });
// Cria uma instância do middleware 'multer' usando a configuração de armazenamento definida anteriormente. A configuração é passada como um objeto com a propriedade 'storage'.
