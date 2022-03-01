import React from 'react';

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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <div>
          <label htmlFor="cName">
            Nome
            <input
              name="cName"
              value={ cardName }
              onChange={ onInputChange }
              type="text"
              data-testid="name-input"
              placeholder="Placeholder"
            />
          </label>
        </div>
        <div>
          <label htmlFor="cDescription">
            Descrição
            <input
              name="cDescription"
              value={ cardDescription }
              onChange={ onInputChange }
              type="textarea"
              data-testid="description-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="cAtt1">
            Atributo1
            <input
              name="cAtt1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              type="number"
              data-testid="attr1-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="cAtt2">
            Atributo2
            <input
              name="cAtt2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              type="number"
              data-testid="attr2-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="cAtt3">
            Atributo3
            <input
              name="cAtt3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              type="number"
              data-testid="attr3-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="cImage">
            Imagem
            <input
              name="cImage"
              value={ cardImage }
              onChange={ onInputChange }
              type="text"
              data-testid="image-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="cRarity">
            Raridade
            <select
              name="cRarity"
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
          <label htmlFor="cCheckbox">
            <input
              name="cCheckbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              type="checkbox"
              data-testid="trunfo-input"
              value="teste"
            />
            Super Trybe Trunfo
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
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.text.isRequired,

  cardRare: PropTypes.text.isRequired,
  cardTrunfo: PropTypes.text.isRequired,
  isSaveButtonDisabled: PropTypes.text.isRequired,
  onInputChange: PropTypes.text.isRequired,
  onSaveButtonClick: PropTypes.text.isRequired,
};

export default Form;
