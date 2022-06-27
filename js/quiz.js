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

    document.getElementById('question').innerHTML =
      int1 + ' ' + operator + ' ' + int2;

    // TODO Input the operation. Maybe randomize it
    const answer = this.createAnswer(int1, int2, operator);

    document.getElementById('submit-button').addEventListener('click', () => {
      this.processUserInput(answer, zombieFactory);
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
    } else if (this.DIFFICULTY == 'medium') {
      return 5;
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

  processUserInput(answer, zombieFactory) {
    const userAnswer = document.getElementById('answer').value;
    if (userAnswer == answer) {
      console.log('correct!');
      document.getElementById('answer').value = '';
      document.getElementById('answer').classList.remove('answer-incorrect');
      document.getElementById('answer').classList.add('answer-correct');
      this.createQuestion(zombieFactory);
      zombieFactory.quenchZombie();
      return;
    } else {
      console.log('incorrect!');
      document.getElementById('answer').classList.remove('answer-correct');
      document.getElementById('answer').classList.add('answer-incorrect');
    }
  }

  showAnswer(answer, zombieFactory) {
    document.getElementById('show-answer').innerHTML = answer;
    // TODO Set a quick timeout where it erases everything and gives you a new question
    setTimeout(() => {
      document.getElementById('show-answer').innerHTML = '';
      this.createQuestion(zombieFactory);
    }, 1500);
  }
}
