import {routes} from './routes'
import {Router} from "@solidjs/router";
import {MetaProvider} from "@solidjs/meta"
import {basePath} from "@/helpers";

const Routes = () => {
    return (
        <MetaProvider>
            <Router base={basePath}>
                {routes}
            </Router>
        </MetaProvider>
    );
};

export default Routes;
