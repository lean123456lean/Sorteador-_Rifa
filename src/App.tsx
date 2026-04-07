import { useState } from 'react';
import { Shuffle, RotateCcw } from 'lucide-react';
import fundo from './Img/fundo.png';
import premio from './Img/premio.jpeg';

function App() {
  const [drawnNumber, setDrawnNumber] = useState<number | null>(null);
  const [drawnNumbers, setDrawnNumbers] = useState<number[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalNumbers = 35;
  const valorPorNumero = 10;
  const totalArrecadado = totalNumbers * valorPorNumero;
  const custoCartorio = 320;
  const lucro = totalArrecadado - custoCartorio;

  const compradores = [
    { numero: 1, nome: "João" },
    { numero: 2, nome: "Maria" },
    { numero: 3, nome: "Carlos" },
    { numero: 4, nome: "Ana" },
    { numero: 5, nome: "Pedro" },
    { numero: 6, nome: "Juliana" },
    { numero: 7, nome: "Lucas" },
    { numero: 8, nome: "Fernanda" },
    { numero: 9, nome: "Rafael" },
    { numero: 10, nome: "Camila" },
    { numero: 11, nome: "João" },
    { numero: 12, nome: "Maria" },
    { numero: 13, nome: "Carlos" },
    { numero: 14, nome: "Ana" },
    { numero: 15, nome: "Pedro" },
    { numero: 16, nome: "Juliana" },
    { numero: 17, nome: "Lucas" },
    { numero: 18, nome: "Fernanda" },
    { numero: 19, nome: "Rafael" },
    { numero: 20, nome: "Camila" },
    { numero: 21, nome: "João" },
    { numero: 22, nome: "Maria" },
    { numero: 23, nome: "Carlos" },
    { numero: 24, nome: "Ana" },
    { numero: 25, nome: "Pedro" },
    { numero: 26, nome: "Juliana" },
    { numero: 27, nome: "Lucas" },
    { numero: 28, nome: "Fernanda" },
    { numero: 29, nome: "Rafael" },
    { numero: 30, nome: "Camila" },
    { numero: 31, nome: "João" },
    { numero: 32, nome: "Maria" },
    { numero: 33, nome: "Carlos" },
    { numero: 34, nome: "Ana" },
    { numero: 35, nome: "Pedro" },
  ];

  const getComprador = (numero: number) => {
    const pessoa = compradores.find(c => c.numero === numero);
    return pessoa ? pessoa.nome : "Dísponivel";
  }

  const numbers = Array.from({ length: totalNumbers }, (_, i) => i + 1);

  const drawNumber = () => {
    const availableNumbers = numbers.filter(n => !drawnNumbers.includes(n));

    if (availableNumbers.length === 0) {
      alert('Todos os números já foram sorteados!');
      return;
    }

    setIsAnimating(true);

    let counter = 0;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * availableNumbers.length);
      setDrawnNumber(availableNumbers[randomIndex]);
      console.log('Número sorteado:', availableNumbers[randomIndex]);
      counter++;

      if (counter > 20) {
        clearInterval(interval);
        const finalIndex = Math.floor(Math.random() * availableNumbers.length);
        const finalNumber = availableNumbers[finalIndex];
        setDrawnNumber(finalNumber);
        setDrawnNumbers(prev => [...prev, finalNumber]);
        setIsAnimating(false);
      }
    }, 100);
  };

  const reset = () => {
    setDrawnNumber(null);
    setDrawnNumbers([]);
    setIsAnimating(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <img
              src={fundo}
              alt="Vanusa e Leandro"
              className="
                    w-70 md:w-96
                    object-contain
                    rounded-2xl
                    shadow-2xl
                    border border-white/40
                    backdrop-blur-sm
                    hover:scale-105
                    transition-all duration-300
              "
            />
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 flex flex-col md:flex-row items-center gap-6">

            <img
              src={premio}
              alt="Prêmio da rifa"
              className="
                  w-48 md:w-64
                  object-contain
                  rounded-xl
                  shadow-lg
                  border
            "
            />

            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                🎁 Prêmio
              </h2>

              <p className="text-gray-600 mb-2">
                Jogo de colher para cozinha lindo na cor vermelha, perfeito para adicionar um toque de estilo e funcionalidade à sua cozinha.
              </p>

              <p className="text-sm text-gray-500">
                Conjunto perfeito com qualidade e estilo para os amantes de jogos.
                Composto por um controle sem fio, um headset gamer com microfone e um mouse gamer, este kit é ideal para proporcionar uma experiência de jogo imersiva e confortável. O controle sem fio oferece liberdade de movimento, o headset proporciona áudio nítido e comunicação clara, enquanto o mouse gamer garante precisão e agilidade durante as partidas. Seja para jogos de ação, estratégia ou multiplayer,
                este conjunto é a escolha certa para elevar seu desempenho e diversão nos jogos.
              </p>
            </div>

          </div>
          <div className="flex items-center justify-center gap-3 mb-3 p-5">
            <h1 className="text-4xl font-bold text-gray-800 padding">Sorteio Rifa</h1>
            <p className="text-gray-600 text-lg">Números de 1 a 35</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Resumo Financeiro
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="bg-green-100 text-green-700 p-4 rounded-xl text-center">
              <p className="text-sm">Total Arrecadado</p>
              <p className="text-2xl font-bold">
                R$ {totalArrecadado}
              </p>
            </div>

            <div className="bg-red-100 text-red-700 p-4 rounded-xl text-center">
              <p className="text-sm">Custo Cartório</p>
              <p className="text-2xl font-bold">
                R$ {custoCartorio}
              </p>
            </div>

            <div className="bg-blue-100 text-blue-700 p-4 rounded-xl text-center">
              <p className="text-sm">Resultado</p>
              <p className="text-2xl font-bold">
                R$ {lucro}
              </p>
            </div>

          </div>
        </div>

        {drawnNumber && (
          <div className="mb-8 text-center">
            <div className="inline-block bg-white rounded-2xl shadow-2xl p-8 border-4 border-blue-500 transform transition-transform hover:scale-105">
              <p className="text-gray-600 text-sm uppercase tracking-wide mb-2">Número Sorteado</p>
              <div className={`text-8xl font-bold text-blue-600 ${isAnimating ? 'animate-pulse' : ''}`}>
                {drawnNumber}
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-4 justify-center mb-8">
          <button
            onClick={drawNumber}
            disabled={isAnimating || drawnNumbers.length === totalNumbers}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed"
          >
            <Shuffle className="w-5 h-5" />
            {isAnimating ? 'Sorteando...' : 'Sortear Número'}
          </button>

          <button
            onClick={reset}
            className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:scale-105"
          >
            <RotateCcw className="w-5 h-5" />
            Reiniciar
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Números ({drawnNumbers.length} sorteados de {totalNumbers})
          </h2>
          <div className="grid grid-cols-7 gap-3">
            {numbers.map(num => {
              const isDrawn = drawnNumbers.includes(num);
              const isCurrent = num === drawnNumber;

              return (
                <div
                  key={num}
                  className={`
                    aspect-square flex items-center justify-center rounded-lg font-bold text-lg
                    transition-all duration-300 transform
                    ${isDrawn
                      ? 'bg-blue-600 text-white shadow-lg scale-95'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                    ${isCurrent && !isDrawn ? 'ring-4 ring-blue-500 ring-offset-2' : ''}
                  `}
                >
                  <div className="flex flex-col items-center justify-center text-center">
                    <span className="font-bold">{num}</span>
                    <span className="text-[10px] mt-1">
                      {getComprador(num)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {drawnNumbers.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Histórico de Sorteios</h2>
            <div className="flex flex-wrap gap-2">
              {drawnNumbers.map((num, index) => (
                <div
                  key={index}
                  className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold"
                >
                  {num} - {getComprador(num)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;