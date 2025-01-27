import {
	authCuentaGoogle,
	authEmailPass,
	authSignOut
} from "../js/authentication.js";
export const templateLogin = () => {
	//authSignOut();
	const containerLogin = document.createElement("div");
	containerLogin.className = "containerLogin";
	const contentLogin = `

<div class="formulario">
		<div class="contenedor-form">
			<h2>Se parte de este Gran Equipo.</h2>
			
			<a href="index.html"><img src="assets/img/Captura4.JPG" class="logoReg2" alt="logoComunidad laboratoria"></a>
			
			<br> 
			<form action="#">
				<input type="email" id="emailSesion" placeholder="Correo electronico" required>
				<input type="password"  id="passwordSesion" placeholder="Contraseña" required>
				<div class="btn-submit">
					<button class="button2" id="btnInicioEmail">Iniciar Sesión</button>
					<br> <br>
				</div>
				<div class="google-btn">
					<button class="button2" id="authGoogle">Iniciar con Google</button>
				</div>
				<div class="reset-password">
					<a href="#">¿Olvide mi Contraseña?</a>
				</div>
			</form>
		</div>
</div>

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