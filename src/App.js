import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import ListCards from './components/ListCards';
import './style/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.removeCard = this.removeCard.bind(this);

    this.state = {
      cardName: 'Rem',
      cardDescription: 'Rem é uma personagem de Re:Zero.',
      cardAttr1: '90',
      cardAttr2: '90',
      cardAttr3: '30',
      cardImage: 'http://i.imgur.com/r3Zf4VI.jpg',
      cardRare: 'muito raro',
      cardTrunfo: true,
      minValue: 1,
      maxValue: 90,
      isSaveButtonDisabled: false,
      hasTrunfo: false,
      cards: [],
    };
  }

  onSaveButtonClick() {
    const currentState = this.state;

    this.setState((prevState) => (
      {
        cards: [...prevState.cards, currentState],
        isSaveButtonDisabled: true,
        cardRare: 'normal',
        cardImage: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardDescription: '',
        cardName: '',
        cardTrunfo: false,
        hasTrunfo: prevState.cardTrunfo,
      }
    ));
  }

  onInputChange({ target: { type, id, value } }) {
    this.setState((prevState) => ({
      [id]: type === 'checkbox' ? !prevState.cardTrunfo : value,
    }), () => this.validation());
  }

  removeCard({ target }) {
    const { cards } = this.state;

    this.setState({
      cards: cards.filter((element, index) => (
        index !== +target.parentElement.id
      )),
    }, () => {
      if (cards.some((element) => element.hasTrunfo)) {
        this.setState({
          hasTrunfo: false,
        });
      }
    });
  }

  validation() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      minValue,
      maxValue,
    } = this.state;

    const maxValueAttr = 210;
    const sumCard = +cardAttr1 + +cardAttr2 + +cardAttr3;

    this.setState({
      isSaveButtonDisabled: !cardName.length
          || !cardDescription.length
          || !cardImage.length
          || cardAttr1 < minValue
          || cardAttr1 > maxValue
          || cardAttr2 < minValue
          || cardAttr2 > maxValue
          || cardAttr3 < minValue
          || cardAttr3 > maxValue
          || sumCard > maxValueAttr,
    });
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
      <>
        <section className="createCard">
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
          </div>
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
        </section>

        <section className="containerCards">
          {
            cards.map((e, index) => (
              <ListCards
                key={ index }
                cardId={ index }
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
        </section>
      </>
    );
  }
}

export default App;
