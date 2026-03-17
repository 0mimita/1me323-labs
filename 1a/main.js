//Alias import
import divide, { add as addition, subtract, multiply, PI, SECRET_SAUCE } from './utils.js';
import { PI as piValue } from './constants.js';


console.log(addition(5, 3));
console.log(subtract(5, 3));
console.log(multiply(5, 3));
console.log(divide(20, 4));

console.log(SECRET_SAUCE);
console.log(`PI är ungefär ${PI}`);
console.log(piValue);

// Namespace import
import * as MathUtils from './utils.js'
import * as Config from './constants.js'

console.log(MathUtils.add(2, 3));
console.log(MathUtils.multiply(4, 5));
console.log(Config.GREETING);

//kommentar