import React from 'react';
import PropTypes from 'prop-types';

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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick
    } = this.props;

    return (
      <form>
        <label htmlFor="card-name">
          Nome
          <input
            type="text"
            id="card-name"
            name="cardName"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="card-description">
          Descrição
          <textarea
            type="text"
            id="card-description"
            name="cardDescription"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="card-attr1">
          Attr01
          <input
            type="number"
            id="card-attr1"
            name="cardAttr1"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="card-attr2">
          Attr02
          <input
            type="number"
            id="card-attr2"
            name="cardAttr2"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="card-attr3">
          Attr03
          <input
            type="number"
            id="card-attr3"
            name="cardAttr3"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="card-image">
          Imagem
          <input
            type="text"
            id="card-image"
            name="cardImage"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="card-rare">
          Raridade
          <select
            id="card-rare"
            name="cardRare"
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="card-trunfo">
          <input
            type="checkbox"
            id="card-trunfo"
            name="cardTrunfo"
            data-testid="trunfo-input"
          />
          Super Trybe Trunfo
        </label>
        <button data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
