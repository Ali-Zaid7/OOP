//These are different examples of OOP for practice these are not inter related
//to each other So I commented all

// // let person: object ={
// //     name: "Ali",
// //     age:30,
// //     occupation:"Developer"
// // };



// // class Point {
// //    x:number =10;
// //    y:number =20;

// //    constructor(x:number , y:number){
// //    this.x =x;
// //    this.y =y;
// //    }
// // }

// // const pt =new Point(2,3) ;
// // const pt2 = new Point(4,6);


// // // this is undefined in node js while defined in browser indicating the value of this is dependent on
// // // scope (position) this = {empty}

// // console.log(pt.x);

// // console.log(pt2);

// // class Square {
// //     pt:Point;

// //     constructor(pt:Point , num:number);
// //     constructor(pt:Point , num:string);
// //     constructor(pt:any , num:any){
     
// //         this.pt=pt;
// //     }
// //     PrintPoint() {
// //         console.log('Your point is ',pt);
// //     }
// // }


// // const pt1 = new Point(20,10);
// // const  sq1 = new Square(pt,4);
// // sq1.PrintPoint()


// // const myCar = {
// //     Brand :'Toyota',
// //     Model :"Corolla",
// //     Year :2024
// // }
// // console.log(myCar);


// // class myCar  {
// //     Brand='Toyota'
// //     Model ="Corolla"
// //     Year =2026
// // }
// // const car = newmyCar();
// // console.log(car);


// // Properties: Characteristics/attributes of an object.
// // Method: Actions and behavior that object can perform.

// //  type myCar = {
// //         Brand:string,
// //         Model :string,
// //         Year :number 
// //  }
 
// //  const myCaree:myCar = {
// //     Brand:'Toyota',
// //     Model :"Corolla",
// //     Year :2026
// // }
// // console.log(myCaree);


// //interface myCarType  {
// //     Brand:string,
// //     Model :string,
// //     Year :number 
// // }

// // class myCaree implements myCarType  {
// // Brand='Toyota'
// // Model ="Corolla"
// // Year =2026
// // };

// // const myCar ={
// // brand:'Toyota',
// // Model:'Corolla',
// // Year: 2026
// // }

// // function DisplayDetail () {
// //     console.log(`Car ${myCar.brand} ${myCar.Model} ,Year ${myCar.Year}`);//Method
// // }

// // console.log(myCar);
// // DisplayDetail();


// // const cCar ={
// //     brand:'Toyota',
// //     Model:'Corolla',
// //     Year: 2026,
// //     DisplayDetail: function () {
// //         console.log(`Car ${myCar.brand} ${myCar.Model} ,Year ${myCar.Year}`);
// //     }}
    
// //     console.log(myCar);
// //     myCar.DisplayDetail();







// //ENCAPSULAATION(Storage box)
// //is the bundling of data properties and methods that operate on the data into a single
// //unit or class
// //Purpose : Protects data by restricting access to it.

// // class Car {
// //     public brand:string = "Toyota";
// //     public model:string = "Corolla";
// //     public year:number = 2024;
// //     public DisplayDetail() {
// //         console.log(`Car: ${this.brand} ${this.model}, Year${this.year}`);
// //     }
// // }
// // const myCar = new Car();
// // // console.log(myCar.model);//Output:Toyota
// // myCar.DisplayDetail();//Output:Car: Toyota Corolla, Year2024
// // console.log(myCar);


// // class car {
// //     public brand:string = "Toyota";
// //    public model:string = "Corolla";
// //     public year:number = 2024;
// //     public displayDetail () {
// //         console.log(`Car model ${this.brand}, brand ${this.brand} and Year ${this.year}`);
// //     }
// // }
// // const myCar = new car();
// // console.log(myCar.brand);//Toyota
// // console.log(myCar.model);
// // console.log(myCar.year);

// //A capsule contain medicine can only be access through opening it.

// // class car {
// //     public brand:string = "Toyota";
// //    public model:string = "Corolla";
// //     public year:number = 2024;
// //     public displayDetail () {
// //         console.log(`Car model ${this.brand}, brand ${this.brand} and Year ${this.year}`);
// //     }
// // }
// // const myCar = new car();
// // myCar.displayDetail();

// //Implementing class
// //In typescript interfaces do not directly support access modifier like public,private
// //or protected because interfaces are meant to define the shape or contract of an 
// //object, not its implementaion details. Access modifiers are part of the implementation,
// //and interfaces are more about the structure of data. 


// // interface carInterface {
// //     brand:string
// //     model:string
// //     year:number
// //     displayDetail: ()=>void
// // }

// // class Car implements carInterface { 
// //      brand: string = "Toyota";  
// //      model: string = "Corolla";
// //      year: number = 2024;
// //     displayDetail () {
// //         console.log(`Car ${this.brand} ${this.model} and Year ${this.year}`);
// //     }
// // }


//                               //CODE CRASHED!
// // interface carInterface {
// //     brand:string
// //     model:string
// //     year:number
// //     displayDetail: ()=>void
// // }

// // class Car implements carInterface { //CODE CRASHED!
// //     private brand: string = "Toyota";  
// //     protected model: string = "Corolla";
// //     public year: number = 2024;
// //     displayDetail () {
// //         console.log(`Car ${this.brand} ${this.model} and Year ${this.year}`);
// //     }
// // }

//                             //CODE CRASHED2!
// // interface carInterface {
// //     private brand:string
// //     protected model:string
// //     public year:number
// //     public displayDetail: ()=>void
// // }

// // class Car implements carInterface { //CODE CRASHED!
// //     private brand: string = "Toyota";  
// //     protected model: string = "Corolla";
// //     public year: number = 2024;
// //     displayDetail () {
// //         console.log(`Car ${this.brand} ${this.model} and Year ${this.year}`);
// //     }
// // }


// // Abstraction:-(an ATM machine)
// // Abstract class cannot be instantaniated and are meant to be subclassed.

// // Purpose:Provied a common base class with some implemented functionality


// // abstract class CarDesign {
// //     private brand: string = 'Toyota';
// //     private model: string = 'Corolla';
// //     year: number = 2024;
// //     abstract displayDetail(): void;//Unsolved error to me
// // }
// // let design = new carDesign();





// //Object context method:When a method is called on an object,this refers to the object
// +
// ////////////////////////xxx

// // //The new Keyword
// // The new keyword is used to create a new instance of an object that is defined by a constructor
// // function when new is used

// //  class Car {         //A new object is created
// //     brand:string     //The this keyword inside the constructor is set to this new object                   
// //     constructor(brand:string) {this.brand = brand;}//The constructor function is executed
// //  }
// //  const myCar = new Car('Toyota');  //The newly created object is returned unless the 
// // console.log(myCar.brand);  //constructor explicitly return  another object




//  class CarDesign {
//   private brand:string = 'Toyota';
//   protected model:string = 'Corolla';
//   year:number =2024;
//    displayDetail():void;
// }

// class Car extends CarDesign {
//   public displayDetail() {
//     console.log(`${this.model}  and ${this.year}`);
//   }}
// const myCar = new  Car();
// myCar.displayDetail()