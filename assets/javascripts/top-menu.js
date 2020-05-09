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
  const menuItems = document.getElementsByClassName("sub-menu-link");

  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', toggleSideBar);
  }
}
closeMobileMenu();


function activeLinkHighlight() {
  const currentPage = window.location.href;
  const menuLinks = document.getElementsByClassName("menu-link");
  const subMenuLinks = document.getElementsByClassName("sub-menu-link");

  function highlightMainAndAnchorSub() {
    for (i = 0; i < menuLinks.length; i++) {
      if (menuLinks[i].href == currentPage) {
        menuLinks[i].classList.toggle('current');
        let subMenuOpener = menuLinks[i].parentElement.querySelector(".opener");
        if (subMenuOpener != null) {
          let menuSub = menuLinks[i].parentElement.querySelectorAll(".sub-menu-link");
          for (let i = 0; i < menuSub.length; i++) {
            if (menuSub[i].href.indexOf("#") != -1) {
              menuSub[i].classList.toggle('current-sibling');
            }
          }
        }
      };
    }
  }
  highlightMainAndAnchorSub();

  for (i = 0; i < subMenuLinks.length; i++) {
    if (subMenuLinks[i].href == currentPage) {
      let parent = subMenuLinks[i].parentElement;
      while (!parent.classList.contains('menu-item'))
        parent = parent.parentElement;
      subMenuLinks[i].classList.toggle('current'), parent.querySelector(".menu-link").classList.toggle('current');
    }
  }
};

activeLinkHighlight();

