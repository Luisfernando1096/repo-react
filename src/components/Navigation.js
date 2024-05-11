import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {

    const clientId = "176492661084-uv08kmj2c463l4s6gdhh7kifm3dfa3uj.apps.googleusercontent.com";
    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);
    const navegar = useNavigate()

    const responseMessage = () => {
        localStorage.removeItem('user')
        navegar('/login')
      };

    const navItems = [
        { text: "Cursos", link: "/cursos" },
        {
            text: "Admin",
            dropdown: true,
            items: [ // Agrega más elementos dentro del dropdown
                { text: "Gestion de cursos", link: "/cursosgestion" },
                { text: "Participantes", link: "/participantes" }
            ]
        }
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top px-2 py-1">
            <Link className="navbar-brand" to="/">Inicio</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#responsive-navbar-nav" aria-controls="responsive-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="responsive-navbar-nav">
                {user ? (
                    <ul className="navbar-nav">
                        {navItems.map((item, index) => (
                            <React.Fragment key={index}>
                                {item.dropdown ? (
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id={"navbarDropdown" + index} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {item.text}
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby={"navbarDropdown" + index}>
                                            {item.items.map((subItem, subIndex) => (
                                                <li key={subIndex}><a className="dropdown-item " href={subItem.link}>{subItem.text}</a></li>
                                            ))}
                                        </ul>
                                    </li>
                                ) : (
                                    <li className="nav-item">
                                        <a className="nav-link" href={item.link} style={{ color: 'white' }}>{item.text}</a>
                                    </li>
                                )}
                            </React.Fragment>
                        ))}
                    </ul>
                ) : ''}
                <ul className="navbar-nav ms-auto">
                    {!user ? (
                        <li className="nav-item">
                            <a className="nav-link" href="/login" style={{ color: 'white' }}>Iniciar Sesión</a>
                        </li>
                    ) : (
                        <li className="nav-item">
                            <GoogleLogout clientId={clientId} onLogoutSuccess={responseMessage}/> 
                        </li>
                    )}
                </ul>
            </div>
        </nav>

    )
}

export { Navigation };
