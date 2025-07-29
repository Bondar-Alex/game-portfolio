const a1 = {
  page: 1,
  limit: 20,
};

console.log(document.cookie);

const page = "../../API/rating.php";
// С await (внутри async-функции)

async function rating() {
  const result = await goToAPI(page, a1);
  if (result.success) {
    const tbody = document.querySelector("#table-body");
    tbody.innerHTML += result.arr
    .map(
      (value, index) =>
        `<tr ${value.active?"class='active'":""}>
          <td>${index + 1}</td>
          <td>${value.playerName}</td>
          <td>${value.score}</td>
        </tr>`
    )
    .join("");
  } else {
    //table.innerText = "Нет данных для отображения рейтинга.";
    c(result);
    window.location.href = '/';
  }
}

rating();
