function moveEyes(event) {
  var emoji = document.getElementById('emoji');
  var input = event.target;
  var value = input.value;

  if (value === "") {
    emoji.innerHTML = "&#x1F648;"; // Macaquinho com os olhos abertos 
  } else {
    emoji.innerHTML = "&#x1F649;"; // Macaquinho com as maos nos olhos 
  }
}

function togglePasswordVisibility() {
  var emoji = document.getElementById('emoji');
  var passwordField = document.getElementById('password');

  if (passwordField.type === "password") {
    emoji.innerHTML = "&#x1F648;"; // Macaquinho com os olhos abertos 
    passwordField.type = 'text';
  } else {
    emoji.innerHTML = "&#x1F64A;"; // Macaquinho com a mao na boca 
    passwordField.type = 'password';
  }
}




  
      
      