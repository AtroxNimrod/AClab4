import {makeAutoObservable} from "mobx";

export default class RecordsTraker {
    constructor() {
        this._types = [
            {id:1, name: 'Comunale'},
            {id:2, name: 'Datorii'}
        ]
        this._records = [
            {id:1, name: 'Record1', price: 1000},
            {id:2, name: 'Record2', price: 2000},
            {id:3, name: 'Record3', price: 3000}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setRecords(devices) {
        this._records = devices
    }

    get types() {
        return this._types
    }
    get records() {
        return this._records
    }

}