const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cors = require("cors");
const compression = require("compression");
const globalError = require("./middleware/errorMiddleware");
dotenv.config({ path: "config.env" });
const categoryRoute = require("./routes/categoryRoute");
const restaurantRoute = require("./routes/restaurantRoute");
const userRoute = require("./routes/userRoute");
const reservationRoute = require("./routes/reservationRoute");
const authRoute = require("./routes/authRoute ");





// Connect with db
mongoose
  .connect(process.env.DB_URL)
  .then((conn) => {
    console.log(`Database connected:${conn.connection.host}`);
  })
  .catch((err) => {
    console.log(`Database Error: ${err}`);
    process.exit();
  });

const app = express();

app.use(cors());
app.options("*", cors());

//Compress all req and res for me
app.use(compression());

//Middlewares
app.use(express.json({ limit: "20kb" }));
app.use(express.static(path.join(__dirname, "uploads")));

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
  console.log(`mode : ${process.env.NODE_ENV}`);
}

app.use(mongoSanitize());
app.use(xss());

app.get("/", (req, res) => {
  res.send("Ouer Api");
});
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/restaurants", restaurantRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/reservations", reservationRoute);
app.use("/api/v1/auth", authRoute);





app.use(globalError);

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

// Handle rejection outside exprees
process.on("unhandledRejection", (err) => {
  console.error(`unhandledRejection Errors: ${err.name}|${err.message}`);
  
  server.close(() => {
    console.error(`Shutting down...`);
    process.exit(1);
  });
});
