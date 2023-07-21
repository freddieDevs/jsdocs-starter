const { add, divide, multiply, subtract} = require ("./calculator");

/**
 * @file index.js is the root file for this example app
 * @author Kamau Wanjiru
 * @see <a href="https://traversymedia.com">Traversy Medial</a>
 */

/**
 * Student Name
 * @type {string}
 */
const studentName = 'John Doe';

/**
 * Array of grades
 * @type {Array<number>}
 */
const grades = [98, 97.7, 76, 89];

/**
 * Todo Object
 * @type {{id: number|string, text: string}}
 */
const todo = {
  id: 1,
  text: 'Hello',
}

/**
 * 
 * @param {number} amount - Total Amount
 * @param {number} tax -Tax percentage
 * @returns {string} -Total amount with a dollar sign
 */
const calculateTax = (amount, tax) => {
  return `$${amount + tax * amount}`;
}


/**
 *  A student
 * @typedef {object} Student
 * @property {number} id -Student ID
 * @property {string} name -Student name
 * @property {number|number} [age] -Student age (optional)
 * @property {boolean} isActive -Student is active
 */

/**
 * @type {Student}
 */
const student = {
  id: 1,
  name: 'John Doe',
  age: 20,
  isActive: true
}


/**
 * Class to create a person object
 */
class Person {
  /**
   * 
   * @param {Object} personInfo -Info about the person 
   */
  constructor(personInfo) {
    /**
     * @property {String} name -Persons name
     */
    this.name = personInfo.name;
    /**
     * @property {String} age =Persons's age
     */
    this.age = personInfo.age
  }
  /**
   * @property {Function} greet A greeting with name and age
   * @returns  void
   */
  greet(){
    console.log(`Hello, my name is ${this.name} and i am ${this.age}`);
  }
}

/**
 * See {@link Person}
 */
const person1 = new Person({
  name: 'John Doe',
  age: 30
});
// console.log(person1.greet());

console.log(add(20, 50));

