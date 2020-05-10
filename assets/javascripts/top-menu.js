function toggleTopMenuBar() {
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
    menuItems[i].addEventListener('click', toggleTopMenuBar);
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
        let menuSub = menuLinks[i].parentElement.querySelectorAll(".sub-menu-link");
        for (let i = 0; i < menuSub.length; i++) {
          if (menuSub[i].href.indexOf("#") != -1) {
            menuSub[i].classList.toggle('current');
          }
        }
      };
    }
  }
  highlightMainAndAnchorSub();

  function highlightSubMenuPageAndParent() {
    for (i = 0; i < subMenuLinks.length; i++) {
      if (subMenuLinks[i].href == currentPage && subMenuLinks[i].href.indexOf("#") == -1) {
        let parent = subMenuLinks[i].parentElement;
        while (!parent.classList.contains('menu-item'))
          parent = parent.parentElement;
        subMenuLinks[i].classList.toggle('current'), parent.querySelector(".menu-link").classList.toggle('current');
      }
    }
  }
  highlightSubMenuPageAndParent();

  function highlightSubMenuAnchorsAndParent() {
    for (i = 0; i < subMenuLinks.length; i++) {
      if (subMenuLinks[i].href == currentPage && subMenuLinks[i].href.indexOf("#") != -1) {
        let subMenuParent = subMenuLinks[i].parentElement.parentElement.parentElement;
        subMenuParent.querySelector(".menu-link").classList.toggle('current', true);
        let subMenuSiblings = subMenuParent.querySelectorAll(".sub-menu-link");
        for (let i = 0; i < subMenuSiblings.length; i++) {
          subMenuSiblings[i].classList.toggle('current', true)
        }
      }
    }  
  }
  highlightSubMenuAnchorsAndParent();

  function blogpostHighlight() {
    if (currentPage.indexOf("/blog/") != -1) {
      document.getElementById("blog").querySelector(".menu-link").classList.toggle('current', true);
    }
  }
  blogpostHighlight();
};

activeLinkHighlight();

