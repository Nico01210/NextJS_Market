import Layout from "../components/Layout";


export default function About () {
    return (
        <Layout>
            <h1> A propos</h1>
              <section id="legacy" className="legacy-section container my-5 section-box">
  <h2 className="text-center mb-4" >Nos Valeurs</h2>
  <div className="valeurs-section row align-items-center">
    <div className="col-md-6 mb-4 mb-md-0">
      <img src="images/valeurs.webp" alt="Nos valeurs" className="img-fluid rounded shadow"/>
    </div>
    <div className="col-md-6">
       <p>
        Installée au cœur du quartier, notre épicerie locale a vu le jour avec
        une idée simple : proposer des produits de qualité, accessibles, tout en
        favorisant les circuits courts et les producteurs locaux.
      </p>
       <p>
        Chaque jour, nous sélectionnons avec soin des fruits et légumes frais,
        des produits d’épicerie, des spécialités régionales ainsi que des
        produits du quotidien pour répondre aux besoins de nos clients.
      </p>
    </div>
  </div>
</section>
            <section id="legacy" className="legacy-section container my-5 section-box">
  <h2 className="text-center mb-4">Nos engagements</h2>
  <div className="engagements-section row align-items-center">
    <div className="about-list col-md-6 order-md-1">
      <ul>
        <li>Produits frais et de saison</li>
        <li>Soutien aux producteurs locaux</li>
        <li>Accueil chaleureux et conseils personnalisés</li>
        <li>Prix justes et transparents</li>
      </ul>
    </div>
    
    <div className="col-md-6 mb-4 mb-md-0 order-md-2">
      <img src="images/engagement.jpg" alt="Nos valeurs" className="img-engagement img-fluid rounded shadow"/>
    </div>
  </div>
</section>
    <section id="legacy" className="legacy-section container my-5 section-box">
 <p>
        Plus qu’un simple commerce, notre épicerie est un lieu de rencontre et
        d’échange. Nous mettons un point d’honneur à créer une relation de
        confiance avec nos clients et à rester à l’écoute de leurs attentes.
      </p>

      <p>
        Que vous veniez pour un achat rapide ou pour découvrir de nouveaux
        produits, nous serons ravis de vous accueillir.
      </p>

      <p className="mt-4 fw-bold">
        À très bientôt dans notre épicerie !
      </p>
      </section>
        </Layout>
    );

}