import Component from '../../common/js/component';

class Callbacks extends Component {
    constructor(nRoot) {
        super(nRoot, 'callbacks');
    }

    add(name, f) {
        if (!this[name]) {
            this[name] = [];
        }
        this[name].push(f);
    }

    remove(name, f) {
        if (!this[name]) {
            return;
        }
        const fIndex = this[name].indexOf(f);
        if (fIndex !== -1) {
            this[name].splice(fIndex, 1);
        }
    }

    clear(name) {
        this[name] = [];
    }

    call(name) {
        if (this[name]) {
            this[name].forEach(f => f());
        }
    }

    destroy() {

    }
}

export default Callbacks;
