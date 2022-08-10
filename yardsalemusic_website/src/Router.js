import { Route } from 'react-router-dom'
import { Switch } from 'react'
import LandingPage from './LandingPage'


function Router() {

    return (

        <Switch>
            <Route exact path="/" component={LandingPage} />
            {/* <Route exact path="/shows" component={ShowsContainer} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/videos" compnent={Videos} /> */}
        </Switch>

    )

}

export default Router