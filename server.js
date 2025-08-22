import express from "express";
import cors from "cors";

const app = express();

app.use(cors()); // allow all origins
app.use(express.json());

app.post("/api/data", (req, res) => {
  console.log("Received data:", req.body);
  res.json({ message: "Data received successfully!" });
});

app.listen(8080, "127.0.0.1", () =>
  console.log("Server running on http://localhost:8080")
);

