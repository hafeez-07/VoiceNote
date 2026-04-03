import dotenv from "dotenv";

dotenv.config();

const { default: app } = await import("./app.js");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running in localhost : ${port}`);
});
