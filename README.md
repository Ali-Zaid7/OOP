🚗 TypeScript OOP Practice Examples
Welcome to the TypeScript OOP Practice repository! This project contains various Object-Oriented Programming (OOP) 
examples in TypeScript. It covers essential OOP concepts like classes, encapsulation, interfaces, and abstract classes. These examples are designed to help you practice and understand OOP principles in TypeScript with clear, concise code snippets.

🌟 Features
Class Implementation: Learn how to define and use classes, constructors, and methods.
Encapsulation: Understand how to protect class properties using public, private, and protected access modifiers.
Interfaces: Explore how to define contracts using interfaces and enforce consistency across classes.
Abstract Classes: Grasp the use of abstract classes as base templates for other classes.
Object Context (this): Deep dive into how the this keyword works in different object contexts.
Functional Programming Integration: Enhance your OOP knowledge with examples of functional programming methods like map, filter, 
and reduce.


📝 Examples
1. Class Implementation
This example demonstrates the creation of a Car class, where properties like brand, model, and year are defined, and methods are
used to access and manipulate them.

```
class Car {
    public brand: string = "Toyota";
    public model: string = "Corolla";
    public year: number = 2024;

    public displayDetail() {
        console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}`);
    }
}

const myCar = new Car();
myCar.displayDetail(); // Output: Car: Toyota Corolla, Year: 2024
```

2. Encapsulation
This example illustrates how to use encapsulation to restrict access to class properties, providing a clear interface
for interacting with them.
```
class Car {
    private brand: string = "Toyota";
    private model: string = "Corolla";
    private year: number = 2024;

    public displayDetail() {
        console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}`);
    }
}

const myCar = new Car();
myCar.displayDetail(); // Output: Car: Toyota Corolla, Year: 2024
```

3. Interface Usage
Interfaces help in defining the structure of objects, ensuring consistency across classes that implement them.
```
interface carInterface {
    brand: string;
    model: string;
    year: number;
    displayDetail: () => void;
}

class Car implements carInterface {
    brand: string = "Toyota";
    model: string = "Corolla";
    year: number = 2024;

    displayDetail() {
        console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}`);
    }
}

const myCar = new Car();
myCar.displayDetail(); // Output: Car: Toyota Corolla, Year: 2024
```

4. Abstract Class
Abstract classes define a blueprint for subclasses and can have both implemented and unimplemented methods.
```
abstract class CarDesign {
    protected model: string = 'Corolla';
    year: number = 2024;
    abstract displayDetail(): void;
}

class Car extends CarDesign {
    public displayDetail() {
        console.log(`${this.model} and ${this.year}`);
    }
}

const myCar = new Car();
myCar.displayDetail(); // Output: Corolla and 2024
```


🎯 Key Concepts Covered
Encapsulation: Protecting internal class properties and only allowing access through defined methods.
Abstraction: Using abstract classes to create a base structure with common functionality.
Inheritance: Creating subclasses that inherit properties and methods from a parent class.
Polymorphism: Demonstrating how objects can take on many forms by using interfaces and abstract classes.
Interfaces: Enforcing structure through contracts that classes must adhere to.
