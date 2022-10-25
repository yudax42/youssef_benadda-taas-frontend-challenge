import type Alert from "@/types/alert";
import { ref } from "vue";
import randomId from "@/utils/randomId";

const alerts = ref<Alert[]>([]);

function addAlert(alert: Alert) {
  const id = randomId();
  alerts.value.push({ id, ...alert });
  setTimeout(() => removeAlert(id), 3000);
}

function removeAlert(id: string) {
  alerts.value = alerts.value.filter((a) => a.id !== id);
}

export default {
  alerts,
  addAlert,
  removeAlert,
};
