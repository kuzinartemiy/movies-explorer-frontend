import './AboutMe.css';

function AboutMe () {
  return(
    <section className="aboutMe">
      <h2 className="main__subtitle">Студент</h2>
      <div className="aboutMe__content">
        <div className="aboutMe__info">
          <div className="aboutMe__text">
            <h3 className="aboutMe__name">Виталий</h3>
            <p className="aboutMe__subtitle">Фронтенд-разработчик, 30 лет</p>
            <p className="aboutMe__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          </div>
          <ul className="aboutMe__links">
            <li className="aboutMe__links-item"><a className="aboutMe__link" href="https://facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
            <li className="aboutMe__links-item"><a className="aboutMe__link" href="https://github.com/kuzinartemiy" target="_blank" rel="noreferrer">Github</a></li>
          </ul>
        </div>
        <div className="aboutMe__photo"></div>
      </div>
    </section>
  )
}

export default AboutMe;