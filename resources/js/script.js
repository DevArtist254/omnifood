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

  /**scroll effect  on buttons*/
  $(".scrollToSignUp").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".signUp").offset().top,
      },
      1500
    )
  })

  $(".effects").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".js--effects").offset().top,
      },
      1500
    )
  })

  // Select all links with animations
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash)
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]")
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault()
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target)
              $target.focus()
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false
              } else {
                $target.attr("tabindex", "-1") // Adding tabindex for elements not focusable
                $target.focus() // Set focus again
              }
            }
          )
        }
      }
    })

  //animation on scroll
  $(".js--wp-1").waypoint(
    function () {
      $(".js--wp-1").addClass("animated fadeIn")
    },
    {
      offset: "60%",
    }
  )

  //animation on scroll
  $(".js--wp-2").waypoint(
    function () {
      $(".js--wp-2").addClass("animated fadeInUp")
    },
    {
      offset: "50%",
    }
  )

  //animation on scroll
  $(".js--wp-3").waypoint(
    function () {
      $(".js--wp-3").addClass("animated fadeIn")
    },
    {
      offset: "50%",
    }
  )

  //animation on scroll
  $(".js--wp-4").waypoint(
    function () {
      $(".js--wp-4").addClass("animated pulse")
    },
    {
      offset: "50%",
    }
  )
})
