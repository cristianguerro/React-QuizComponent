import React, { Component } from 'react';

class QuizQuiestion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section>
          <ul>
            <li>{this.props.quiz_question.answer_options[0]}</li>
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuiestion;
