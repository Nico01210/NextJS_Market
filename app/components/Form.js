export default function Form () {
return (
  <form className="container my-5 form-section" style={{ maxWidth: "800px" }}>
            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="nom" className="form-label">Nom</label>
                    <input type="text" className="form-control" id="nom" placeholder="Votre nom" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="prenom" className="form-label">Prénom</label>
                    <input type="text" className="form-control" id="prenom" placeholder="Votre prénom" required />
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="exemple@email.com" required />
            </div>

            <div className="mb-3">
                <label htmlFor="objet" className="form-label">Objet</label>
                <input type="text" className="form-control" id="objet" placeholder="Objet de votre message" required />
            </div>

            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Votre message..." required></textarea>
            </div>

            <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-lg btn-submit">Envoyer</button>
            </div>
        </form>
)
}