function toggleSideBar() {
	let sideMenu = document.getElementById('menu');
	sideMenu.classList.toggle("dropdown");
}


function openMobileDropdownMenu() {
  const subMenuOpeners = document.getElementsByClassName("opener");

  for (let i = 0; i < subMenuOpeners.length; i++) {
    subMenuOpeners[i].addEventListener('click', function() {
      this.classList.toggle( 'clicked'), this.parentElement.classList.toggle( 'opened');
    })
  };
}
openMobileDropdownMenu();

function closeMobileMenu() {
  const menuItems = document.getElementsByClassName("menu-link");

  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', toggleSideBar);
  }
}
closeMobileMenu();


function activeLinkHighlight() {
  const currentPage = window.location.href;
  const menuLinks = document.getElementsByClassName("menu-link");
    
  for (let i = 0; i < menuLinks.length; i++) {
    let linkTarget = menuLinks[i].href;
    let menuParentLink = menuLinks[i].parentElement.parentElement.parentElement.firstChild;
    if (linkTarget == currentPage && linkTarget.indexOf("#") == -1) {
      menuLinks[i].classList.toggle('current'), menuParentLink.classList.toggle('current');
    }

    if (linkTarget == currentPage && linkTarget.indexOf("#") != -1) {
      let menuSelectors = menuLinks[i].parentElement.parentElement.querySelectorAll(".menu-link");
      for (let i = 0; i < menuSelectors.length; i++) {
        menuSelectors[i].classList.toggle("current-sibling");
      }
      menuLinks[i].classList.toggle('current'), menuParentLink.classList.toggle('current');
    }
  };
};

activeLinkHighlight();


