const frases = [

    "🚀 Missão Ativada: economize água hoje e inspire alguém.",
    "🌳 Uma árvore plantada agora pode beneficiar gerações futuras.",
    "♻️ Reciclar é transformar resíduos em oportunidades.",
    "💡 Desligar luzes desnecessárias reduz impactos ambientais.",
    "🌎 O planeta não precisa de algumas pessoas perfeitas, mas de milhões fazendo sua parte.",
    "🔥 Seu próximo hábito sustentável pode mudar mais do que você imagina.",
    "⚡ Toda grande transformação começa com uma pequena atitude."

    ];

    const botao = document.getElementById("btn");
    const frase = document.getElementById("frase");

    botao.addEventListener("click", () => {

    const sorteio = Math.floor(Math.random() * frases.length);

    frase.innerHTML = frases[sorteio];

    });
]