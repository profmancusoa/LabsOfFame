<script>
    import { onMount } from "svelte";
    import { initializeApp } from "firebase/app";
    import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
    import {
        getAuth,
        signInWithPopup,
        GoogleAuthProvider,
    } from "firebase/auth";

    const firebaseConfig = {
        apiKey: "AIzaSyBv2SwNbM94fs7et1ts6aClTXreO5a6zDM",
        authDomain: "lambsoffame.firebaseapp.com",
        databaseURL:
            "https://lambsoffame-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "lambsoffame",
        storageBucket: "lambsoffame.appspot.com",
        messagingSenderId: "583547239362",
        appId: "1:583547239362:web:eda69c76496ccc9cbd345b",
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth();

    const signInGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("Utente autenticato:", user.uid);
            return user;
        } catch (error) {
            console.log(error);
        }
    };

    onMount(async () => {
        const userGoogle = await signInGoogle();
    });

    const getDate = () => {
        let now = new Date();
        let year = now.getFullYear();
        let month = String(now.getMonth() + 1).padStart(2, "0");
        let day = String(now.getDate()).padStart(2, "0");
        let hours = String(now.getHours()).padStart(2, "0");
        let minutes = String(now.getMinutes()).padStart(2, "0");
        let seconds = String(now.getSeconds()).padStart(2, "0");
        let mill = String(now.getMilliseconds()).padStart(3, "0");
        return `${year}_${month}_${day}_${hours}:${minutes}:${seconds}.${mill}`;
    };

    const calAnnoScolastico = (date) => {
        return Number(date[0]) > 6
            ? `${date[1]}-${String(Number(date[1]) + 1)}`
            : `${String(Number(date[1]) - 1)}-${date[1]}`;
    };

    const addQuery = async (dataObject) => {
        try {
            const docRef = doc(
                collection(db, "leaderboard", "toQuery", "queries"),
                `${dataObject.username}_${dataObject.subject}_${getDate()}`,
            );

            await setDoc(docRef, {
                username: dataObject.username,
                subject: dataObject.subject,
                as: calAnnoScolastico(
                    new Date()
                        .toLocaleString("it-IT")
                        .split(",")[0]
                        .split("/")
                        .slice(1),
                ),
                time_stamp: getDate(),
                points: dataObject.points,
                class: dataObject.class,
            });

            console.log(
                `Query con ${dataObject.username} aggiunta correttamente`,
            );
            return `Query con ${dataObject.username} aggiunta correttamente`;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    const checkInfo = () => {
        let output = "";
        if (selected.length !== 0 && sub && points >= 0 && classe) {
            console.log("ok");
            selected.map(async (e) => {
                output += await addQuery({
                    username: e,
                    subject: sub,
                    points: points,
                    class: classe,
                });
            });
        } else return;

        window.alert(output);
    };

    const selectStudentsList = () => {
        switch (classe) {
            case 3:
                selectList = [...info_3];
                break;
            case 4:
                selectList = [...info_4];
                break;
            case 5:
                selectList = [...info_5];
                break;

            default:
                break;
        }
    };

    const info_5 = [
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

    const info_4 = [
        "Andruetto_Lorenzo",
        "Ardoino_Matteo",
        "Attanasio_Edoardo",
        "Casini_Sara",
        "Dellavalle_Andrea",
        "Garcia_James",
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

    const info_3 = [
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

    let sub,
        points,
        classe,
        selectList = [],
        selected = [];
</script>

<body>
    <p>Selezionare prima la classe</p>

    3 info<input
        type="radio"
        name="classe"
        value="3"
        on:change={() => {
            classe = 3;
            selectStudentsList();
        }}
    />
    4 info<input
        type="radio"
        name="classe"
        value="4"
        on:change={() => {
            classe = 4;
            selectStudentsList();
        }}
    />
    5 info<input
        type="radio"
        name="classe"
        value="5"
        on:change={() => {
            classe = 5;
            selectStudentsList();
        }}
    />

    Studenti:
    <div class="container">
        <div class="studente">
            <label for="students">All</label><input
                type="checkbox"
                class="students"
                on:change={(e) => {
                    selected = e.target.checked ? [...selectList] : [];
                }}
                checked={selected.length === selectList.length &&
                    selectList.length !== 0}
            />
        </div>

        {#each selectList as e}
            <div class="studente">
                <label for="students">{e}</label><input
                    type="checkbox"
                    name="students"
                    class="students"
                    value={e}
                    bind:group={selected}
                />
            </div>
        {/each}
    </div>
    <br />
    Subject:
    <select name="classe" id="classe" bind:value={sub}>
        {#each ["TPSI", "RETI"] as e}
            <option value={e}>{e}</option>
        {/each}
    </select><br /><br />
    Points: <input type="number" placeholder="10" bind:value={points} />

    <input
        id="submit"
        type="button"
        value="Submit"
        on:click={() => {
            checkInfo();
        }}
    />

    {#if selected.length == 0 || !sub || !points || !classe}
        <p style="color: red;">Completare tutti i campi</p>
    {/if}
</body>

<style>
    input {
        display: flex;
        margin: 1%;
    }

    body {
        margin: 2%;
    }
    p {
        margin-bottom: 2%;
        font-size: larger;
        color: red;
    }

    #submit {
        padding: 1%;
        border: 1px solid black;
    }

    #submit:hover {
        cursor: pointer;
    }

    .studente {
        margin: 1%;
        display: flex;
        flex-direction: row;
        column-gap: 10px;
    }

    .studente input {
        margin-top: 4px;
    }

    .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>
