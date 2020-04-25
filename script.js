//alert for submit button
function logSubmit(e) {
    e.preventDefault();
    confirm(`name: ${name.value}\nemail: ${email.value}\nmessage: ${message.value}`);
}
const form = document.getElementById('form-msg');
const name = form.elements['name'];
const email = form.elements['mail'];
const message = form.elements['comment'];
form.addEventListener('submit', logSubmit);

//alert for reset button
function logReset(e) {
    confirm('Are you sure you would like to RESET the input?');
}
const reset = document.getElementById('reset');
reset.addEventListener('click', logReset);


