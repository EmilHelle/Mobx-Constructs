import { observable, action } from "mobx";

class Session<T>{
    @observable active:T[];
    @observable limit: number;

    constructor(active?:T[], limit?:number){
        this.active = active;
        this.limit = limit;
    }

    @action.bound
    setActive(active:T[]){
        this.active = active;
    }

    @action.bound
    setLimit(limit:number){
        this.limit = limit;
    }
}