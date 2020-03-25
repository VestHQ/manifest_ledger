// CONTACT FORM 
// click link below to view form submissions
//https://docs.google.com/spreadsheets/d/1Yi0d90pNaNWyapom1nR1ccnetbVnAqdxPBlUVL0DRfY/edit?usp=sharing

// documentation for google sheets JS intergration
// https://github.com/jamiewilson/form-to-google-sheets

const scriptURL = 'https://script.google.com/macros/s/AKfycbyWCIvfXHv6kZA_h5gs3Ewr4Tx1_CVKbEk76v9wo_OvlteJx6k/exec'
const googleForm = document.forms['submit-to-google-sheet']
const formEl = document.getElementById('form-contact')

googleForm.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(googleForm)
        })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})

formEl.addEventListener('submit', (e) => {
    const button = document.getElementById('submit-button');
    console.log(e)
    button.innerText = 'Message Sent';
    button.disabled = e;
});