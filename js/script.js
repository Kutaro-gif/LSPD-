// Simple handling du formulaire (ex: affichage d'un message et reset)
document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e){
e.preventDefault();
const data = new FormData(form);
const payload = Object.fromEntries(data.entries());
// Ici on enverrait vers un backend ou un service (ex: Netlify Functions, GitHub Actions, Formspree)
console.log('Candidature/contact envoyée :', payload);
alert('Merci — votre message a bien été pris en compte.');
form.reset();
});
});
