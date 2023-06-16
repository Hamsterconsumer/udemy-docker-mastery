const express = require("express");
const cors = require("cors");

const app = express();
const port = 80;

app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      title: "Book Review: The Bear & The Nightingale",
    },
    {
      id: "2",
      title: "Game Review: Pokemon Brilliant Diamond",
    },
    {
      id: "3",
      title: "Show Review: Alice in Borderland",
    },
    {
      id: "4",
      title: "Video Review: gargamel killing gargas",
    },
    {
      id: "5",
      title: "test: testing rhgte",
    },
    {
      id: "6",
      title: "test: testing greger gorila",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
