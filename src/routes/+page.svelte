<script>
    import Grid from "../lib/Grid.svelte";

    import { initializeApp } from "firebase/app";
    import { getDatabase, child, get, ref } from "firebase/database";
    import { onMount } from "svelte";
    import Select from "../lib/Select.svelte";
    import Label from "../lib/Label.svelte";

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

    const sum_subject_points = (classe) => {
        let all_subjetcs = Object.values(full_db.TPSI)
            .concat(
                Object.values(full_db.reti),
                Object.values(full_db.informatica),
            )
            .filter((e) => e.class == classe);

        leaderboard = Array.from(new Set(all_subjetcs.map((e) => e.username)))
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
    };

    const update_table = async (mat, classe) => {
        switch (mat) {
            case "sum-subjects":
                sum_subject_points(classe);
                break;

            case "all":
                leaderboard = Object.values(full_db["generale"]).sort(
                    (a, b) => b.points - a.points,
                );
                break;
            default:
                let l = full_db[`${mat}`];
                leaderboard = Object.values(l)
                    .sort((a, b) => b.points - a.points)
                    .filter((e) => e.class == classe);
                break;
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
    
    const classes = [
        {
            value: 3,
            text: "3 INFO"
        },
        {
            value: 4,
            text: "4 INFO"
        },
        {
            value: 5,
            text: "5 INFO"
        },
    ];
    const subjects = [
        {
            value: "TPSI",
            text: "TPSI"
        },
        {
            value: "informatica",
            text: "Informatica"
        },
        {
            value: "reti",
            text: "Sistemi e Reti"
        },
        {
            value: "sum-subjects",
            text: "Totale materie"
        },
        {
            value: "all",
            text: "Generale"
        }
    ];
</script>

<div class="select-container flex justify-between max-w-screen-sm rounded-xl m-auto p-5 bg-slate-50 ">
    <div>
        <Label parent="select-class" text="Seleziona la classe:"></Label>
        <Select options={classes} bind:value={classe} on_change={() => update_table(subject, classe)} />
    </div>
    <div>
        <Label parent="select-subject" text="Seleziona la materia:"></Label>
        <Select options={subjects} bind:value={subject} on_change={() => update_table(subject, classe)}/>
    </div>
</div>

{#if subject === "all"}
    <p class="paragraph">
        Classifica generale di tutti gli studenti di informatica non relativa a
        classe o materia scolastica
    </p>
{/if}

<Grid items={leaderboard}></Grid>

<style>
    .select-container {
        margin-top: 2%;
        margin-bottom: 2%;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    }

    .paragraph {
        margin-bottom: 2%;
        text-align: center;
    }
</style>
