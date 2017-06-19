// Class has export default type, because I’m creating new instance for each store and grouping them in stores/index.js.
// When the app grows, it’ll allow me to easily inject each store to container with @inject decorator.

import SearchStore from './searchStore';

export default {
	searchStore: new SearchStore(),
	// place for other stores...
};