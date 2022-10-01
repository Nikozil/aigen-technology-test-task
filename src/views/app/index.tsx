import { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from '../../components/shared-components/Loading';
import { APP_PREFIX_PATH } from '../../config/RoutingConfig';
import Layout from './Layout';

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route
            path={`${APP_PREFIX_PATH}/documents`}
            component={lazy(() => import(`./DocumentsPage`))}
          />

          <Redirect to={`${APP_PREFIX_PATH}/documents`} />
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default App;
