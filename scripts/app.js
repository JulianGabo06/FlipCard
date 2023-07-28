
function flipCard(cardFace) {
    // Obtén la carta que contiene la cara clicada
    const card = cardFace.parentElement;

    // Alternar la clase 'flipped' para hacer el flip
    card.classList.toggle('flipped');
}