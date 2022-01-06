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

<header><h3>Asteroids</h3></header>
<canvas
  on:dblclick={() => start()}
  width={500}
  height={300}
  on:keyup={(e) => onKeyup(e)}
  on:keydown={(e) => onKeyDown(e)}
  {tabIndex}
/>
<div class="control-menu-panel">
  <span>Double-click canvas to start game</span>

  <div class="settings-controls">
    <i
      class="fas fa-gamepad"
      on:click={() => (toggleSettings = !toggleSettings)}
    />
    <span>Settings</span>
  </div>

  {#if toggleSettings}
    <div class="menu-settings">
      <div>controls</div>
    </div>
  {/if}
</div>

<style scoped>
  header {
    text-align: center;
  }
  canvas {
    border: 1px solid blue;
  }
  .control-menu-panel {
    display: flex;
    flex-direction: column;
  }
  .settings-controls {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .settings-controls i {
    cursor: pointer;
    font-size: 24px;
    margin-right: 4px;
  }
  .settings-controls i:hover {
    color: blue;
    font-size: 28px;
  }
</style>
