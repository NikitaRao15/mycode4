//single line codn statement... 
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

//elif...
let agee =prompt('enter ur age for some magic::',2341)
if (agee < 33) {
    message = 'Hi, baby!';
  } else if (agee < 108) {
    message = 'Hello!';
  } else if (agee < 400) {
    message = 'Greetings!';
  } else {
    message = 'What an unusual age!';
  }
  alert(message);

//example..3 of elseif statement..
  let value = prompt('What is the "official" name of JavaScript?', '');

  if (value == 'ECMAScript') {
    alert('Right!');
  } else {
    alert("You don't know? ECMAScript!");
  }