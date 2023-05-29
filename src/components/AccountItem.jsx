import React, { useState } from 'react';
import { Card, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ACCOUNT_ROUTE } from "../utils/consts";
import './compStyle/AccountItem.css';
import EditAccount from "./modals/EditAccount";

const AccountItem = ({ account, handleDelete }) => {
    const navigate = useNavigate();
    const [showButtons, setShowButtons] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [hideEditModal, setHideEditModal] = useState(false); // noua stare pentru a controla comportamentul de navigare

    const handleDeleteClick = (event) => {
        event.stopPropagation();
        handleDelete(account.id);
    }

    const handleEditClick = (event) => {
        event.stopPropagation();
        setHideEditModal(true); // setezi hideEditModal la true pentru a ascunde fereastra de editare
        setEditModalVisible(true);
    }

    return (
        <Col
            md={4}
            className={"mt-3"}
            onClick={() => !hideEditModal && navigate(ACCOUNT_ROUTE + '/' + account.id)} // navigarea se întâmplă doar dacă hideEditModal este fals
            onMouseEnter={() => setShowButtons(true)}
            onMouseLeave={() => setShowButtons(false)}
        >
            <Card style={{ backgroundColor: account.color, cursor: "pointer" }} className="account-card">
                <div className="account-name">{account.name}</div>
                <div className="account-balance">{account.balance}</div>
                <div className="account-currency">{account.currency}</div>
                {showButtons && (
                    <div className="button-group">
                        <Button
                            variant="outline-danger"
                            className="delete-button"
                            onClick={handleDeleteClick}
                        >
                            Delete
                        </Button>
                        <Button
                            variant="outline-primary"
                            className="edit-button"
                            onClick={handleEditClick}
                        >
                            Edit
                        </Button>
                    </div>
                )}
            </Card>
            {editModalVisible && (
                <EditAccount
                    show={editModalVisible}
                    onHide={() => {
                        setHideEditModal(false); // setezi hideEditModal la false pentru a permite din nou navigarea
                        setEditModalVisible(false);
                    }}
                    accountToEdit={account}
                />
            )}
        </Col>
    );
};

export default AccountItem;