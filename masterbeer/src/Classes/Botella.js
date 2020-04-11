
class Botella{
    constructor(Nombre,Precio,Stock)
    {
        this.Nombre=Nombre;
        this.Precio=Precio;
        this.Stock=Stock;
    }

    info()
    {
     return "La botella es "+ this.Nombre;   
    }
}

export default Botella;