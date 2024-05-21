const en = require("./translations.en.json");
const zh = require("./translations.zh.json");

const i18n = {
  translations: {
    en: en.i18n,
    cn: zh.i18n,
  },
  defaultLang: "en",
  useBrowserDefault: true,
};

module.exports = i18n;
