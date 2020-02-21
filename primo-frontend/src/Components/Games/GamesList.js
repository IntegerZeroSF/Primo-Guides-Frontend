import React from 'react';
import './GamesList.css'


function GamesList() {
    return (
        <>
            <div className="gamesListBody">
                <div className="gamesListBodySearch">
                    <form className="gamesListGameSearch">
                        <input type="text" placeholder="Search for a game here..." name="search" className="gamesListGameSearchbar"/>
                        <button type="submit" className="gameListGamesSearchButton">Search</button>
                    </form>
                </div>
                <div className="gameCarousel">
                    <h1>Carousel</h1>
                </div>
                <div className="gameListBodyBlog">
                    <h1>A, B, C, D, etc, etc</h1>
                </div>
            </div>
            <div className="gamesListCatagoriesDiv">
                <p>Catagories</p>
                <div className="gamesListCatagories">
                </div>
            </div>
        </>
    )
}




export default GamesList;