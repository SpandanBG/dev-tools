import * as ReactDOM from 'react-dom';

/*
 * Material UI uses Roboto font by default.
 */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Index = () => {
  return <div>Hello, world</div>;
}

ReactDOM.render(<Index />, document.getElementById('app'));
