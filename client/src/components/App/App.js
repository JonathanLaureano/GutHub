import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import axios from 'axios';
import { animateScroll as ScrollAction } from 'react-scroll';
import HomePage from '../HomePage/HomePage';
import MixPage from '../Mixing/MixPage';
import ResultsPage from '../Results/ResultsPage';
import DrinksPage from '../Drinks/DrinksPage';
import Header from '../Header/Header';
import ProfilePage from '../Profile/ProfilePage';
import FavoritesPage from '../Favorites/FavoritesPage';

function App() {
  let history = useHistory();
  //User Auth:

  // Sign Up:
  const [signUpFirstName, setSignUpFirstName] = useState("");
  const [signUpLastName, setSignUpLastName] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpPasswordConfirmation, setSignUpPasswordConfirmation] = useState("");
  const [signUpImage, setSignUpImage] = useState("");
  const [signUpDesc, setSignUpDesc] = useState("");

  // Log In:
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Signed In:
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState(null)

  const [drinks, setDrinks] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  // Search
  const [searchActive, setSearchActive] = useState(false)
  const [searchParams, setSearchParams] = useState('');
  const [searchResults, setSearchResults] = useState(drinks)

  const [mixActive,setMixActive]= useState(false);


  // * Modals
  let [showSignInModal, setShowSignInModal] = useState(false);

  const [showMixModal,setShowMixModal] = useState(false);
  const [mixToCreate,setMixToCreate] = useState({});
  const [showProfileModal,setShowProfileModal] = useState(false);
  const [showDrinkModal,setShowDrinkModal] = useState(false);
  const [selectedDrink,setSelectedDrink] = useState({});

  function handleSearchSubmit(e) {
    e.preventDefault();
    let query = { "query": searchParams }
    axios.post('/search', query)
      .then(r => {
        if (r.data.length == 0) {
          // alert('No Results Found!')
          setSearchActive(true)
          setSearchResults(r.data);
          scrollBot();
        } else {
          setSearchActive(true)
          setSearchResults(r.data);
          scrollBot();
        }
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data.errors);
          alert(error.response.data.errors)
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      });
  }

  function handleSearchChange(event) {
    setSearchParams(event.target.value)
  }


  //  On page load -> setup important information 
  // check if user logged in
  // drinks, ingredients, default selected drink

  useEffect(() => {
    fetch("/me")
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            setUser(user)
            setSignedIn(true)
            scrollTop();
          }
          );
        }
      });

    axios.get('/drinks')
      .then(r => {
        setDrinks(r.data)
      })

    axios.get('/ingredients')
      .then(r => {
        setIngredients(r.data)
      })

    axios.get('/drinks/1')
    .then(r=>{
      setSelectedDrink(r.data)
    })

  }, [])



  function handleSignUpSubmit(e) {
    e.preventDefault();
    const signUpDetails = {
      "first_name": signUpFirstName,
      "last_name": signUpLastName,
      username: signUpUsername,
      password: signUpPassword,
      "password_confirmation": signUpPasswordConfirmation,
      "image_url": 'user-icon.png'
    }
    axios.post("/signup", signUpDetails)
      .then(r => {
        console.log(r)
        setSignedIn(true)
        setShowSignInModal(!showSignInModal)
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data.errors);
          alert(error.response.data.errors)
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      });

  }

  function handleLogInSubmit(e) {
    e.preventDefault();
    const logInDetails = {
      username,
      password
    }

    axios.post("/login", logInDetails)
      .then((r) => {
        console.log(r)
        // console.log(r)
        setSignedIn(true)
        setShowSignInModal(false)
        setUser(r.data)
        window.location.reload();

      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data.errors);
          alert(error.response.data.errors)
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      });

    axios.get('/drinks')
    .then(r => {
      setDrinks(r.data)
    })

    axios.get('/ingredients')
      .then(r => {
        setIngredients(r.data)
      })

    axios.get('/drinks/1')
    .then(r=>{
      setSelectedDrink(r.data)
    })



  }

  function handleLogOut() {
    axios.delete('/logout')
      .then(r => {
        setShowProfileModal(false);
        setSignedIn(false);
        setUser(null);
        history.push('/');
        window.location.reload();
      })
  }

  //Scrolling:
  function scrollBot() {
    ScrollAction.scrollToBottom();
  }

  function scrollTop(){
    ScrollAction.scrollToTop();
  }


  function handleCreateDrinkSubmit(newDrink){
    axios.post('/mixcreate',newDrink)
    .then(r=>{
      setDrinks([...drinks,r.data])
      setSelectedDrink(r.data);
      setShowMixModal(false)
      setShowDrinkModal(true)
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data.errors);
        alert(error.response.data.errors)
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
    });


  fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        }
        );
      }
    });

  axios.get('/drinks')
    .then(r => {
      setDrinks(r.data)
    })
  }


  function handleFavoriteDrink(drink){
    let drinkToFavorite = {"drink":drink.id}
    axios.post('/favorite',drinkToFavorite)
    .then(r=>{
      setUser(r.data)
    })
  }

  function handleUnfavoriteDrink(drink){
    let drinkToUnFavorite = {"drink":drink.id}
    axios.post('/unfavorite',drinkToUnFavorite)
    .then(r=>{
      setUser(r.data)
    })
  }


  return (
    <div className="App">
      {signedIn ? <Header
        signedIn={signedIn}
        setSignedIn={setSignedIn}
        showProfileModal={showProfileModal}
        setShowProfileModal={setShowProfileModal}
      /> : null}
      <Switch>
        <Route exact path='/'>
          <HomePage
            user={user}
            setUser={setUser}
            drinks={drinks}
            setDrinks={drinks}
            ingredients={ingredients}
            setIngredients={setIngredients}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            searchActive={searchActive}
            setSearchActive={setSearchActive}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            handleSearchChange={handleSearchChange}
            handleSearchSubmit={handleSearchSubmit}
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            handleLogInSubmit={handleLogInSubmit}
            showSignInModal={showSignInModal}
            setShowSignInModal={setShowSignInModal}
            signedIn={signedIn}
            signUpFirstName={signUpFirstName}
            setSignUpFirstName={setSignUpFirstName}
            signUpLastName={signUpLastName}
            setSignUpLastName={setSignUpLastName}
            signUpUsername={signUpUsername}
            setSignUpUsername={setSignUpUsername}
            signUpPassword={signUpPassword}
            setSignUpPassword={setSignUpPassword}
            signUpPasswordConfirmation={signUpPasswordConfirmation}
            setSignUpPasswordConfirmation={setSignUpPasswordConfirmation}
            signUpImage={signUpImage}
            setSignUpImage={setSignUpImage}
            signUpDesc={signUpDesc}
            setSignUpDesc={setSignUpDesc}
            handleSignUpSubmit={handleSignUpSubmit}
            showDrinkModal={showDrinkModal}
            setShowDrinkModal={setShowDrinkModal}
            selectedDrink={selectedDrink}
            setSelectedDrink={setSelectedDrink}
            mixActive={mixActive}
            setMixActive={setMixActive}
            showProfileModal={showProfileModal}
            setShowProfileModal={setShowProfileModal}
            showMixModal={showMixModal}
            setShowMixModal={setShowMixModal}
            handleLogOut={handleLogOut}
            mixToCreate={mixToCreate}
            setMixToCreate={setMixToCreate}
            handleCreateDrinkSubmit={handleCreateDrinkSubmit}
            handleFavoriteDrink={handleFavoriteDrink}
            handleUnfavoriteDrink={handleUnfavoriteDrink}
          />
        </Route>
        <Route path='/profile'>
          <ProfilePage
            signedIn={signedIn}
            handleLogOut={handleLogOut}
          />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage
            user = {user}
            showProfileModal={showProfileModal}
            setShowProfileModal={setShowProfileModal}
            showMixModal={showMixModal}
            setShowMixModal={setShowMixModal}
            mixToCreate={mixToCreate}
            setMixToCreate={setMixToCreate}
            ingredients={ingredients}
            handleCreateDrinkSubmit={handleCreateDrinkSubmit}
            />
        </Route>
        <Route path='/mix'>
          <MixPage
            ingredients={ingredients}
            setIngredients={setIngredients}
            showDrinkModal={showDrinkModal}
            setShowDrinkModal={setShowDrinkModal}
            selectedDrink={selectedDrink}
            setSelectedDrink={setSelectedDrink}
          />
        </Route>
        <Route path='/search-results'>
          <ResultsPage
            drinks={drinks}
            setDrinks={drinks}
          />
        </Route>
        <Route path='/all-drinks'>
          <DrinksPage
            drinks={drinks}
            setDrinks={drinks}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
