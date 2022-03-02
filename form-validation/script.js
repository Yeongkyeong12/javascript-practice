const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (name.value == "" || name.value == null) {
    messages.push("이름을 입력하세요");
  }

  if (password.value.length < 6) {
    messages.push("비밀번호는 6자 이상이어야 합니다.");
  }

  if (password.value.length >= 20) {
    messages.push("비밀번호는 20자 미만이어야 합니다.");
  }

  if (password.value === "password") {
    messages.push("비밀번호는 password일 수 없습니다.");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(",");
  }
});
