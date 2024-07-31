<script>
    import Grid from "../lib/Grid.svelte";
    import Select from "../lib/Select.svelte";
    import Label from "../lib/Label.svelte";

    import { initializeApp } from "firebase/app";
    import {
        getFirestore,
        collection,
        query,
        where,
        getDocs,
    } from "firebase/firestore";
    import { onMount } from "svelte";

    const firebaseConfig = {
        apiKey: "AIzaSyDMmEc92Gi0791mVLMl5UcuDTuUxy5ettw",
        authDomain: "prova-6bba2.firebaseapp.com",
        databaseURL:
            "https://prova-6bba2-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "prova-6bba2",
        storageBucket: "prova-6bba2.appspot.com",
        messagingSenderId: "310664797099",
        appId: "1:310664797099:web:cfcea80eb318b2a16450ee",
        measurementId: "G-0RFXQ1M1T5",
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const calAnnoScolastico = (date) => {
        return Number(date[0]) > 6
            ? `${date[1]}-${String(Number(date[1]) + 1)}`
            : `${String(Number(date[1]) - 1)}-${date[1]}`;
    };

    const getQueriesFiltered = async (sub, as, classe) => {
        const col = collection(db, "leaderboard", "toQuery", "queries");
        let q;

        if (!sub && !as && !classe) {
            q = query(col);
        } else if (!sub) {
            q = query(col, where("as", "==", as), where("class", "==", classe));
        } else {
            q = query(
                col,
                where("subject", "==", sub),
                where("as", "==", as),
                where("class", "==", classe),
            );
        }

        const querySnapshot = await getDocs(q);
        let l = querySnapshot.docs.map((doc) => doc.data());
        console.log();
        return adjustForTable(l);
    };

    const adjustForTable = (list) => {
        return Array.from(new Set(list.map((e) => e.username)))
            .map((e) => list.filter((el) => el.username === e))
            .map((e) => {
                return {
                    username: e[0].username,
                    points: e.reduce((acc, e) => acc + e.points, 0),
                };
            })
            .sort((a, b) => b.points - a.points);
    };

    const update_table = async (mat, classe) => {
        switch (mat) {
            case "sum-subjects":
                leaderboard = await getQueriesFiltered(
                    undefined,
                    calAnnoScolastico(
                        new Date()
                            .toLocaleString("it-IT")
                            .split(",")[0]
                            .split("/")
                            .slice(1),
                    ),
                    classe,
                );
                break;

            case "all":
                leaderboard = await getQueriesFiltered(
                    undefined,
                    undefined,
                    undefined,
                );
                break;
            default:
                leaderboard = await getQueriesFiltered(
                    mat,
                    calAnnoScolastico(
                        new Date()
                            .toLocaleString("it-IT")
                            .split(",")[0]
                            .split("/")
                            .slice(1),
                    ),
                    classe,
                );
                break;
        }
    };

    onMount(async () => {
        leaderboard = await getQueriesFiltered(
            "TPSI",
            calAnnoScolastico(
                new Date()
                    .toLocaleString("it-IT")
                    .split(",")[0]
                    .split("/")
                    .slice(1),
            ),
            3,
        );
    });

    let leaderboard = [],
        classe,
        subject;

    const classes = [
        {
            value: 3,
            text: "3 INFO",
        },
        {
            value: 4,
            text: "4 INFO",
        },
        {
            value: 5,
            text: "5 INFO",
        },
    ];
    const subjects = [
        {
            value: "TPSI",
            text: "TPSI",
        },
        {
            value: "informatica",
            text: "Informatica",
        },
        {
            value: "reti",
            text: "Sistemi e Reti",
        },
        {
            value: "sum-subjects",
            text: "Totale materie",
        },
        {
            value: "all",
            text: "Generale",
        },
    ];
</script>

<div
    class="select-container flex justify-between max-w-screen-sm rounded-xl m-auto p-5 bg-slate-50"
>
    <div>
        <Label parent="select-class" text="Seleziona la classe:"></Label>
        <Select
            options={classes}
            bind:value={classe}
            on_change={() => update_table(subject, classe)}
        />
    </div>
    <div>
        <Label parent="select-subject" text="Seleziona la materia:"></Label>
        <Select
            options={subjects}
            bind:value={subject}
            on_change={() => update_table(subject, classe)}
        />
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
