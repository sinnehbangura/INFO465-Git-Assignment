const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];

function getInput() {
    rl.question("Enter an integer (or 'q' to quit): ", (input) => {

        if (input.toLowerCase() === 'q') {

            if (numbers.length === 0) {
                console.log("No numbers were entered.");
                rl.close();
                return;
            }

            // Count
            const count = numbers.length;

            // Mean
            const sum = numbers.reduce((a, b) => a + b, 0);
            const mean = sum / count;

            // Median
            const sorted = [...numbers].sort((a, b) => a - b);
            let median;

            if (sorted.length % 2 === 0) {
                median =
                    (sorted[sorted.length / 2 - 1] +
                     sorted[sorted.length / 2]) / 2;
            } else {
                median = sorted[Math.floor(sorted.length / 2)];
            }

            // Min and Max
            const min = Math.min(...numbers);
            const max = Math.max(...numbers);

            console.log("\n----- Results -----");
            console.log("Count:", count);
            console.log("Mean:", mean);
            console.log("Median:", median);
            console.log("Minimum:", min);
            console.log("Maximum:", max);

            rl.close();
            return;
        }

        const num = Number(input);

        // Error handling
        if (!Number.isInteger(num)) {
            console.log("Error: Please enter a valid integer.");
        } else {
            numbers.push(num);
        }

        getInput();
    });
}

console.log("Statistics Calculator");
getInput();