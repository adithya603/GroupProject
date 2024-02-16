import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const arr = [
    "adi", "ajith", "ashwin", "chandan", "smrithi", "sanjana", "tanvi",
    "Chethan", "Abhilash", "Nandan", "Nagesh", "Virat", "Kohli", "Mbappe", "Ronaldo"
];

app.get("/", function (req, res) {
  const { q } = req.query;
  
  const search = (data) => {
    return data.filter((item) =>
      item.toLowerCase().includes(q.toLowerCase())
    );
  };
  res.json(search(arr).splice(0, 8));
});

app.listen(8800, function () {
  console.log("connected to backend");
});


// Filter for Array of objects :
//const arr = [{name: "adi"}, {name:"ronaldo"]
//const keys = ["name"]
// const search = (data) => {
//     return data.filter((item) =>
//       keys.some((key) => item[key].toLowerCase().includes(q.toLowerCase()))
//     );
//   };