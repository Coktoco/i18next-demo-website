async function initializeI18next() {
  try {
    await i18next
      .use(i18nextHttpBackend)
      .use(i18nextBrowserLanguageDetector)
      .init({
        ns: ['translation'], // Dodaj inne przestrzenie nazw, jeśli są używane
        defaultNS: 'translation',
        fallbackLng: 'en',
        debug: true,
        interpolation: {
          escapeValue: false
        },
        backend: {
          loadPath: '/locales/{{lng}}/{{ns}}.json'
        }
      });
    
    updateTranslations();
  } catch (error) {
    console.error('Error initializing i18next:', error);
  }
  ScrollTrigger.refresh()
};

function updateTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.innerText = i18next.t(element.getAttribute('data-i18n'));
  });
  document.getElementById('output').innerHTML = i18next.t('greeting'); 
  document.getElementById('output1').innerText = i18next.t('welcome_user', { name: 'New user' });
  document.getElementById('output_age').innerText = i18next.t('age_message', { age: 25 });
  document.getElementById('output_items').innerText = i18next.t('items', { count: 1 });
  document.getElementById('output_items_plural').innerText = i18next.t('items', { count: 5 });

  const amount = 1234.56;
  const date = new Date(); 
  const userLocale = i18next.language || 'en-US'; 

  document.getElementById('output_date').innerText = 
    i18next.t('date', { 
      date: new Intl.DateTimeFormat(userLocale).format(date) 
    });
    
  document.getElementById('output_currency').innerText = 
  i18next.t('currency', { 
    amount: new Intl.NumberFormat(userLocale, { style: 'currency', currency: 'USD' }).format(amount) 
  });

  const langDetec = i18next.language;
  document.getElementById('detected_language').innerText = i18next.t('detected_language_message', { lang: langDetec });

  ScrollTrigger.refresh()
};
  
document.addEventListener('DOMContentLoaded', function () {
  initializeI18next();

  document.getElementById('lang-en')?.addEventListener('click', () => {
    i18next.changeLanguage('en').then(() => {
      updateTranslations();
    });
  });

  document.getElementById('lang-pl')?.addEventListener('click', () => {
    i18next.changeLanguage('pl').then(() => {
      updateTranslations();
    });
  });

  i18next.on('languageChanged', (lng) => {
    updateTranslations();
  });
});