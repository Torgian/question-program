/* ask 5 questions
2, keep track number of questions user answered correctly
3, provide a final message after the quiz, letting the user know
  the number of questions he or she got right,
4, rank player; if player correctly answered 5 answers, gold crown
  3-4 is a silver crown, 1-2 is bronze and no correct answers is no        crown.;
 */

var correctAnswers = [];

alert('Good evening! I will ask you a series of questions.');

// question 1
var q1 = prompt ('What region is Osaka a part of?') 
if (q1.toUpperCase() === 'KANSAI' || q1.toUpperCase() === 'KANSAI REGION') {
    alert('That is correct!');
    correctAnswers ++;
} else {
  alert('Sorry, that is not correct!');
}

//question 2

var q2 = prompt ('Is Hokkaido in north Japan? Yes or No?') 
if (q2.toUpperCase() === 'YES' || q2.toUpperCase() === 'Y') {
    alert('That is correct!');
    correctAnswers ++;
} else {
  alert('Sorry, that is not correct!');
}

//question 3

var q3 = prompt ('What is the OR code in JavaScript?') 
if (q3.toUpperCase() === '||') {
    alert('That is correct!');
    correctAnswers ++;
} else {
  alert('Sorry, that is not correct!');
}

//question 4

var q4 = prompt ('What is the AND code in JavaScript? ') 
if (q4.toUpperCase() === '&&') {
    alert('That is correct!');
    correctAnswers ++;
} else {
  alert('Sorry, that is not correct!');
}

//question 5

var q5 = prompt ('What city is the district of Sakai in?') 
if (q5.toUpperCase() === 'OSAKA' || q5.toUpperCase() === 'OSAKA CITY') {
    alert('That is correct!');
    correctAnswers ++;
} else {
  alert('Sorry, that is not correct!');
}

if (correctAnswers === 5) {
  alert('Congratulations! You have answered all 5 questions correctly!');
  alert('You win the gold crown!');
} else if (correctAnswers === 3 || correctAnswers === 4) {
  alert('Good job! You have answered ' + correctAnswers + ' correctly! You win a silver crown!');
} else if (correctAnswers === 1 || correctAnswers === 2) {
  alert('Not bad. You answered ' + correctAnswers + ' correctly. Here\'s a bronze star. Study and try this again!');
        }
