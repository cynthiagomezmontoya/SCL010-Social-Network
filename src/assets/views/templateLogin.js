import {
	authCuentaGoogle,
	authEmailPass,
	authSignOut
} from "../js/authentication.js";

export const templateLogin = () => {
	authSignOut();
	const containerLogin = document.createElement("div");
	containerLogin.className = "containerLogin";
	const contentLogin = `

		<section class="login">
			<p>Por Favor Conéctate:</p>
			<table>Correo Electrónico</table>
			<input type="email" name="" id="emailSesion">
			<table>Contraseña</table>
			<input type="password" name="" id="passwordSesion">
			

		  <button class="button2" id="btnInicioEmail">Iniciar Sesión</button>

			<br> <br>

			<button class="button2" id="authGoogle">Iniciar con Google</button>

			
		</section>



	`;
	containerLogin.innerHTML = contentLogin;

	const buttonEmailLogin = containerLogin.querySelector("#btnInicioEmail");
	buttonEmailLogin.addEventListener("click", () => {
		const emailSesion = document.getElementById("emailSesion").value;
		const passwordSesion = document.getElementById("passwordSesion").value;
		authEmailPass(emailSesion, passwordSesion);
	});

	const buttonGoogleLogin = containerLogin.querySelector("#authGoogle");
	buttonGoogleLogin.addEventListener("click", () => {
		authCuentaGoogle();
	});


	return containerLogin;
}

export const signOut = () => {
	authSignOut();
}