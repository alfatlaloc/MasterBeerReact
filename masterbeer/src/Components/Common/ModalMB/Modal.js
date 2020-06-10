import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide ,form, textH,Obj}) => isShowing ? ReactDOM.createPortal(
    <div className="row modal-overlay justify-content-center" tabIndex={-1}>
      <div className="modalContent justify-content-center">
        <h2 className="subPageTitleH">{textH}</h2>
        <button type="button"
        data-dismiss="modal"
        aria-label="Close"
        onClick={hide}
        className="modalClose"
        >
        Cancelar
        </button>
        {React.createElement(form,{Obj,hide})}

      </div>
    </div>
  , document.body
) : null;

export default Modal;