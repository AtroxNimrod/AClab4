import {makeAutoObservable} from "mobx";

export default class AccountsTracker {
    constructor() {
        this._types = [
            {id:1, name: 'Cash'},
            {id:2, name: 'Debit Card'},
            {id:3, name: 'Credit Card'},
            {id:4, name: 'Savings Account'},
            {id:5, name: 'Loan'},
            {id:6, name: 'Mortgage'}
        ]

        this._colors = [
            { id: 1, color: 'Red' },
            { id: 2, color: 'Green' },
            { id: 3, color: 'Blue' },
            { id: 4, color: 'Yellow' },
            { id: 5, color: 'Purple' },
            { id: 6, color: 'Orange' },
            { id: 7, color: 'Pink' },
            { id: 8, color: 'Black' },
            { id: 9, color: 'Gray' },
            { id: 10, color: 'White' }
        ]

        this._currencys = [
            { id: 1, currency: 'USD' },
            { id: 2, currency: 'EUR' },
            { id: 3, currency: 'MDL' }
        ]

        this._accounts = [
            {id:1, name: 'Account1', type: 'Cash' ,balance: 1000, initial_balance: 100, currency: 'EUR', color: 'Red'},
            {id:2, name: 'Account2', type: 'Credit Card',balance: 2000, initial_balance: 1100, currency: 'EUR', color: 'Blue'},
            {id:3, name: 'Account4', type: 'Loan' ,balance: 3000, initial_balance: 1200, currency: 'MDL', color: 'Green'},
        ]
        this._selectedType ={}
        this._selectedColor ={}
        this._selectedCurrency ={}
        makeAutoObservable(this)
    }

    setAccounts(accounts) {
        this._accounts = accounts
    }

    addAccount(formData) {
        const id = this._accounts.length + 1;
        const type = this.types.find(
            (type) => type.id === parseInt(formData.get("typeId"))
        );
        const currency = this.currencys.find(
            (currency) => currency.id === parseInt(formData.get("currencyId"))
        );
        const color = this.colors.find(
            (color) => color.id === parseInt(formData.get("colorId"))
        );
        const account = {
            id,
            name: formData.get("name"),
            type: type.name,
            balance: parseFloat(formData.get("balance")),
            initial_balance: parseFloat(formData.get("initial_balance")),
            currency: currency.currency,
            color: color.color,
        };
        this._accounts.push(account);
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedColor(color) {
        this._selectedColor = color
    }
    setSelectedCurrency(currency) {
        this._selectedCurrency = currency
    }

    get types() {
        return this._types
    }
    get accounts() {
        return this._accounts
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedColor() {
        return this._selectedColor
    }
    get selectedCurrency() {
        return this._selectedCurrency
    }


    get colors() {
        return this._colors
    }

    get currencys() {
        return this._currencys
    }


    deleteAccount(id) {
        this.setAccounts(this.accounts.filter(account => account.id !== id));
    }

    editAccount(id, formData) {
        const accountIndex = this._accounts.findIndex((account) => account.id === id);
        const type = this.types.find((type) => type.id === parseInt(formData.get("typeId")));
        const currency = this.currencys.find((currency) => currency.id === parseInt(formData.get("currencyId")));
        const color = this.colors.find((color) => color.id === parseInt(formData.get("colorId")));

        const updatedAccount = {
            ...this._accounts[accountIndex],
            name: formData.get("name"),
            type: type ? type.name : "",
            balance: parseFloat(formData.get("balance")),
            initial_balance: parseFloat(formData.get("initial_balance")),
            currency: currency ? currency.currency : "",
            color: color ? color.color : "",
        };

        this._accounts.splice(accountIndex, 1, updatedAccount);
    }


}