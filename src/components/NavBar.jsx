import CartWidget from "./CartWidget/CartWidget.jsx";

function NavBar() {
  return (
    <div>
      <nav class="navbar bg-dark navbar-expand-lg " data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            E-Shop
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Roms
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Emuladores
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Consolas
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <CartWidget></CartWidget>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
