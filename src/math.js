// Webpack 2 doesn't remove unused code itself :(
import { sum, round } from 'lodash-es';

function sumAll(array) {
    return sum(array);
}

function rounding(number, precision = 0) {
    return round(number, precision);
}

export {
    sumAll,
    rounding
};
