const app = require("./app");
const PORT = 5001;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});