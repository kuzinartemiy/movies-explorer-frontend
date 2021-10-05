import './Techs.css';

function Techs () {
  return(
    <section className="techs">
      <h2 className="main__subtitle">Технологии</h2>
      <div className="techs__content">
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__tech-list">
          <li className="techs__tech-list-item">HTML</li>
          <li className="techs__tech-list-item">CSS</li>
          <li className="techs__tech-list-item">JS</li>
          <li className="techs__tech-list-item">React</li>
          <li className="techs__tech-list-item">Git</li>
          <li className="techs__tech-list-item">Express.js</li>
          <li className="techs__tech-list-item">mongoDB</li>
        </ul>
      </div>
      
    </section>
  )
}

export default Techs;