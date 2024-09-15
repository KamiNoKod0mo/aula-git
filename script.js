#const fs = require('fs');
#fs.writeFileSync('test.txt', 'CTF-BR{malicious_flag}');

const fs = require('fs');

// Mensagem para depuração
console.log('Executing script...');

// Tenta criar o arquivo test.txt
try {
    fs.writeFileSync('/app/test.txt', 'Test successful');
    console.log('File created successfully.');
} catch (error) {
    console.error('Error creating file:', error);
}
