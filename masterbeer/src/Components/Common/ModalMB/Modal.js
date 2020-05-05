import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide ,form, textH}) => isShowing ? ReactDOM.createPortal(
    <div className="row modal-overlay justify-content-center" tabIndex={-1}>
      <div className="modalContent justify-content-center">
        <h2>{textH}</h2>
        <button type="button"
        data-dismiss="modal"
        aria-label="Close"
        onClick={hide}
        className="modalClose"
        >
        Cancelar
        </button>
        {React.createElement(form)}

      </div>
    </div>
  , document.body
) : null;

export default Modal;