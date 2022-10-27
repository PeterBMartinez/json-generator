# json-generator
Just a simple node script that generates a json document using a generation object

# Running the script
Make sure in the terminal you are in the directory of the index.js then run `node index.js`

# Changing the properties of the generated json
Simply add or remove properties in the `generationObject`

Example: 
```
const generationObject = {
    first: ['Peter', 'Taz', 'Spencer', 'Emily', 'Jeremy', 'Jeff', 'Jill', 'Thomas'],
    last: ['Smith', 'Knope', 'Scott', 'Fletcher', 'Warbucks', 'Unknown', 'Harrold', 'Castle', 'Johnson', 'Williams', 'Brown', 'Jones', 'Gercia', 'Miller', 'Davis'],
    employer: ['Adobe', 'Lendio', 'Amazon', 'Google', 'Facebook'],
    title: ['CEO', 'COO', 'Product Manager', 'Engineer', 'Sales', 'Reception'],
    hobby: ['Video Games', 'One Wheeling', 'Hiking', 'Swimming', 'Pickle Ball', 'Programming', 'Tennis', 'Skateboarding', 'Painting', 'Drawing'],
    // Adding new property
    maried: ['yes', 'no']
};
```
