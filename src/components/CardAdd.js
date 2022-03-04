import React from 'react';
import PropType from 'prop-types';
import '../style/CardAdd.css';

class CardAdd extends React.Component {
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
    } = this.props;

    return (
      <div className="card">
        <h3 className="cardTitle" data-testid="name-card">{cardName}</h3>
        <img className="cardImage" data-testid="image-card" src={ cardImage } alt={ cardName } />
        <span data-testid="description-card">{cardDescription}</span>
        <span data-testid="attr1-card">Atributo1: {cardAttr1}</span>
        <span data-testid="attr2-card">Atributo2: {cardAttr2}</span>
        <span data-testid="attr3-card">Atributo3: {cardAttr3}</span>
        <span className="cardRare" data-testid="rare-card">{cardRare}</span>
        {cardTrunfo ? <span data-testid="trunfo-card">Super Trunfo</span> : ''}
      </div>
    );
  }
}

CardAdd.propTypes = {
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