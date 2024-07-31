// Assuming model is an object with a getName method
const model = {
    getName: function(name) {
        // This is a placeholder implementation
        return `Processed name: ${name}`;
    }
};

// Variables for channel and headerType
const channel = "channel1";
const headerType = "headerA";

// Define an object with a property that uses the getName method
const config = {
    name: model.getName(`${channel}_${headerType}`)
};

console.log(config.name);  // Output: Processed name: channel1_headerA
