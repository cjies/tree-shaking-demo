// Bad import, webpack 2 still doesn't remove the unused harmony :(
import { sum, round } from 'lodash-es';

// Better import for tree-shaking
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
