const express = require("express");
const app = express();

const PORT = 3000;

const db = [
    {
        name: "Grace",
        origin: "Solo",
        role: "Backend Developer",
    },
];

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ data: db });
});

app.post("/", (req, res) => {
    const { name, origin, role } = req.body;
    if (!name || !origin || !role) {
        res.status(400).json({ message : "Name, origin, and role must be filled!" });
        return;
    }
    db.push({ name, origin, role });
    res.status(201).json({ 
        message: "Data berhasil ditambahkan",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
