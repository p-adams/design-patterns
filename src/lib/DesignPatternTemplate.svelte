<script lang="ts">
  export let opened = false;
  export let id: string | number = null;
</script>

<article>
  <header>
    {#if id}
      <span class="template-id">{id}</span>
    {/if}
    <slot name="header" />
    <span
      class={`expand-icon ${opened ? "expanded" : ""} `}
      on:click={() => (opened = !opened)}
    />
  </header>
  {#if opened}
    <section>
      <div class="description-wrapper">
        <slot name="description" />
      </div>
      <div class="component-wrapper">
        <slot name="component" />
      </div>
    </section>
  {/if}
</article>

<style scoped>
  article {
    max-height: 550px;
  }
  header {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .expand-icon::after {
    margin-left: 10px;
    color: black;
    content: "+";
  }

  .expand-icon.expanded::after {
    content: "-";
  }

  .template-id {
    margin-right: 10px;
  }
  section {
    display: flex;
    flex-direction: column;
  }
  section .description-wrapper {
    margin-bottom: 10px;
  }
</style>
