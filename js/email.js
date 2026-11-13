// Reconstruit les adresses e-mail à l'affichage pour les masquer aux robots
// qui collectent les adresses dans le code HTML.
// Usage : <a class="js-email" data-u="(partie avant @, à l'envers)" data-d="(domaine, à l'envers)">texte de secours</a>
document.querySelectorAll('.js-email').forEach(el => {
    const rev = s => s.split('').reverse().join('');
    const address = rev(el.dataset.u) + '@' + rev(el.dataset.d);
    el.textContent = address;
    if (el.tagName === 'A') el.href = 'mailto:' + address;
});
