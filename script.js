
function handleEmail(){

      
    var emailInput = document.getElementById('email');
    var email = emailInput.value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      // Email is valid, remove the red border
      window.location.href = 'form.html?email=' + encodeURIComponent(document.getElementById('email').value);
      //window.location.href='form.html'
    } else {
      // Email is invalid, add the red border
      emailInput.classList.add('invalid-input');
      document.getElementById('error-message').textContent = 'Valid Email Required';
      emailInput.value = '';
    }
  }
  
  function displayThankYouMessage(){
    var email = decodeURIComponent(new URLSearchParams(window.location.search).get('email'));
    var messageElement = document.getElementById('displayText');
    messageElement.innerHTML = email;
    console.log('Success');

    
  }
    function clickEvent(){
      window.location.href='index.html';
    }
handleEmail();
clickEvent();
getEmail();
displayThankYouMessage();
