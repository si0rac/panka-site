function toggleSideBar() {
	var sideMenu = document.getElementById('menu');
	sideMenu.classList.toggle("dropdown").animate({ height: "+=10vh"});
}

function toggleMenuListOpener(event) {
	event.target.classList.toggle("dropdown");
}