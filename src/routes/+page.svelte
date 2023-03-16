<script>
  import Wheel from "../components/Wheel.svelte";
  import Item from "../components/Item.svelte";

  let value = '';
  let items = [];

  // move to utils?
  const getBrightness = (r, g, b) => {
    return (r * 0.299 + g * 0.587 + b *0.114) / 256;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length > 0) {
      const r = Math.random() * 255, g = Math.random() * 255, b = Math.random() * 255;
      items = [...items, {
        value: value.trim(),
        color: `${r},${g},${b}`,
        textColor: getBrightness(r, g, b) < 0.55 ? '255,255,255' : '0,0,0'
      }];
      value = '';
    }
  }

  const rmInput = (e) => {
    items = items.filter((item, i) => i !== e.detail.id);
  }

  const editInput = (e) => {
    const { id, value } = e.detail;
    items = items.map((item, i) => {
      if (i === id) {
        item.value = value;
      }
      return item;
    })
  }
</script>

<main>
  <div>
    <Wheel { items } />
    <aside>
      <form on:submit={handleSubmit}>
        <input bind:value placeholder="Type here..." />
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12.75l5 5 7-11" />
          </svg>          
        </button>
      </form>
      <ul>
      {#each items as item, id (item.value + item.color)}
        <Item { item } { id } on:delete={rmInput} on:edit={editInput}/>
      {/each}
      </ul>
    </aside>
  </div>
</main>

<style>
  main {
    padding: 2.5rem;
  }

  div {
    margin: auto;
    padding: 2rem;
    max-width: 80rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    border: solid 0.25rem;
    border-radius: 1rem;
    
  }

  aside {
    height: 40rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    box-shadow: 0 8px 12px 2px rgb(0 0 0 / 0.1);;
  }

  form {
    display: flex;
    justify-content: space-around;

    gap: 1rem;
  }

  input {
    padding: 0 1.25rem;
    height: 3rem;
    width: 20rem;
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

  button {
    height: 3rem;
    width: 3rem;
    border-radius: 0.75rem;
    vertical-align: middle;
  }

  button:hover {
    cursor: pointer;
  }

  ul {
    margin-top: 0.5rem;
    padding-right: 0.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    flex-grow: 1;
    overflow-y: scroll;
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
</style>