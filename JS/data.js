import { random } from "../JavaScript-Tools/random.js";

export const data = {
    loadProgress: ["", ".", "..", "..."],
    comments: [
        `${makeUser()} - C'est le meilleure calculateur d'exposant que jais vu de ma vie!`,
        `${makeUser()} - Super produit! Je recommande.`,
        `${makeUser()} - Il est facile a utiliser et tres utile`,
        `${makeUser()} - J'adore ce produit il marche tres bien`,
        `${makeUser()} - Un peux cher a 30$ mais est tres utile`,
        `${makeUser()} - C'est de la merde`
    ],
    usersList: [],
    userName: `User_${makeUser()}`
};

function makeUser ()  {
    let user;
    
    do {
        user = `User_${random.randrange(1, 10)}`;
    } while (data.userName.indexOf(user) !== -1);

    return user;
}

console.log(data.userName);
