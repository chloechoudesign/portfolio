 $(document).ready(function() {

  // function openCity(evt, cityName) {
  //   // Declare all variables
  //   var i, tabcontent, tablinks;

  //   // Get all elements with class="tabcontent" and hide them
  //   tabcontent = document.getElementsByClassName("tabcontent");
  //   for (i = 0; i < tabcontent.length; i++) {
  //     tabcontent[i].style.display = "none";
  //   }

  //   // Get all elements with class="tablinks" and remove the class "active"
  //   tablinks = document.getElementsByClassName("tablinks");
  //   for (i = 0; i < tablinks.length; i++) {
  //     tablinks[i].className = tablinks[i].className.replace(" active", "");
  //   }

  //   // Show the current tab, and add an "active" class to the button that opened the tab
  //   document.getElementById(cityName).style.display = "block";
  //   evt.currentTarget.className += " active";
  // }

  $("#proj-link-01").click(function() {
    window.open("proj-supermove-locked.html");
  });
  $("#proj-link-02").click(function() {
    window.open("proj-etrade.html");
  });
  $("#proj-link-03").click(function() {
    window.open("proj-1951.html");
  });
  $("#proj-link-04").click(function() {
    window.open("proj-rideshare.html");
  });
  $("#proj-link-05").click(function() {
    window.open("proj-airports.html");
  });

  // $("#work-fridge").click(function() {
  //  window.location.href = "proj-fridge.html";
  // });
});