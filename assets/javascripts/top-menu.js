function toggleSideBar() {
	var sideMenu = document.getElementById('menu');
	sideMenu.classList.toggle("dropdown").animate({ height: "+=10vh"});
}

function toggleMenuListOpener(event) {
	event.target.classList.toggle("dropdown");
}


$("#aboutme > .opener").click(function() {
	$("#aboutme" ).toggleClass( "opened"), $("#aboutme > .opener").toggleClass( "clicked");
  });


$("#groups > .opener").click(function() {
	$("#groups" ).toggleClass( "opened"), $("#groups > .opener").toggleClass( "clicked");
  });


$("a.menu-link").each(function() {
    if (this.href == window.location.href) {
        $(this).toggleClass('active'), $(this).parents(".dropdown-menu").siblings(".menu-link").toggleClass('active');
    }
});
