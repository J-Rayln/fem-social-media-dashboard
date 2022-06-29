// console.log('testing the JavaScript file!');


// if (window.CSS && CSS.supports("color", "var(--primary)")) {
//     var toggleColorMode = function toggleColorMode(e) {
//       // Switch to Light Mode
//       if (e.currentTarget.classList.contains("light--hidden")) {
//         // Sets the custom html attribute
//         document.documentElement.setAttribute("color-mode", "light"); // Sets the user's preference in local storage
  
//         localStorage.setItem("color-mode", "light");
//         return;
//       }
//       /* Switch to Dark Mode
//       Sets the custom html attribute */
//       document.documentElement.setAttribute("color-mode", "dark"); // Sets the user's preference in local storage
  
//       localStorage.setItem("color-mode", "dark");
//     }; // Get the buttons in the DOM
  
//     // var toggleColorButtons = document.querySelectorAll(".color-mode__btn"); // Set up event listeners
//     var toggleColorButtons = document.querySelectorAll(".theme-toggle__checkbox"); // Set up event listeners
    
//     toggleColorButtons.forEach(function(btn) {
//         // btn.addEventListener("click", toggleColorMode);
//         btn.addEventListener("change", toggleColorMode);
//     });

//   } else {
//     // If the feature isn't supported, then we hide the toggle buttons
//     var btnContainer = document.querySelector(".color-mode__header");
//     btnContainer.style.display = "none";
//   }

const checkbox = document.getElementById("theme-toggle")

checkbox.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.documentElement.setAttribute("color-mode", "dark");
})

  