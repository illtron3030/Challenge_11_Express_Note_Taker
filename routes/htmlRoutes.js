// DEPENDENCIES
// Path to package to get the correct file path for our html
const router = require("express").Router();
const path = require("path");

// ROUTING

// => HTML GET Requests
// User is shown an HTML page of content

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// If no matching route is found default to home
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//export the router
module.exports = router;
