const form = Document.getElementById('form')
const Input = document.getElementsByClassName('input')
const todoUL = document.getElementById('todo')

const todos = JSON.parse(localStorage.getItem('todos'))

