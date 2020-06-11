import React, {useState} from "react";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";

function FormBP() {
    const [Nombre, setNombre] = useState("");
    const [Desc, setDesc] = useState("");
  
    return (
      <div className="area2 AcceptCreador">
        <Form>
          <FormGroup row>
            <Label for="exampleEmail">Ponle nombre a tu trago</Label>
            <br></br>
            <Input
              type="text"
              name="NombreBP"
              placeholder="MasterBeerBP"
              required
              value={Nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail">Agrega una descripción</Label>
            <br></br>
            <Input
              type="text"
              value={Desc}
              onChange={(e) => setDesc(e.target.Name)}
              name="DescBP"
              placeholder="Trago personalizado"
              required
            />
          </FormGroup>
          <FormGroup check row>
            <Button>Pedir Bebida</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }

  export default FormBP;