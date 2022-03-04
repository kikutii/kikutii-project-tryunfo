import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardAdd from './components/CardAdd';
import './style/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.validation = this.validation.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.removeCard = this.removeCard.bind(this);
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
      hasTrunfo: false,
      cards: [],
    };
  }

  onSaveButtonClick(event) {
    event.preventDefault();

    const {
      cardTrunfo,
    } = this.state;

    if (cardTrunfo) {
      this.setState(() => ({
        hasTrunfo: true,
      }));
    }

    const currentState = this.state;
    this.setState((acc) => ({ cards: [...acc.cards, currentState] }));

    this.setState(() => ({
      isSaveButtonDisabled: true,
      cardRare: 'normal',
      cardImage: '',
      cardAttr3: '0',
      cardAttr2: '0',
      cardAttr1: '0',
      cardDescription: '',
      cardName: '',
      cardTrunfo: false,
    }));
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

  removeCard(event) {
    const { cards } = this.state;
    this.setState(() => ({
      cards: cards.filter((element, index) => (
        index.toString() !== event.target.parentElement.id
      )),
    }));

    if (cards.some((element) => !element.hasTrunfo)) {
      this.setState(() => ({
        hasTrunfo: false,
      }));
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
      cards,
      hasTrunfo,
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
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
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

        <div className="containerCards">
          {
            cards.map((e, index) => (
              <CardAdd
                key={ index }
                cardNumber={ index }
                cardName={ e.cardName }
                cardDescription={ e.cardDescription }
                cardAttr1={ e.cardAttr1 }
                cardAttr2={ e.cardAttr2 }
                cardAttr3={ e.cardAttr3 }
                cardImage={ e.cardImage }
                cardRare={ e.cardRare }
                cardTrunfo={ e.cardTrunfo }
                removeCard={ this.removeCard }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
