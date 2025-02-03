import express from 'express';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// JSON dosyasından verileri oku
const loadData = () => {
    try {
        const data = fs.readFileSync('data.json');
        return JSON.parse(data);
    } catch (err) {
        return { tasks: [] };
    }
};

// JSON dosyasına veri yaz
const saveData = (data) => {
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
};

// Tüm görevleri getir
app.get('/tasks', (req, res) => {
    const data = loadData();
    res.json(data.tasks);
});

// Yeni görev ekle
app.post('/tasks', (req, res) => {
    const data = loadData();
    const newTask = { id: Date.now(), text: req.body.text };
    data.tasks.push(newTask);
    saveData(data);
    res.json(newTask);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
