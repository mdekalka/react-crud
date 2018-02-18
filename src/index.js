import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.scss';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import routes from './store/configRoutes';

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
