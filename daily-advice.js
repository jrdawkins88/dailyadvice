// new Date(2016, 0, 5, 12)
// January 5th at 12PM
// var today = new Date(2016, 0, 5, 7);
var today = new Date();
var month = today.getMonth();
var dayOfWeek = today.getDay();
var hour = today.getHours();
var timeGreeting; 
var dayGreeting;
var greeting;

console.log('Hello! Here is some advice for the day:');

// If it's the morning
if (hour >= 0 && hour <= 8) {
	greeting = 'Drink lots of coffee this morning';
} else if (hour > 8 && hour <= 16) { // If it's midday
	greeting = 'Eat a light lunch';
} else { // If it's evening or night
	greeting = 'Enjoy your evening';
}

// If it's a workday (M-Th)
if (dayOfWeek >= 1 && dayOfWeek <= 4) {
	dayGreeting = 'Press on through the work week';
} else if (dayOfWeek === 5) { // If it's Fri or Sat
	dayGreeting = 'Enjoy the weekend';
} else {
	dayGreeting = 'Enjoy your Sunday Funday';
}

// If it's winter
if (month >= 0 && month <= 2) {
	// and it's morning
	if (hour >= 0 && hour <= 8) {
		timeGreeting = 'For breakfast have a warm coffee with that egg mcmuffin';
	} else { // fallback - we still know that it's winter
		timeGreeting = 'Try to stay warm';
	}
}

// If it's spring
if (month > 3 && month <= 5) {
	if (hour > 8 && hour <= 16) { // and lunchtime
		timeGreeting = 'drink a mimosa at brunch';
	} else {
		timeGreeting = 'Enjoy this spring weather anytime of day';
	}
}

// If it's summer
if (month > 6 && month <= 8) {
	if (hour > 8 && hour <= 16) { // and lunchtime
		timeGreeting = 'Eat lunch by the pool';
	} else {
		timeGreeting = 'Stay hydrated this summer';
	}
}

// If it's fall
if (month > 9 && month <= 11) {
	if (hour > 8 && hour <= 16) { // and lunchtime
		timeGreeting = 'Have some pumpkin pie after lunch';
	} else {
		timeGreeting = 'Go on a walk at somepoint today and enjoy the fall colors';
	}
}

console.log(greeting);
console.log(dayGreeting);
console.log(timeGreeting);

