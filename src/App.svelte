<script>
  import HowTo from "./HowTo.svelte";
  import Timer from "./Timer.svelte";
</script>

<style>
  h1, h3 {
    text-align: center;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    color: green;
    transition: ease-in 0.2s;
  }
</style>

<h1>HandWashing App</h1>
<Timer />
<HowTo />

<h3>
  <a href="https://www.who.int/gpsc/clean_hands_protection/en/">
    Picture Source
  </a>
</h3>
