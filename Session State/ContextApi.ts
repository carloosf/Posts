import useState from "react"

const [user, setUser] = useState<string | null>(null);

// Definindo o usuário em memória
setUser('Carlos');

// Exibindo o nome
console.log(user); // "Carlos"
