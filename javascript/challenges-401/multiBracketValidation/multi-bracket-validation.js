'use strict';

module.exports = function multiBracketValidation(str) {
    if (typeof str !== 'string') { return false };
    let reg = /[{[(]/g
    let round = 0;
    let curly = 0;
    let square = 0;
    if (reg.test(str)) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '(') { round++ }
            if (str[i] === '{') { curly++ }
            if (str[i] === '[') { square++ }
            if (str[i] === ']' && curly === 0 && round === 0) { if (square > 0) { square-- } else { return false }; }
            if (str[i] === '}' && square === 0 && round === 0) { if (curly > 0) { curly-- } else { return false }; }
            if (str[i] === ')' && square === 0 && curly === 0) { if (round > 0) { round-- } else { return false }; }
        }
        if (round === 0 && curly === 0 && square === 0) {
            return true;
        } else { return false };
    }

};