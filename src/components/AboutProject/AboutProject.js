import './AboutProject.css';

function AboutProject () {
  return(
    <section className="aboutProject">
      <h2 className="main__subtitle aboutProject__title">О проекте</h2>
      <ul className="aboutProject__facts">
        <li className="aboutProject__fact">
          <h3 className="aboutProject__fact-title">Дипломный проект включал 5 этапов</h3>
          <p className="aboutProject__fact-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="aboutProject__fact">
          <h3 className="aboutProject__fact-title">На выполнение диплома ушло 5 недель</h3>
          <p className="aboutProject__fact-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="aboutProject__timing">
        <div className="aboutProject__backend">
          <div className="aboutProject__backend-block">
            <p className="aboutProject__description">1 неделя</p>
          </div>
          <p className="aboutProject__caption">Back-end</p>
        </div>
        <div className="aboutProject__frontend">
          <div className="aboutProject__frontend-block">
            <p className="aboutProject__description">4 недели</p>
          </div>
          <p className="aboutProject__caption">Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;