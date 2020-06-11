import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide ,textH, Cantidad}) => isShowing ? ReactDOM.createPortal(
    <div className="row modal-overlay justify-content-center" tabIndex={-1}>
      <div className="modalContent justify-content-center">
        <h2 className="subPageTitleH"> AGregaste tantos p{textH}</h2>

        <p>{Cantidad}</p>
        <button type="button"
        data-dismiss="modal"
        aria-label="Close"
        onClick={hide}
        className="modalClose"
        >
        Aceptar
        </button>
      </div>
    </div>
  , document.body
) : null;

export default Modal;