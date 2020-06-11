export function validarLitros(C) {
  if (C.Unidad === "ml") {
    if (C.Cantidad <= 5000) return true;
    return false;
  } else if (C.Unidad === "lt") {
    if (C.Cantidad <= 5) return true;
    return false;
  }
}

export function inputKeyPressed(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
       return false;

    return true;
}