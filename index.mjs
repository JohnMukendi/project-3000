import express from "express";

const app = express();
const port = 8000;
app.use(express.json());

app.get("/users", (req, res) => {
  res.send(200).json([{ name: "John" }, { name: "Nicholas Cage" }]);
});
app.listen(port, () => {
  console.log("server running on port " + port);
});
