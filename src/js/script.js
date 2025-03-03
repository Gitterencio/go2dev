// script.js
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

fetch('src/data/data.json')
    .then(response => response.json())
    .then(jsonData => {
        const container = document.getElementById("buttonContainer");
        jsonData.forEach(item => {
            let button = document.createElement("button");
            button.textContent = item.name;
            button.style.backgroundColor = getRandomColor();
            button.style.color = "#fff";
            button.onclick = () => window.location.href = item.url;
            container.appendChild(button);
        });
    })
    .catch(error => console.error('Error cargando el JSON:', error));
