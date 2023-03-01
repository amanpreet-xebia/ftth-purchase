const errorTranslations = (errorEn: string, errorAr: string) => {
  return localStorage.getItem('selectedLanguage') === 'en' ? errorEn : errorAr;
};
export default errorTranslations;
