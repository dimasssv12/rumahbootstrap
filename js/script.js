const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function () {
  if (scrollY > 2) {
    navbar.classList.replace('bg-transparant', 'navbar-color');
  } else if (this.window.scrollY <= 0) {
    navbar.classList.replace('navbar-color', 'bg-transparant');
  }
});

function redirectToSection() {
 
  var features = document.getElementById('features');


  features.scrollIntoView({ behavior: 'smooth' });
}


function toggleDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle("show");
}


window.onclick = function (event) {
  if (!event.target.matches('.button-secondary')) {
      var dropdowns = document.getElementsByClassName("dropdown-menu");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}