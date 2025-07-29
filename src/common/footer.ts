// /src/common/footer.ts
const exitGame = document.querySelector<HTMLButtonElement>("#exitGame");

if (exitGame) {
  exitGame.addEventListener("click", () => {
    // Очистка всех cookies
    document.cookie.split(";").forEach((c) => {
      const eqPos = c.indexOf("=");
      if (eqPos === -1) return;

      const name = c.substring(0, eqPos).trim();
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
    });

    // Переход на корень сайта
    window.location.href = "/";
  });
}
