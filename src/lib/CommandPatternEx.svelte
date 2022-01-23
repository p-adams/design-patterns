<script lang="ts">
  import { onMount } from "svelte";
  import sharkImg from "../assets/shark.png";
  const WIDTH = 500;
  const HEIGHT = 300;
  let tabIndex = -1;
  let toggleSettings = false;
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let img = new Image();
  onMount(() => {
    ctx = canvas.getContext("2d");
    img.onload = function () {
      ctx.drawImage(img, 10, 10, 35, 35);
    };
    img.src = sharkImg;
  });
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

<header><h3>Flippy Shark</h3></header>
<canvas
  bind:this={canvas}
  on:dblclick={() => start()}
  width={WIDTH}
  height={HEIGHT}
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
