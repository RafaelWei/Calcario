function checkPasswordStrength() {
	const password = document.getElementById("passwordInputField").value;

	let passwordProgress = document.getElementById("passwordProgress");

	passwordProgress.value = 0;
	if (password.match(/[a-z]+/)) {
		passwordProgress.value += 20;
	}
	if (password.match(/[A-Z]+/)) {
		passwordProgress.value += 20;
	}
	if (password.match(/[0-9]+/)) {
		passwordProgress.value += 20;
	}
	if (password.match(/[!@#$%&*()<>?{}[\];:=+\-_]+/)) {
		passwordProgress.value += 20;
	}
	if (password.length >= 16) {
		passwordProgress.value += 20;
	}
}

function validateAndSubmit() {
	const email = document.getElementById("emailInputField").value;

	const password = document.getElementById("passwordInputField").value;
	const passwordConfirm = document.getElementById("passwordConfirmInputField").value;

	if (password != passwordConfirm) {
		alert("Senha e confirmação de senha diferem.");
		return false;
	}

	const passwordProgress = document.getElementById("passwordProgress");

	if (passwordProgress.value < 100) {
		alert("Senha não é forte suficiente.");
		return false;
	}

	const passwordHash = md5(password);

	const formData = new FormData();

	formData.append("email", email);
	formData.append("passwordHash", passwordHash);

	fetch("/register", {
		method: "POST",
		credentials: "same-origin",
		redirect: "follow",
		body: formData
	}).then(response => {
		if (response.ok) {
			alert("Usuário cadastrado com sucesso.");

			window.location = response.url;
		} else {
			alert("Erro interno. Por favor, tente novamente mais tarde.");
		}
	});

	return true;
}
