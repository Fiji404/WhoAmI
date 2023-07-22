import { Switch, Route } from 'wouter';
import { ProjectDetailsProvider } from './contexts/ProjectDetailsContext/ProjectDetailsProvider';
import { Home, PageNotFound } from './pages';

export const App = () => {
    return (
        <Switch>
            <Route
                path="/"
                children={
                    <ProjectDetailsProvider>
                        <Home />
                    </ProjectDetailsProvider>
                }
            />
            <Route children={<PageNotFound />} />
        </Switch>
    );
};
