// /src/common/collector.ts
function collector(part: "header" | "footer"): void {
  fetch(`../common/${part}.html`)
    .then((response) => response.text())
    .then((data) => {
      const wrapper = document.querySelector<HTMLElement>(".wrapper");
      if (!wrapper) return;

      const section = document.createElement("section");
      section.id = part;
      section.innerHTML = data;

      if (part === "header") {
        wrapper.prepend(section);
      } else if (part === "footer") {
        wrapper.append(section);
      }

      // Подключаем скрипт после вставки HTML
      const script = document.createElement("script");
      script.src = `../common/${part}.js`;
      script.defer = true;
      document.body.appendChild(script);
    })
    .catch((error) => {
      console.error(`Ошибка загрузки части ${part}:`, error);
    });
}

// Вызываем оба
collector("header");
collector("footer");
