import React,{useState,useEffect} from 'react';
import BebidasA from './BebidasA';
import TipoVaso from './TipoVaso';
import Porcentajes from './Porcentajes';
import Ingrediente from './Ingredientes';

/*
    1 - Tipo Vaso
    2 - Bebidas - Cerveza / Botella
    3 - Ingredientes
    4 - Extras

*/ 

function CreadorM(){

    const [Step,setStep] = useState(1);
    const [Recipiente,setRecipiente] = useState({});
    const [BotellaA,setBotellaA] = useState([]);
    const [volA,setVolA] = useState(0);
    const [tipo,setTipo] =useState('');
    const [Descripcion,setDescripcion] = useState("");
    const [IngredienteArray,setIngredienteArray] = useState([]);
    const [sB,setSB] = useState({});

    function previuosStep(){
        setStep(Step-1);
    };

    function nextStep(){
        setStep(Step + 1);
    };

    const showStep = () => {
        if(Step === 1)
            return (<TipoVaso 
                Recipiente={Recipiente}
                setRecipiente={setRecipiente}
                nextStep={nextStep}
            />);
        if(Step === 2)
        return (
            <BebidasA
                botellaArray={BotellaA}
                setBotellaArray={setBotellaA}
                pStep={previuosStep}
                nextStep={nextStep}
                Tipo={tipo}
                setTipo={setTipo}
            />
        );

        if(Step === 3)
        return (
            <Porcentajes
                Recipiente={Recipiente}
                Porcentaje={volA}
                setPorcentaje={setVolA}
                pStep={previuosStep}
                nextStep={nextStep}
                Tipo={tipo}
                Descripcion={Descripcion}
                setDescripcion={setDescripcion}
            />
        );
        if(Step === 4)
        return(
            <Ingrediente
                IngredienteArray={IngredienteArray}
                setIngredienteArray={setIngredienteArray}
                volumenRestante={Recipiente.Volumen.Cantidad - volA}
            />
        );
    }




    return(
    <div className="Creador">
           <h2 className="creadorTitle breakFB">Creador</h2> 

           <h5 className="breakFB">Step {Step} of 4</h5>
           <br></br>
           {showStep()}
        </div>
    );
};

export default CreadorM;