
// Remove main node
const main = document.querySelector('main#main');
main.remove();

// Create newHeader node
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = "YOUR-NAME is the champion";

// Append newHeader to body
document.body.appendChild(newHeader);
