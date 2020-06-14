import React,{useState,useEffect} from 'react';
import BebidasA from './BebidasA';
import TipoVaso from './TipoVaso';
import Porcentajes from './Porcentajes';
import Ingrediente from './Ingredientes';
import ExtrasA from './Extras';
import FormBP from './FormBP';
import Ticket from './Ticket';
import {useSelector} from 'react-redux';
/*
    1 - Tipo Vaso
    2 - Bebidas - Cerveza / Botella
    3 - Ingredientes
    4 - Extras

*/ 

function CreadorM(){
    const Session = useSelector(state => state.Session);
    const [Step,setStep] = useState(1);
    const [tipo,setTipo] =useState('');

    const [Recipiente,setRecipiente] = useState({});
    const [BotellaA,setBotellaA] = useState([]);
    const [volA,setVolA] = useState(0);

    const [Descripcion,setDescripcion] = useState("");
    const [DescripcionIn,setDescripcionIn] = useState("");
    const [IngredienteArray,setIngredienteArray] = useState([]);
    const [Extras,setExtras] = useState([]);
    const [Nombre,setNombre] = useState("");
    const [Precio,setPrecio] = useState(0);
    const [Cantidad,setCantidad] = useState(1);

    useEffect(()=>{},[]);

    function calcularPrecio(){
        
        let aux = BotellaA.reduce((acc, currProduct) => {
            const { Precio, Contenido_N } = currProduct;
            const totalPrice = Math.round(((Precio / Contenido_N.Cantidad) + 0.01) * volA);
            return acc + totalPrice;
          },0);
        aux+= IngredienteArray.reduce((acc, currProduct) => {
            const { Precio } = currProduct;
            const totalPrice = Math.round(Precio * (Recipiente.milis - volA/BotellaA.length));
            return acc + totalPrice;
          },0);
        aux+=  Extras.reduce((acc, currProduct) => {
            const { Precio } = currProduct;
            const totalPrice = Precio;
            return acc + totalPrice;
          },0);
        setPrecio(aux);
    }

    function final(){
        let FinalB = {};
        FinalB.Tipo="BebidaP"; //TIpo de trago

        FinalB.Recipiente = {};
        FinalB.Recipiente.Tipo = Recipiente.Tipo;
        FinalB.Recipiente.Volumen = Recipiente.Volumen;

        FinalB.VolA=volA; //QUe tanto alcohol contiene

        FinalB.BotellaA = BotellaA;                   //Cosas que lleva
        FinalB.IngredienteArray = IngredienteArray;
        FinalB.Extras= Extras;

        FinalB.Descripcion = Descripcion; // Como quiere las botellas
        FinalB.DescripcionIn = DescripcionIn; // Como quiere los Ingredientes
        
        FinalB.Precio = Precio;
        FinalB.Cantidad = Cantidad;
        FinalB.By = Session.Alias;
        FinalB.Nombre = Nombre;
        return FinalB;
    }

    function previuosStep(){
        setStep(Step-1);
    };

    function nextStep(){
        setStep(Step + 1);
    };

    function DoubleStepBK(){
        setStep(Step - 2 );
    };
    function doubleStep(){
        setStep(Step + 2);
    }

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
                doubleStep={doubleStep}
            />
        );
        if(Step === 4)
        return(
            <Ingrediente
                ingredienteArray={IngredienteArray}
                setIngredienteArray={setIngredienteArray}
                volumenRestante={Recipiente.milis - volA}
                pStep={previuosStep}
                nextStep={nextStep}
                DescripcionIn={DescripcionIn}
                setDescripcionIn={setDescripcionIn}
            />
        );
        if(Step === 5)
        return(
            <ExtrasA
                Extras={Extras}
                setExtras={setExtras}
                BK2={Recipiente.milis-volA}
                prevStep={previuosStep}
                nextStep={nextStep}
                DoubleStepBK={DoubleStepBK}
            />
        );
        if(Step === 6){
        return(
            <FormBP 
                Nombre={Nombre}
                setNombre={setNombre}
                Cantidad={Cantidad}
                setCantidad={setCantidad}
                Precio={Precio}
                calcularPrecio={calcularPrecio}
                prevStep={previuosStep}
                nextStep={nextStep}
            />
        );
        }
        if(Step === 7)
            return(
                <Ticket 
                    Bebida={final()}
                />
            );

    }

    return(
    <div className="Creador">
           <h2 className="creadorTitle breakFB">Creador</h2> 

           <h5 className="breakFB">Step {Step}</h5>
           <br></br>
           <br></br>
           {showStep()}
        </div>
    );
};

export default CreadorM;