<script>
  import Wheel from "../components/Wheel.svelte";
  import Item from "../components/Item.svelte";
  import Modal from "../components/Modal.svelte";
  import { getBrightness } from '../utils';

  let value = '';
  let items = [];

  let result;
  let showModal = false;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length > 0) {
      const r = Math.random() * 255, g = Math.random() * 255, b = Math.random() * 255;
      items = [...items, {
        value: value.trim(),
        color: `${r},${g},${b}`,
        textColor: getBrightness(r, g, b) < 0.55 ? '255,255,255' : '0,0,0',
        isHidden: false
      }];
      value = '';
    }
  }

  const rmInput = (id) => {
    items = items.filter((item, i) => i !== id);
  }

  const editInput = (id, newItem) => {
    items = items.map((item, i) => {
      if (i === id) {
        return newItem;
      }
      return item;
    })
  }

  const handleResult = (e) => {
    result = e.detail.result;
    showModal = true;
  }

  const handleHideChoice = () => {
    items[result].isHidden = true;
    items = items;
    showModal = false;
  }
</script>

<main>
  <Wheel items={items.filter(item => !item.isHidden)} on:result={handleResult}/>
  <section>
    <form on:submit={handleSubmit}>
      <input bind:value placeholder="Type here..." />
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 5.5v13m6.5-6.5h-13" />
        </svg>
      </button>
    </form>
    <ul>
    {#each items as item, id (item.value + item.color)}
      <Item { item } { id } {rmInput} {editInput}/>
    {/each}
    </ul>
  </section>
</main>

<Modal bind:showModal>
  <h2 slot="header">
    YOU GOT
  </h2>
  <div class="winnermodal">
    <p class="winnertext">{items[result]?.value}</p>
  </div>
  <button on:click={handleHideChoice}>Hide Choice</button>
</Modal>

<style>
  main {
    margin: auto;
    padding: 1rem 0.5rem;
    max-width: 80rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    border-radius: 1rem;
    overflow: hidden;
  }

  section {
    width: 24rem;
    min-height: 12rem;
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 8px 12px 2px rgb(0 0 0 / 0.1);
  }

  form {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  input {
    padding: 0 1.25rem;
    height: 2.5rem;
    width: 100%;
    max-width: 20rem;
    border-radius: 0.75rem;
    outline: none;
    font-family: inherit;
    font-size: 1.5rem;
    line-height: 1.25rem;
    vertical-align: middle;
    box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.15);
    background-color: #e2e8f0;
    transition: background 400ms ease-out;
    border: none;
  }

  input:focus {
    background-color: revert;
  }

  form button {
    height: 2.5rem;
    width: 2.5rem;
    flex-shrink: 0;
    border-radius: 0.75rem;
    vertical-align: middle;
    filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  }

  form button:hover {
    cursor: pointer;
  }

  ul {
    margin-top: 1rem;
    padding-right: 0.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex-grow: 1;
    scrollbar-width: thin;
  }

  ul::-webkit-scrollbar {
    width: 8px;
  }

  ul::-webkit-scrollbar-thumb {
    background-color: var(--thumbBG) ;
    border: solid white 2px;
    border-radius: 6px;
  }

  
  h2 {
    text-align: center;
  }

  .winnermodal {
    min-height: 10rem;
    width: 32rem;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-wrap: break-word;
    word-break: break-word;
  }

  .winnermodal p {
    font-size: 3.5rem;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.0375em;
    text-align: center;
  }

  .winnermodal + button {
    display: block;
    margin: 0.25rem auto 0;
    height: 2.5rem;
    width: 10rem;
    border-radius: 0.75rem;
    font-size: 1.25rem;
    font-weight: 600;
    font-family: inherit;
    filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.15)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.08));
  }

  @media all and (min-width: 1100px) {
    section {
      max-height: 40rem;
    }

    ul {
      overflow-y: auto;
    }

    .winnermodal {
      max-width: 44rem;
    }
  }

  @media all and (min-width: 390px) {
    main {
      padding: 2rem 1rem;
      gap: 2rem;
    }

    section {
      padding: 2rem;
    }

    input {
      height: 3rem;
    }

    form button {
      height: 3rem;
      width: 3rem;
    }

    .winnermodal p {
      font-size: 4rem;
      font-weight: 800;
    }

    .winnermodal + button {
      height: 3rem;
      font-size: 1.5rem;
    }
  }
</style>