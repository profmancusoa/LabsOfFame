<script>
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    Spinner,
  } from "flowbite-svelte";
  import { AwardSolid } from "flowbite-svelte-icons";
  import user_placeholder from "./avatars/user_placeholder.png";
  //import user_placeholder from "../../static/avatars/user_placeholder.png";

  // const user_placeholder = "/avatars/user_placeholder.png";
  const table_padding = "px-4 py-6 w-1/6";
  const name_width = "w-3/5";
  const points_width = "w-1/4";

  function get_prize_color(pos) {
    const first_prize_color = "#ffd700";
    const second_prize_color = "#949494";
    const third_prize_color = "#cd7f32";
    switch (pos) {
      case 0:
        return first_prize_color;
      case 1:
        return second_prize_color;
      case 2:
        return third_prize_color;
      default:
        break;
    }
  }
  export let items;

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

  async function get_user_image(username) {
    const real_username = username.toLowerCase();
    return Object.hasOwn(user_image, real_username)
      ? (await user_image[real_username]()).default
      : user_placeholder;
  }
</script>

<!-- 
  @component
  Griglia della leaderboard
  
  Usage:
    ```tsx
	<script>
	    const example = [
		{
		    "name": "Prova",
		    "image: "URL_IMMAGINE",
		    "points": 5000
		}
	    ];
	<script />
	<Grid items={example} />
    ```
    Le posizioni vengono calcolate dall'indice dell'array
  -->

<svelte:head>
  <style>
    /* Nello style di Svelte questo stile viene rimosso in quanto 
	   non usato nella pagina ma nel componente TableBodyCell.
	   Come workaround lo metto nel HTML
	*/
    svg {
      display: block;
      text-align: center;
      margin: auto;
    }
  </style>
</svelte:head>

<div class="lg:flex lg:justify-center">
  <div class="lg:w-2/5">
    <Table hoverable={true} class="text-center">
      <TableHead>
        <TableHeadCell padding={table_padding}>Pos</TableHeadCell>
        <TableHeadCell class={name_width}>Nome</TableHeadCell>
        <TableHeadCell class={points_width}>Punteggio</TableHeadCell>
      </TableHead>
      <TableBody tableBodyClass="divide-y">
        {#each items as item, i}
          <TableBodyRow>
            <TableBodyCell tdClass={table_padding} class="text-center">
              {#if i >= 0 && i <= 2}
                <AwardSolid size="xl" color={get_prize_color(i)}></AwardSolid>
              {:else}
                <div class="text-base gamer-font text-4xl">{i + 1}</div>
              {/if}
            </TableBodyCell>
            <TableBodyCell
              class="flex items-center px-6 py-4 text-gray-900 dark:text-white {name_width} space-x-4"
            >
              {#await get_user_image(item.username)}
                <Spinner size="8" />
              {:then image}
                <img
                  class="lg:w-2/6 w-3/6 rounded-full"
                  src={image}
                  alt="{item.username} avatar"
                />
              {:catch error}
                <!-- Return "" to avoid unwanted text -->
                {() => {
                  console.log(error);
                  return "";
                }}
                <img
                  class="lg:w-2/6 w-3/6 rounded-full"
                  src={user_placeholder}
                  alt="{item.username} avatar"
                />
              {/await}

              <div class="ps-3 xl:pr-6">
                <div class="text-base gamer-font text-4xl pr-6">
                  {item.username.replace("_", " ")}
                </div>
              </div>
            </TableBodyCell>
            <TableBodyCell class={points_width}>
              <div class="text-base gamer-font text-4xl">{item.points}</div>
            </TableBodyCell>
          </TableBodyRow>
        {/each}
      </TableBody>
    </Table>
  </div>
</div>

<style>
  @font-face {
    font-family: "Knight-Warrior";
    src: url(/Knight-Warrior-BF6527a6f3a30ed.otf);
  }

  /* Computer */
  @media screen and (min-width: 720px) {
    .gamer-font {
      font-family: "Knight-Warrior";
      font-size: xx-large;
    }
  }

  /* Dispositivi mobili */
  @media screen and (max-width: 719px) {
    .gamer-font {
      font-family: "Knight-Warrior";
      font-size: large;
    }
  }
</style>
