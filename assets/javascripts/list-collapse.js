function collapseProcedures() {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("open");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none", this.style.width = "50%";
      } 
      else {
        content.style.display = "block", this.style.width = "100%", content.style.width = "100%";
      }
    });
  }
}

collapseProcedures();
