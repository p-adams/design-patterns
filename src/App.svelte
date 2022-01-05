<script lang="ts">
  import DesignPatternTemplate from "./lib/DesignPatternTemplate.svelte";
  import CommandPatternEx from "./lib/CommandPatternEx.svelte";
</script>

<main>
  <DesignPatternTemplate>
    <h2 slot="header">Command Pattern</h2>
    <CommandPatternEx slot="component" />
  </DesignPatternTemplate>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
</style>
