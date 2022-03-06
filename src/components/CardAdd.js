import React from 'react';
import PropType from 'prop-types';
import '../style/CardAdd.css';

class CardAdd extends React.Component {
  render() {
    const {
      cardNumber,
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
      <div className="cardContainer" id={ `${cardNumber}` }>
        <div className="card">
          <h3 className="cardTitle" data-testid="name-card">{cardName}</h3>
          <div className="cardImageDescription">
            <img
              className="cardImage"
              data-testid="image-card"
              src={ cardImage }
              alt={ cardName }
            />
            <div className="cardDescription" data-testid="description-card">
              <p>{cardDescription}</p>
            </div>
          </div>
          <div className="cardContainerAttrs">
            <div className="cardAttr">
              <p className="cardAttrText" data-testid="attr1-card">Atributo1: </p>
              <p className="cardPoints">{cardAttr1}</p>
            </div>
            <div className="cardAttr">
              <p className="cardAttrText" data-testid="attr1-card">Atributo2: </p>
              <p className="cardPoints">{cardAttr2}</p>
            </div>
            <div className="cardAttr">
              <p className="cardAttrText" data-testid="attr1-card">Atributo3: </p>
              <p className="cardPoints">{cardAttr3}</p>
            </div>
          </div>
          <div className="cardRarity">
            <p data-testid="rare-card">{cardRare}</p>
          </div>
          {cardTrunfo
            ? <span className="trunfo" data-testid="trunfo-card">Super Trunfo</span>
            : ''}
        </div>
        <button
          className="cardDelete"
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
  cardNumber: PropType.number.isRequired,
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
