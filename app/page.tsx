import Layout from "./components/Layout"
import Link from "next/link"

export default function Home() {
  return (
    <Layout>
      <section className="hero d-flex align-items-center">
        <div className="container text-center">
          <h1>Super Market 🚀</h1>
          <p className="text-center">Commandez vos produits préférés dans votre épicerie préférée chez Super Market</p>

          <Link href="/articles" className="btn btn-light btn-lg mt-3 btn-decouvrir">
            Découvrez nos produits
          </Link>
        </div>
      </section>
    </Layout>
  );
}