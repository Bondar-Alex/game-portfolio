// /public/common/header.js
function setElementTextFromCookie(cookieName) {
  const element = document.getElementById(cookieName);
  if (!element) return;

  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith(cookieName + '='))
    ?.split('=')[1];

  element.textContent = cookieValue ?? '';
}

setElementTextFromCookie("playerName");
setElementTextFromCookie("score");

 
 
 
 