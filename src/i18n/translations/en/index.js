import flatten from 'flat';

import error404 from './404';
import home from './home';

const messages = { error404, home };

export default flatten(messages);
