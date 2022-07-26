import './SearchPage.css';
import React from 'react'
import axios from 'axios';
import DrinkCard from '../DrinkCard/DrinkCard';

export default function SearchPage({ searchActive, searchResults, setSearchResults, searchParams, setSearchParams, handleSearchChange, handleSearchSubmit, scrollTop, showDrinkModal, setShowDrinkModal, selectedDrink, setSelectedDrink, showProfileModal, favorites, setFavorites, modalActive }) {
  let sortedDrinks = searchResults.sort((drink1, drink2) => drink1.name.localeCompare(drink2.name))

  function chunk(array, limit) {
    if (array.length <= limit) return [array];
    const perChunk = Math.ceil(array.length / Math.ceil(array.length / limit));
    return [array.slice(0, perChunk)].concat(chunk(array.slice(perChunk), limit));
  }

  let chunkDrinks = chunk(sortedDrinks, 4)

  function displayDrinks(data) {
    return data.map(row => {
      return <React.Fragment>
        {drinkCardsRow(row)}
      </React.Fragment>

    })
  }

  function drinkCardsRow(data) {

    return <div className='search-page-cards-container'>
      {data.map(drink => {
        let inFavorites = favorites != undefined ? favorites.includes(drink.id) : false
        let cardClass = inFavorites ? 'drink-card-container favorite' : 'drink-card-container'
        return (<DrinkCard
          drink={drink}
          key={drink.id}
          showDrinkModal={showDrinkModal}
          setShowDrinkModal={setShowDrinkModal}
          selectedDrink={selectedDrink}
          setSelectedDrink={setSelectedDrink}
          cardClass={cardClass}
        />)
      })}
    </div>
  }

  function cleanString(str) {
    return str.replace(/[^a-zA-Z\d\s:\u00C0-\u00FF]/g, '')
      .split('')
      .join('')
  }

  function handleSearchUpdate(e) {
    e.preventDefault();
    setSearchParams(cleanString(e.target.value))
    let query = { "query": e.target.value }
    axios.post('/search', query)
      .then(r => {
        setSearchResults(r.data)
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

  function clickResetButton() {
    setSearchParams('')
    let query = { "query": '' }
    axios.post('/search', query)
      .then(r => {
        setSearchResults(r.data)
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

  let searchResultsCardClass = searchResults.length <= 8 ? 'search-results-card frozen' : 'search-results-card'
  let titleClass = searchResults.length == 0 || modalActive ? 'search-results-title-off' : 'search-results-title'
  let buttonClass = searchResults.length == 0 || modalActive ? 'go-home-button-off' : 'go-home-button'

  return (
    <React.Fragment>
      <div style={{ marginTop: '25%' }}></div>
      <div className={titleClass}>drinks</div>
      <div className='search-title-wrapper'>
        <div className={buttonClass} onClick={clickResetButton}>X</div>
        <form onSubmit={handleSearchSubmit}><input
          type='text'
          placeholder='Search For a Drink or Ingredient'
          autoComplete='off'
          cursor='pointer'
          className='results-search'
          value={searchParams}
          onChange={handleSearchUpdate}
          id='search-input'
        >
        </input></form>
        <div className={buttonClass} onClick={scrollTop}>↑</div>
      </div>

      <div className='search-results-container'>
        <div className={searchResultsCardClass} id='cards'>
          {displayDrinks(chunkDrinks)}
          {searchResults.length == 0 && searchActive == true ?
            <div className='no-results-container'>
              <div className='no-results-found'>No Results Found</div>
              <div className='no-results-query'>Please Enter a Different Search Query</div>
            </div>

            : null}
        </div>
      </div>
    </React.Fragment>
  )
}