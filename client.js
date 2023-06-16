const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "172.17.81.184", // IP address here
    port: 50541 // PORT number here
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event handler for incoming data
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  // event handler for connection established
  conn.on("connect", () => {
    console.log("Successfully connected to the server!");

    // send the name to the server
    conn.write("Name: ___");
  });

  return conn;
};

module.exports = { connect };

