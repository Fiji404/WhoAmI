import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './translations/i18n';
import { ProjectDetailsProvider } from './contexts/ProjectDetailsContext/ProjectDetailsProvider';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <ProjectDetailsProvider>
            <App />
        </ProjectDetailsProvider>
    </React.StrictMode>
);
