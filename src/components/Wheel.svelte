<script>
  import { createEventDispatcher } from "svelte";
  export let items;

  let canvas;

  let innerHeight;
  let innerWidth;
  $: canvasWidth = Math.min(640, innerHeight - 48, innerWidth - 48);

  let isSpinning = false;
  let result = 0;
  let rotation = 90 * (Math.random() + 1);
  
  const drawWheel = () => {
    if (!isSpinning) rotation = rotation % 360;

    const ctx = canvas.getContext('2d');

    ctx.font = "600 extra-condensed 2em Nunito, sans-serif";
    ctx.fillText('',0,0); // initial draw loads font for future draws
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    let radius = canvas.width/2;
    ctx.translate(radius, radius);
    
    let sliceSize = 2 * Math.PI / items.length; // radians
    
    for (let i = 0; i < items.length; i++) {
      ctx.fillStyle = `rgb(${items[i].color})`;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, -sliceSize/2, sliceSize/2);
      ctx.closePath();
      ctx.fill();
      
      ctx.font = "600 extra-condensed 2em Nunito, sans-serif";
      ctx.textBaseline = "middle";
      ctx.fillStyle = `rgb(${items[i].textColor}`;
      
      let buttonRadius = canvasWidth < 342 ? 32 : 40;
      let text = items[i].value;
      let textWidth = ctx.measureText(text).width;
      let textSpace = radius - buttonRadius - 16; // accounts for offset from button and space after text
      let l = text.length - 1;

      if (textWidth * 0.75 > textSpace) {
        ctx.font = "600 extra-condensed 1.5em Nunito, sans-serif";
        textWidth = ctx.measureText(text).width;

        if (textWidth * 0.75 > textSpace) {
          let j = 0;
          let k = l;
          let ellipsisL = textSpace - ctx.measureText('...').width;
          
          // binary search for index l where [:l] fits text space and [:l+1] doesnt
          while (j < k) {
            l = Math.floor((j + k) / 2);
            let L1 = ctx.measureText(text.slice(0,l)).width * 0.75;
            let L2 = ctx.measureText(text.slice(0,l+1)).width * 0.75;
            if (L1 > ellipsisL && L2 > ellipsisL) {
              k = l - 1;
            } else if (L1 < ellipsisL && L2 < ellipsisL) {
              j = l + 1;
            } else {
              break;
            }
          }
        }
      }
      ctx.fillText(l === text.length - 1 ? text : text.slice(0, l) + '...',
          Math.max(radius - 20 - textWidth, buttonRadius + 8), 0,
          textSpace);
      ctx.rotate(sliceSize);
    }
    ctx.restore();
  }
  
  const handleClick = () => {
    if (items.length > 0) {
      let sliceSize = 360 / items.length; // degrees
      result = Math.floor(Math.random() * items.length);
      rotation = 7200 + (items.length - result - 0.5 + Math.random()) * sliceSize;
      isSpinning = true;
    }
  }

  const dispatch = createEventDispatcher();
  
  const handleTransitionEnd = () => {
    isSpinning = false;
    rotation = rotation % 360;
    dispatch('result', {
      result: result
    })
  }
  
  $: {
    if (items && canvas) {
      isSpinning = false;
      requestAnimationFrame(drawWheel); // condition to draw on change in items
    }
  }

  $: if (canvas && innerWidth) requestAnimationFrame(drawWheel); // condition to draw on window resize
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<div>
    <canvas
      bind:this={canvas}
      style="{`transform: rotate(${rotation}deg); ${isSpinning ? `transition: transform 10s cubic-bezier(0.25, -0.04, 0.2, 1.03)` : ''}`}"
      height="{canvasWidth ? canvasWidth : 640}"
      width="{canvasWidth ? canvasWidth : 640}"
      on:transitionend={handleTransitionEnd}
    >
    This is a spin the wheel app, where you fill in your inputs then spin the wheel to get a random result from your given inputs.
    </canvas>
  <div class="marker">
    <span class="top"></span>
  </div>
  <button on:click={handleClick} disabled={isSpinning}>
    <span class="shadow"></span>
    <span class="top">
      SPIN
    </span>
  </button>
</div>

<style>
  div {
    height: min-content;
    width: min-content;
    position: relative;
    border-radius: 50%;
  }

  canvas {
    display: block;
    background-color: #fff;
    border-style: solid;
    border-radius: 50%;
    border-width: 0.125rem;
    box-shadow: 0 0 5px 2px #aaa;
    pointer-events: none;
  }

  button {
    position: absolute;
    top: calc(50% - 2.5rem);
    left: calc(50% - 2.5rem);
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
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
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }

  button .top {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
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
    border-radius: 50%;
    background: hsl(0deg 0% 0% / 0.25);
    transform: translateY(0.0625rem);
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
    top: calc(50% - 1rem);
    right: -0.875rem;
    box-sizing: content-box;
    height: 0;
    width: 0;
    border-radius: 50%;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    border-right: 4rem solid darkgreen;
  } 

  .marker .top {
    box-sizing: content-box;
    display: block;
    height: 0;
    width: 0;
    border-radius: 50%;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    border-right: 4rem solid green;
    transform: translateY(-1.125rem);
  }

  @media not all and (min-width: 390px) {
    canvas {
      font-size: 12px;
    }

    button {
      top: calc(50% - 2rem);
      left: calc(50% - 2rem);
      height: 4rem;
      width: 4rem;
    }
  }
</style>