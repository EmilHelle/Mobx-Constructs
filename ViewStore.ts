import { observable, action } from "mobx";
import View from './View';

class ViewStore {
  @observable currentView: View;
  @observable currentFormOpen: boolean;
  @observable targetFormOpen: boolean;

  constructor(
    currentView?: View,
    currentFormOpen?: boolean,
    targetFormOpen?: boolean
  ) {
    this.currentView = currentView;
    this.currentFormOpen = currentFormOpen;
    this.targetFormOpen = targetFormOpen;
  }

  @action.bound
  setCurrentFormOpen(b?: boolean): void {
    b ? this.currentFormOpen = b : this.currentFormOpen = !this.currentFormOpen;
  }

  @action.bound
  setTargetFormOpen(b?: boolean): void {
    b ? this.targetFormOpen = b : this.targetFormOpen = !this.targetFormOpen;
  }

  @action.bound
  setCurrentView(view: View): void {
    this.currentView = view;
  }
}

export default ViewStore;
