import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";


// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages

// context
import { useLayoutState } from "../../context/LayoutContext";
import UrllcDashboard from "../../pages/urllcdashboard/urllcdashboard";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/urllcdash" component={UrllcDashboard} />
              {/* <Route path="/app/systems" component={Systems} />
              <Route
                exact
                path="/app/settings"
                render={() => <Redirect to="/app/settings/sites" />}
              />
              <Route path="/app/settings/sites" component={EditSites} />
              <Route path="/app/settings/users" component={Users} /> */}
            </Switch>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
