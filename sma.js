const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample prediction function (replace with actual ML model)
function predictDisease(symptoms) {
    // Dummy prediction logic
    if (symptoms.includes('fever')) {
        return 'Flu';
    } else if (symptoms.includes('cough')) {
        return 'Cold';
    } else {
        return 'Unknown Disease';
    }
}

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from 'public' directory

app.post('/predict', (req, res) => {
    const symptoms = req.body.symptoms;
    const prediction = predictDisease(symptoms);
    res.json({ prediction: prediction });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
