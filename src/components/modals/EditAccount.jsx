import React, { useContext, useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import DropdownComponent from "../DropdownComponent";

const EditAccount = observer(({ show, onHide, accountToEdit }) => {
    const { account } = useContext(Context);
    const [name, setName] = useState(accountToEdit.name);
    const [initial_balance, setInitial_balance] = useState(accountToEdit.initial_balance);
    const [balance, setBalance] = useState(accountToEdit.balance);
    const [selectedType, setSelectedType] = useState(accountToEdit.type);
    const [selectedCurrency, setSelectedCurrency] = useState(accountToEdit.currency);
    const [selectedColor, setSelectedColor] = useState(accountToEdit.color);

    useEffect(() => {
        setName(accountToEdit.name);
        setInitial_balance(accountToEdit.initial_balance);
        setBalance(accountToEdit.balance);
        setSelectedType(account.types.find(type => type.name === accountToEdit.type));
        setSelectedCurrency(account.currencys.find(currency => currency.currency === accountToEdit.currency));
        setSelectedColor(account.colors.find(color => color.color === accountToEdit.color));
    }, [accountToEdit, account.colors, account.currencys, account.types]);

    const handleEditAccount = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('balance', `${balance}`);
        formData.append('initial_balance', `${initial_balance}`);
        formData.append('typeId', selectedType.id);
        formData.append('currencyId', selectedCurrency.id);
        formData.append('colorId', selectedColor.id);

        account.editAccount(accountToEdit.id, formData);
        onHide();
    };

    const handleResetForm = () => {
        setName(accountToEdit.name);
        setInitial_balance(accountToEdit.initial_balance);
        setBalance(accountToEdit.balance);
        setSelectedType(account.types.find(type => type.id === accountToEdit.type.id));
        setSelectedCurrency(accountToEdit.currency);
        setSelectedColor(accountToEdit.color);
    };

    const handleHide = () => {
        handleResetForm();
        onHide();
    };

    const handleEditAndReset = () => {
        handleEditAccount();
        // handleResetForm();
    };

    return (
        <Modal show={show} onHide={handleHide} centered>
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>
                    Edit Account
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <DropdownComponent
                        value={selectedType}
                        options={account.types}
                        setValue={setSelectedType}
                        title={selectedType.name}
                    />

                    <DropdownComponent
                        value={selectedColor}
                        options={account.colors}
                        setValue={setSelectedColor}
                        title={selectedColor.color}
                    />

                    <DropdownComponent
                        value={selectedCurrency}
                        options={account.currencys}
                        setValue={setSelectedCurrency}
                        title={selectedCurrency.currency}
                    />

                    <Form.Control
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='mt-3'
                        placeholder='Set Name'
                    />
                    <Form.Control
                        value={initial_balance}
                        onChange={(e) => setInitial_balance(Number(e.target.value))}
                        className='mt-3'
                        placeholder='Set Initial Balance'
                        type='number'
                    />
                    <Form.Control
                        value={balance}
                        onChange={(e) => setBalance(Number(e.target.value))}
                        className='mt-3'
                        placeholder='Set Initial Balance'
                        type='number'
                    />

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={handleHide}>
                    Close
                </Button>
                <Button variant='primary' onClick={handleEditAndReset}>
                    Save changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default EditAccount;