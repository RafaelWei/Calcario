function login() {
	const email = document.getElementById("emailInputField").value;

	const password = document.getElementById("passwordInputField").value;
	const passwordHash = md5(password);

	const formData = new FormData();

	formData.append("email", email);
	formData.append("passwordHash", passwordHash);

	fetch("/login", {
		method: "POST",
		credentials: "same-origin",
		redirect: "follow",
		body: formData
	}).then(response => {
		if (response.ok) {
			alert("Login efetuado com sucesso.");

			window.location = response.url;
		} else {
			alert("Usuário ou senha inválidos.");
		}
	});

	return true;
}
