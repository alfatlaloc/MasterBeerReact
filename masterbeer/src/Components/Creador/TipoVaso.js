import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RecipienteIMG from "../../img/Creador/Recipiente.png";
import { loadRecipientes } from "../../Redux/Actions/RecipienteActions";
import { FormGroup, Label, Input } from "reactstrap";

function TipoVaso({ Recipiente, setRecipiente, nextStep}) {
  const RecipientesArray = useSelector((state) => state.Recipientes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (RecipientesArray.length === 0) dispatch(loadRecipientes());
  });

  function recip(e) {
    if(e.target.value==='sel') return;
    var a = Object.assign(
      {},
      RecipientesArray.find((aux) => {
        return aux._id === e.target.value.toString();
      })
    );
    if(a.Volumen.Unidad === "lt")
      a.milis=a.Volumen.Cantidad*1000;
    else if(a.Volumen.Unidad === "gl")
        a.milis=a.Volumen.Cantidad*4546;
    else
      a.milis=a.Volumen.Cantidad;
    console.log("Object");
    console.log(a);
    setRecipiente(a);
  }

  function handleNs(){
    if(Recipiente.Tipo && document.getElementById("tipoVasoSelect").value !== 'sel')
      nextStep();
    else
      alert("No ah seleccionado Recipiente");
  }
  return (
    <div className="area TipoVaso">
      <h2>Tipo de vaso</h2>
      <img src={RecipienteIMG} alt="" />
      <p>
        Selecciona un tipo de vaso, recuerda que las medidas de alcohol que
        puedes colocar en cada uno varia.
      </p>
      <FormGroup className="area">
        <Label for="exampleSelectMulti">Recipientes Disponibles</Label>
        <Input
          id="tipoVasoSelect"
          type="select"
          value={Recipiente.Nombre}
          onChange={(e) => {
            recip(e);
          }}
        >
        <option key="sel" value="sel"> Seleccione un Recipiente</option>
          {RecipientesArray.map((elements) => {
            return (
              <option key={elements._id} value={elements._id}>
                {`${elements.Tipo} de ${elements.Volumen.Cantidad} ${elements.Volumen.Unidad}`}
              </option>
            );
          })}
        </Input>
      </FormGroup>

      <button className="nextStep" onClick={handleNs}>Next Step</button>
    </div>
  );
}

export default TipoVaso;
