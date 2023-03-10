function verify() {
  const encoded_2nd_part = "LzJiTTl4";
  const checkpass = document.getElementById("pass").value;

  if (btoa(checkpass) == encoded_2nd_part) {
    window.location.href = "congrats.html";
  } else {
    alert("Wrong Password!");
  }
}
