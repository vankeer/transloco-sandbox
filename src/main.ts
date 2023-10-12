import "@angular/platform-browser-dynamic";
import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";

bootstrapApplication(AppComponent, appConfig)
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    window["ngRef"]?.destroy();
    window["ngRef"] = ref;

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));
