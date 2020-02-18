import '../css/common.css';
import '../scss/common.scss';
import 'objectFitPolyfill';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/carousel';
import 'babel-polyfill';
import 'element-closest/browser';

if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
}

function requireAll(r) {
    r.keys().forEach(r);
}

/*if (isIE() || isEdge()) {
    nGetBody().classList.add('is-ie');
}*/

requireAll(require.context('../../components/', true, /\.svg$/));
requireAll(require.context('../icons/', true, /\.svg$/));

window.addEventListener('resize', objectFitPolyfill);
