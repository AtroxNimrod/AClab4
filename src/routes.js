import {
    ACCOUNTS_ROUTE,
    ACCOUNT_ROUTE,
    TRACK_ROUTE,
    LOGIN_ROUTE,
    RECORDS_ROUTE,
    REGISTRATION_ROUTE,
} from "./utils/consts";
import Accounts from "./pages/Accounts";
import Tracker from "./pages/Home";
import Auth from "./pages/Auth";
import Records from "./pages/Records";
import AccountPage from "./pages/AccountPage";

export const authRoutes = [
    {
        path: ACCOUNT_ROUTE + '/:id',
        Component: AccountPage
    },
    {
        path: RECORDS_ROUTE,
        Component: Records
    },
    {
        path: ACCOUNTS_ROUTE,
        Component: Accounts
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: TRACK_ROUTE,
        Component: Tracker
    }
]