const loginPopup = document.querySelector(".login-popup"),
  close = document.querySelector(".close")
function showPopup() {
  let o = 0,
    e = setInterval(function () {
      2 == ++o && (clearInterval(e), loginPopup.classList.add("show")),
        console.log(o)
    }, 1e3)
}
function myFunction() {
  document.getElementById("myDIV").classList.add("mystyle")
}
window.addEventListener("load", function () {
  showPopup()
}),
  close.addEventListener("click", function () {
    loginPopup.classList.remove("show")
  }),
  $("#selectItem").click(function () {
    var o = $("input[type='radio']:checked").val()
    $("#town").val(o), $("#myModal").modal("hide")
  })
