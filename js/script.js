const messageParts = {
    name: ['Bryan', 'Melissa', 'Joe', 'Ferdinand', 'Lisa', 'Sophie', 'Max', 'Anne', 'Joachim', 'Tylor', 'Alasdair'],
    cabin: ['in coach', 'in premium eco', 'in business', 'in first', ' in the cargo compartment', 'on the wing'],
    destination: ['New York', 'San Francisco', 'Hamburg', 'Berlin', 'Paris', 'Miami', 'Shanghai', 'Madeira', 'London', 'the Moon', 'Tokyo', 'Hong Kong', 'Sydney'],
    airline: ['Delta', 'Lufthansa', 'British Airways', 'American Airlines', 'Avianca', 'Air China', 'Emirates', 'Appollo 11', 'Connect Air', 'Ryanair',],
}

const randomNumberSelector = (string) => {
    return randomNumber = Math.floor(Math.random()*string.length);
}

const mixedMessage = () => {
    
}

randomNumberSelector(messageParts.name);