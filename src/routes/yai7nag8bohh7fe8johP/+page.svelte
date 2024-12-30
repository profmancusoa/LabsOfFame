<script>
  import { onMount } from "svelte";
  import { initializeApp } from "firebase/app";
  import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

  import {
    info_3,
    info_4,
    info_5,
    firebaseConfig,
    get_user_image,
    getQuadrimestre,
  } from "$lib/helper";

  let dialog; //confirmation dialog

  let selectClasse,
    selectList = [],
    selectMateria = "NONE",
    tableValues = [
      {
        student: "TUTTI",
        points: 0,
        comment: "",
      },
    ];

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
        `${dataObject.username}_${dataObject.subject}_${getDate()}`
      );

      await setDoc(docRef, {
        username: dataObject.username,
        subject: dataObject.subject,
        as: calAnnoScolastico(
          new Date().toLocaleString("it-IT").split(",")[0].split("/").slice(1)
        ),
        quadrimestre: getQuadrimestre(),
        time_stamp: getDate(),
        points: dataObject.points,
        class: dataObject.class,
        comment: dataObject.comment,
      });

      console.log(`Query con ${dataObject.username} aggiunta correttamente`);
      return `Query con ${dataObject.username} aggiunta correttamente`;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const recordInfo = async () => {
    for (let studente of tableValues) {
      if (studente.student != "TUTTI" && studente.points > 0) {
        await addQuery({
          username: studente.student,
          subject: selectMateria,
          points: studente.points,
          class: selectClasse,
          comment: studente.comment,
        });
      }
    }
    dialog.showModal();
  };

  const selectStudentsList = (classe) => {
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
    selectClasse = classe;

    tableValues = [
      {
        student: "TUTTI",
        points: 0,
        comment: "",
      },
    ];
    selectList.forEach((student) => {
      tableValues.push({
        student: student,
        points: 0,
        comment: "",
      });
    });
  };

  const updateAllPoints = () => {
    let point = tableValues[0].points;
    for (let i = 1; i < tableValues.length; i++) tableValues[i].points = point;
  };

  const updateAllComments = () => {
    let comment = tableValues[0].comment;
    for (let i = 1; i < tableValues.length; i++)
      tableValues[i].comment = comment;
  };

  const closeDialog = () => {
    dialog.close();

    for (let i = 0; i < tableValues.length; i++) {
      tableValues[i].points = 0;
      tableValues[i].comment = "";
    }
  };

  onMount(async () => {
    const userGoogle = await signInGoogle();
    dialog = document.getElementById("modale");
    // close_button = document.getElementById("modale_button");
  });
</script>

<main>
  <dialog id="modale">
    <button id="modale_button" autofocus on:click={() => closeDialog()}
      >Close</button
    >
    <p>OK, operazione conclusa correttamente!!!</p>
  </dialog>

  <div class="classi">
    <div class="etichetta">Seleziona una Classe</div>
    <div
      class="classe {selectClasse == 3 ? 'selected' : 'unselected'}"
      on:click={() => selectStudentsList(3)}
    >
      3 INFO
    </div>
    <div
      class="classe {selectClasse == 4 ? 'selected' : 'unselected'}"
      on:click={() => selectStudentsList(4)}
    >
      4 INFO
    </div>
    <div
      class="classe {selectClasse == 5 ? 'selected' : 'unselected'}"
      on:click={() => selectStudentsList(5)}
    >
      5 INFO
    </div>
  </div>
  <div class="materie">
    <div class="etichetta">Seleziona una Materia</div>
    <div
      class="materia {selectMateria == 'TPSI' ? 'selected' : 'unselected'}"
      on:click={() => (selectMateria = "TPSI")}
    >
      TPSI
    </div>
    <div
      class="materia {selectMateria == 'RETI' ? 'selected' : 'unselected'}"
      on:click={() => (selectMateria = "RETI")}
    >
      RETI
    </div>
  </div>

  {#if selectList.length > 0 && selectMateria != "NONE"}
    <input
      id="submit"
      type="button"
      value="Assegna Punti"
      on:click={() => {
        recordInfo();
      }}
    />
  {/if}

  <div class="tabella">
    <table class="table-auto w-full">
      <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
        <tr>
          <th class="p-2 whitespace-nowrap">
            <div class="font-semibold text-left">Studente</div>
          </th>
          <th class="p-2 whitespace-nowrap">
            <div class="font-semibold text-left">Materia</div>
          </th>
          <th class="p-2 whitespace-nowrap">
            <div class="font-semibold text-left">Punti</div>
          </th>
          <th class="p-2 whitespace-nowrap">
            <div class="font-semibold text-center">Commento</div>
          </th>
        </tr>
      </thead>
      <tbody class="text-sm divide-y divide-gray-200">
        <tr>
          <td class="p-2 whitespace-nowrap">
            <div class="flex items-center">
              <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                {#await get_user_image("dummy") then image}
                  <img
                    class="rounded-full"
                    src={image}
                    width="40"
                    height="40"
                    alt="dummy"
                  />
                {/await}
              </div>
              <div class="font-medium text-gray-800">TUTTI</div>
            </div>
          </td>
          <td class="p-2 whitespace-nowrap">
            <div class="text-left">{selectMateria}</div>
          </td>
          <td class="p-2 whitespace-nowrap">
            <div class="text-left font-medium text-green-500">
              <input
                id="tutti_punti"
                type="number"
                placeholder="0"
                disabled={selectList.length == 0 || selectMateria == "NONE"}
                on:change={updateAllPoints}
                bind:value={tableValues[0].points}
              />
            </div>
          </td>
          <td class="p-2 whitespace-nowrap">
            <div class="text-lg text-center">
              <input
                id="tutti_commento"
                type="text"
                placeholder=""
                disabled={selectList.length == 0 || selectMateria == "NONE"}
                on:change={updateAllComments}
                bind:value={tableValues[0].comment}
              />
            </div>
          </td>
        </tr>
        {#each selectList as e, idx}
          <tr>
            <td class="p-2 whitespace-nowrap">
              <div class="flex items-center">
                <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                  {#await get_user_image(e) then image}
                    <img
                      class="rounded-full"
                      src={image}
                      width="40"
                      height="40"
                      alt={e}
                    />
                  {/await}
                </div>
                <div class="font-medium text-gray-800">
                  {e}
                </div>
              </div>
            </td>
            <td class="p-2 whitespace-nowrap">
              <div class="text-left">{selectMateria}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
              <div class="text-left font-medium text-green-500">
                <input
                  type="number"
                  placeholder="0"
                  disabled={selectList.length == 0 || selectMateria == "NONE"}
                  bind:value={tableValues[idx + 1].points}
                />
              </div>
            </td>
            <td class="p-2 whitespace-nowrap">
              <div class="text-lg text-center">
                <input
                  type="text"
                  placeholder=""
                  disabled={selectList.length == 0 || selectMateria == "NONE"}
                  bind:value={tableValues[idx + 1].comment}
                />
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</main>

<style>
  #modale {
    border: 2px solid black;
    width: 30%;
    padding: 30px;
    border-radius: 8px;
  }

  #modale_button {
    border: 2px solid green;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
  }

  main {
    margin: auto;
    width: 50%;
    margin-top: 20px;
  }

  .etichetta {
    width: 180px;
  }

  .selected {
    background: lightgray;
  }

  .unselected {
    background-color: #f9fafb;
  }

  .classi,
  .materie {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 20px;
  }

  .classe,
  .materia {
    border: 2px solid #f9fafb;
    padding: 0px 30px 0px 30px;
    width: 120px;
  }

  .classe:hover,
  .materia:hover {
    border: 2px solid black;
    cursor: cell;
  }

  #submit {
    border: 2px solid lightgreen;
    background-color: lightgreen;
    height: 28px;
    width: 120px;
    margin-bottom: 20px;
  }

  #submit:hover {
    border: 2px solid green;
  }

  .tabella {
    width: 100%;
  }

  input {
    border: 1px solid lightgray;
    height: 25px;
  }
</style>
