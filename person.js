//Write a “person” class to hold all the details.


class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        if (age < 0) {
            console.log('Age cannot be negative.');
        } else {
            this.age = age;
        }
    }

    getGender() {
        return this.gender;
    }

    setGender(gender) {
        this.gender = gender;
    }

    toString() {
        return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
    }
}

let person = new Person('Alice', 30, 'female');
console.log(person.toString()); // Name: Alice, Age: 30, Gender: female

person.setName('Bob');
person.setAge(32);
person.setGender('male');
console.log(person.toString()); // Name: Bob, Age: 32, Gender: male