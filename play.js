const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const conn = connect();

const handleUserInput = function (data) {
  // Process user input here
  console.log("User input:", data);
};

// Register handleUserInput as the "data" event callback for stdin
process.stdin.on("data", handleUserInput);

// Call setupInput and pass the connection object
setupInput(conn);

