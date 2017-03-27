// Bad import, webpack 2 doesn't remove the unused harmony
import { sum, round } from 'lodash-es';

// Import separately to reduce bundle size
// import sum from 'lodash-es/sum';
// import round from 'lodash-es/round';

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
