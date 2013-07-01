//PROTOTYPAL INSTANTIATION:
var pet = {};//parent class prototype 
//define a create method in the parent class
pet.create = function (name, type, address){
	//creates new object with prototype of pet
  var instance = Object.create(this); 
  instance.name = name; 
  instance.type = type;
  instance.address = address;
  instance.hunger = 10;
  instance.wait = 0;
  return instance;
};
//public methods
pet.getAddress = function(){
	return this.address;
}
pet.sayName = function (){
  console.log('Hello, my name is ' + this.name);
}
pet.eat = function(){
	if(this.hunger){
		this.hunger--;
		console.log("Thank You")
	} 
	else {
		this.wait++;  
		console.log("No thanks, I've eaten");
		if(this.wait == 10){
			this.wait = 0;
			this.hunger =10;
		}
	}
};
// child class prototype 
var dog = Object.create(pet); //creates a new sub class object called dog whos prototype is pet.
dog.create = function (name, address){
  var instance = pet.create.call(this, name, 'dog', address);
  instance.bark = "woof-woof";
  return instance; 
};
dog.barkName = function (){
  console.log(this.bark+"-"+this.name+"-"+this.bark);
};
// instantiation 
var janeHome = "1812 west 84th, Summerset, CA"
var janesCat = pet.create("tiger", "cat", janeHome);
var fido = dog.create ("fido", "pleasantville, USA")
var trevorsDog = pet.create ("bingo", "dog", "357 nomad St");
var bingo = dog.create(trevorsDog[name], trevorsDog.address);

