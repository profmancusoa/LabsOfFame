<script>
    import Grid from "../lib/Grid.svelte";
    const example_items = [
	{
	  name: "Linus Torvalds",
	  points: 5000,
	  image: "/user_placeholder.png",
	},
	{
	  name: "RMS",
	  points: 4000,
	  image: "/user_placeholder.png",
	},
	{
	  name: "Ken Thompson",
	  points: 3000,
	  image: "/user_placeholder.png",
	},
	{
	  name: "Pippo Pluto",
	  points: 2000,
	  image: "/user_placeholder.png",
	},
	{
	  name: "Ciro Esplosito",
	  points: 1500,
	  image: "/user_placeholder.png",
	},
	{
	  name: "Pippo Pluto",
	  points: 1000,
	  image: "/user_placeholder.png",
	},
     ];
</script>

<Grid items={example_items}></Grid>
