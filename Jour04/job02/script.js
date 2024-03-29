function jsonValueKey(jsonString, key) {
    try {
        const parsedObject = JSON.parse(jsonString);
        return parsedObject[key];
    } catch (error) {
        console.error("Erreur lors de l'analyse du JSON :", error);
        return null;
    }
}

let laplateforme = '{name: laPlateforme,address: 8 rue d\'hozier,city : Marseille, nb_staff: 11, creation: 2019}'

console.log(jsonValueKey(jsonString, parsedObject))