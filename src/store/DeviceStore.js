import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Холодильники"},
            {id: 2, name: "Смартфоны"},
            {id: 3, name: "Видеокарты"},
            {id: 4, name: "Утюги"},
            {id: 5, name: "Материнские платы"},
            {id: 6, name: "Ноутбуки"},
        ]
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"},
            {id: 3, name: "Lenovo"},
            {id: 4, name: "Acer"},
            {id: 5, name: "AMD"},
            {id: 6, name: "INTEL"},
            {id: 7, name: "Asus"},
        ]
        this._devices = [
            {
                id: 1,
                name: "Iphone 1",
                price: 25000,
                rating: 5,
                img: `https://oprezi.ru/fl/image.raw?view=image&type=img&id=23`
            },
            {
                id: 2,
                name: "Iphone 2",
                price: 25000,
                rating: 5,
                img: `https://oprezi.ru/fl/image.raw?view=image&type=img&id=23`
            },
            {
                id: 3,
                name: "Iphone 3",
                price: 25000,
                rating: 5,
                img: `https://oprezi.ru/fl/image.raw?view=image&type=img&id=23`
            },
            {
                id: 4,
                name: "Iphone 4",
                price: 25000,
                rating: 5,
                img: `https://oprezi.ru/fl/image.raw?view=image&type=img&id=23`
            },
            {
                id: 5,
                name: "Iphone 5",
                price: 25000,
                rating: 5,
                img: `https://oprezi.ru/fl/image.raw?view=image&type=img&id=23`
            },
        ]
        this._selectedType = {};
        this._selectedBrand = {};
        this._page = 1;
        this._totalCount = 0;
        this._limit = 4;
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._user = devices;
    }

    setSelectedType(type) {
        this.setPage(1);
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this.setPage(1);
        this._selectedBrand = brand;
    }

    setPage(page){
        return this._page = page;
    }

    setTotalCount(count){
        return this._totalCount = count;
    }

    setLimit(limit){
        return this._limit = limit;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand
    }

    get Page(){
        return this._page;
    }

    get totalCount(){
        return this._totalCount;
    }

    get Limit(){
        return this._limit;
    }

}