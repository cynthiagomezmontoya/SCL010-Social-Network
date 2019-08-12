import { crearCuentaEmailPass } from "../js/authentication.js";

export const templateRegister = () => {
	const containerRegister = document.createElement("div");
	containerRegister.className = "containerRegister";
	const contentRegister = `


			<table>Nombres</table>
			<input type="text" name="nombreContactoReg" id="nombreContactoReg">
			<table>Correo Electrónico</table>
			<input type="text" name="emailContactoReg" id="emailContactoReg">
			<table>Contraseña</table>
			<input type="password" name="passwordReg" id="passwordReg">

			<button class="button5" id="btnRegistroEmail">Registrarse</button>


	`;
	containerRegister.innerHTML = contentRegister;

	const btnRegistroEmail = containerRegister.querySelector("#btnRegistroEmail");

	btnRegistroEmail.addEventListener("click", () => {
		const nombreReg = document.getElementById("nombreContactoReg").value;
		const emailReg = document.getElementById("emailContactoReg").value;
		const passwordReg = document.getElementById("passwordReg").value;
		crearCuentaEmailPass(emailReg, passwordReg, nombreReg);
	});

	return containerRegister;	
}

