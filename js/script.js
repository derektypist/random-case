$('#results').html(``);

// Function to randomly upper and lower case characters in a string
function randomCase(x) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let updatedStr = "";
    for (let c of x) {
        if (alphabet.includes(c)) {
            const random = Math.floor(Math.random() * 2);
            if (random === 0) {
                updatedStr += c.toLowerCase();
            } else {
                updatedStr += c.toUpperCase();
            }
        } else {
            updatedStr += c;
        }

    }
    return updatedStr;
}

// Apply Keyup Event for id of mytext
$('#mytext').on('keyup', () => {
    $('#results').html(``);
    const str = $('#mytext').val();
    if (!str) {
        $('#results').html(``);
    } else {
        $('#results').append(`You have entered ${str} <br>`);
        $('#results').append(`Text with random case is ${randomCase(str)} <br>`);
    }
});

// Apply Click Event for id of clearBtn
$('#clearBtn').on('click', () => {
    $('#results').html(``);
});