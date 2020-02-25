import React from 'react';
import './GamesList.css'

// import {Switch} from "react-router-dom";


function GamesList() {
    return (
        <>
            <div className="gamesListBody">
                <div className="gamesListBodySubCata">
                    <h2 className="gamesListCatTitle">Catagories</h2>
                    <div className="gamesListCatagories">
                    <h5>Adventure</h5>
                    <h5>Action</h5>
                    <h5>RPG</h5>
                    <h5>Strategy</h5>
                    <h5>Turn-Based</h5>

                    </div>
                </div>
                <div className="gamesListBodySearch">
                    <form className="gamesListGameSearch">
                        <input type="text" placeholder="Search for a game here..." name="search" className="gamesListGameSearchbar"/>
                        <button type="submit" className="gameListGamesSearchButton">Search</button>
                    </form>
                </div>
                <div className="gameCarousel">
                {/* for loop with a .map function for game data */}
                    <h1>Carousel</h1>
                </div>
                <div className="gameListBodyBlog">
                    <h1 className="gamesListCatTitle">Game's List</h1>
                        {/* for loop with a .map function for all game data */}
                        <div>
                            <a className="gamesListLink" href="/Games/Guides"> Celeste </a>
                        </div>
                        <div>
                            <a className="gamesListLink" href="/Games/Guides"> Sekiro </a>
                        </div>

                </div>
            </div>
        </>
    )
}




export default GamesList;