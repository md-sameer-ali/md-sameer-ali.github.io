(function($){
  
    $("#tabs-nav li:first-child").addClass("active");
    $(".tab-content").hide();
    $(".tab-content:first").show();
  
    // Click function
    $("#tabs-nav li").click(function () {
      $("#tabs-nav li").removeClass("active");
      $(this).addClass("active");
      $(".tab-content").hide();
  
      var activeTab = $(this).find("a").attr("href");
      $(activeTab).fadeIn();
      return false;
    });

    $('.swicth button').on('click', function(){
      $('.left-menu').toggleClass('sameer');
      $('.click-div').fadeIn(200);
    });

    var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
      }

      setTimeout(function() {
      that.tick();
      }, delta);
  };

  window.onload = function() {
      var elements = document.getElementsByClassName('typewrite');
      for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
  };

  $(".sameer-cross").on("click" , function(){
    $(".left-menu").removeClass("sameer");
    $('.click-div').fadeOut(200);
  })
  $(".click-div").on("click" , function(){
    $(".left-menu").removeClass("sameer");
    $(this).fadeOut(200);
  })

})(jQuery)
