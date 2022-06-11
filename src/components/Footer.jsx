function Footer() {
  return (
    <footer className='page-footer green lighten-4'>
      <div className='footer-copyright'>
        <div className='container'>
          © {new Date().getFullYear()} Copyright Text
          <a
            href='https://github.com/sergey87chuvasov/react-project-6'
            target='_blank'
            rel='noreferrer'
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
