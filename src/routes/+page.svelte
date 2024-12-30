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

  import { getQuadrimestre } from "$lib/helper";

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
  const db = getFirestore(app);

  const calAnnoScolastico = (date) => {
    return Number(date[0]) > 6
      ? `${date[1]}-${String(Number(date[1]) + 1)}`
      : `${String(Number(date[1]) - 1)}-${date[1]}`;
  };

  const getQueriesFiltered = async (sub, as, quadrimestre, classe) => {
    const col = collection(db, "leaderboard", "toQuery", "queries");
    let q;

    if (!sub && !as && !classe) {
      //GENERALE
      q = query(col);
    } else if (!sub) {
      //TOTALE MATERIE
      q = query(
        col,
        where("as", "==", as),
        where("class", "==", classe),
        where("quadrimestre", "==", quadrimestre)
      );
    } else {
      //SPECIFICO PER CLASSE E MATERIA
      q = query(
        col,
        where("subject", "==", sub),
        where("as", "==", as),
        where("class", "==", classe),
        where("quadrimestre", "==", quadrimestre)
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
      case "SUM-SUBJECTS":
        leaderboard = await getQueriesFiltered(
          undefined,
          calAnnoScolastico(
            new Date().toLocaleString("it-IT").split(",")[0].split("/").slice(1)
          ),
          getQuadrimestre(),
          classe
        );
        break;

      case "ALL":
        leaderboard = await getQueriesFiltered(
          undefined,
          undefined,
          undefined,
          undefined
        );
        break;
      default:
        leaderboard = await getQueriesFiltered(
          mat,
          calAnnoScolastico(
            new Date().toLocaleString("it-IT").split(",")[0].split("/").slice(1)
          ),
          getQuadrimestre(),
          classe
        );
        break;
    }
  };

  onMount(async () => {
    leaderboard = await getQueriesFiltered(
      "TPSI",
      calAnnoScolastico(
        new Date().toLocaleString("it-IT").split(",")[0].split("/").slice(1)
      ),
      getQuadrimestre(),
      3
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
    // {
    //     value: "informatica",
    //     text: "Informatica",
    // },
    {
      value: "RETI",
      text: "Sistemi e Reti",
    },
    {
      value: "SUM-SUBJECTS",
      text: "Totale materie",
    },
    {
      value: "ALL",
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
