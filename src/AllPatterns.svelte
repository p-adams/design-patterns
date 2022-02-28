<script lang="ts">
  import PatternTemplate from "./lib/PatternTemplate.svelte";
  import CommandPatternEx from "./lib/CommandPattern/CommandPatternEx.svelte";
  import ObserverPatternEx from "./lib/ObserverPattern/ObserverPatternEx.svelte";
  import PrototypePatternEx from "./lib/PrototypePattern/PrototypePatternEx.svelte";
  const patterns = [
    {
      component: CommandPatternEx,
      header: "Command Pattern",
      description: "An example of the Command Pattern",
    },
    {
      component: ObserverPatternEx,
      header: "Observer Pattern",
      description: "An example of the Observer Pattern",
    },
    {
      component: PrototypePatternEx,
      header: "Prototype Pattern",
      description: "An example of the Prototype Pattern",
    },
  ];
</script>

{#each patterns as pattern, i}
  <PatternTemplate id={i}>
    <h2 slot="header">{pattern.header}</h2>
    <div slot="description">{pattern.description}</div>
    <div slot="component">
      <svelte:component this={pattern.component} />
    </div>
  </PatternTemplate>
{/each}
