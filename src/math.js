// Better import for tree-shaking
import sum from 'lodash-es/sum';
import round from 'lodash-es/round';

// Webpack 2 doesn't remove unused harmony :(
// import { sum, round } from 'lodash-es';

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
