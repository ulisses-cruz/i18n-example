const express = require("express");
const hbs = require("hbs");
const i18n = require("i18n");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();

i18n.configure({
  locales: ["en", "fr"],
  cookie: "locale",
  directory: __dirname + "/locales",
});

app.set("view engine", "html");
app.engine("html", hbs.__express);
app.use(cookieParser());
app.use(i18n.init);
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => res.render("index"));
app.post("/", (req, res) => {
  i18n.setLocale(res, req.body.lang);
  res.render("index", {
    en: req.body.lang == "en",
    fr: req.body.lang == "fr",
  });
});

app.listen(3000, () => console.log("Server on port 3000"));
