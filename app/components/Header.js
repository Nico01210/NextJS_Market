import Link from "next/link";

export default function Header() {
    return (
        <header>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold text-uppercase" href="/">🚀 NEXT.JS Project</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link href="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
                <li className="nav-item">
          <Link href="/about" className="nav-link active" aria-current="page">About</Link>
        </li>
                        <li className="nav-item">
          <Link href="/articles" className="nav-link active" aria-current="page">Articles</Link>
        </li>
                <li className="nav-item">
          <Link href="/contact" className="nav-link active" aria-current="page">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>        
</header>
    )
}