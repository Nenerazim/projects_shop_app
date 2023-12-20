class ValidationClass {
    checkNotEmpty(value: string): string | null {
        if (!value.length) {
            return 'Поле не может быть пустым'
        }
        return null
    }

    checkEmail(value: string): string | null {
        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
        if (!reg.test(value)) {
            return 'Не валидный email'
        }
        return null
    }

    checkPassword(value: string): string | null {
        let regex = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])[a-zA-Z0-9!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]{8,}$/
        if (value.length < 8) {
            return 'Не короче 8 символов'
        }
        if (!regex.test(value)) {
            return 'Пароль не достаточно сильный'
        }
        return null
    }

    checkNumber(value: string): string | null {
        let regex = /^[0-9]{1,}$/
        if (!regex.test(value)) {
            return 'Только цифры'
        }
        return null
    }

    validator(type: string, value: string): string | null {
        let response = null as any
        switch (type) {
            case 'email':
                response = this.checkEmail(value)
            break
            case 'empty':
                response = this.checkNotEmpty(value)
            break
            case 'password':
                response = this.checkPassword(value)
            break
            case 'number':
                response = this.checkNumber(value)
            break
        }
        return response
    }

    validate(rules: Object, fields: any): boolean | Object {
        let errors: any = {}
        let rulesArr = Object.entries(rules)
        for (let i = 0; i < rulesArr.length; i++) {
            let value = fields[rulesArr[i][0]] === undefined ? '' : String(fields[rulesArr[i][0]])
            let validationRules = rulesArr[i][1]
            for (let j = 0; j < validationRules.length; j++) {
                let valid = this.validator(validationRules[j], value)
                if (valid !== null) {
                    errors[rulesArr[i][0]] = valid
                } 
            }
        }
        if (Object.keys(errors).length) {
            return errors
        }
        return true
    }
}

export default ValidationClass