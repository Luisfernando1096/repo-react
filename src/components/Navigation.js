import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import { BotonAgregar } from '../buttons/BotonAgregar';
import { BotonDanger } from '../buttons/BotonDanger';

const Navigation = () => {

    //const { user, token, isLogued, login, logout } = useAuth();
    const user = {
        id: 1,
        rol: 'admin'
    }

    const navegar = useNavigate()

    const responseMessage = () => {
        //logout();
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
                            <BotonDanger titulo = "Cerrar Sesion" onClick={responseMessage}/>
                        </li>
                    )}
                </ul>
            </div>
        </nav>

    )
}

export { Navigation };
