import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SpotList from "./components/SpotList";
import CreateSpotFormPage from "./components/CreateSpot";
import SpotDetail from "./components/SingleSpotPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/newspot'>
          <CreateSpotFormPage />
          </Route>
          <Route exact path='/'>
            <SpotList />
          </Route>
          <Route exact path='/spots/:spotId'>
            <SpotDetail />
          </Route>
        </Switch>
      )}

    </>
  );
}

export default App;
