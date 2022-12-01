const __ = (path, lang) => {
    const TRANSLATION_NOT_FOUND = {ar:"الترجمة غير متاحة", en:"Translation is not available"}[lang]
    const translations = {
        alerts: {
            win: {
                ar: "لقد فوزت",
                en: "you win"
            },
            lose: {
                ar: "لقد خسرت",
                en: "you lose"
            },
            draw: {
                ar: "لقد تعادلت",
                en: "It's a draw"
            }
        },
        auth: {
            login: {
                title: {
                    ar: "قم بتسجيل الدخول للاستمرار",
                    en: "login to continue"
                }
            },
            register: {
                title: {
                    ar: "قم بإنشاء حساب للاستمرار",
                    en: "create an account to continue"
                }
            }
        }
    }

    const pathAsArray = path.split(".")
    let currentTranslation = translations
    for(let i = 0; i < pathAsArray.length; i++){
        if(currentTranslation[pathAsArray[i]]) currentTranslation = currentTranslation[pathAsArray[i]]
        else return TRANSLATION_NOT_FOUND
    }

    return currentTranslation[lang] === undefined ? TRANSLATION_NOT_FOUND : currentTranslation[lang]
}

console.log(__('alerts.win', 'ar'))
console.log(__('alerts.win', 'en'))
console.log(__('alerts.lose', 'ar'))
console.log(__('alerts.lose', 'en'))
console.log(__('alerts.draw', 'ar'))
console.log(__('alerts.draw', 'en'))
console.log(__('auth.login.title', 'ar'))
console.log(__('auth.login.title', 'en'))
console.log(__('auth.register.title', 'ar'))
console.log(__('auth.register.title', 'en'))

// that's how to handle errors
console.log(__('alerts.register.title', 'ar'))
console.log(__('alerts.register.title', 'en'))
console.log(__('auth.register', 'ar'))
console.log(__('auth.register', 'en'))
console.log(__('auth.register.title.span', 'ar'))
console.log(__('auth.register.title.span', 'en'))