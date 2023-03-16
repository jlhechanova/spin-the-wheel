<script>
  import Modal from "./Modal.svelte";
  export let items;

  let canvas;

  let isSpinning = false;
  let choice = 0;
  let arc = 90 * (Math.random() + 1);

  let showModal = false;

  $: {
    isSpinning = false;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      let r = canvas.width/2;
      ctx.translate(r, r);
  
      if (items.length > 0) {
        for (let i = 0; i < items.length; i++) {
          let sliceSize = 2 * Math.PI / items.length; // radians
          let start = i * sliceSize;
          let end = (i + 1) * sliceSize;
          ctx.fillStyle = `rgb(${items[i].color})`;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.arc(0, 0, r, start, end);
          ctx.closePath();
          ctx.fill();

          ctx.save();
          ctx.rotate(i * (end - start) + (end - start) / 2);
          ctx.font = "24px Nunito";
          ctx.textBaseline = "middle";
          ctx.fillStyle = `rgb(${items[i].textColor}`;
          ctx.fillText(items[i].value, 300 - ctx.measureText(items[i].value).width, 0);
          ctx.restore();
        }
      }
      ctx.restore();
    }
  }

  const handleClick = () => {
    if (items.length > 0) {
      let sliceSize = 360 / items.length; // degrees
      choice = Math.floor(Math.random() * items.length);
      arc = 3600 + (items.length - choice - 1) * sliceSize + Math.random() * sliceSize;
      console.log(items[choice].value);
      isSpinning = true;
    }
  }

  const handleTransitionEnd = () => {
    isSpinning = false;
    arc = arc % 360;
    showModal = true;
  }
</script>

<div>
  <canvas
    bind:this={canvas}
    style="{`transform: rotate(${arc}deg); ${isSpinning ? `transition: transform 10s cubic-bezier(0.25, -0.04, 0.2, 1.03)` : ''}`}"
    height="640"
    width="640"
    on:transitionend={handleTransitionEnd}
  ></canvas>
  <button on:click={handleClick} disabled={isSpinning}>
    <span class="shadow"></span>
    <span class="top">
      SPIN
    </span>
  </button>
  <div class="marker">
    <span class="top"></span>
  </div>
</div>
<Modal bind:showModal>
  <h2 slot="header">
    YOU GOT
  </h2>
  <div class="winnermodal">
    <span class="winnertext">{items[choice]?.value}</span>
  </div>
</Modal>

<style>
  div {
    position: relative;
    border-radius: 100%;
  }

  canvas {
    border-style: solid;
    border-radius: 100%;
    border-width: 0.125rem;
    box-shadow: 0 0 5px 2px #aaa;
  }

  button {
    position: absolute;
    top: calc(50% - 2.5rem);
    left: calc(50% - 2.5rem);
    height: 5rem;
    width: 5rem;
    border-radius: 100%;
    outline: none;
    outline-offset: 0.25rem;
    background: hsl(340deg 100% 32%);
    color: white;
    font-family: inherit;
    font-size: 1.5em;
    font-weight: 900;
    transition: filter 500ms;
  }
  
  button:hover {
    filter: brightness(120%);
  }

  button:focus-visible {
    outline: revert;
  }

  button .top {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background: hsl(345deg 100% 47%);
    color: white;
    transform: translateY(-0.375rem);
    will-change: transform;
    transition: transform 250ms;
  }

  button .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background: hsl(0deg 0% 0% / 0.25);
    transform: translateY(0.125rem);
    transition: transform 250ms;
  }

  button:hover .top {
    transform: translateY(-0.5rem);
  }

  button:hover .shadow {
    transform: translateY(0.25rem);
  }

  button:disabled .top, button:active .top {
    transform: translateY(-0.125rem);
  }

  button:active .shadow {
    transform: translateY(0.125rem);
  }

  .marker {
    position: absolute;
    top: calc(50% - 2rem);
    right: -1.5rem;
    box-sizing: content-box;
    height: 0;
    width: 0;
    border-radius: 100%;
    border-top: 2rem solid transparent;
    border-bottom: 2rem solid transparent;
    border-right: 4rem solid darkgreen;
  }

  .marker .top {
    box-sizing: content-box;
    display: block;
    height: 0;
    width: 0;
    border-radius: 100%;
    border-top: 2rem solid transparent;
    border-bottom: 2rem solid transparent;
    border-right: 4rem solid green;
    transform: translateY(-2.125rem);
  }

  h2 {
    text-align: center;
  }

  .winnermodal {
    height: 12rem;
    width: 32rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .winnertext {
    font-size: 5rem;
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.0375em;
    text-align: center;
  }

  @media (min-resolution: 120dpi) {
  canvas {
    height: 480px;
    width: 480px;
  }
}
</style>