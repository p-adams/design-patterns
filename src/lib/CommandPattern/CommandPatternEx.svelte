<script lang="ts">
  import { marked } from "marked";
  import { afterUpdate } from "svelte";
  import { undoRedoCoordinator, historyBuffers } from "./undo-redo";
  const { past, present } = historyBuffers;
  let input = "";
  let markedInput = null;
  let undoable = undoRedoCoordinator();
  afterUpdate(() => {
    if (input) {
      markedInput = marked(input, { sanitize: true });
    } else {
      markedInput = null;
    }
  });

  function processInput(target) {
    const { onInput } = undoable();
    onInput(target.value);
  }

  function undo() {
    const { undo } = undoable();
    undo();
    input = $past[$past.length - 1];
  }

  function redo() {
    const { redo } = undoable();
    redo();
    input = $present;
  }
</script>

<article class="command-pattern-example-wrapper">
  <!-- demonstrates command pattern with undo/redo functionality -->
  <header>markdown editor</header>
  <div class="undo-redo-btn-wrapper">
    <button on:click={() => undo()}>Undo</button>
    <button on:click={() => redo()}>Redo</button>
  </div>

  <section class="markdown-editor-wrapper">
    <div class="input-output-container">
      <div class="editor">
        <textarea
          bind:value={input}
          on:input={({ target }) => processInput(target)}
        />
      </div>
      <div class="output">
        {@html markedInput}
      </div>
    </div>
  </section>
</article>

<style scoped>
  :root {
    --max-height: 375px;
  }

  .command-pattern-example-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  header {
    text-transform: capitalize;
    text-align: center;
  }
  .markdown-editor-wrapper {
    margin-top: 10px;
    margin-bottom: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .undo-redo-btn-wrapper {
    margin-top: 6px;
    padding: 4px;
    outline: 1px solid gray;
    background-color: darkgray;
  }
  .undo-redo-btn-wrapper button {
    margin-right: 3px;
  }
  .input-output-container {
    display: grid;
    grid-template-columns: 300px 300px;
    gap: 22px;
    height: var(--max-height);
  }

  .editor textarea {
    padding: 0;
    margin: 0;
    width: 100%;
    height: var(--max-height);
    resize: none;
  }

  .output {
    outline: 1px solid gray;
    height: calc(var(--max-height) + 2px);
    text-align: left;
  }

  @media (max-width: 480px) {
    .input-output-container {
      grid-template-columns: 300px;
    }
  }
</style>
