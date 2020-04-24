var slider = {
  
    el: {
      slider: $("#slider"),
      allSlides: $(".slide"),
      sliderNav: $(".slider-nav"),
      allNavButtons: $(".slider-nav > a")
    },
    
    timing: 800,
    slideWidth: 100%, // could measure this
    
    init: function() {
      // You can either manually scroll...
      this.el.slider.on("scroll", function(event) {
        slider.moveSlidePosition(event);
      });
      // ... or click a thing
      this.el.sliderNav.on("click", "a", function(event) {
        slider.handleNavClick(event, this);
      });
    },
    
    handleNavClick: function(event, el) {
      // Don't change URL to a hash, remove if you want that
      event.preventDefault();
  
      // Get "1" from "#slide-1", for example
      var position = $(el).attr("href").split("-").pop();
      
      this.el.slider.animate({
        scrollLeft: position * this.slideWidth
      }, this.timing);
      
      this.changeActiveNav(el);
    },
    
    changeActiveNav: function(el) {
      // Remove active from all links
      this.el.allNavButtons.removeClass("current");
      // Add back to the one that was pressed
      $(el).addClass("current");
    }
    
  };
  
  slider.init();