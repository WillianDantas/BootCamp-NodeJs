// Singleton
function PessoaSingleton() {
    if (!PessoaSingleton.instance) {
        return PessoaSingleton.Instance = this;
    }

    return PessoaSingleton.instance;
}

const pessoa1 = PessoaSingleton.call({ name: 'Guilherme' });
const pessoa2 = PessoaSingleton.call({ name: 'Custon Name' });

console.log(pessoa1);
console.log(pessoa2);
