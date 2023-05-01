const fetchButton = document.querySelector("#fetch-button");
const dataContainer = document.querySelector("#data-container");
const adviceNumber = document.querySelector("#advice-number");

window.addEventListener("load", () => {
  fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
      // Manipulate the data and display it in the container
      let advice = data["slip"]["advice"];
      let adviceId = data["slip"]["id"];
      adviceNumber.innerHTML = `<p>${adviceId}</p>`
      dataContainer.innerHTML = `<span>"${advice}"</span>`;
    })
    .catch(error => console.error(error));
});

fetchButton.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
      // Manipulate the data and display it in the container
      let advice = data["slip"]["advice"];
      let adviceId = data["slip"]["id"];
      adviceNumber.innerHTML = `<p>${adviceId}</p>`
      dataContainer.innerHTML = `<p>"${advice}"</p>`;
    })
    .catch(error => console.error(error));
})
