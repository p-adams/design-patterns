<script lang="ts">
  let isFirstRender = false;
</script>

<article>
  <div class={isFirstRender && "overlay"}>
    <span>click to begin</span>
  </div>
  <header>
    <slot name="header" />
  </header>

  <section>
    <div class="description-wrapper">
      <slot name="description" />
    </div>
    <div class="component-wrapper">
      <slot name="component" />
    </div>
  </section>
</article>

<style scoped>
  article {
    max-height: 550px;
  }
  .overlay {
    border: 1px solid green;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.85);
    z-index: 9999;
    color: white;
  }
  .overlay span {
    color: black;
  }
  section {
    display: flex;
    flex-direction: column;
  }
  section .description-wrapper {
    margin-bottom: 10px;
  }
</style>
