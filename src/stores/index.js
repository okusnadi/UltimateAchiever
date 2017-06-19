// Class has export default type, because I’m creating new instance for each store and grouping them in stores/index.js.
// When the app grows, it’ll allow me to easily inject each store to container with @inject decorator.
// @flow

import PomoStore from './pomoStore';

export default {
	pomoStore: new PomoStore(),
	// place for other stores...
};


// @observable – a property whose changes observers subscribe to
// @observer – a component whose render() method observes values
// @computed – a method whose value can be fully derived from observables
// @action – a method that changes state, analogous to a Redux reducer
// @inject – a decorator that injects global stores into a component’s props