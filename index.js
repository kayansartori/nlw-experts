const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      resposta: [
        "Uma linguagem de programação para servidores.",
        "Uma linguagem de marcação para documentos web.",
        "Uma linguagem de programação para desenvolvimento web.",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual palavra-chave é utilizada para declarar uma variável em JavaScript?",
      resposta: [
        "var",
        "let",
        "const",
      ],
      correta: 2,
    },
    {
      pergunta: "O que significa DOM em JavaScript?",
      resposta: [
        "Data Object Model",
        "Document Object Model",
        "Dynamic Operation Model",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      resposta: [
        "Comparação estrita de valor e tipo",
        "Atribuição de valor",
        "Comparação de valor",
      ],
      correta: 1,
    },
    {
      pergunta: "O que é um callback em JavaScript?",
      resposta: [
        "Um tipo de variável",
        "Uma função passada como argumento para outra função",
        "Um evento de clique",
      ],
      correta: 1,
    },
    {
      pergunta: "Como se chama a estrutura de controle de fluxo que permite executar um bloco de código repetidamente enquanto uma condição for verdadeira?",
      resposta: [
        "If-Else",
        "Switch",
        "While",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual é a forma correta de escrever um comentário de uma linha em JavaScript?",
      resposta: [
        "// Comentário",
        "/* Comentário */",
        "# Comentário",
      ],
      correta: 0,
    },
    {
      pergunta: "O que é JSON em JavaScript?",
      resposta: [
        "Java Script Object Notation",
        "JavaScript Oriented Network",
        "Java Standard Object Navigation",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é a finalidade do método 'addEventListener' em JavaScript?",
      resposta: [
        "Remover um elemento do DOM",
        "Adicionar um evento a um elemento",
        "Modificar o estilo de um elemento",
      ],
      correta: 1,
    },
    {
      pergunta: "O que é o conceito de hoisting em JavaScript?",
      resposta: [
        "Um método para criar loops",
        "O processo de mover declarações para o topo do escopo",
        "Uma técnica de animação",
      ],
      correta: 1,
    },
  ];
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
  
  
  // loop ou laço de repetição
  for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.resposta) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.resposta.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta 
  
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      
      mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
    }
  
    quizItem.querySelector('dl').appendChild(dt)
  
  }
  
  quizItem.querySelector('dl dt').remove()
  
  quiz.appendChild(quizItem)
  
  }
  