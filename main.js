const userInfo = document.getElementById("userInfo");
const userData = document.getElementById("userData");
const birthday = document.getElementById("birthday");
const email = document.getElementById("email");
const number = document.getElementById("number");
const address = document.getElementById("address");

const perfil = document.getElementById("perfil");
function changeText(info, data) {
  userInfo.innerHTML = info;
  userData.innerHTML = data;
}
perfil.addEventListener("mouseover", function () {
  changeText("Hello, I'm", "Adrian Koenig");
});
birthday.addEventListener("mouseover", function () {
  changeText("My birthday is:", "03/26/1995");
});
email.addEventListener("mouseover", function () {
  changeText("My email is:", "adrian.95.koenig@gmail.com");
});
number.addEventListener("mouseover", function () {
  changeText("My number is:", "+54 291 4791039");
});
address.addEventListener("mouseover", function () {
  changeText("I live in:", "Buenos Aires. Bahía Blanca.");
});

