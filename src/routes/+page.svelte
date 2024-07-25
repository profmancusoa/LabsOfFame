<script>
    import Grid from "../lib/Grid.svelte";

    import { initializeApp } from "firebase/app";
    import { getDatabase, child, get, ref } from "firebase/database";
    import { onMount } from "svelte";

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

    const readData = async () => {
        const dbRef = ref(getDatabase());
        const get_db = await get(child(dbRef, `leaderboard/`));
        return get_db.val();
    };

    const update_table = async (mat, classe) => {
        if (mat === "all") {
            let all_subjetcs = Object.values(full_db.TPSI)
                .concat(
                    Object.values(full_db.reti),
                    Object.values(full_db.informatica),
                )
                .filter((e) => e.class == classe);

            leaderboard = Array.from(
                new Set(all_subjetcs.map((e) => e.username)),
            )
                .map((e) => all_subjetcs.filter((el) => el.username === e))
                .map((e) => {
                    return {
                        username: e[0].username,
                        avatar: e[0].avatar,
                        class: e[0].class,
                        points: e.reduce((acc, e) => acc + e.points, 0),
                    };
                })
                .sort((a, b) => b.points - a.points);
        } else {
            let l = full_db[`${mat}`];
            leaderboard = Object.values(l)
                .sort((a, b) => b.points - a.points)
                .filter((e) => e.class == classe);
        }
    };

    onMount(async () => {
        /* default mount is with data about 3 info subjet: TPSI */
        full_db = await readData();
        update_table("TPSI", 3);
    });

    let leaderboard = [],
        classe,
        subject,
        full_db = {};
</script>

<div class="select-container">
    <div>
        <label for="select-class">Seleziona la classe:</label>
        <select
            name="classe"
            id="classe"
            bind:value={classe}
            on:change={update_table(subject, classe)}
        >
            <option value="3">3 Info</option>
            <option value="4">4 Info</option>
            <option value="5">5 Info</option>
        </select>
    </div>
    <div>
        <label for="select-subject">Seleziona la materia:</label>
        <select
            name="materia"
            id="materia"
            bind:value={subject}
            on:change={update_table(subject, classe)}
        >
            <option value="TPSI">TPSI</option>
            <option value="informatica">Informatica</option>
            <option value="reti">Sistemi e Reti</option>
            <option value="all">Totale</option>
        </select>
    </div>
</div>
<Grid items={leaderboard}></Grid>

<style>
    .select-container {
        max-width: 600px;
        margin: auto;
        margin-top: 2%;
        margin-bottom: 2%;
        padding: 20px;
        background-color: #f9fafb;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        display: flex; /* Add flexbox layout */
        justify-content: space-between; /* Space elements evenly */
    }
    select {
        width: 100%; /* Adjust width to fit side by side */
        padding: 15px;
        margin-bottom: 20px;
        border: none;
        border-radius: 5px;
        background-color: #ffffff;
        cursor: pointer;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: linear-gradient(45deg, transparent 50%, #666 50%),
            linear-gradient(135deg, #666 50%, transparent 50%);
        background-position:
            calc(100% - 20px) calc(1em + 2px),
            calc(100% - 15px) calc(1em + 2px),
            calc(100% - 2.5em) 0.5em;
        background-size:
            5px 5px,
            5px 5px,
            1px 1.5em;
        background-repeat: no-repeat;
    }
    select:focus {
        outline: none;
        border: 1px solid #66afe9;
        box-shadow:
            inset 0 1px 1px rgba(0, 0, 0, 0.075),
            0 0 8px rgba(0, 0, 0, 0.6);
    }
    label {
        display: block;
        margin-bottom: 10px;
        font-weight: bold;
    }   
</style>
