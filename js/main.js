
var path = window.location.pathname,
  page = path.split("/").pop()
function isTextKey(e, r) {
  var t = e.which ? e.which : e.keyCode
  let a = $(r).attr("id")
  return (t <= 122 && t >= 97) || (t <= 90 && t >= 65)
    ? ((document
        .querySelector("#" + a)
        .parentNode.querySelector(".errordiv").innerHTML = ""),
      !0)
    : ((document
        .querySelector("#" + a)
        .parentNode.querySelector(".errordiv").innerHTML =
        "Number not allowed."),
      !1)
}
function ValidateEmail(e) {
  let r = $(e).attr("id"),
    t = document.getElementById(r).value
  ;/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(
    t,
  )
    ? (document
        .querySelector("#" + r)
        .parentNode.querySelector(".errordiv").innerHTML = "")
    : (document
        .querySelector("#" + r)
        .parentNode.querySelector(".errordiv").innerHTML =
        "Invalid email address.")
}
"contact-us.html" === page.toLowerCase() &&
  (document.querySelector("#submit").onclick = function () {
    var e = document.querySelector("#fullName").value,
      r = document.querySelector("#email").value,
      t = document.querySelector("#userNumber").value,
      a = document.querySelector("#message").value,
      o = document.querySelector("#query").value,
      n = !0
    "" == e
      ? ((document
          .querySelector("#fullName")
          .parentNode.querySelector(".errordiv").innerHTML =
          "Field cannot be empty"),
        (n = !1))
      : (document
          .querySelector("#fullName")
          .parentNode.querySelector(".errordiv").innerHTML = ""),
      "" == r
        ? ((document
            .querySelector("#email")
            .parentNode.querySelector(".errordiv").innerHTML =
            "Field cannot be empty"),
          (n = !1))
        : (document
            .querySelector("#email")
            .parentNode.querySelector(".errordiv").innerHTML = ""),
      "" == t
        ? ((document
            .querySelector("#userNumber")
            .parentNode.querySelector(".errordiv").innerHTML =
            "Field cannot be empty"),
          (n = !1))
        : (document
            .querySelector("#userNumber")
            .parentNode.querySelector(".errordiv").innerHTML = ""),
      "" == a
        ? ((document
            .querySelector("#message")
            .parentNode.querySelector(".errordiv").innerHTML =
            "Field cannot be empty"),
          (n = !1))
        : (document
            .querySelector("#message")
            .parentNode.querySelector(".errordiv").innerHTML = ""),
      !0 === n &&
        fetch("https://formsubmit.co/ajax/hello@polygonenergy.com.au", {
          method: "POST",
          headers: { "Content-Type": "application/json;charset=utf-8" },
          body: JSON.stringify({
            name: e,
            email: r,
            message: a,
            Number: t,
            query: o,
          }),
        })
          .then((e) => e.json())
          .then((e) => {
            console.log(e),
              (document.querySelector("#email").value = ""),
              (document.querySelector("#fullName").value = ""),
              (document.querySelector("#userNumber").value = ""),
              (document.querySelector("#message").value = ""),
              (document.querySelector("#query").value = "0"),
              document
                .querySelector("#successMessage")
                .classList.remove("d-none"),
              setTimeout(() => {
                document
                  .querySelector("#successMessage")
                  .classList.add("d-none")
              }, 3e3)
          })
          .catch((e) => {
            console.log("error", e)
          })
  })

// document.addEventListener("DOMContentLoaded", function () {
// let menuActive = document.querySelector(".hamburger-menu")
// function launchDialog(e) {
//   let r = e.parentNode.querySelector(".card__title").innerHTML,
//     t = e.parentNode.querySelector(".card__text").innerHTML
//   new bootstrap.Modal(document.getElementById("exampleModal"), {
//     keyboard: !1,
//   }).show(),
//     (document.getElementById("dynamicTitle").innerHTML = r),
//     (document.getElementById("dynamicContent").innerHTML = t)
// }
// })
// ;(menuActive.onclick = function () {
  //   document.querySelector(".navigation").classList.toggle("active")
  // }),
  
  //hamburger menu functionality
  document.addEventListener("DOMContentLoaded", function () {
    // Hamburger menu toggle
    let menuActive = document.querySelector(".hamburger-menu");
    menuActive.onclick = function () {
      document.querySelector(".navigation").classList.toggle("active");
    };
    
    //dropdown header menu 
    const toggles = document.querySelectorAll(".nav-toggle-btn"); // Target each toggle button

    toggles.forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        const menu = toggle.closest(".submenu").querySelector(".nav-list"); // Get the submenu
        const icon = toggle.querySelector(".dropdown"); // Get the icon
    
        // Toggle the menu visibility
        if (menu.style.display === "block") {
          menu.style.display = "none"; // Hide submenu
          icon.classList.remove("fa-caret-up"); // Reset to down arrow
          icon.classList.add("fa-caret-down");
        } else {
          // Close other open menus
          document.querySelectorAll(".nav-list").forEach((m) => (m.style.display = "none"));
          document.querySelectorAll(".dropdown").forEach((i) => {
            i.classList.remove("fa-caret-up");
            i.classList.add("fa-caret-down");
          });
    
          menu.style.display = "block"; // Show submenu
          icon.classList.remove("fa-caret-down"); // Change to up arrow
          icon.classList.add("fa-caret-up");
        }
      });
    });

  // Modal launch
  window.launchDialog = function (e) {
    let r = e.parentNode.querySelector(".card__title").innerHTML;
    let t = e.parentNode.querySelector(".card__text").innerHTML;
    console.log("Title:", r, "Content:", t);
    new bootstrap.Modal(document.getElementById("exampleModal"), {
      keyboard: !1,
    }).show();
    document.getElementById("dynamicTitle").innerHTML = r;
    document.getElementById("dynamicContent").innerHTML = t;
  };
});


  console.log(document.querySelectorAll(".section-timeline .card__item"))
var productsArray = [
  {
    id: 1,
    title: "The Smart Value Range",
    text: "Available in both single phase and three-phase setups, our Smart Value range is available as a hybrid power setup, as well as in retrofitted, battery based form. We offer both AC and DC coupled batteries, and the energy setups here offer a panel that gives you full system performance visibility from the panel to the grid. It also comes with our standard smart home solution to increase efficiency of energy consumption in appliances.",
  },
  {
    id: 2,
    title: "The Smart Premium Range",
    text: "With Smart Premium, you get all the perks of our Smart Value energy system, and top it off with an advanced smart home solution. We also offer a 15-year extended warranty on the inverter, and this extends to up to 20 years of warranty on the entire product, and a stunning, 25-year solar panel warranty. We also add reassurance with 10-year workmanship and whole-of-system warranty with the Smart Premium range.",
  },
  {
    id: 3,
    title: "The Energy Brain Range",
    text: "Our flagship product adds the ability to set up a micro inverter based solar energy system, on top of single-phase and three-phase systems. It also comes with a power optimiser to ensure per-panel power efficiency, and the smart home setup is upgraded to an AI based one for a premium lifestyle experience, while saving majorly on costs All extended warranty perks of the Smart Premium range carry over here as well.",
  },
]
function launchProductDialog(e) {
  if (e > 0) {
    let r = productsArray.filter((r) => r.id == e)[0].title,
      t = productsArray.filter((r) => r.id == e)[0].text
    new bootstrap.Modal(document.getElementById("productsModal"), {
      keyboard: !1,
    }).show(),
      (document.getElementById("productTitle").innerHTML = r),
      (document.getElementById("productContent").innerHTML = t)
  }
}
function getParameterByName(e, r = window.location.href) {
  var t = RegExp(
    "[?&]" + (e = e.replace(/[\[\]]/g, "\\$&")) + "(=([^&#]*)|&|#|$)",
  ).exec(r)
  return t ? (t[2] ? decodeURIComponent(t[2].replace(/\+/g, " ")) : "") : null
}
function activeSection() {
  var e,
    r =
      document.getElementById(getParameterByName("id")).getBoundingClientRect()
        .top +
      window.pageYOffset -
      85
  setTimeout(() => {
    window.scrollTo({ top: r, behavior: "smooth" })
  }, 2e3)
}
activeSection()

 

//scroll effect
document.addEventListener("DOMContentLoaded", function () {
  const text = document.querySelector(".scroll-text");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          text.classList.add("show");
        }
      });
    },
    { threshold: 0.5 } // Adjust visibility threshold
  );

  observer.observe(text);
});

