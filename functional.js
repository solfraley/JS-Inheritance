//FUNCTIONAL CLASS DEFINITION:
//extending properties saves you from having to add each one individually.
var petMaker = function(name, type, address){
  var pet = {};
    pet.name = name;
    pet.type = type;
    pet.address = address;
    extend(pet, petMaker.petMethods);
    return pet;
};
//define a global extend method to easily add our methods object to the class
var extend = function(to, from){
    for (var key in from){
        to[key] = from[key];
    }
};

//this object will contain public methods
petMaker.petMethods = {};
petMaker.petMethods.getAddress = function() {
    return this.address;
};
petMaker.petMethods.sayName = function(){
    console.log('Hello, my name is ' + this.name);
};
petMaker.petMethods.eat = function(){
    if(this.hunger){
        this.hunger--;
        console.log("Thank You");
    } 
    else {
        this.digest++;  
        console.log("No thanks, I've eaten");
        if(this.digest == 10){
            this.digest = 0;
            this.hunger = 10;
        }
    }
};
//child class maker function definition
var dogMaker = function(name, address){
    var dog = petMaker(name, "dog", address);
    dog.bark = "woof-woof";
    extend(dog, dogMaker.methods);
    return dog;
};
dogMaker.methods = {};
dogMaker.methods.barkName = function (){
    console.log(this.bark+'-'+this.name+'-'+this.bark);
};
//these initial values will be inherited by the instances.  
//The eat method will only modify the values specific to the instance that called eat().      
petMaker.petMethods.hunger = 10;
petMaker.petMethods.digest = 0;
var mikesSnake = petMaker("slimey", "snake", "mikes room");
var fido = dogMaker("fido", "pleasantville, USA");






