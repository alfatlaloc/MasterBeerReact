import React, { useEffect, useState } from "react";
import {newRecipiente} from '../../API/DefaultObjects/DefObjects';
import TipoVaso from './TipoVaso';
import BebidasA from './BebidasA';
import Porcentajes from './Porcentajes';
import ProgressBar from './ProgressBar';
import FormBP from './FormBP';

function Creador() {
  const [botellaArray, setBotellaArray] = useState([]);
  const [Recipiente,setRecipiente] = useState(newRecipiente);
  const [Progress,setProgress] = useState(0);
  
  useEffect(() => {});
  return (
    <div className="Creador">
      <TipoVaso 
        Recipiente={Recipiente}
        setRecipiente={setRecipiente}
      />
      <BebidasA botellaArray={botellaArray}
      setBotellaArray={setBotellaArray}/>
      <Porcentajes 
      botellaArray={botellaArray}
      setBotellaArray={setBotellaArray}
      Recipiente={Recipiente}
      Progress={Progress}
      setProgress={setProgress}
      />
      <div className="area">
        <h2>Bebidas S/A area</h2>
      </div>
      <div className="area">
        <h2>Ingredientes area2</h2>
      </div>
      <div className="area">
        <h2>Extras area</h2>
      </div>
      <ProgressBar 
        Progress={Progress}
      />
      <FormBP />
    </div>
  );
}

export default Creador;