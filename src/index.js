import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';

ReactDOM.render(
    <React.StrictMode>
        <App/>,
    </React.StrictMode>,
    document.getElementById('app')
);



/*import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './routes/App';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);*/