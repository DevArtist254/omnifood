$(document).ready(function () {
  //3 and 3.2
  $(".js--effects").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky")
      } else {
        $("nav").removeClass("sticky")
      }
    },
    {
      //3.3
      offset: "6rem;",
    }
  )
})
