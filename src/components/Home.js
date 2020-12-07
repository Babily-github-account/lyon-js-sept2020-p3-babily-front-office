import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../style/Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className="container-reservation">
          <div className="section-reservation">
            <h1>Et si c'était juste pour une heure ?</h1>
            <h2>
              Trouvez et réservez{" "}
              <span style={{ color: "red" }}>rapidement</span> votre place en
              crèche !
            </h2>
            <button className="btn-home-reservation">Je réserve !</button>
            <button className="btn-home-calendar"> Calendrier</button>
          </div>
          <button className="btn-home-espace-pro">Espace professionnel</button>
        </section>
        <section className="container-saviezvous">
          <div className="image-saviezvous"></div>
          <div className="section-saviezvous">
            <h1>Le saviez-vous ?</h1>
            <div className="section-stats-saviezvous">
              {/* <p className='stats'>12%</p>
            <p className='stats'>333<br/><span>millions</span></p>
            <p className='stats'>63%</p>
            <p className='p-stats'>Des enfants (de 10 semianes à 3 ans) ont une place en crèche</p>
            <p className='p-stats'>d'heures d'accueil disponibles en France chaque année</p>
            <p className='p-stats'>Le taux d'occupation réel moyen des crèches</p> */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
