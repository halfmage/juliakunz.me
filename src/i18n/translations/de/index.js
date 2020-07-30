import flatten from 'flat';

import error404 from './404';
import home from './home';

const message = { error404, home };

export default flatten(message);
