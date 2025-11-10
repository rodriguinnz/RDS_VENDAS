import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { isLogged, doLogout, getUser } from "../../lib/AuthHandler";
import { useAuth } from "../../contexts/AuthContext";

export default function Header() {
  const { logged, user, setLogged, setUser } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Função que verifica se o usuário está logado e atualiza o estado
    const checkLogin = () => {
      const loggedIn = isLogged();
      setLogged(loggedIn);
      if (loggedIn) {
        const userData = getUser();
        setUser(userData);
      } else {
        setUser(null);
      }
    };

    // Chama uma vez ao montar o componente
    checkLogin();

    // Função que reage a mudanças no localStorage (ex: login/logout)
    const handleStorageChange = (e) => {
      if (e.key === "token" || e.key === "user") {
        checkLogin();
      }
    };

    // Escuta mudanças no armazenamento local
    window.addEventListener("storage", handleStorageChange);

    // Remove o listener ao desmontar
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [setLogged, setUser]);

  const handleLogout = () => {
    doLogout();
    setLogged(false);
    setUser(null);
    navigate("/signin");
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <span className="logo-1">R</span>
          <span className="logo-2">S</span>
          <span className="logo-3">R</span>
        </Link>
      </div>

      {/* Barra de busca */}
      <div className="search-bar">
        <input type="text" placeholder='Buscar "Apartamento"' />
        <div className="location">
          <button className="search-btn">
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
      </div>

      {/* Navegação */}
      <nav className="navbar">
        <ul>
          {logged ? (
            <>
              <li>
                <Link to="/" className="anuncio">
                  Meus Anúncios
                </Link>

                <Link to="/post-an-ad" className="anunciarBtn">
                  Postar um anúncio
                </Link>
              </li>

              <li className="profileContainer">
                <button
                  className="profileBtn"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <img
                    src={user?.photoURL}
                    alt={user?.name}
                    className="profileImg"
                  />
                  <span>{user?.name?.split(" ")[0]}</span>
                  <FaAngleDown size={16} className="arrow" />
                </button>

                {menuOpen && (
                  <div className="dropdown">
                    <button>Minha Conta</button>
                    <button>Favoritos</button>
                    <button onClick={handleLogout}>Sair</button>
                  </div>
                )}
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/signin" className="entrarBtn">
                  Entrar
                </Link>
              </li>
              <li>
                <Link to="/" className="anunciarBtn">
                  Anunciar grátis
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
