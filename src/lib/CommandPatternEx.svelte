<script lang="ts">
  let tabIndex = -1;
  let toggleSettings = false;
  function onKeyup(e) {
    console.log(e.key);
  }
  function onKeyDown(e) {
    console.log(e.key);
  }

  function start() {
    tabIndex = 1;
  }
</script>

<canvas
  on:dblclick={() => start()}
  width={300}
  height={300}
  on:keyup={(e) => onKeyup(e)}
  on:keydown={(e) => onKeyDown(e)}
  {tabIndex}
/>
<div class="control-menu-panel">
  <span>Double-click canvas to start game</span>
  <div>
    <i
      class="fas fa-gamepad"
      on:click={() => (toggleSettings = !toggleSettings)}
    />settings
    {#if toggleSettings}
      <div class="menu-settings">
        <div>controls</div>
      </div>
    {/if}
  </div>
</div>

<style scoped>
  canvas {
    border: 1px solid blue;
  }
  .control-menu-panel {
    display: flex;
    flex-direction: column;
  }
</style>
