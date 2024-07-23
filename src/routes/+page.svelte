<script>
	import Grid from "../lib/Grid.svelte";

	import { initializeApp } from "firebase/app";
    import { getDatabase, child, get, ref, set } from "firebase/database";
    import { onMount } from "svelte";

	const firebaseConfig = {
        apiKey: "AIzaSyDMmEc92Gi0791mVLMl5UcuDTuUxy5ettw",
        authDomain: "prova-6bba2.firebaseapp.com",
        databaseURL:
            "https://prova-6bba2-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "prova-6bba2",
        storageBucket: "prova-6bba2.appspot.com",
        messagingSenderId: "310664797099",
        appId: "1:310664797099:web:6edb3661b14d1bfc6450ee",
        measurementId: "G-HH7RTEYHWY",
    };
	const app = initializeApp(firebaseConfig);

	const readData = async () => {
        const dbRef = ref(getDatabase());
        const get_db = await get(child(dbRef, `leaderboard/`));
        return get_db.val();
    };

	const update_table = async (mat, classe) => {
        if (mat === "all") {
            let all_subjetcs = Object.values(full_db.TPSI).concat(
                Object.values(full_db.reti),
                Object.values(full_db.informatica),
            ).filter((e) => e.class == classe);

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
	
	let leaderboard = [], classe, subject, full_db = {};
</script>

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

<Grid items={leaderboard}></Grid>