import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserTraker from "./tracker/UserTraker";
import RecordsTraker from "./tracker/RecordsTracker";
import AccountsTracker from "./tracker/AccountsTracker";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserTraker(),
        records: new RecordsTraker(),
        account: new AccountsTracker(),
    }}>
        <App />
    </Context.Provider>,
);
