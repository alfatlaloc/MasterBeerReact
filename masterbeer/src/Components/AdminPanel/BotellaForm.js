import React from "react";
import PropTypes from "prop-types";
import TextInput from "../Common/Forms/TextInput";
//import SelectInput from "../Common/Forms/SelectInput";

const BotellaForm = ({
  Botella,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form>
      <h2>{Botella.Nombre ? "Edit" : "Add"} Botella</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="Nombre"
        label="Nombre"
        value={Botella.Nombre}
        onChange={onChange}
        error={errors.Nombre}
      />

    <TextInput
        name="Marca"
        label="Marca"
        value={Botella.Marca}
        onChange={onChange}
        error={errors.Marca}
      />

      <TextInput
        name="Precio"
        label="Precio"
        value={Botella.Precio}
        onChange={onChange}
        error={errors.Precio}
      />

        <TextInput
        name="Stock"
        label="Stock"
        value={Botella.Stock}
        onChange={onChange}
        error={errors.Stock}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

BotellaForm.propTypes = {
  Botella: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default BotellaForm;