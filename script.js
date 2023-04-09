/*--------- Transformer chaque letre du label en span ------------------*/
let labels = document.querySelectorAll('form label')
labels.forEach(label =>{
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`)
    .join('')
})

/*-- focus sur l'input ---*/
let input = document.querySelector('input');
input.focus()