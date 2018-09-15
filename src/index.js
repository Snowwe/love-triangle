/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let loveTriangles = 0;
    for (let i = 0; i < preferences.length; i++) {
        if (preferences[i] !== i + 1) {
            let theFirstSpichonee = preferences[i];
            let theSecondSpichonee = preferences[theFirstSpichonee - 1];
            let theThirdSpichonee = preferences[theSecondSpichonee - 1];
            if (i === theThirdSpichonee - 1) {
                loveTriangles++;
                preferences[i] = 0;
                preferences[(theFirstSpichonee - 1)] = 0;
                preferences[(theSecondSpichonee - 1)] = 0;
            }
        }
    }
    return loveTriangles;
};
