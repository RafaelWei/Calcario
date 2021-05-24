function searchWork() {
	const params = {
		title: document.getElementById("title").value,
		authors: document.getElementById("author").value,
		advisors: document.getElementById("supervisor").value,
		institution: document.getElementById("inst").value,
		type: document.getElementById("type").value,
		date_of_publication: document.getElementById("date").value,
		field: document.getElementById("area").value,
		keywords: document.getElementById("keywords").value
	};

	let url = new URL("/search", window.location.href);
	Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
	window.location = url;

	return true;
}
