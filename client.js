const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("connect", () => {
    console.log("Connected to the server!");
  });

  conn.on("error", (error) => {
    console.log("Connection error:", error);
  });

  return conn;
};

module.exports = {
  connect,
};

