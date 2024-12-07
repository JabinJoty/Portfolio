function myFunction(){
    var a = document.getElementsByClassName('dropdown')[0];
    if (a.style.display === "block") {
        a.style.display = "none";
      } else {
        a.style.display = "block";
      }
}

function formValidation(){
  let a = document.forms["form"]["name"].value;
  let b = document.forms["form"]["email"].value;
  let messageElement = document.getElementById("msg");

  if(a === "" || b ===""){
    messageElement.style.color = "red";
    messageElement.textContent = "Both Name and Email must be filled out!"
    return false;
  }
  else{
    messageElement.style.color = "green";
    messageElement.textContent = "Thanks for reaching out! I’ll get back to you soon"
    return false;

  }
}



$(document).ready(function() {
 
  $(".owl-carousel").owlCarousel({
 
      autoPlay: 3000,
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      center: true,
      nav:true,
      loop:true,
      responsive: {
        600: {
          items: 4
        }
      }
 
      
 
  });
 
});



