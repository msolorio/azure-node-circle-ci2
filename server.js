const app = require("./app");

// Set port
const port = 5000;
app.set("port", port);

// Server
app.listen(port, () => console.log(`Server running on localhost:${port}`));
