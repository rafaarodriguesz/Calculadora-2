let numeros = document.querySelectorAll("#buttons-container button");

numeros.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        let valor   = document.querySelector("#result").value;
        valor       = valor + value;
        
        document.querySelector("#result").value = valor;
    })
});