const fs = require('fs');
const path = `json-examples`;
const size = 20;

const generationObject = {
    first: ['Peter', 'Taz', 'Spencer', 'Emily', 'Jeremy', 'Jeff', 'Jill', 'Thomas'],
    last: ['Smith', 'Knope', 'Scott', 'Fletcher', 'Warbucks', 'Unknown', 'Harrold', 'Castle', 'Johnson', 'Williams', 'Brown', 'Jones', 'Gercia', 'Miller', 'Davis'],
    employer: ['Adobe', 'Lendio', 'Amazon', 'Google', 'Facebook'],
    title: ['CEO', 'COO', 'Product Manager', 'Engineer', 'Sales', 'Reception'],
    hobby: ['Video Games', 'One Wheeling', 'Hiking', 'Swimming', 'Pickle Ball', 'Programming', 'Tennis', 'Skateboarding', 'Painting', 'Drawing'],
};

function generateRandomPersonBasedOnGenerationObject() {
    const result = {};
    for (const [key] of Object.entries(generationObject)) {
        result[key] = generationObject[key][getRandomInt(generationObject[key].length)]
    }
    return result;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateJsonDocumentData(amount) {
    const result = [];
    for (var x = 0; x <= amount; x++) {
        result.push(generateRandomPersonBasedOnGenerationObject());
    }
    return result;
}

const data = JSON.stringify(generateJsonDocumentData(size));
fs.writeFileSync(`${path}/random-people-directory.json`, data);