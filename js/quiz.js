export default class Quiz {
  DIFFICULTY = 'easy';

  constructor(difficulty) {
    this.DIFFICULTY = difficulty;
  }

  createQuestion(zombieFactory) {
    const minimum = this.createMinimum();
    const maximum = this.createMaximum();
    const int1 = this.generateInteger(minimum, maximum);
    const int2 = this.generateInteger(minimum, maximum);

    const operator = this.createOperator();

    // Render the question
    document.getElementById('int1').innerHTML = int1;
    document.getElementById('operator').innerHTML = operator;
    document.getElementById('int2').innerHTML = int2;

    // TODO Input the operation. Maybe randomize it
    const answer = this.createAnswer(int1, int2, operator);

    document.getElementById('submit-button').addEventListener('click', () => {
      this.processUserInput(zombieFactory);
    });

    document
      .getElementById('answer')
      .addEventListener('keypress', function (event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === 'Enter') {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          document.getElementById('submit-button').click();
        }
      });

    document
      .getElementById('show-answer-button')
      .addEventListener('click', () => {
        this.showAnswer(answer, zombieFactory);
      });
  }

  createOperator() {
    const randomInt = Math.floor(Math.random() * 3);
    switch (randomInt) {
      case 0:
        return '+';
      case 1:
        return '-';
      case 2:
        return 'x';
      // case 3:
      //   return '/';
    }
  }

  createMinimum() {
    // TODO Create a minimum based on the difficulty
    if (this.DIFFICULTY == 'easy') {
      return 1;
    }
    return 1;
  }

  createMaximum() {
    // TODO Create a maximum based on the difficulty
    if (this.DIFFICULTY == 'very easy') {
      return 3;
    } else if (this.DIFFICULTY == 'easy') {
      return 5;
    } else if (this.DIFFICULTY == 'medium') {
      return 10;
    }
    return 100;
  }

  generateInteger(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }

  createAnswer(int1, int2, operator) {
    // TODO Change the answer based on the opperation
    switch (operator) {
      case '+':
        return int1 + int2;
      case '-':
        return int1 - int2;
      case 'x':
        return int1 * int2;
      // case '/':
      //   return int1 / int2;
    }
  }

  processUserInput(zombieFactory) {
    const userAnswer = document.getElementById('answer').value;

    // Generate the answer
    let int1 = document.getElementById('int1').innerHTML;
    let operator = document.getElementById('operator').innerHTML;
    let int2 = document.getElementById('int2').innerHTML;
    let answer = this.createAnswer(int1, int2, operator);

    if (userAnswer == answer) {
      console.log('correct!');
      document.getElementById('answer').value = '';
      document.getElementById('answer').classList.remove('answer-incorrect');
      document.getElementById('answer').classList.add('answer-correct');
      this.createQuestion(zombieFactory);
      zombieFactory.quenchZombie();
    } else {
      console.log('incorrect!');
      document.getElementById('answer').classList.remove('answer-correct');
      document.getElementById('answer').classList.add('answer-incorrect');
    }
    document.getElementById('answer').focus();
  }

  showAnswer(answer, zombieFactory) {
    document.getElementById('answer').value = answer;
    // TODO Set a quick timeout where it erases everything and gives you a new question
    setTimeout(() => {
      document.getElementById('answer').value = '';
      this.createQuestion(zombieFactory);
    }, 1500);
  }
}
