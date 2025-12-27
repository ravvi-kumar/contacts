<script lang="ts">
	import './layout.css';
	import { page } from '$app/stores';

	let { children, data } = $props();
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->

<div id="sidebar">
	<h1>
		<a href="/">React Router Contacts</a>
	</h1>
	<div>
		<form id="search-form" role="search">
			<input id="q" aria-label="Search contacts" placeholder="Search" type="search" name="q" />
			<div id="search-spinner" aria-hidden="true" hidden={true}></div>
			<div class="sr-only" aria-live="polite"></div>
		</form>
		<form method="post">
			<button type="submit">New</button>
		</form>
	</div>
	<nav>
		{#if data.contacts.length}
			<ul>
				{#each data.contacts as contact (contact.id)}
					<li>
						<a
							href="/contacts/{contact.id}"
							class:active={$page.url.pathname === `/contacts/${contact.id}`}
						>
							{#if contact.first || contact.last}
								{contact.first} {contact.last}
							{:else}
								<i>No Name</i>
							{/if}
							{#if contact.favorite}
								<span>★</span>
							{/if}
						</a>
					</li>
				{/each}
			</ul>
		{:else}
			<p><i>No contacts</i></p>
		{/if}
	</nav>
</div>
<div id="detail">
	{@render children()}
</div>
