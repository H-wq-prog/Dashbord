import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faX } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../assets/logo.png';
import style from '../Navbar/Navbar.module.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Navbar() {
    return (
        <>
            <div className={style.navcontainer}>
                <div className={style.logo}>
                    <FontAwesomeIcon icon={faX} className={style.fax} />
                    <img src={Logo} alt="logo" />
                </div>
                <div className={style.dropdown}>
                    <FontAwesomeIcon icon={faBell} className={style.bell} />
                    <NavDropdown title={<span style={{ color: 'var(--dawarleWebsite)', fontWeight: '600', width: '109px', height: '32px' }}>Super Admin</span>} id="basic-nav-dropdown" >
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>

                </div>
            </div>

        </>
    )
}
