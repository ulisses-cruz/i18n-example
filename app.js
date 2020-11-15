const express = require("express");
const path = require("path");
const hbs = require("hbs");
const i18n = require("i18n");
const cookieParser = require("cookie-parser");
const router = require("./routes");

const app = express();

app.set("view engine", "html");
app.engine("html", hbs.__express);
app.use(express.static("public"));
hbs.registerPartials(path.join(__dirname, "views", "partials"));

i18n.configure({
  locales: ["pt", "en"],
  cookie: "locale",
  directory: path.join(__dirname, "locales"),
});
app.use(cookieParser());
app.use(i18n.init);

app.use("/", router);

app.listen(3000, () => console.log("Server on port 3000"));
