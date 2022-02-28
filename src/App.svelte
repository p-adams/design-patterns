<script lang="ts">
  import AllPatterns from "./AllPatterns.svelte";
</script>

<main>
  <h2>Design Patterns</h2>
  <AllPatterns />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 22px;
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
  main h2 {
    font-size: 28px;
  }
</style>
