const input = document.querySelector(".input_field");
const inputIcon = document.querySelector(".input_icon");

inputIcon.addEventListener("click", (e) => {
  e.preventDefault();
  inputIcon.setAttribute(
    "src",
    input.getAttribute("type") === "password"
      ? "./img/eye_locked.png"
      : "./img/eye.png"
  );
  input.setAttribute(
    "type",
    input.getAttribute("type") === "password" ? "text" : "password"
  );
});
