<script lang="ts">
  import { marked } from "marked";
  import { afterUpdate } from "svelte";
  let input = "";
  let markedInput = null;
  afterUpdate(() => {
    markedInput = marked(input, { sanitize: true });
  });
</script>

<article>
  <!-- demonstrates command pattern with undo/redo functionality -->
  <header>markdown editor</header>

  <section>
    <section class="editor">
      <textarea bind:value={input} />
    </section>
    <section class="output">
      {@html markedInput}
    </section>
  </section>
</article>

<style scoped>
  header {
    text-align: center;
  }
</style>
