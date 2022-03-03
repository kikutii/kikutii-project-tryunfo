import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends React.Component {
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
      onInputChange,
      isSaveButtonDisabled,
      onSaveButtonClick,
      // hasTrunfo,
    } = this.props;
    return (
      <form>
        <Input
          value={ cardName }
          desc="Nome"
          name="cardName"
          event={ onInputChange }
          type="text"
          dataId="name-input"
        />
        <Input
          value={ cardDescription }
          desc="Descrição"
          name="cardDescription"
          event={ onInputChange }
          type="textarea"
          dataId="description-input"
        />
        <Input
          value={ cardAttr1 }
          desc="Atributo 1"
          name="cardAttr1"
          event={ onInputChange }
          type="number"
          dataId="attr1-input"
        />
        <Input
          value={ cardAttr2 }
          desc="Atributo 2"
          name="cardAttr2"
          event={ onInputChange }
          type="number"
          dataId="attr2-input"
        />
        <Input
          value={ cardAttr3 }
          desc="Atributo 3"
          name="cardAttr3"
          event={ onInputChange }
          type="number"
          dataId="attr3-input"
        />
        <Input
          value={ cardImage }
          desc="URL da imagem"
          name="cardImage"
          event={ onInputChange }
          type="text"
          dataId="image-input"
        />
        <div>
          <label htmlFor="cardRare">
            Raridade
            <select
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
              data-testid="rare-input"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="cardTrunfo">
            Trunfo
            <input
              name="cardTrunfo"
              id="cardTrunfo"
              onChange={ onInputChange }
              data-testid="trunfo-input"
              type="checkbox"
              checked={ cardTrunfo }
            />
          </label>
        </div>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
};

export default Form;
