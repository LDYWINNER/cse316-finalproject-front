import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ViewData from "./components/viewData";
import DailyView from "./components/dailyView";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import EditQuestions from './components/EditQuestions';
import Register from "./components/Register";
import LogDay from './components/LogDay';
import Profile from './components/Profile';

function App() {
  const [image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
  // to store image url from Cloudinary
  const [imageUrl, setImageUrl] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");



  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/viewData">
          <Navbar image={image} setImage={setImage} />
          <ViewData />
        </Route>
        <Route path="/dailyView">
          <Navbar image={image} setImage={setImage} />
          <DailyView />
        </Route>
        <Route path="/editQuestions">
          <Navbar image={image} setImage={setImage} />
          <EditQuestions />
        </Route>
        <Route path="/logDay">
          <Navbar image={image} setImage={setImage} />
          <LogDay />
        </Route>
        <Route path="/profile">
          <Navbar image={image} setImage={setImage} />
          <Profile imageUrl={imageUrl} setImageUrl={setImageUrl} image={image} setImage={setImage} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
