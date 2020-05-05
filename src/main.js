import App from './App.svelte';
import 'blueprint-css/dist/v2/blueprint.min.css'
const app = new App({
	target: document.body,
	props: {
		name: 'fuck'
	}
});

export default app;