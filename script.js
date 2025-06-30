class Person {
    constructor(name, age) {
        this._name = name; // Private variable for name
        this._age = age;   // Private variable for age
    }

    get name() {
        return this._name; // Getter for name
    }

    set age(newAge) {
        if (newAge < 0) {
            console.error("Age cannot be negative"); // Validation for age
        } else {
            this._age = newAge; // Setter for age
        }
    }

    get age() {
        return this._age; // Getter for age
    }
}

class Student extends Person {
    study() {
        console.log(`${this.name} is studying`); // Log message for studying
    }
}

class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching`); // Log message for teaching
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

// Example usage:
const person = new Person("John", 25);
console.log(person.name);  // Output: John
console.log(person.age);   // Output: 25

person.age = 30;  // Using the setter to change the age
console.log(person.age);  // Output: 30

const student = new Student("Alice", 22);
student.study();  // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach();  // Output: Bob is teaching

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
