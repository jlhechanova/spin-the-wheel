<script>
  export let rmInput;
  export let editInput;
  export let item;
  export let id;
  
  let value = item.value;
</script>

<li>
  <form
    on:submit={(e) => {
      e.preventDefault();
      editInput(id, {...item, value: value})
    }}
  >
    <input
      bind:value
      style:background-color={`rgb(${item.color})`}
      style:color={`rgb(${item.textColor})`}
      on:blur={() => editInput(id, {...item, value: value})}/>
    <button />
  </form>
  <button style:padding={"0.4rem"} on:click={() => editInput(id, {...item, isHidden: !item.isHidden})}>
    {#if !item.isHidden}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.25" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
    {:else}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.25" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>
    {/if}
  </button>
  <button on:click={() => rmInput(id)}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
</li>

<style>
  li {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 0.75rem;
  }
  
  form {
    width: 100%;
    display: flex;
    flex-grow: 1; 
  }

  form button {
    display: none;
  }

  form input {
    padding: 0 1rem;
    height: 2rem;
    width: 100%;
    max-width: 20rem;
    flex-grow: 1;
    border: none;
    border-radius: 0.75rem;
    outline: none;
    font-family: inherit;
    font-size: 1.25rem;
    line-height: 1.75rem;
    vertical-align: middle;
    box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.15);
    transition: filter 300ms;
  }

  form input:focus {
    filter: brightness(115%);
  }

  li > button {
    height: 2rem;
    width: 2rem;
    flex-shrink: 0;
    border-radius: 0.5rem;
    vertical-align: middle;
    filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
    appearance: none;
  }

  li > button:hover {
    cursor: pointer;
  }

  @media all and (min-width: 390px) {
    form input {
      height: 2.5rem;
    }
    
    li > button {
      height: 2.5rem;
      width: 2.5rem;
    }
  }
</style>
