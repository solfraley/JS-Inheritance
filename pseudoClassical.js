
//PSEUDOCLASSICAL INSTANTIATION:
//pseudo-classical inheritance example using the "new" operator
var Pet = function(name, type, address){
	//these will be has own properties of all instances
  this.name = name;
  this.type = type;
  this.address = address;
  this.hunger = 10;
  this.wait = 0;
};
//Instances will delegate to these methods(public methods)
Pet.prototype.getAddress = function(){
	return this.address;
};
Pet.prototype.sayName = function(){
	console.log('Hello, my name is ' + this.name);
};
Pet.prototype.eat = function(){  
	if(this.hunger){
      this.hunger--;
	  console.log("Thank You")
	} 
	else {
		this.wait++;  
		console.log("No thanks, I've eaten");
		if(this.wait == 10){
			this.wait = 0;
			this.hunger = 10;
		}
	}
};
//sub-class constructor
var Dog = function(name, address){
	//set up 'hasOwnProperties' for the sub-class
	//call the parent constructor function binding context to the Dog instance
	Pet.call(this, name, "dog", address)
	this.bark = "woof-woof";
};
//set up properties that the sub-class instances will delegate to
Dog.prototype = Object.create(Pet.prototype);//setting the subclass prototype with a Pet instance
Dog.prototype.constructor = Dog; //manually "correct" our constructor
Dog.prototype.barkName = function (){
  console.log(this.bark+"-"+this.name+"-"+this.bark);
};
// instantiation 
var janeHome = "1812 west 84th, Summerset, CA";
var janesCat = new Pet("tiger", "cat", janeHome);
var fido = new Dog("fido", "pleasantville, USA");
var trevorsDog = new Pet("bingo", "dog", "357 nomad St");
var bingo = new Dog(trevorsDog["name"], trevorsDog.address);
