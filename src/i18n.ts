import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      tr : {
        translation : {
          Urun_Adi : "Ürün Adı",
          tema : "Tema",
          dil : "Dil",
          adet : "Adet",
          birimGider : "Gider",
          birimSatış : "Satış",
          kâr : "Kâr",
          kasa : "Kasa",
          sil : "Sil",
          urun_hesaplama : "ÜRÜN HESAPLAMA",
          gider : "Gider",
          kârMarjı : "Kâr Marjı",
          urun_listesi : "ÜRÜN LİSTESİ",
          excel : "Excel'e Aktar",
          ekstraGider : "Gider",
          alış : "Alış",
          ekle : "EKLE",
          para : "Para Birimi",
          kurİnput : "Çevirmek istediğiniz miktarı giriniz..",
          cevirici : "PARA BİRİMİ ÇEVİRİCİ"
        },
      },
      en : {
        translation : {
          Urun_Adi : "Product Name",
          tema : "Theme",
          dil : "Language",
          adet : "Piece",
          birimGider : "Cost",
          birimSatış : "Price",
          kâr : "Profit",
          kasa : "Total",
          sil : "Delete",
          urun_hesaplama : "PRODUCT CALCULATION",
          gider : "Expense",
          kârMarjı : "Profit Margin",
          urun_listesi : "PRODUCT LİST",
          excel : "Export to Excel",
          ekstraGider : "Cost",
          alış : "Buying",
          ekle : "ADD",
          para : "Currency",
          kurİnput : "Enter the amount you want to convert..",
          cevirici : "CURRENCY CONVERTER"

        }
      }
    }
  });

  export default i18n;