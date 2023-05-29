import React, {useContext, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form,} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import DropdownComponent from "../DropdownComponent";

const CreateAccount = observer(({show, onHide}) => {
    const {account} = useContext(Context)
    const [name, setName] = useState('')
    const [initial_balance, setInitial_balance] = useState(0)
    const [balance, setBalance] = useState(0)
    const [selectedType, setSelectedType] = useState(null); // noua stare pentru tipul selectat
    const [selectedColor, setSelectedColor] = useState(null); // noua stare pentru tipul selectat
    const [selectedCurrency, setSelectedCurrency] = useState(null); // noua stare pentru tipul selectat

    const dropTypeTitle = selectedType ? selectedType.name : "Select Type";
    const dropColorTitle = selectedColor ? selectedColor.color : "Select Color";
    const dropCurrencyTitle = selectedCurrency ? selectedCurrency.currency : "Select Currency";

    const handleAddAccount = () => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("balance", `${balance}`);
        formData.append("initial_balance", `${initial_balance}`);
        formData.append("typeId", selectedType.id); // folosim noul tip selectat din starea locala
        formData.append("currencyId", selectedCurrency.id);
        formData.append("colorId", selectedColor.id);

        account.addAccount(formData);
        onHide();
    };

    const resetForm = () => {
        setName('');
        setInitial_balance(0);
        setBalance(0);
        setSelectedType(null); // resetam si noul tip selectat
        setSelectedColor(null);
        setSelectedCurrency(null);
    };

    const handleHide = () => {
        resetForm();
        onHide();
    };

    const handleAddAndReset = () => {
        handleAddAccount();
        resetForm();
    };


    return (
        <Modal
            show={show}
            onHide={handleHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Account
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <DropdownComponent
                        value={selectedType}
                        options={account.types}
                        setValue={setSelectedType}
                        title={dropTypeTitle}
                    />

                    <DropdownComponent
                        value={selectedColor}
                        options={account.colors}
                        setValue={setSelectedColor}
                        title={dropColorTitle}
                    />

                    <DropdownComponent
                        value={selectedCurrency}
                        options={account.currencys}
                        setValue={setSelectedCurrency}
                        title={dropCurrencyTitle}
                    />

                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Set Name"
                    />
                    <Form.Control
                        value={initial_balance}
                        onChange={e => setInitial_balance(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Set Initial Balance"
                        type="number"
                    />
                    <Form.Control
                        value={balance}
                        onChange={e => setBalance(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Set Initial Balance"
                        type="number"
                    />

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={handleAddAndReset}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateAccount;