// Salvando o nome do usuário
sessionStorage.setItem('user', 'Carlos');

// Recuperando o dado
const user = sessionStorage.getItem('user');
console.log(user); // "Carlos"
