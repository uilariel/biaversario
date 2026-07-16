# Flor Procedural

Um jardim generativo interativo, feito inteiramente em **JavaScript puro** e **Canvas API** — sem frameworks, sem bibliotecas externas. Toda a geometria, física e animação são construídas do zero: recursão para os galhos, curvas de Bézier para as pétalas, sistemas de partículas para chuva e nuvem, e distribuição por ângulo dourado para os elementos florais.

## O que é

Ao abrir a página, uma flor procedural nasce a partir de um único ponto, seguindo um sistema recursivo de ramificação (inspirado em L-Systems). Uma nuvem interativa segue o cursor do mouse — clicando e segurando, ela solta gotas de chuva que caem com física simples até atingir o chão. Cada geração produz uma flor única: número de galhos, cor das pétalas e estrutura variam a cada carregamento.

O cenário conta ainda com céu em gradiente, sol, grama e um jarro, formando uma composição completa desenhada inteiramente via Canvas 2D.

## Como funciona (por baixo do capô)

- **Galhos** — gerados por uma função recursiva que simula um L-System: cada galho se ramifica em 2 ou 3 filhos, com ângulo, comprimento e curvatura levemente aleatórios, criando uma estrutura orgânica e nunca idêntica entre execuções.
- **Miolos e pétalas** — nascem nas pontas dos galhos finais. As pétalas são distribuídas ao redor de cada miolo usando o **ângulo dourado (137.5°)**, o mesmo padrão observado na distribuição de sementes de um girassol.
- **Cor** — cada flor sorteia uma paleta (vermelho, rosa, roxo, lavanda, branco, pêssego ou lilás) representada no espaço de cor **HSL**, com pequenas variações de matiz, saturação e luminosidade entre pétalas para evitar repetição perfeita.
- **Nuvem e chuva** — sistema de partículas: a nuvem é um aglomerado de círculos brancos com leve oscilação (tremor) baseada em funções trigonométricas e tempo; as gotas seguem um modelo simples de física (integração de Euler — velocidade e posição atualizadas quadro a quadro sob efeito de gravidade).
- **Todo o desenho** é feito via `CanvasRenderingContext2D`: paths, curvas quadráticas de Bézier, gradientes lineares e radiais, e transformações de coordenadas.

## Tecnologias

- JavaScript (vanilla, sem dependências)
- Canvas API (2D)
- HTML5 / CSS3

## Estrutura do projeto

```
├── index.html
├── style.css
└── js/
    ├── setup.js      # canvas, contexto, listeners de mouse
    ├── flor.js        # geração recursiva dos galhos, miolos e pétalas
    ├── chuva.js         # nuvem, gotas e sistema de partículas
    ├── terreno.js         # céu, grama, sol
    ├── desenho.js           # funções de renderização (leem os dados, desenham no canvas)
    └── main.js                # loop principal de animação (requestAnimationFrame)
```

O projeto segue uma separação por responsabilidade: arquivos de **geração de dados** (posições, ângulos, cores) nunca acessam o contexto do canvas diretamente; arquivos de **desenho** apenas leem esses dados e os renderizam. Isso mantém a lógica testável e independente da camada visual.

## Rodando localmente

Não há build nem dependências — é só servir os arquivos estáticos:

```bash
git clone <url-do-repositorio>
cd flor-procedural
python3 -m http.server 8000
```

Depois, abra `http://localhost:8000` no navegador.

## Sobre o projeto

Esse projeto nasceu como um presente pessoal e virou também um exercício de aprendizado de JavaScript, geometria computacional e Canvas API — cada peça (recursão, curvas, sistemas de partículas, distribuição por ângulo dourado) foi implementada e depurada manualmente, sem uso de bibliotecas de desenho ou animação.
