import ReactDOM from 'react-dom';
import axios from 'axios';
import './styles/main.scss';

import registerServiceWorker from './registerServiceWorker';
import routes from './store/configRoutes';

axios.defaults.baseURL = 'http://localhost:8001';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
