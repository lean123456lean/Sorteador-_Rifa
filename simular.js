const totalNumbers = 35;
const numeros = Array.from({ length: totalNumbers }, (_, i) => i + 1);

// mesma lista que você usa
const compradores = [
    { numero: 1, nome: "Karine" },
    { numero: 2, nome: "Ana Paula" },
    { numero: 3, nome: "Irmã Ana Paula" },
    { numero: 4, nome: "Ana Paula" },
    { numero: 5, nome: "Fernanda" },
    { numero: 6, nome: "Irmã Lurdes" },
    { numero: 7, nome: "Karine" },
    { numero: 8, nome: "Irmã Lurdes" },
    { numero: 9, nome: "Irmã Lurdes" },
    { numero: 10, nome: "Irmã Lurdes" },
    { numero: 11, nome: "Irmã Lurdes" },
    { numero: 12, nome: "Irmã Lurdes" },
    { numero: 13, nome: "Irmã Lurdes" },
    { numero: 14, nome: "Irmã Lurdes" },
    { numero: 15, nome: "Irmã Lurdes" },
    { numero: 16, nome: "Ana Paula" },
    { numero: 17, nome: "Paula Kassimiro" },
    { numero: 18, nome: "Ana Lucia" },
    { numero: 19, nome: "Irmã Gracinha" },
    { numero: 20, nome: "Irmã Gracinha" },
    { numero: 21, nome: "Hariel" },
    { numero: 22, nome: "Irmã Lurdes" },
    { numero: 23, nome: "Irmã Lurdes" },
    { numero: 24, nome: "Fernanda" },
    { numero: 25, nome: "Irmã Lurdes" },
    { numero: 26, nome: "Ana Lucia" },
    { numero: 27, nome: "Ana Paula" },
    { numero: 28, nome: "Irmã Lurdes" },
    { numero: 29, nome: "Irmã Lurdes" },
    { numero: 30, nome: "Ana Lucia" },
    { numero: 31, nome: "Irmã Lurdes" },
    { numero: 32, nome: "Irmã Ana Paula" },
    { numero: 33, nome: "Irmã Lurdes" },
    { numero: 34, nome: "Irmã Lurdes" },
    { numero: 35, nome: "Pedro" },
];

// contador de vitórias por pessoa
const resultados = {};

function getComprador(numero) {
    const pessoa = compradores.find(c => c.numero === numero);
    return pessoa ? pessoa.nome : "Desconhecido";
}

// roda 10 mil sorteios
const totalSimulacoes = 10000;

for (let i = 0; i < totalSimulacoes; i++) {
    const randomIndex = Math.floor(Math.random() * numeros.length);
    const numeroSorteado = numeros[randomIndex];
    const nome = getComprador(numeroSorteado);

    resultados[nome] = (resultados[nome] || 0) + 1;
}

// ordenar do maior para o menor
const ordenado = Object.entries(resultados)
    .sort((a, b) => b[1] - a[1]);

console.log("Resultado após 10.000 sorteios:\n");

ordenado.forEach(([nome, vitorias]) => {
    const porcentagem = ((vitorias / totalSimulacoes) * 100).toFixed(2);
    console.log(`${nome}: ${vitorias} vitórias (${porcentagem}%)`);
});