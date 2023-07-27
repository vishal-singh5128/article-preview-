let btn=null

function reset(){
    $(".description").show()
    $(".img-desc").show();
    $(".share-hidden").hide()
    $(".share-hidden").removeClass("share-show-mobile share-show-desktop")
    $(".share-hidden").css("display","none")
    $(".share").removeClass("share-stat")
    $(".share-btn").css("left","0px")
    btn=null
}


function shareMobile(){
    reset()
    $(".description").hide();
    $(".img-desc").hide();
    $(".share-hidden").show()
    $(".share-hidden").addClass("share-show-mobile")
    $(".share-hidden").css("display","flex")
    $(".share").addClass("share-stat")
    $(".share-btn").css("left","200px")
    $(".arrow-container").hide()
    btn=shareMobile;
}


function shareDesktop(){
    reset()
    $(".share-hidden").show()
    $(".share-hidden").addClass("share-show-desktop") 
    $(".share-hidden").css("display","flex")
    $(".share-btn").css("left","144px")
    btn=shareDesktop;
}



$(".share-btn").click(function() {
    // Check the window width when the button is clicked
    let windowWidth = window.innerWidth;

    // If the window width is greater than 992px, call your function
  

    if (windowWidth < 992) {
      if(btn==shareMobile){
        reset();
      }
      else {
      shareMobile();}
    } else {
      if (btn==shareDesktop){
        reset()
      }
      else {
        shareDesktop();}
      // Perform any cleanup or actions here if needed
    }
  
  });
