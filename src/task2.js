const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const saveBtn = document.getElementById("saveBtn");

saveBtn.onclick = function () {
  localStorage.setItem("username", usernameInput.value);
  localStorage.setItem("password", passwordInput.value);
  alert("дані збережено!");
};

usernameInput.value = localStorage.getItem("username");
passwordInput.value = localStorage.getItem("password");
