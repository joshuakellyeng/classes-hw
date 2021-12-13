//RADIO SHUFFLE OBJECT

const Radio = {
	station: [
		{
			name: 'Hot 97',
			song: [
				{
					artist: 'Adele',
					title: 'Hello',
				},
				{
					artist: 'The Roots',
					title: 'The Seed 2.0',
				},
			],
		},
		{
			name: 'Z-100',
			song: [
				{
					artist: 'Kanye West',
					title: 'The Life of Pablo',
				},
				{
					artist: 'The Beatles',
					title: 'Hey Jude',
				},
			],
		},
		{
			name: 'FlyLo Radio',
			song: [
				{
					artist: 'ThunderCat',
					title: 'Dragonball Durag',
				},
				{
					artist: 'Tyler the Creator',
					title: 'WUSYANAME',
				},
			],
		},
	],
	shuffle() {
		let i = Math.floor(Math.random() * 3);
		let s = Math.floor(Math.random() * 2);
		//  console.log(Radio.station[i].song[s])
		return `Now playing ${Radio.station[i].song[s].title} by ${Radio.station[i].song[s].artist} on ${Radio.station[i].name}.`;
	},
};

console.log(Radio.shuffle());

class Animal {
	constructor(name, color, age, legs) {
		this.name = name;
		this.color = color;
		this.age = age;
		this.legs = legs;
	}
	animalCry() {
		console.log('| ╥ ﹏ ╥ |');
	}
	noSnacksForYou() {
		console.log('| ╥ _ ╥ |');
	}
	clawAttack() {
		console.log('RAAAAAWRRRRR!! *ฅ^•ﻌ•^ฅ*');
	}
	stalkPrey() {
		console.log('ʕ •ᴥ•ʔ');
	}
}

const kitty = new Animal('Whiskers', 'black', 2, 4);

kitty.noSnacksForYou();

kitty.animalCry();

kitty.clawAttack();

kitty.stalkPrey();

class JungleCats extends Animal {
	constructor(name, color, age, legs, lengthOfFangsInInches) {
		super(name, color, age, legs);
		this.lengthOfFangsInInches = lengthOfFangsInInches;
	}
	stalkPrey() {
		console.log('*deafening silence*');
	}
}

const jaguar = new JungleCats('Zaheer', 'black', 5, 4, 5);

console.log(jaguar.lengthOfFangsInInches);

console.log(jaguar.name);

jaguar.stalkPrey();
