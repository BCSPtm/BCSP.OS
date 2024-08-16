const express = require('express');
const { exec } = require('child_process');
const app = express();

app.use(express.json());

app.post('/run-command', (req, res) => {
    let command = req.body.command;

    // সতর্কতা: এটা সুরক্ষিত নয়। বাস্তব ক্ষেত্রে ব্যবহার করার আগে প্রপার ভ্যালিডেশন দরকার।
    exec(command, (error, stdout, stderr) => {
        if (error) {
            return res.json({ output: stderr });
        }
        res.json({ output: stdout });
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
