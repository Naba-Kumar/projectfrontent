import React from 'react'
import  { Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Newapllication from "./components/Newapplication"
import Profile from "./components/Profile"
import Adminpanel from "./components/Adminpanel"
import Update from "./components/Update"
import Statistics from "./components/Statistics"
import Applications from "./components/Applications"
import Delete from "./components/Delete"
import Admins from "./components/Addadmins"
import Questions from "./components/Questions"
import Complains from "./components/complains"
import Usercomplain from "./components/Usercomplain"
import Userquestion from "./components/Userquestion"
import Votingpage from "./components/Votingpage"



// import "<link rel="stylesheet" href="<script src="https://kit.fontawesome.com/c63ca456ee.js" crossorigin="anonymous"></script>">"
// import logo from "./assets/css/image/logo.png"

// import { BrowserRouter, Link } from "react-router-dom";
 

function App() {
  return (
    <>
      
        <Navbar />

          <Route exact path="/">
             <Home />
          </Route>

          <Route path="/Votingpage">
            <Votingpage />
          </Route>

          <Route path="/Newapllication">
            <Newapllication />
          </Route>
          
          <Route path="/Profile">
            <Profile />
          </Route>

          <Route path="/Statistics">
            <Statistics />
          </Route>

          <Route path="/Userquestion">
            <Userquestion />
          </Route>

          <Route path="/Usercomplain">
            <Usercomplain />
          </Route>


      

          <Route path="/Adminpanel">
            <Adminpanel />
            <>
            <Route  path="/Adminpanel/Applications">
              <Applications />
            </Route>

            <Route path="/Adminpanel/Update">
              <Update />
            </Route>

            <Route  path="/Adminpanel/Delete">
              <Delete />
            </Route>
            <Route  path="/Adminpanel/Statistics">
              <Statistics />
            </Route>
            <Route  path="/Adminpanel/Admins">
              <Admins />
            </Route>
            <Route  path="/Adminpanel/Questions">
              <Questions />
            </Route>
            <Route  path="/Adminpanel/Complains">
              <Complains />
            </Route>

            </>
            </Route>

        

    
    </>
  )
}

export default App
