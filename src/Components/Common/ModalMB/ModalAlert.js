import React from "react";
import ReactDOM from "react-dom";

function ModalAlert({isShowing,hide,textHeader,alertText}) {
  return isShowing
    ? ReactDOM.createPortal(
        <div className="row modal-overlay modalAlert justify-content-center" tabIndex={-1}>
          <div className="modalContent justify-content-center">
            <h2 className="subPageTitleH">{textHeader}</h2>
            <p>{alertText}</p>
            <button
              type="button"
              data-dismiss="modal"
              aria-label="Close"
              onClick={hide}
              className="modalClose"
            >
              Aceptar
            </button>
          </div>
        </div>,
        document.body
      )
    : null;
}

export default ModalAlert;
