// HIDE 'LEARN MORE' LABEL AFTER SCROLL
const scrollBtn = document.querySelector(".learn-more");
window.addEventListener("scroll", e => {
    const scrollBtnY = window.scrollY + scrollBtn.getBoundingClientRect().bottom
    const scrolled = window.scrollY;
    // console.log(scrolled, scrollBtnY)

    if (scrolled > scrollBtnY) {
        scrollBtn.style.visibility = 'hidden'
    }
});

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
    button.innerText = 'Message Sent';
    button.disabled = e;
});