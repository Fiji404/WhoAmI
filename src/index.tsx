import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './translations/i18n';
import { ProjectDetailsProvider } from './contexts/ProjectDetailsContext/ProjectDetailsProvider';
import { Route, Switch } from 'wouter';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <Switch>
            <Route path="/">
                <ProjectDetailsProvider>
                    <App />
                </ProjectDetailsProvider>
            </Route>
            <Route>
                <PageNotFound />
            </Route>
        </Switch>
    </React.StrictMode>
);
