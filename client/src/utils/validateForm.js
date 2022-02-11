//Función para validar formulario. Agrega msj de errores al objeto errors
export default function validateForm(dataForm) {
  let errors = {};
  if (!dataForm.name) errors.name = "Name is required";
  if (dataForm.hp < 0) errors.hp = "Invalid";
  if (dataForm.attack < 0) errors.attack = "Invalid";
  if (dataForm.defense < 0) errors.defense = "Invalid";
  if (dataForm.speed < 0) errors.speed = "Invalid";
  if (dataForm.height < 0) errors.height = "Invalid";
  if (dataForm.weight < 0) errors.weight = "Invalid";
  if (!urlValidation(dataForm.urlImg) && dataForm.urlImg !== "")
      errors.urlImg = "Format not supported";
  return errors;
}

const urlValidation = (URL) => {
  const regex = new RegExp(/(https?:\/\/.*\.(?:png|jpg|gif))/);
  return regex.test(URL);
};
