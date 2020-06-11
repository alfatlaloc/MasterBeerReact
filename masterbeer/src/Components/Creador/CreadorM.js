import React,{useState,useEffect} from 'react';


/*
    1 - Tipo Vaso
    2 - Bebidas - Cerveza / Botella
    3 - Ingredientes
    4 - Extras

*/ 

function CreadorM(){

    
    const [Step,setStep] = useState(1);

    let a = 1;


    function hadleChange(evt) {
        evt.preventDefault();
        setStep(Step + 1);
    }

    return(
    <div className="Creador">
           <h2 className="subPageTitleH">Creador</h2> 
           <br></br>
           <p> Paso actual {Step} </p>
           <br></br>
           <button onClick={ evt => {hadleChange(evt)}}> add 1</button>
        </div>
    );
};

export default CreadorM;