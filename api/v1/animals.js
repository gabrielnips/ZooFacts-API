//                                                 REQS                                                           
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { readdirSync } = require('fs');
const { join } = require('path');

//                                                 DEF                                                            
const IMAGES_BASE_PATH = path.join(__dirname, '../../animals');
const SERVER_BASE_URL = 'http://localhost:4000';

//                                                 FUNC                                                           
function randomItem(array) {
    let index = Math.floor(Math.random() * array.length);
    return array[index];
}

function getRandomImage(animalName) {
    const animalFolderPath = path.join(IMAGES_BASE_PATH, animalName, 'images');
    const imageFiles = readdirSync(animalFolderPath);
    const randomImage = randomItem(imageFiles);
    return randomImage;
}
//                                                 ROUTER RANDOM ANIMAL                                       
router.get('/animal/random', (req, res) => {
    const animalFolders = readdirSync(IMAGES_BASE_PATH, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    const randomAnimalName = randomItem(animalFolders);
    const animalPath = path.join(IMAGES_BASE_PATH, randomAnimalName, 'data.json');

    fs.readFile(animalPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        const animalData = JSON.parse(data);
        const randomFact = randomItem(animalData.interestingFacts);
        const randomImageName = getRandomImage(randomAnimalName);
        const imageUrl = `${SERVER_BASE_URL}/animals/${randomAnimalName}/images/${randomImageName}`;

        const response = {
            name: animalData.name,
            averageWeight: animalData.averageWeight,
            averageHeight: animalData.averageHeight,
            lifespan: animalData.lifespan,
            interestingFact: randomFact,
            image: imageUrl
        };

        if (animalData.averageLength) {
            response.averageLength = {
                males: animalData.averageLength.males,
                females: animalData.averageLength.females
            };
        }

        if (animalData.tailLength) {
            response.tailLength = {
                males: animalData.tailLength.males,
                females: animalData.tailLength.females
            };
        }

        if (animalData.shoulderHeight) {
            response.shoulderHeight = {
                males: animalData.shoulderHeight.males,
                females: animalData.shoulderHeight.females
            };
        }

        if (animalData.sexualMaturity) {
            response.sexualMaturity = {
                males: animalData.sexualMaturity.males,
                females: animalData.sexualMaturity.females
            };
        }

        if (animalData.longevity) {
            response.longevity = {
                wild: animalData.longevity.wild,
                captivity: animalData.longevity.captivity
            };
        }

        res.json(response);

    });
});
//                                                 ROUTER SPECIFIC ANIMAL                                    
router.get('/animal/:animalName', (req, res) => {
    const animalName = req.params.animalName;
    const animalPath = path.join(IMAGES_BASE_PATH, animalName, 'data.json');

    fs.readFile(animalPath, 'utf8', (err, data) => {
        if (err) {
            res.status(404).json({ error: 'Animal not found' });
            return;
        }

        const animalData = JSON.parse(data);
        const randomFact = randomItem(animalData.interestingFacts);
        const randomImageName = getRandomImage(animalName);
        const imageUrl = `${SERVER_BASE_URL}/animals/${animalName}/images/${randomImageName}`;

        const response = {
            name: animalData.name,
            averageWeight: animalData.averageWeight,
            averageHeight: animalData.averageHeight,
            lifespan: animalData.lifespan,
            interestingFact: randomFact,
            image: imageUrl
        };

        if (animalData.averageLength) {
            response.averageLength = {
                males: animalData.averageLength.males,
                females: animalData.averageLength.females
            };
        }

        if (animalData.tailLength) {
            response.tailLength = {
                males: animalData.tailLength.males,
                females: animalData.tailLength.females
            };
        }

        if (animalData.shoulderHeight) {
            response.shoulderHeight = {
                males: animalData.shoulderHeight.males,
                females: animalData.shoulderHeight.females
            };
        }

        if (animalData.sexualMaturity) {
            response.sexualMaturity = {
                males: animalData.sexualMaturity.males,
                females: animalData.sexualMaturity.females
            };
        }

        if (animalData.longevity) {
            response.longevity = {
                wild: animalData.longevity.wild,
                captivity: animalData.longevity.captivity
            };
        }

        res.json(response);
    });
});


module.exports = router;
