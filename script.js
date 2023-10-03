let elementoH1 = document.querySelector("#titulo")
let elementoA = document.querySelector("a")
let elementoUl = document.querySelector("ul")
let elementoOl = document.querySelector("#lista-ordenada")

elementoH1.innerText = "Exercicio JS: innerText e innerHTML"
elementoA.innerText = "Proz Educação" 
elementoUl.innerHTML = `
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
`
elementoOl.innerHTML = `
    <li><a href="https://www.cursoemvideo.com/">Curso em Vídeo</a>
    <li><a href="https://www.codewars.com/">CodeWars</a>
    <li><a href="https://flexboxfroggy.com/">Flexbox Froggy</a>
`