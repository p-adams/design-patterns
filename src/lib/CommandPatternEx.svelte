<script lang="ts">
  import { marked } from "marked";
  import { afterUpdate } from "svelte";
  let input = "";
  let markedInput = null;
  afterUpdate(() => {
    markedInput = marked(input, { sanitize: true });
  });
</script>

<article class="command-pattern-example-wrapper">
  <!-- demonstrates command pattern with undo/redo functionality -->
  <header>markdown editor</header>

  <section class="markdown-editor-wrapper">
    <div class="input-output-container">
      <div class="editor">
        <textarea bind:value={input} />
      </div>
      <div class="output">
        {@html markedInput}
      </div>
    </div>
  </section>
</article>

<style scoped>
  .command-pattern-example-wrapper {
    display: flex;
    flex-direction: column;
  }

  header {
    text-transform: capitalize;
    text-align: center;
  }
  .markdown-editor-wrapper {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .input-output-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>
