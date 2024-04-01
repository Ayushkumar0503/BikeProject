const scriptURL = 'https://script.google.com/macros/s/AKfycby_mb5vIFzNz6Rxpaiv8hHzTeP94m1FEeoazIlb-VaW-DL4ycHjxXQiKVZR_bOospiS3g/exec';

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  // alert("Submitting form... Please wait.");
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      if (response.ok) {
        alert("Thank you! Your form is submitted successfully.");
        // window.location.reload();
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .catch(error => console.error('Error!', error.message));
    e.target.reset()
});
