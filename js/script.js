var check = function () {
  if (document.getElementById("password").value !== "") {
    if (
      document.getElementById("password").value ==
      document.getElementById("confirm-password").value
    ) {
      document.getElementById("password").style.border = "1.5px solid green";
      document.getElementById("not-valid").style.visibility = "hidden";

      document.getElementById("confirm-password").style.border =
        "1.5px solid green";
    } else {
      document.getElementById("password").style.border = "1.5px solid red";
      document.getElementById("not-valid").style.visibility = "visible";
      document.getElementById("confirm-password").style.border =
        "1.5px solid red";
    }
  }
};
