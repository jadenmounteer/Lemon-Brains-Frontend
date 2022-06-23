export default class Quiz {
  DIFFICULTY = 'easy';

  constructor(difficulty) {
    this.DIFFICULTY = difficulty;
  }

  createQuestion() {
    const minimum = this.createMinimum();
    const maximum = this.createMaximum();
    const int1 = this.generateInteger(minimum, maximum);
    const int2 = this.generateInteger(minimum, maximum);

    document.getElementById('question').innerHTML =
      int1 + ' ' + '+' + ' ' + int2;

    // TODO Input the operation. Maybe randomize it
    const answer = this.createAnswer(int1, int2);

    document.getElementById('submit-button').addEventListener('click', () => {
      this.processUserInput(answer);
    });

    document.getElementById('submit-button').addEventListener('click', () => {
      this.processUserInput(answer);
    });

    document
      .getElementById('show-answer-button')
      .addEventListener('click', () => {
        this.showAnswer(answer);
      });
  }

  createMinimum() {
    // TODO Create a minimum based on the difficulty
    return 1;
  }

  createMaximum() {
    // TODO Create a maximum based on the difficulty
    return 100;
  }

  generateInteger(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }

  createAnswer(int1, int2, operation = 'addition') {
    // TODO Change the answer based on the opperation
    return int1 + int2;
  }

  processUserInput(answer) {
    const userAnswer = document.getElementById('answer').value;
    if (userAnswer == answer) {
      alert('You answered correctly');
    } else {
      alert('Wrong');
    }
  }

  showAnswer(answer) {
    document.getElementById('show-answer').innerHTML = answer;
    // TODO Set a quick timeout where it erases everything and gives you a new question
    setTimeout(() => {
      document.getElementById('show-answer').innerHTML = '';
      this.createQuestion();
    }, 1500);
  }
}
