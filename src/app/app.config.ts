import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { provideTransloco } from "@ngneat/transloco";
import { provideTranslocoLocale } from "@ngneat/transloco-locale";
import { provideTranslocoMessageformat } from "@ngneat/transloco-messageformat";
import { ROUTES } from "./app.routes";
import { TranslocoHttpLoader } from "./transloco-loader";

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule),
    provideHttpClient(),
    provideRouter(ROUTES),
    provideTransloco({
      loader: TranslocoHttpLoader,
      config: {
        availableLangs: [
          { id: "en", label: "English" },
          { id: "es", label: "Spanish" }
        ],
        reRenderOnLangChange: true,
        fallbackLang: "es",
        defaultLang: "en",
        missingHandler: {
          useFallbackTranslation: false
        }
        // interpolation: ['<<<', '>>>']
      }
    }),
    provideTranslocoMessageformat(),
    provideTranslocoLocale({
      langToLocaleMapping: {
        en: "en-US",
        es: "es-ES"
      }
    })
  ]
};
