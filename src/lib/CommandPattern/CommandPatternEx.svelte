<script lang="ts">
  import { marked } from "marked";
  import { afterUpdate } from "svelte";
  import { undoRedoCoordinator } from "./undo-redo";
  let input = "";
  let markedInput = null;
  let undoable = null;

  afterUpdate(() => {
    if (input) {
      markedInput = marked(input, { sanitize: true });
    } else {
      markedInput = "";
    }
    undoable = undoRedoCoordinator();
  });

  function processInput(target) {
    const { onInput } = undoable();
    onInput(target.value).subscribe((value) => {
      input = value;
    });
  }

  function undo() {
    const { undo } = undoable();
    undo().subscribe((values: string[]) => {
      input = values[values.length - 1];
    });
  }

  function redo() {
    const { redo } = undoable();
    redo().subscribe((value: string) => {
      input = value;
    });
  }
</script>

<article class="command-pattern-example-wrapper">
  <!-- demonstrates command pattern with undo/redo functionality -->
  <header>markdown editor</header>

  <section class="markdown-editor-wrapper">
    <div class="input-output-container">
      <div class="editor">
        <textarea
          bind:value={input}
          on:input={({ target }) => processInput(target)}
        />
        <div>
          <button on:click={() => undo()}>Undo</button>
          <button on:click={() => redo()}>Redo</button>
        </div>
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
    height: var(--max-height);
    text-align: left;
  }

  @media (max-width: 480px) {
    .input-output-container {
      grid-template-columns: 300px;
    }
  }
</style>
