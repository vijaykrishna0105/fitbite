import app from "./app.js"; // Changed from ./node_modules/app.js

app.listen(process.env.PORT, () => {
  console.log(`Server Running On Port ${process.env.PORT}`); // Use backticks for template literals
});


//console.log("Server.js is running");


