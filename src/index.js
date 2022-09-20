const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Hello, I'm justy playing with Docker to perform DevOps!",
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App is listining on port ${port}`));
