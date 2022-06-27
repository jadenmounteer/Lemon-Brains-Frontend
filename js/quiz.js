export default class Quiz {
  DIFFICULTY = 'easy';

  constructor(difficulty) {
    this.DIFFICULTY = difficulty;
  }

  createQuestion(listOfZombies) {
    const minimum = this.createMinimum();
    const maximum = this.createMaximum();
    const int1 = this.generateInteger(minimum, maximum);
    const int2 = this.generateInteger(minimum, maximum);
    console.log(listOfZombies);

    document.getElementById('question').innerHTML =
      int1 + ' ' + '+' + ' ' + int2;

    // TODO Input the operation. Maybe randomize it
    const answer = this.createAnswer(int1, int2);

    document.getElementById('submit-button').addEventListener('click', () => {
      this.processUserInput(answer, listOfZombies);
    });

    document
      .getElementById('show-answer-button')
      .addEventListener('click', () => {
        this.showAnswer(answer, listOfZombies);
      });
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
    if (this.DIFFICULTY == 'easy') {
      return 3;
    }
    return 100;
  }

  generateInteger(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }

  createAnswer(int1, int2, operation = 'addition') {
    // TODO Change the answer based on the opperation
    return int1 + int2;
  }

  processUserInput(answer, listOfZombies) {
    const userAnswer = document.getElementById('answer').value;
    if (userAnswer == answer) {
      console.log('correct!');
      document.getElementById('answer').value = '';
      document.getElementById('answer').classList.remove('answer-incorrect');
      document.getElementById('answer').classList.add('answer-correct');
      this.createQuestion(listOfZombies);

      // setTimeout(() => {
      //   this.createQuestion();
      // }, 500);
      return;
    } else {
      console.log('incorrect!');
      document.getElementById('answer').classList.remove('answer-correct');
      document.getElementById('answer').classList.add('answer-incorrect');
    }
  }

  showAnswer(answer, listOfZombies) {
    document.getElementById('show-answer').innerHTML = answer;
    // TODO Set a quick timeout where it erases everything and gives you a new question
    setTimeout(() => {
      document.getElementById('show-answer').innerHTML = '';
      this.createQuestion(listOfZombies);
    }, 1500);
  }
}
