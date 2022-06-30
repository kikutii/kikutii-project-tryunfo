import React from 'react';
import PropTypes from 'prop-types';
import StarSvg from './StarSvg';

class Card extends React.Component {
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
        <h3
          className="cardTitle"
          data-testid="name-card"
        >
          { cardName }
        </h3>
        <div className="cardImageDescription">
          <img
            className="cardImage"
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
          <div className="cardDescription" data-testid="description-card">
            <span>{ cardDescription }</span>
          </div>

          { cardTrunfo && <StarSvg /> }

        </div>
        <section className="cardContainerAttrs">
          <div className="cardAttr">
            <p className="cardAttrText">Força: </p>
            <p className="cardPoints" data-testid="attr1-card">{ cardAttr1 }</p>
          </div>
          <div className="cardAttr">
            <p className="cardAttrText">Defesa: </p>
            <p className="cardPoints" data-testid="attr2-card">{ cardAttr2 }</p>
          </div>
          <div className="cardAttr">
            <p className="cardAttrText">Sorte: </p>
            <p className="cardPoints" data-testid="attr3-card">{ cardAttr3 }</p>
          </div>
        </section>
        <div className="cardRarity">
          <p data-testid="rare-card">{ cardRare }</p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
