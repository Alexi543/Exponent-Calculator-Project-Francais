import { random } from "../JavaScript-Tools/random.js";

export const data = {
    loadProgress: ["", ".", "..", "..."],
    comments: [],
    usersList: [],
    userName: ``
};

(function () {
    const makeUser = () => {
        let user;
        
        do {
            user = `User_${random.randrange(1, 99)}`;
        } while (data.usersList.indexOf(user) !== -1);
    
        data.usersList += user;
        
        return user;
    }

    data.comments = [
        `${makeUser()} - C'est le meilleure calculateur d'exposant que jais vu de ma vie!`,
        `${makeUser()} - Super produit! Je recommande.`,
        `${makeUser()} - Il est facile a utiliser et tres utile`,
        `${makeUser()} - J'adore ce produit il marche tres bien`,
        `${makeUser()} - Un peux cher a 30$ mais est tres utile`,
        `${makeUser()} - C'est de la merde`
    ]

    data.userName = makeUser();
}());
