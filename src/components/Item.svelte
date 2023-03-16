<script>
  import { createEventDispatcher } from "svelte";
  export let item;
  export let id;
  
  let value = item.value;
  
  const dispatch = createEventDispatcher();

  const editItem = (e) => {
    e.preventDefault();
    dispatch('edit', {
      id: id,
      value: value
    });
  }

  const rmItem = () => {
    dispatch('delete', {
      id: id
    })
  }
</script>

<li>
  <form on:submit={editItem}>
    <input
      bind:value
      style:background-color={`rgb(${item.color})`}
      style:color={`rgb(${item.textColor})`}
      on:blur={() => value = item.value}/>
    <button />
  </form>
  <button on:click={rmItem}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
</li>

<style>
  li {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  input {
    height: 1.5rem;
    vertical-align: middle;
  }

  form button {
    display: none;
  }

  input {
    padding: 0 1rem;
    height: 2.5rem;
    width: 20rem;
    border: none;
    border-radius: 0.75rem;
    outline: none;
    font-family: inherit;
    font-size: 1.25rem;
    line-height: 1.75rem;
    box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.15);
    transition: filter 300ms;
  }

  input:focus {
    filter: brightness(115%);
  }

  li > button {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 0.5rem;
    vertical-align: middle;
  }

  li > button:hover {
    cursor: pointer;
  }
</style>
