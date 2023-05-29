import React, {useContext} from 'react';
import ExpensesStatistics from '../components/ExpensesStatistics';
import CashBalance from '../components/CashBalance';
import AccountsList from '../components/AccountList';
import {Context} from "../index";

const Home = () => {
    const bank_accounts=[{
        id: 1,
        title: "Victoria Bank - salary",
        balance: 7350,
        currency: 'lei'
    },
        {
            id: 2,
            title: "MoldovaAgroIndBank - scholarship",
            balance: 2732,
            currency: 'lei'
        },
        {
            id: 3,
            title: "MoldIndConBank - savings",
            balance: 500,
            currency: '$'
        }
    ];

    const {user} = useContext(Context);

    if (!user.isAuth) {
        return <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <h1 style={{ textAlign: "center" }}>Please log in to see your account</h1> </div>;
    }

    return (
        <div className="">
            <ExpensesStatistics />
            <CashBalance />
            <AccountsList title="Your credit card accounts" accounts={bank_accounts} />
        </div>
    );
};

export default Home;