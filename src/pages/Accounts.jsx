import React, { useState} from 'react';
import {Button, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {observer} from "mobx-react-lite";
import TypeBar from "../components/TypeBar";
import AccountList from "../components/AccountList";
// import {Context} from "../index";
import CreateAccount from "../components/modals/CreateAccount";
const Accounts = observer(() => {
    // const {account} = useContext(Context)
    const [accountVisible, setAccountVisible] = useState(false)
    return (
        <Container>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setAccountVisible(true)}
            >
                Add Account
            </Button>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <AccountList/>
                </Col>
            </Row>
            <CreateAccount show={accountVisible} onHide={() => setAccountVisible(false)}/>
        </Container>
    );
});

export default Accounts;