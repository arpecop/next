export function setCookie(name: string, value: string) {
  const existingCookie = getCookie(name);
  if (!existingCookie) {
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

export function deleteCookie(name: string, value: string | number) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() - 30);
  document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}`;
}

export function getCookie(name: string) {
  const cookieValue = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
  return cookieValue ? cookieValue[2] : null;
}
