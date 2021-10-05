import './Footer.css';

function Footer () {
  return (
    <footer className="footer">
      <p className="footer__caption">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__nav">
        <p className="footer__copyright">&copy;2021</p>
        <ul className="footer__links">
          <li className="footer__list-item"><a href="https://practicum.yandex.ru/" className="footer__link" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
          <li className="footer__list-item"><a href="https://github.com/kuzinartemiy" className="footer__link" target="_blank" rel="noreferrer">Github</a></li>
          <li className="footer__list-item"><a href="https://facebook.com/" className="footer__link" target="_blank" rel="noreferrer">Facebook</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;