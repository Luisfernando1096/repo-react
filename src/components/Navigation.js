import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';

const Navigation = () => {
    const { user, setUser } = useAuth();

    const cerrarSesion = () => {
        setUser(null);
    }

    const navItems = [
        { text: "Cursos", link: "/cursos" },
        { 
            text: "Admin", 
            dropdown: true, 
            items: [ // Agrega más elementos dentro del dropdown
                { text: "participantes", link: "/participantes" },
                { text: "Profesor", link: "/cursos:idParticipante" }
            ]
        }
    ];

    return (
        <Navbar collapseOnSelect expand='lg' variant='dark' bg='dark' className='px-2 py-1'>
            <Navbar.Brand as={NavLink} to="/">
                Inicio
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                {user ? (<Nav>
                    {navItems.map((item, index) => (
                        <React.Fragment key={index}>
                            {item.dropdown ? (
                                <NavDropdown title={item.text}>
                                    {item.items.map((subItem, subIndex) => (
                                        <NavDropdown.Item as={NavLink} key={subIndex} to={subItem.link}>
                                            {subItem.text}
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                            ) : (
                                <Nav.Link as={NavLink} to={item.link}>
                                    {item.text}
                                </Nav.Link>
                            )}
                        </React.Fragment>
                    ))}
                </Nav>) : <Nav />}
                
                <Nav className='ms-auto'>
                    {!user ? (
                        <Nav.Link as={NavLink} to="/login">Iniciar Sesión</Nav.Link>
                    ) : (
                        <Nav.Link as={Button} className='btn btn-danger' onClick={cerrarSesion}>
                            Cerrar Sesión
                        </Nav.Link>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export { Navigation };
