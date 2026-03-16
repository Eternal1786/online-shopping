// Eternal Language Manager
const translations = {
    az: {},
    en: {},
    tr: {},
    ru: {}
};

async function loadLanguage(lang) {
    try {
        const response = await fetch(../locales/${lang}.json);
        translations[lang] = await response.json();
        console.log(Language loaded: ${lang.toUpperCase()});
        updateUI(lang);
    } catch (error) {
        console.error("Error loading language file:", error);
    }
}

function updateUI(lang) {
    const data = translations[lang];
    // Bu hissə səhifədəki yazıları avtomatik dəyişəcək
    if(document.getElementById('welcome-text')) {
        document.getElementById('welcome-text').innerText = data.welcome_message;
    }
}

// Default olaraq Azərbaycan dilini başlat
loadLanguage('az');
