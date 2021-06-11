//Object containing the array building blocks.
const messageParts = {
    name: [
        'Bryan',
        'Melissa',
        'Joe',
        'Ferdinand',
        'Lisa',
        'Sophie',
        'Max',
        'Anne',
        'Joachim',
        'Tylor',
        'Alasdair',
    ],
    cabin: [
        'in coach',
        'in premium eco',
        'in business',
        'in first',
        ' in the cargo compartment',
        'on the wing',
    ],
    destination: [
        'New York',
        'San Francisco',
        'Hamburg',
        'Berlin',
        'Paris',
        'Miami',
        'Shanghai',
        'Madeira',
        'London',
        'the Moon',
        'Tokyo',
        'Hong Kong',
        'Sydney',
    ],
    airline: [
        'Delta',
        'Lufthansa',
        'British Airways',
        'American Airlines',
        'Avianca',
        'Air China',
        'Emirates',
        'Appollo 11',
        'Connect Air',
        'Ryanair',
    ],
};
//Function to create a random number to select the phrase out of each array. Takes a string as input, to create the correct multiplier for Math.random
const randomNumberSelector = (string) => {
    return (randomNumber = Math.floor(
        Math.random() * string.length
    ));
};
//Function which creates the actual message. 
const mixedMessage = () => {
    let name = messageParts.name[randomNumberSelector(messageParts.name)];
    let cabin = messageParts.cabin[randomNumberSelector(messageParts.cabin)];
    let destination = messageParts.destination[randomNumberSelector(messageParts.destination)];
    let airline = messageParts.airline[randomNumberSelector(messageParts.airline)];
    return `Hi <strong>${name}</strong> :). <br> You are flying <strong>${cabin}</strong> to <strong>${destination}</strong> on <strong>${airline}</strong>! <br> Have a save trip!`;
};

// Stores the sentence in const Text. Then prints it inside the Text div.
const Text = mixedMessage();
document.getElementById('Text').innerHTML = Text;