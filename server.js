const app = require("./src/app");
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send({ message: "Welcome to Ves.Tech - {trans}form the world" });
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
