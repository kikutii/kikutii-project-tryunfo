import React from 'react';
import PropType from 'prop-types';
import Card from './Card';
import '../style/ListCards.css';

class CardAdd extends React.Component {
  render() {
    const {
      cardId,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      removeCard,
    } = this.props;

    return (
      <div className="cardContainer" id={ cardId }>
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
        <button
          className="cardRemove"
          type="button"
          onClick={ removeCard }
          data-testid="delete-button"
        >
          Excluir
        </button>
      </div>
    );
  }
}

CardAdd.propTypes = {
  cardId: PropType.number.isRequired,
  removeCard: PropType.func.isRequired,
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
};

export default CardAdd;
