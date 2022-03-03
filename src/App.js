import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.validation = this.validation.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      minValue: 1,
      maxValue: 90,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange(event) {
    if (event.target.type === 'checkbox') {
      const { cardTrunfo } = this.state;
      this.setState(() => ({
        [event.target.id]: !cardTrunfo,
      }), () => this.validation());
    } else {
      this.setState(() => ({
        [event.target.id]: event.target.value,
      }), () => this.validation());
    }
  }

  validation() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;
    const minValue = 0;
    const maxValue = 90;
    const maxValueAttr = 210;
    const sumCard = +cardAttr1 + +cardAttr2 + +cardAttr3;
    if (cardName.length === 0
      || cardDescription.length === 0
      || cardImage.length === 0
      || cardAttr1 < minValue
      || cardAttr1 > maxValue
      || cardAttr2 < minValue
      || cardAttr2 > maxValue
      || cardAttr3 < minValue
      || cardAttr3 > maxValue
      || sumCard > maxValueAttr) {
      this.setState(() => ({
        isSaveButtonDisabled: true,
      }));
    } else {
      this.setState(() => ({
        isSaveButtonDisabled: false,
      }));
    }
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      minValue,
      maxValue,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          minValue={ minValue }
          maxValue={ maxValue }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
