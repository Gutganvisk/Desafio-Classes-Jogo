# 🦸‍♂️ Desafio: Escrevendo as Classes de um Jogo

Este repositório contém a solução para o desafio "Escrevendo as classes de um Jogo", desenvolvido para praticar conceitos fundamentais de Programação Orientada a Objetos (POO) e lógica de programação em JavaScript.

## 🎯 Objetivo do Projeto

Criar uma classe genérica que represente um herói de uma aventura e implementar um método de ataque que varia de acordo com a classe (tipo) do personagem.

### 📝 Requisitos Atendidos:
Durante o desenvolvimento, foram utilizados os seguintes conceitos:
- Variáveis
- Operadores
- Estruturas de decisão (`switch/case`)
- Funções / Métodos
- Classes e Objetos

## 💻 Como funciona

A classe `Heroi` recebe três propriedades no momento de sua criação (construtor):
- `nome`: O nome do herói.
- `idade`: A idade do herói.
- `tipo`: A classe do herói (ex: `mago`, `guerreiro`, `monge`, `ninja`).

O método `atacar()` analisa o `tipo` do herói através de uma estrutura de decisão e exibe uma mensagem personalizada no console:

| Tipo do Herói | Tipo de Ataque | Saída no Console |
| :--- | :--- | :--- |
| **Mago** | magia | *O mago atacou usando magia* |
| **Guerreiro** | espada | *O guerreiro atacou usando espada* |
| **Monge** | artes marciais | *O monge atacou usando artes marciais* |
| **Ninja** | shuriken | *O ninja atacou usando shuriken* |

## 🚀 Como executar o projeto

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
2. Clone este repositório ou baixe o arquivo fonte.
3. Abra o terminal na pasta do projeto e execute o comando:

```bash
node index.js