import React,{useState,useEffect} from 'react';
import BebidasA from './BebidasA';
import TipoVaso from './TipoVaso';
import Porcentajes from './Porcentajes';

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
            />
        );
    }




    return(
    <div className="Creador">

           <h2 className="subPageTitleH">Creador</h2> 
           <br></br>
           <h4>Step {Step} of 4</h4>
           <p> Paso actual {Step} </p>
           <br></br>
           {showStep()}
        </div>
    );
};

export default CreadorM;