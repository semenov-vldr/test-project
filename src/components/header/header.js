{

  const header = document.querySelector('.header');
  const headerMenuDropDown = header.querySelector('.header-contact__menu-tablet');
  const headerContactList = header.querySelector('.header-contact__list');

  const headerNav = header.querySelector('.header-nav');
  const headerBurger = header.querySelector('.header__burger');

  function toggleActiveElem(...items) {
    items.forEach( item => item.classList.toggle('js-active') );
  };

  headerMenuDropDown.addEventListener('click', () => toggleActiveElem(headerContactList));

  headerBurger.addEventListener('click', () => toggleActiveElem(header, headerNav));





}
