// place files you want to import through the `$lib` alias in this folder.

import user_placeholder from "./avatars/user_placeholder.png";


export const firebaseConfig = {
    apiKey: "AIzaSyBv2SwNbM94fs7et1ts6aClTXreO5a6zDM",
    authDomain: "lambsoffame.firebaseapp.com",
    databaseURL:
        "https://lambsoffame-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lambsoffame",
    storageBucket: "lambsoffame.appspot.com",
    messagingSenderId: "583547239362",
    appId: "1:583547239362:web:eda69c76496ccc9cbd345b",
};

export const info_5 = [
    "Bramoso_Tommaso",
    "Catalano_Leonardo",
    "Cavallo_Davide",
    "Compostella_Alberto",
    "Furina_Emanuele",
    "Garabello_Paolo",
    "Girone_Riccardo",
    "Macaluso_Giulio",
    "Racca_Sebastiano",
    "Robino_Samuele",
    "Smal_Philippe",
    "Telloli_Fabio",
];

export const info_4 = [
    "Andruetto_Lorenzo",
    "Ardoino_Matteo",
    "Attanasio_Edoardo",
    "Casini_Sara",
    "Gavinelli_Rebecca",
    "Gritella_Matteo",
    "Macchi_Federico",
    "Mariotti_Matteo",
    "Massano_Francesco",
    "Morando_Sofia",
    "Okoro_Wisdom",
    "Pavalean_Alexandru",
    "Riglietti_Nicolo",
    "Romano_Gabriele",
    "Rossi_Tommaso",
    "Timis_Vasile",
    "Tonanzi_Samuele",
    "Trovato_Nickolas",
    "Vigano_Luca",
];

export const info_3 = [
    "Bianchi_Emanuele",
    "Bracco_Anna",
    "Branda_Rachele",
    "Busca_Matteo",
    "Colasanto_Alessio",
    "Correndo_Marco",
    "Dalipi_Andi",
    "Danci_Davide",
    "Forno_Davide",
    "Gervasio_Gregorio",
    "Gorun_Jennifer",
    "LaValle_Marco",
    "Marusich_Samuele",
    "Pezzana_Simone",
    "Prevedi_Daniele",
    "Pugliese_Alessandro",
    "Ramirez_Giorgio",
    "Ruscica_Lorenzo",
    "Sabbadini_Nicolas",
    "Savio_Gabriele",
    "Tamaddon_Sam",
    "Wang_Enrico",
];

/* Import all images from avatars folder */
const imageModules = import.meta.glob("./avatars/*", {
    eager: false, // Load images on page load
});

/* Extract username from avatar's path. 
  import.glob contain full path but we want only the filename(username) 
*/
function image_to_username(images) {
    // Get full path
    const keys = Object.keys(images);
    keys.forEach((a) => {
        let val = imageModules[a]; // Backup value
        delete images[a]; // Delete fullpath key
        const username = a.replace("./avatars/", "").replace(".png", ""); // Cleanup path to get only filename(username)
        images[username] = val; // Assign image to username
    });
    return images;
}

const user_image = image_to_username(imageModules);

export async function get_user_image(username) {
    const real_username = username.toLowerCase();
    return Object.hasOwn(user_image, real_username)
        ? (await user_image[real_username]()).default
        : user_placeholder;
}
