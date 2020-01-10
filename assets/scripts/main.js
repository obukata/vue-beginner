Vue.filter('uppercase', function(value) {
	return value.toUpperCase();
});

Vue.filter('json', function(value) {
	return JSON.stringify(value);
});

Vue.filter('max', function(value) {
	return Math.max(...value);
});

Vue.component('greeting', {
	template: '<h1>Hello! I am a component.</h1>'
});

Vue.component('button-counter', {
	data() {
		return {
			count: 0,
		}
	},
	template: '<button @click="count++">You click me {{ count }} times.</button>'
});

Vue.component('change-msg', {
	data() {
		return {
			message: 'component message'
		}
	},
	methods: {
		changeText() {
			this.message = 'Another Message'
		}
	},
	template: '<div><h1>{{ message }}</h1><button @click=changeText>Change Text</button></div>'
})

Vue.component('user-name', {
	props: ['name'],
	template: '<h1>Hello! {{ name }}</h1>'
})

new Vue ({
	el: '#app',
	data: {
		first_name: "Harry",
		last_name: "Potter",
		city: "London",
		message: "Hello World",
		num1: 100,
		num2: 300,
		htmlContent: "<div><h3>Some HTML Content</h3></div>",
		imgSrc: "https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
		date: '',
		counter: 0,
		colorText: "white",
		bgColor: "red",
		seen: "",
		dataToggle: true,
		datas: [
			{
				name: "Harry Potter",
				age: 25,
			},
			{
				name: "Ron weasley",
				age: 22,
			},
			{
				name: "Hermione Granger",
				age: 20,
			},
			{
				name: "Luna Lovegood",
				age: 24,
			},
		],
		name : "",
		checked: false,
		checkedNames: [],
		picked: '',
		selected: [],
		selectDatas: ["Harry", "Ron", "Hermione", "Luna"],
		inputNum1: 10,
		inputNum2: 20,
		textareaData: '',
		tax: '',
		unTax: '',
		upperMessage: 'hello world',
		user: {
			username: "obukata",
			email: "obukata@mj-star.jp",
			country: "Japan",
		},
		nos: [100, 200, 300, 75, 400],
	},
	components: {
		'local-comp': {
			template: '<h1>Local component</h1>'
		}
	},
	filters: {
		capitalize(value) {
			return value.charAt(0).toUpperCase() + value.slice(1);
		},
		countLetters(value) {
			return value.length;
		},
		repeatText(string, times) {
			return string.repeat(times);
		}
	},
	computed: {
		greet() {
			return "Hello I'm " + this.first_name + " " + this.last_name + " from " + this.city;
		},
		now() {
			return Date().toLocaleString();
		},
		stringRev() {
			return this.message.split('').reverse().join('');
		},
		sum() {
			return this.num1 + this.num2;
		},
		mul() {
			return this.num1 * this.num2;
		},
		inputSum() {
			return this.inputNum1 + this.inputNum2;
		}
	},
	methods: {
		changeText() {
			this.message = "Another Message";
		},
		showDate() {
			this.date = Date();
		},
		counterData() {
			this.counter = this.counter + 5;
		},
		changeColor() {
			this.bgColor = "blue";
		},
	},
})