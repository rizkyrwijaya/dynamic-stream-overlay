import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import ControlPanel from "./components/controlpanel/Main"
import OverlayCenter from "./components/overlay/Main"

function App(props) {
  return (
    <Switch>
      <Route path="/control" component={ControlPanel}/>
      <Route path="/overlay" component={OverlayCenter}/>
    </Switch>
  )
}

export default App;