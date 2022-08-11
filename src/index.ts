import app from "./app";
import DBConection from "./connection";
const port = process.env.PORT || 3000;
(() => {
  DBConection.getInstance().authenticate();
  app.listen(port, () => {
    console.log("Server is running on port 3000");
  });
})();
