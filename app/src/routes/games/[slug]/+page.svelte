<script>
import { Debug, DebugDrawer } from "$cmp/debug";

export let data;

const { game } = data;
</script>

<div class="container">

</div>

<DebugDrawer>
	<Debug object={game} title={game.title} />
</DebugDrawer>