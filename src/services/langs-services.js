import messages from "@/locales/messages";

class LanguagesService{
    getAll(){
        return Object.keys(messages).map(code => ({ code: code, name: messages[code].name }))
    }

    currentLanguageCode(){
        return localStorage.getItem('lang') || '';
    }

    save(langCode){
        localStorage.setItem('lang', langCode);
    }
}

export default new LanguagesService();