import React, {useContext, useState} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ACCOUNTS_ROUTE, RECORDS_ROUTE, TRACK_ROUTE} from "../utils/consts";
import {Button, Container, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import {observer} from "mobx-react-lite";

import logoImage from '../assets/logo.png';


const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();
    const [activeRoute, setActiveRoute] = useState("");

    const handleSelectRoute = (route) => {
        setActiveRoute(route);
        navigate(route);
    };

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Image src={logoImage} height={40} className="me-2" />
                    <NavLink style={{ color: 'white' }} to={TRACK_ROUTE}>
                        <h4>FinanceTracker</h4>
                    </NavLink>
                </div>
                {user.isAuth ? (
                    <Nav className="ms-auto" style={{ color: 'white' }}>
                        <Button
                            variant={'link'}
                            onClick={() => handleSelectRoute(RECORDS_ROUTE)}
                            className={`ms-2 ${activeRoute === RECORDS_ROUTE ? "active" : ""}`}
                            style={{ color: 'white' }}
                        >
                            Records
                        </Button>
                        <Button
                            variant={'link'}
                            onClick={() => handleSelectRoute(ACCOUNTS_ROUTE)}
                            className={`ms-2 ${activeRoute === ACCOUNTS_ROUTE ? "active" : ""}`}
                            style={{ color: 'white' }}
                        >
                            Accounts
                        </Button>
                        <Button
                            variant={'link'}
                            // onClick={() => handleSelectRoute(BUDGET_ROUTE)}
                            // className={`ms-2 ${activeRoute === BUDGET_ROUTE ? "active" : ""}`}
                            style={{ color: 'white' }}
                        >
                            Budget
                        </Button>
                        <Button
                            variant={'link'}
                            // onClick={() => handleSelectRoute(GOALS_ROUTE)}
                            // className={`ms-2 ${activeRoute === GOALS_ROUTE ? "active" : ""}`}
                            style={{ color: 'white' }}
                        >
                            Goals
                        </Button>
                        <Button
                            variant={'outline-light'}
                            onClick={() => user.setIsAuth(false)}
                            className="ms-2"
                        >
                            LogOut
                        </Button>
                    </Nav>
                ) : (
                    <Nav className="ms-auto" style={{ color: 'white' }}>
                        <Button
                            variant={'outline-light'}
                            onClick={() => user.setIsAuth(true)}
                        >
                            Login
                        </Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    );
});

export default NavBar;