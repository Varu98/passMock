// Create a password checker web app. If password is lesser than 10 characters then show an error to user otherwise show success. Someone can ask to make the submit button disabled. Some can ask to make the input field green or red depending on input.

const input = document.querySelector(".input");

input.addEventListener("keyup", checkPassword);

function checkPassword() {
  const inputValue = input.value;
  console.log(inputValue);

  if (inputValue.length < 10) {
    input.style.borderColor = "red";
  } else if (inputValue.length > 10) {
    input.style.borderColor = "green";
  }
}
