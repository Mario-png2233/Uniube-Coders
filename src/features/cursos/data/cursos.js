// Números, resumos e aulas são simulados, no porte de turmas pequenas do projeto.
// A lista de nomes é a oficial. As fotos são do Unsplash, com licença livre para uso.

export const cursos = [
  {
    slug: "educacao-financeira",
    titulo: "Educação financeira",
    resumo:
      "Quatro encontros para entender dinheiro, gastos e planejamento no dia a dia. Não é preciso saber matemática avançada nem ter contato prévio com o tema.",
    publico: "Ensino Fundamental e Médio",
    cargaHoraria: "12h",
    vagas: 30,
    status: "aberto",
    camposExtras: [],
    imagem: "/images/cursos/educacao-financeira.jpg",
    imagemAlt: "Pessoa organizando contas com calculadora e anotações",
    imagemCredito: "Unsplash",
    imagemCreditoUrl: "https://unsplash.com/license",
    aulas: [
      {
        titulo: "O dinheiro no dia a dia",
        descricao:
          "A turma conversa sobre de onde vem o dinheiro da família e da mesada, o que é entrar e sair, e por que anotar ajuda a não perder o controle.",
      },
      {
        titulo: "Necessidade, desejo e gasto",
        descricao:
          "Os estudantes separam o que é preciso comprar do que é vontade. A aula usa exemplos da escola e de casa, sem planilha complicada.",
      },
      {
        titulo: "Um plano simples para o mês",
        descricao:
          "Cada pessoa monta um plano curto: quanto pretende usar, o que guardar e o que pode esperar. O resultado é uma lista que cabe numa folha.",
      },
      {
        titulo: "Metas e escolhas",
        descricao:
          "A última aula junta o que foi visto para definir uma meta pequena e realista, como um passeio ou um material escolar, e os passos até ela.",
      },
    ],
  },
  {
    slug: "logica-de-programacao",
    titulo: "Lógica de programação",
    resumo:
      "O primeiro contato com a forma de pensar de quem programa: quebrar um problema em passos, guardar informações e repetir o que se repete. Ainda não é uma linguagem só.",
    publico: "Ensino Fundamental e Médio",
    cargaHoraria: "16h",
    vagas: 25,
    status: "aberto",
    camposExtras: [],
    imagem: "/images/cursos/logica-de-programacao.jpg",
    imagemAlt: "Código em um computador, usado para ilustrar a lógica de programação",
    imagemCredito: "Unsplash",
    imagemCreditoUrl: "https://unsplash.com/license",
    aulas: [
      {
        titulo: "Problema, passos e ordem",
        descricao:
          "A aula começa com tarefas do cotidiano, como uma receita ou o caminho até a escola, e mostra que um programa também é uma sequência de passos.",
      },
      {
        titulo: "Informações e variáveis",
        descricao:
          "Os estudantes dão nome a dados, como idade ou pontuação, e veem que o programa precisa guardar esses valores para usar depois.",
      },
      {
        titulo: "Decisões",
        descricao:
          "Entram as condições: se aconteceu uma coisa, faça isso; se não, faça aquilo. Os exemplos saem de jogos e de situações da escola.",
      },
      {
        titulo: "Repetir com critério",
        descricao:
          "A turma pratica repetições, como contar até um número ou percorrer uma lista, e fecha com um problema pequeno resolvido no quadro e no papel.",
      },
    ],
  },
  {
    slug: "introducao-ao-python",
    titulo: "Introdução ao Python",
    resumo:
      "Os primeiros programas em Python, no computador: mostrar uma mensagem, guardar dados, decidir e repetir. Cada encontro termina com um exercício curto.",
    publico: "Ensino Médio",
    cargaHoraria: "20h",
    vagas: 20,
    status: "aberto",
    camposExtras: [],
    imagem: "/images/cursos/introducao-ao-python.jpg",
    imagemAlt: "Tela de programação com código em destaque",
    imagemCredito: "Unsplash",
    imagemCreditoUrl: "https://unsplash.com/license",
    aulas: [
      {
        titulo: "O primeiro programa",
        descricao:
          "A turma abre o ambiente, escreve um programa que mostra uma frase na tela e entende o que é executar o código.",
      },
      {
        titulo: "Variáveis e tipos",
        descricao:
          "Os estudantes guardam texto e número, fazem contas simples e veem a diferença entre um nome e uma quantidade.",
      },
      {
        titulo: "Perguntar e decidir",
        descricao:
          "O programa passa a ler uma resposta da pessoa e a escolher um caminho com if e else, em exercícios bem curtos.",
      },
      {
        titulo: "Repetir uma tarefa",
        descricao:
          "Entram os laços para repetir uma ação várias vezes, como montar uma lista de números ou insistir até a resposta ser válida.",
      },
      {
        titulo: "Um programa inteiro",
        descricao:
          "No último encontro, cada dupla junta as peças num programinha só, com entrada, decisão e repetição, e apresenta o resultado para a turma.",
      },
    ],
  },
  {
    slug: "introducao-a-programacao-web",
    titulo: "Introdução à programação web",
    resumo:
      "HTML e CSS para montar a primeira página, publicá-la e dar um primeiro passo em JavaScript. O trabalho de cada aula aparece na tela do navegador.",
    publico: "Ensino Médio",
    cargaHoraria: "20h",
    vagas: 20,
    status: "aberto",
    camposExtras: [],
    imagem: "/images/cursos/introducao-a-programacao-web.jpg",
    imagemAlt: "Código de uma página visto na tela de um computador",
    imagemCredito: "Unsplash",
    imagemCreditoUrl: "https://unsplash.com/license",
    aulas: [
      {
        titulo: "O que o navegador mostra",
        descricao:
          "A aula separa o que é conteúdo, o que é aparência e o que é comportamento. A turma olha uma página pronta e reconhece essas três partes.",
      },
      {
        titulo: "A estrutura com HTML",
        descricao:
          "Os estudantes escrevem título, parágrafos, lista e imagem. No fim do encontro, a página já tem o texto do próprio projeto.",
      },
      {
        titulo: "A aparência com CSS",
        descricao:
          "Cores, letras, espaçamento e um layout simples entram na página. A meta é deixar o conteúdo legível, não copiar um site grande.",
      },
      {
        titulo: "Publicar a primeira página",
        descricao:
          "A turma organiza os arquivos e publica a página para que outra pessoa consiga abrir o endereço. Cada estudante sai com um link.",
      },
      {
        titulo: "Um toque de JavaScript",
        descricao:
          "O último encontro acrescenta uma interação pequena, como um botão que troca um texto. Serve para ver que a página também pode reagir.",
      },
    ],
  },
];
