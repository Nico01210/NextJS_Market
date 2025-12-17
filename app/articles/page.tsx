import Layout from "../components/Layout";

const produits = [
    { id: 1, nom: "Pain de campagne", prix: 2.50, image: "🥖" },
    { id: 2, nom: "Lait entier 1L", prix: 1.20, image: "🥛" },
    { id: 3, nom: "Œufs frais x6", prix: 2.80, image: "🥚" },
    { id: 4, nom: "Beurre doux 250g", prix: 2.30, image: "🧈" },
    { id: 5, nom: "Pommes Golden 1kg", prix: 3.50, image: "🍎" },
    { id: 6, nom: "Pâtes Penne 500g", prix: 1.50, image: "🍝" },
    { id: 7, nom: "Huile d'olive 75cl", prix: 6.90, image: "🫒" },
    { id: 8, nom: "Café moulu 250g", prix: 4.50, image: "☕" },
];

export default function Articles() {
    return (
        <Layout>
            <div className="container">
                <h1 className="text-center mb-5">Nos Produits</h1>
                <div className="row g-4">
                    {produits.map((produit) => (
                        <div key={produit.id} className="col-md-3 col-sm-6">
                            <div className="card h-100 text-center shadow-sm">
                                <div className="card-body">
                                    <span className="display-1">{produit.image}</span>
                                    <h5 className="card-title mt-3">{produit.nom}</h5>
                                    <p className="card-text text-success fw-bold fs-4">{produit.prix.toFixed(2)} €</p>
                                    <button className="btn btn-primary">Ajouter au panier</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}