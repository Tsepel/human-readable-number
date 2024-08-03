module.exports = function toReadable (number) {

    const getDigitName = (digit) => {
        switch (digit) {
            case 0:
                return 'zero';
                break;
            case 1:
                return 'one';
                break;
            case 2:
                return 'two';
                break;
            case 3:
                return 'three';
                break;
            case 4:
                return 'four';
                break;
            case 5:
                return 'five';
                break;
            case 6:
                return 'six';
                break;
            case 7:
                return 'seven';
                break;
            case 8:
                return 'eight';
                break;
            case 9:
                return 'nine';
                break;
            default:
                return '';
        }
    }

    const getTensName = (digit) => {
        switch (digit) {
            case 2:
                return 'twenty';
                break;
            case 3:
                return 'thirty';
                break;
            case 4:
                return 'forty';
                break;
            case 5:
                return 'fifty';
                break;
            case 6:
                return 'sixty';
                break;
            case 7:
                return 'seventy';
                break;
            case 8:
                return 'eighty';
                break;
            case 9:
                return 'ninety';
                break;
            default:
                return '';
        }
    }

    const getTeenName = (num) => {
        switch (num) {
            case 10:
                return 'ten';
                break;
            case 11:
                return 'eleven';
                break;
            case 12:
                return 'twelve';
                break;
            case 13:
                return 'thirteen';
                break;
            case 14:
                return 'fourteen';
                break;
            case 15:
                return 'fifteen';
                break;
            case 16:
                return 'sixteen';
                break;
            case 17:
                return 'seventeen';
                break;
            case 18:
                return 'eighteen';
                break;
            case 19:
                return 'nineteen';
                break;
            default:
                return '';
        }
    }

    
    if (number < 10) {
        return getDigitName(number);
    }   else if (number >= 20 && number <= 999) {
            if (number >= 100) { //если есть сотни
                if (number / 10 % 10 >= 2) { //если есть десятки от двух и старше
                    if (number % 10 !== 0) { //если есть единицы
                        return getDigitName(Math.floor(number / 100 % 10)) + ' hundred ' + getTensName(Math.floor(number % 100 / 10)) + ' ' + getDigitName(number % 10); //напр., 365
                    } else { // если нет единиц
                        return getDigitName(Math.floor(number / 100 % 10)) + ' hundred ' + getTensName(Math.floor(number % 100 / 10)); //напр., 360
                    }
                } else if (number / 10 % 10 >= 1) { //если есть десятки от 1 до двух
                    return getDigitName(Math.floor(number / 100 % 10)) + ' hundred ' + getTeenName(number % 100); //напр., 315
                }
                else { //если нет десятков
                    if (number % 10 !== 0) { //если есть единицы
                        return getDigitName(Math.floor(number / 100 % 10)) + ' hundred ' + getDigitName(number % 10); //напр., 305
                    } else { // если нет единиц
                        return getDigitName(Math.floor(number / 100 % 10)) + ' hundred'; //напр., 300
                    }
                }
            } else { //если нет сотен, только десятки
                if (number % 10 !== 0) { //если есть единицы
                    return getTensName(Math.floor(number % 100 / 10)) + ' ' + getDigitName(number % 10); //напр., 65
                } else { // если нет единиц
                    return getTensName(Math.floor(number % 100 / 10)); //напр., 60
                }
            }
    }   else if (number >= 10 || number <= 19) { //если число от 10 до 19
            return getTeenName(number);
    }   else { //пришло не число от 0 до 999
            return 'please enter a number from 0 to 999';
    }
}