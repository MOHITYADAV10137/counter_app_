const countvalue = document.querySelector('#counter');

const increment = () => {
    // Get the value from UI
    let value = parseInt(countvalue.innerText);
    // Update the value
    value = value + 1;
    // Set the value onto UI
    countvalue.innerText = value;
};

const decrement = () => {
    let value = parseInt(countvalue.innerText);
    // Update the value
    value = value - 1;
    // Set the value onto UI
    countvalue.innerText = value;
};
