// Open & Close Modal Function
document.addEventListener('click', (event) => {
    console.log("sike");
    let mask = document.querySelector('.mask');
    return (event.target.matches("button") ? mask.classList.add('active') : null, 
    event.target.matches(".close") ? mask.classList.remove('active') : null);
});

