import BaseView from './BaseView.js';
import BrowserGameStorage from './BrowserGameStorage.js';

class BrowserUI extends BaseView {

  constructor (inputTextArea, outputArea) {
    super(new BrowserGameStorage());
    this.inputTextArea = inputTextArea;
    this.outputArea = outputArea;

    this.inputTextArea.addEventListener('keydown', this.handleInput.bind(this));
  }

  clear () {
    this.outputArea.innerHTML = '';
    this.inputTextArea.value = '';
  }

  print (...text) {
    this.outputArea.innerHTML += text;
  }

  println (...text) {
    this.outputArea.innerHTML += text + '<br/>';
  }

  read () {
    const input = this.inputTextArea.value;
    this.println(`> ${input}`);
    this.processInput(input);
    this.saveState();
    this.inputTextArea.value = '';
  }

  handleInput (event) {
    if (event.key === "Enter") {
      this.read();
    }
  }

  getPlayerInput () {

  }

  restart () {
    this.clear();
    this.println('Hello');
    this.println('World');
  }
}

export default BrowserUI;