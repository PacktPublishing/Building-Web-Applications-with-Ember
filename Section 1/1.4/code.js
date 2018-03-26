// Console code
const Animal = Ember.Object.extend({
	greet(sound){
		return sound;
	}
});

const Dog = Animal.extend({
	greet(sound){
		return `bow wow ${sound}`;
	}
})

let animal = Animal.create();

let dog = Dog.create({
	name: 'Bruzo'
});

// animal.greet('neigh');

// dog.greet('arlston');
