<script>
    import { initializeApp } from "firebase/app";
    import {
        getFirestore,
        /* doc,
        setDoc,
        updateDoc,
        arrayUnion,
        getDoc, */
        collection,
        /* query,
        where,
        getDocs, */
        addDoc,
    } from "firebase/firestore";
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

    const calAnnoScolastico = (date) => {
        return Number(date[0]) > 6
            ? `${date[1]}-${String(Number(date[1]) + 1)}`
            : `${String(Number(date[1]) - 1)}-${date[1]}`;
    };

    const addQuery = async (dataObject) => {
        try {
            const userGoogle = await signInGoogle();

            const col = collection(db, "leaderboard", "toQuery", "queries");
            await addDoc(col, {
                username: dataObject.username,
                subject: dataObject.subject,
                as: calAnnoScolastico(
                    new Date()
                        .toLocaleString("it-IT")
                        .split(",")[0]
                        .split("/")
                        .slice(1),
                ),
                time_stamp: new Date().toLocaleString("it-IT"),
                points: dataObject.points,
                class: dataObject.class,
            });

            return "Query aggiunta correttamente";
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    const checkInfo = async () => {
        if (username && sub && points && classe) {
            console.log(
                await addQuery({
                    username: username,
                    subject: sub,
                    points: points,
                    class: classe,
                }),
            );
        } else return;
    };

    let username, sub, points, classe;
</script>

<body>
    <p>
        Inserire l'username Cognome_Nome sostituire tutti gli accenti con un `'`
    </p>

    Username:<input
        type="text"
        placeholder="Esposito_Ciro"
        bind:value={username}
    />
    Subject: <input type="text" placeholder="TPSI" bind:value={sub} />
    Points: <input type="number" placeholder="10" bind:value={points} />
    Class:
    <input type="number" placeholder="3" bind:value={classe} min="3" max="5" />

    <input
        id="submit"
        type="button"
        value="Submit"
        on:click={() => {
            checkInfo();
        }}
    />

    {#if !username || !sub || !points || !classe}
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
</style>
