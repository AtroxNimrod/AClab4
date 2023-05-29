import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import AccountItem from "./AccountItem";

const AccountList = observer(() => {
    const { account } = useContext(Context);

    const handleDeleteAccount = (accountId) => {
        account.deleteAccount(accountId);
    };

    const filteredAccounts = account.accounts.filter((acc) => {
        if (!account.selectedType.id) {
            return true;
        }
        if (account.selectedType.name === "All") {
            return true;
        }
        return acc.type === account.selectedType.name;
    });

    return (
        <Row className="d-flex">
            {filteredAccounts?.map((account) => (
                <AccountItem
                    key={account.id}
                    account={account}
                    handleDelete={handleDeleteAccount}
                />
            ))}
        </Row>
    );
});

export default AccountList;