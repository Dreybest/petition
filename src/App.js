import React from "react"

import { Router } from "@reach/router"

import './App.css';
import LandingPage from './pages/LandingPage';
import CreatePetition from './pages/CreatePetition';
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import PetitionPage from "./pages/PetitionsPage";
import PetitionDetailsPage from "./pages/PetitionDetailsPage/Index";
import GuidePage from "./pages/GuidePage";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store/index";
import { LoggedInHeader } from "./components/LoggedInHeader/LoggedInHeader";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>

          <SignInPage path="/sign-in-page" />
          <SignUpPage path="/sign-up-page" />
          <LandingPage path="/" />
          <CreatePetition path="/create-petition" />
          <PetitionPage path="/petition-page" />
          <PetitionDetailsPage path="/petition-details-page" />
          <GuidePage path="/guide-page" />
          <LoggedInHeader path="/homepage"/>

        </Router>
      </PersistGate>
    </Provider>

  );
}


export default App;
