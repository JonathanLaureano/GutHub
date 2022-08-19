import './App.css';
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

import Header from '../Header/Header';

import { animateScroll as ScrollAction } from 'react-scroll';
import SignInModal from '../SignInModal/SignInModal';
import DrinkModal from '../Modals/DrinkModal/DrinkModal';
import SearchPage from '../SearchPage/SearchPage';
import MixPage from '../Mixing/MixPage';
import ProfileModal from '../Modals/ProfileModal/ProfileModal';
import MixModal from '../Modals/MixModal/MixModal';
import ResultsModal from '../Modals/ResultsModal/ResultsModal';
import InformationModal from '../Modals/InformationModal/InformationModal';

function App() {
  document.title = 'GutHub - Home';

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
  const [user, setUser] = useState({})

  const [drinks, setDrinks] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [favorites, setFavorites] = useState([])

  // Search
  const [searchActive, setSearchActive] = useState(false)
  const [searchParams, setSearchParams] = useState('');
  const [searchResults, setSearchResults] = useState(drinks)

  const [mixActive, setMixActive] = useState(false);


  // * Modals
  let [showSignInModal, setShowSignInModal] = useState(false);

  const [showResultsModal, setShowResultsModal] = useState(false);
  const [mixResults, setMixResults] = useState({});
  const [showMixModal, setShowMixModal] = useState(false);
  const [mixToCreate, setMixToCreate] = useState({});
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showDrinkModal, setShowDrinkModal] = useState(false);
  const [selectedDrink, setSelectedDrink] = useState({});
  const [showInformationModal, setShowInformationModal] = useState(false);
  let [matchFound, setMatchFound] = useState(false);


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
            scrollTop();
          }
          );
        }
      });

    let drinksReq = axios.get('/drinks')

    let ingredsReq = axios.get('/ingredients')

    let selectedDrinkReq = axios.get('/drinks/1')

    let favoritesReq = axios.get('/favorites')

    axios.all([drinksReq, ingredsReq, selectedDrinkReq, favoritesReq])
      .then(axios.spread((res1, res2, res3, res4) => {
        setDrinks(res1.data)
        setIngredients(res2.data)
        setSelectedDrink(res3.data)
        setFavorites(res4.data)
      }))
  }, [])



  function handleSignUpSubmit(e) {
    e.preventDefault();
    const signUpDetails = {
      "first_name": signUpFirstName,
      "last_name": signUpLastName,
      username: signUpUsername,
      password: signUpPassword,
      "password_confirmation": signUpPasswordConfirmation,
      "image_url": 'https://img.icons8.com/material-rounded/384/000000/user.png'
    }
    axios.post("/signup", signUpDetails)
      .then(r => {
        setShowSignInModal(!showSignInModal)
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

  }

  function handleLogInSubmit(e) {
    e.preventDefault();
    const logInDetails = {
      username,
      password
    }

    axios.post("/login", logInDetails)
      .then((r) => {
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
  }

  function handleDemoLogIn(e) {
    e.preventDefault();
    const logInDetails = {
      username: "Demo User",
      password: "12345"
    }

    axios.post("/login", logInDetails)
      .then((r) => {
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
  }

  function handleLogOut() {
    axios.delete('/logout')
      .then(r => {
        setShowProfileModal(false);
        setUser({});
        history.push('/');
        window.location.reload();
      })
  }

  //Scrolling:
  function scrollBot() {
    ScrollAction.scrollToBottom();
  }

  function scrollTop() {
    ScrollAction.scrollToTop();
  }


  function handleCreateDrinkSubmit(newDrink) {
    axios.post('/mixcreate', newDrink)
      .then(r => {
        setDrinks([...drinks, r.data])
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


  function handleFavoriteDrink(drink) {
    let drinkToFavorite = { "drink": drink.id }
    axios.post('/favorite', drinkToFavorite)
      .then(r => {
        setUser(r.data)
      })
  }

  function handleUnfavoriteDrink(drink) {
    let drinkToUnFavorite = { "drink": drink.id }
    axios.post('/unfavorite', drinkToUnFavorite)
      .then(r => {
        setUser(r.data)
      })
  }



  function handleSignIn() {
    setShowSignInModal(true)
  }

  function scrollTop() {
    setSearchParams('')
    ScrollAction.scrollToTop();
    setTimeout(() => {
      setSearchActive(false)
    }, 750)
  }

  function scrollTopMix() {
    //reset ingredients 
    ScrollAction.scrollToTop();
    setTimeout(() => {
      setMixActive(false)
    }, 750)
  }

  function clickOffModal() {
    setShowDrinkModal(false);
    setShowProfileModal(false)
    setShowMixModal(false);
    setShowResultsModal(false);
  }

  function clickMixActivateButton() {
    setMixActive(true)
    ScrollAction.scrollToBottom();
  }

  let modalActive = showDrinkModal || showProfileModal || showMixModal || showResultsModal || showInformationModal;

  let [mixes, setMixes] = useState({
    "mix": [
    ]
  });

  const displayHeader = user.username ? <Header showProfileModal={showProfileModal} setShowProfileModal={setShowProfileModal} /> : null;

  const subtitleClass = user.username ? 'subtitle' : 'subtitle hidden';
  const titleClass = user.username && !searchActive && !mixActive ? "logo" : "logo off";
  const displayHomeButtons = user.username ? <div className='home-buttons-wrapper'>
    <button className='home-mix-button' onClick={handleSearchSubmit}>Search For a Drink </button>
    <button className='home-mix-button' onClick={clickMixActivateButton}>Make a Mix</button>
  </div> : <button className='home-signIn' onClick={handleSignIn}>Sign In</button>;

  const displaySignInModal = showSignInModal ? <SignInModal
    username={username}
    setUsername={setUsername}
    password={password}
    setPassword={setPassword}
    handleLogInSubmit={handleLogInSubmit}
    showSignInModal={showSignInModal}
    setShowSignInModal={setShowSignInModal}
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
    handleDemoLogIn={handleDemoLogIn} /> : null;

  const displayDrinkModal = showDrinkModal ? <div className='modal-container'>
    <DrinkModal
      drink={selectedDrink}
      setShowDrinkModal={setShowDrinkModal}
      setMatchFound={setMatchFound}
      handleFavoriteDrink={handleFavoriteDrink}
      handleUnfavoriteDrink={handleUnfavoriteDrink}
      favorites={favorites}
      setFavorites={setFavorites}
      ingredients={ingredients} />
  </div> : null;
  const displayProfileModal = showProfileModal ? <div className='modal-container'>
    <ProfileModal profile={user} setUser={setUser} setShowProfileModal={setShowProfileModal} handleLogOut={handleLogOut} drinks={drinks} setSelectedDrink={setSelectedDrink} setShowDrinkModal={setShowDrinkModal} />
  </div> : null;
  const displayMixModal = showMixModal ? <div className='modal-container'>
    <MixModal user={user} setShowMixModal={setShowMixModal} drink={mixToCreate} ingredients={ingredients} handleCreateDrinkSubmit={handleCreateDrinkSubmit} />
  </div> : null;
  const displayResultsModal = showResultsModal ? <div className='modal-container'>
    <ResultsModal
      setShowResultsModal={setShowResultsModal}
      mixResults={mixResults}
      mixes={mixes}
      ingredients={ingredients}
      setSelectedDrink={setSelectedDrink}
      setShowDrinkModal={setShowDrinkModal}
      handleFavoriteDrink={handleFavoriteDrink}
      handleUnfavoriteDrink={handleUnfavoriteDrink}
      favorites={favorites}
      setFavorites={setFavorites} />
  </div> : null;
  const displayInformationModal = showInformationModal ? <div className='modal-container'>
    <InformationModal showInformationModal={showInformationModal} setShowInformationModal={setShowInformationModal} />
  </div> : null;
  const modalCurtain = modalActive ? <div onClick={clickOffModal} className="modal-curtain"></div> : null;

  const displaySearchPage = searchActive ? <SearchPage
    user={user}
    searchActive={searchActive}
    searchResults={searchResults}
    setSearchResults={setSearchResults}
    searchParams={searchParams}
    setSearchParams={setSearchParams}
    handleSearchChange={handleSearchChange}
    handleSearchSubmit={handleSearchSubmit}
    scrollTop={scrollTop}
    showDrinkModal={showDrinkModal}
    setShowDrinkModal={setShowDrinkModal}
    selectedDrink={selectedDrink}
    setSelectedDrink={setSelectedDrink}
    showProfileModal={showProfileModal}
    favorites={favorites}
    setFavorites={setFavorites}
    modalActive={modalActive} /> : null;

  const displayMixPage = mixActive ? <MixPage
    mixes={mixes}
    setMixes={setMixes}
    user={user}
    matchFound={matchFound}
    setMatchFound={setMatchFound}
    ingredients={ingredients}
    setIngredients={setIngredients}
    showDrinkModal={showDrinkModal}
    setShowDrinkModal={setShowDrinkModal}
    selectedDrink={selectedDrink}
    setSelectedDrink={setSelectedDrink}
    scrollTopMix={scrollTopMix}
    showProfileModal={showProfileModal}
    mixToCreate={mixToCreate}
    setMixToCreate={setMixToCreate}
    showMixModal={showMixModal}
    setShowMixModal={setShowMixModal}
    showResultsModal={showResultsModal}
    setShowResultsModal={setShowResultsModal}
    mixResults={mixResults}
    setMixResults={setMixResults}
    modalActive={modalActive}
    showInformationModal={showInformationModal}
    setShowInformationModal={setShowInformationModal} /> : null;

  return (
    <div className="App">
      {displayHeader}
      <h3 className={subtitleClass}>Welcome to</h3>
      <div className={titleClass}><b>G<span>ut</span>H<span>u</span>b</b></div>
      {displayHomeButtons}
      {displaySignInModal}
      {displayDrinkModal}
      {displayProfileModal}
      {displayMixModal}
      {displayResultsModal}
      {displayInformationModal}
      {modalCurtain}
      {displaySearchPage}
      {displayMixPage}
    </div >
  );
}

export default App;
