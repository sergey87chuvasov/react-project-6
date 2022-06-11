function Header() {
  return (
    <nav className='green darken-1'>
      <div className='nav-wrapper'>
        <a href='!#' className='brand-logo'>
          React Shop
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a
              href='https://github.com/sergey87chuvasov/react-project-5'
              target='_blank'
              rel='noreferrer'
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
