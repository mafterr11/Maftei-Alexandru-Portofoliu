// i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Ensure a valid locale is used
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: 'Europe/Bucharest', // Adjust as needed
    now: new Date(),
    formats: {
      dateTime: {
        short: { day: 'numeric', month: 'short', year: 'numeric' },
      },
      number: {
        precise: { maximumFractionDigits: 2 },
      },
    },
    onError(error) {
      console.error('Intl Error:', error);
    },
    getMessageFallback({ namespace, key }) {
      return `${namespace}.${key} is not translated`;
    },
  };
});
