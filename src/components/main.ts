import type { App } from "vue";
import { CrisButton, NamButton } from "@/components";

export default {
  install: (app: App) => {
    app.component("CrisButton", CrisButton);
    app.component("NamButton", NamButton);
  },
};

export { CrisButton, NamButton };
