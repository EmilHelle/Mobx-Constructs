import { observable, action } from "mobx";

class Store<T> {
  @observable list: T[];
  //new
  @observable selected: T[];

  @observable current: T;
  @observable target: T;

  constructor(current?: T, target?: T) {
    this.current = current;
    this.target = target;
    this.list = [];
    this.selected = [];
  }
  @action.bound
  setCurrent(current: T): void {
    this.current = current;
  }

  @action.bound
  setTarget(target: T): void {
    this.target = target;
  }

  @action.bound
  setList(list: T[]): void {
    this.list = list;
  }

  @action.bound
  setSelected(selected: T[]): void {
    this.selected = selected;
  }

  @action.bound
  add(entity: T): void {
    this.list.push(entity);
  }
}

export default Store;