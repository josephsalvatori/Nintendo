<script>
import { Debug, DebugDrawer } from "$cmp/debug";

export let data;
</script>

<div class="container">
	<ul>
		{#each data.sortedGames as game}
			<li>
				<Debug object={game} title={game.title} />
				<a href="/games/{game.slug}/">{game.title}</a>
			</li>
		{/each}
	</ul>
</div>

<DebugDrawer>
	<Debug object={data} title="Games" />
</DebugDrawer>