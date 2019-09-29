// Name saved to variable
let myName = 'Steven';

// number of US states
const US_StateCount = 50;

// storing sum of five and four
let SumFiveAndFour = 5 + 4;


function sayHello(){
	alert('Hello World');
}

sayHello();


function checkAge(name, age){
	if(age < 21){
		alert(`Sorry ${name}, you aren't old enough to view this page.`);
		// yes I know 'Sorry ' + name + 'blah blah blah' is valid
	}
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);


let favoriteVegetables = ['peppers', 'onions', 'carrots', 'celery (with my wings)' 'broccoli', '(iceberg) lettuce on my sandwiches'];

for(let i=0; i<favoriteVegetables.length; i++){
	console.log(favoriteVegetables[i]);
}



let myObjects = [
	{
		name: 'Robert',
		age: 51
	},
	{
		name: 'Lydia',
		age: 27
	},
	{
		name: 'Timothy',
		age: 19
	},
	{
		name: 'Lucy',
		age: 4
	},
	{
		name: 'Arthur',
		age: 91
	}
]


for(let i=0; i<myObjects.length; i++){
	checkAge(myObjects[i].name, myObjects[i].age);
}



function getLength(word){
	return word.split('').length;
}


let deWorld = getLength('Hello world');

if(deWorld % 2 == 0){
	console.log('The world is nice and even!');
}else{
	console.log('The world is an odd place!')
}






