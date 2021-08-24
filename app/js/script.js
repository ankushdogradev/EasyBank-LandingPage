const btnHamburger = document.querySelector("#btnHamburger");

btnHamburger.addEventListener("click", function () {
  if (btnHamburger.classList.contains("open")) {
    console.log("Close");
    btnHamburger.classList.remove("open");
  } else {
    console.log("Open");
    btnHamburger.classList.add("open");
  }
});
