const express = require("express");
const app = express();
  
app.post("/post", (req, res) => {
  console.log("react.js is connected");
   res.redirect("/");
});
  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));