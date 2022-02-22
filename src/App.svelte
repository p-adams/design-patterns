<script lang="ts">
  import DesignPatternTemplate from "./lib/DesignPatternTemplate.svelte";
  import CommandPatternEx from "./lib/CommandPattern/CommandPatternEx.svelte";
  import ObserverPatternEx from "./lib/ObserverPattern/ObserverPatternEx.svelte";
</script>

<main>
  <h2>Design Patterns</h2>
  <DesignPatternTemplate id="1">
    <h2 slot="header">Command Pattern</h2>
    <div slot="description">An example of the Command Pattern</div>
    <CommandPatternEx slot="component" />
  </DesignPatternTemplate>
  <DesignPatternTemplate id="2" opened={true}>
    <h2 slot="header">Observer Pattern</h2>
    <div slot="description">An example of the Observer Pattern</div>
    <ObserverPatternEx slot="component" />
  </DesignPatternTemplate>
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
