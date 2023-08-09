const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
            <title>ZooFacts API</title>
                <style>
                    body {
                        background-color: #303030;
                        color: white;
                        font-family: 'Nunito Sans', sans-serif;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                    }

                    h1 {
                        font-size: 2rem;
                        margin-bottom: 1rem;
                    }

                    p {
                        font-size: 1rem;
                        margin-bottom: 0.5rem;
                    }
                </style>
            </head>
            <body>
                <h1>Welcome to ZooFacts API</h1>
                <p>This is the ZooFacts API, where you can get interesting facts and information about various animals.</p>
                <p>To get information about a specific animal, use the endpoint: /v1/animals/animal/{animalName}</p>
                <p>To get a random animal's information, use the endpoint: /v1/animals/random</p>
                <p>(V2 Coming Soon)</p>
                <p>Explore the animal kingdom with ZooFacts API!</p>
            </body>
        </html>
    `);
});

router.get('/', (req, res) => {
    const acceptHeader = req.header('Accept');

    if (acceptHeader === 'application/json') {
        res.json({ output: "This is the ZooFacts API, where you can get interesting facts and information about various animals." });
    } else {
        res.send(`
            <html>
                <head>
                    <style>
                        /* Seu estilo CSS aqui */
                    </style>
                </head>
                <body>
                    <h1>Welcome to ZooFacts API</h1>
                    <p>This is the ZooFacts API, where you can get interesting facts and information about various animals.</p>
                    <p>To get information about a specific animal, use the endpoint: /v1/animals/animal/{animalName}</p>
                    <p>To get a random animal's information, use the endpoint: /v1/animals/random</p>
                    <p>(V2 Coming Soon)</p>
                    <p>Explore the animal kingdom with ZooFacts API!</p>
                </body>
            </html>
        `);
    }
});

module.exports = router;
