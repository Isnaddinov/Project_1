import Routes from './routes.svelte'

const app = new Routes({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;