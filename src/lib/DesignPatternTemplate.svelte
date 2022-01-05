<script lang="ts"></script>

<article>
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
  section {
    display: flex;
    flex-direction: column;
  }
  section .description-wrapper {
    margin-bottom: 10px;
  }
</style>
