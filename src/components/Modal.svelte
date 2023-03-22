<script>
	export let showModal; // boolean

	let dialog; // HTMLDialogElement

	$: {
    if (dialog) {
      if (showModal) dialog.showModal();
      else dialog.close();
    }

  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
	bind:this={dialog}
	on:click|self={() => showModal = false}
>
	<div on:click|stopPropagation>
		<!-- svelte-ignore a11y-autofocus -->
		<button autofocus on:click={() => dialog.close()}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 16L16 8M8 8L16 16" />
      </svg>
    </button>

		<slot name="header" />
		<slot />
	</div>
</dialog>

<style>
	dialog {
    margin: auto;
		border-radius: 0.75rem;
		border: none;
		padding: 0;
	}

	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}

	dialog > div {
		padding: 1rem;
	}

	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}

	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	button {
		position: absolute;
    top: 0.625rem;
    right: 1rem;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 100%;
	}

  button:hover {
    cursor: pointer;
  }
</style>
