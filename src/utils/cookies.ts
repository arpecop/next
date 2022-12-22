export function setCookie(name: string, value: string | number) {
	const existingCookie = getCookie(name);
	if (existingCookie) {
		console.log(
			`Cookie "${name}" already exists with value: ${existingCookie}`
		);
	} else {
		const expirationDate = new Date();
		expirationDate.setDate(expirationDate.getDate() + 30);
		document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}`;
	}
}

export function updateCookie(name: string, value: string | number) {
	const expirationDate = new Date();
	expirationDate.setDate(expirationDate.getDate() + 30);
	document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}`;
}

export function getCookie(name: string) {
	const cookieValue = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
	return cookieValue ? cookieValue[2] : null;
}
