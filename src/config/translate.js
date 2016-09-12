'use strict';

translateConfig.$inject = ['$translateProvider'];

import en from 'json!../locale/en.json';
import ru from 'json!../locale/ru.json';
import de from 'json!../locale/de.json';

export default function translateConfig($translateProvider) {
  $translateProvider
    .translations('en', en)
    .translations('ru', ru)
    .translations('de', de)
    .registerAvailableLanguageKeys(['en', 'de', 'ru'], {
      'en-US': 'en',
      'en-UK': 'en',
      'de-DE': 'de',
      'de-CH': 'de',
      'de-AT': 'de',
      'ru-RU': 'ru',
    })
    .determinePreferredLanguage()
    .fallbackLanguage('en');
}
