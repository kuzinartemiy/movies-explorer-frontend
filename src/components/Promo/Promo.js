import './Promo.css';

function Promo () {
  return (
    <section className="promo">
      <div className="promo__content">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <p className="promo__caption">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <button className="promo__button">Узнать больше</button>
      </div>
      <div className="promo__logo"></div>
    </section>
  )
}

export default Promo;