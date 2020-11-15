document.getElementById("lang-switch").addEventListener("click", () => {
  const cookie = document.cookie;
  switch (cookie) {
    case "locale=en":
      document.cookie = "locale=pt";
      break;
    default:
      document.cookie = "locale=en";
  }
  document.location.reload();
});
