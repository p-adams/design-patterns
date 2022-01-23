<script lang="ts">
  import { onMount } from "svelte";
  import sharkImg from "../assets/shark.png";
  const WIDTH = 700;
  const HEIGHT = 400;
  const SIZE = 45;
  let startX = 50;
  let startY = 150;
  let speed = 45;
  let tabIndex = -1;
  let toggleSettings = false;
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let img = new Image();
  onMount(() => {
    ctx = canvas.getContext("2d");
    img.onload = function () {
      ctx.drawImage(img, startX, startY, SIZE, SIZE);
    };
    img.src = sharkImg;
  });

  function onKeyDown(e: KeyboardEvent) {
    switch (e.code) {
      // temp default static key bindings until command pattern is implemented
      case "ArrowUp":
        move(startX, (startY -= speed));
        break;
      case "ArrowDown":
        move(startX, (startY += speed));
        break;
      case "ArrowRight":
        move((startX += speed), startY);
        break;
      case "ArrowLeft":
        move((startX -= speed), startY);
      default:
        break;
    }
  }
  function move(x, y) {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.drawImage(img, x, y, SIZE, SIZE);
  }
</script>

<header><h3>Flippy Shark</h3></header>
<canvas
  bind:this={canvas}
  width={WIDTH}
  height={HEIGHT}
  on:keydown={(e) => onKeyDown(e)}
  {tabIndex}
/>
<div class="control-menu-panel">
  <span>Click canvas to start game</span>

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
    box-shadow: inset 4px 4px 10px lightblue;
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
