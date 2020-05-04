function collapseProcedures() {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("open");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none", this.style.width = "60%";
      } else {
        content.style.display = "block", content.style.width = "100%", this.style.width = "100%", document.getElementsByTagName("p img").style.marginBottom = "2rem";
      }
    });
  }
}

collapseProcedures();
