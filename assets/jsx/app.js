import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Application from './Application';
injectTapEventPlugin();
render(<Application />, document.getElementById('react-root'));