//Función para validar formulario. Agrega msj de errores al objeto errors
export default function validateForm(dataForm) {
  let errors = {};
  if (!dataForm.name || dataForm.name.length > 10)
    errors.name = "Name is required with no more than 10 characters";
  if (dataForm.hp < 0 || dataForm.hp > 200)
    errors.hp = "Invalid! Range between 0 - 200";
  if (dataForm.attack < 0 || dataForm.attack > 200)
    errors.attack = "Invalid! Range between 0 - 200";
  if (dataForm.defense < 0 || dataForm.defense > 200)
    errors.defense = "Invalid! Range between 0 - 200";
  if (dataForm.speed < 0 || dataForm.speed > 200)
    errors.speed = "Invalid! Range between 0 - 200";
  if (dataForm.height < 0 || dataForm.height > 200)
    errors.height = "Invalid! Range between 0 - 200";
  if (dataForm.weight < 0 || dataForm.weight > 200)
    errors.weight = "Invalid! Range between 0 - 200";
  if (!urlValidation(dataForm.urlImg) && dataForm.urlImg !== "") {
    errors.urlImg = "Format not supported";
  }
  return errors;
}

const urlValidation = (URL) => {
  const regex = new RegExp(/(https?:\/\/.*\.(?:png|jpg|gif))/);
  return regex.test(URL);
};
