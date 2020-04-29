// Taken from https://medium.com/@kofno/snackbar-logic-in-mobx-a27ab504fde1
import { action, computed, observable } from "mobx";

export interface Alert {
  title: string;
  duration: number;
  display: boolean;
}

class AlertsStore {
  @observable
  alerts: Alert[] = [];

  @computed
  get current(): Alert | null {
    return this.alerts.length === 0 ? null : this.alerts[0];
  }

  @action
  hide = () => {
    if (this.alerts.length > 0) {
      this.alerts[0].display = false;
    }
  };

  @action
  process = () => {
    this.alerts = this.alerts.slice(1);
  };

  @action
  push = (alert: Alert) => {
    this.hide();
    this.process();
    this.alerts.push({ ...alert, display: true });
  };
}

const alertsStore = new AlertsStore();
export default alertsStore;
