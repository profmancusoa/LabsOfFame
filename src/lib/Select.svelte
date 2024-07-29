<script>
  export let value;
  export let on_change;
  export let options;
</script>

<select
  name="classe"
  id="classe"
  class="custom_select w-full p-4 mb-5 rounded-md bg-white cursor-pointer appearance-none bg-no-repeat focus:outline-none border-none"
  bind:value
  on:change={on_change}
>
  {#each options as option}
    <option value={option.value}>{option.text}</option>
  {/each}
</select>

<style>
  .custom_select {
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
  }

  .custom_select:focus {
    border: 1px solid #66afe9;
    box-shadow:
      inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(0, 0, 0, 0.6);
  }
</style>
