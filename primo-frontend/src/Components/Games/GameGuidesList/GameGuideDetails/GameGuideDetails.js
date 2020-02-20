import React from 'react';
import './GameGuideDetails.css';

function GameGuideDetails() {
    return (
        <>
            <div className="gameGuideDeatilsBody">
                <div className="gameGuideDetailsSubTOC">
                    <h1>Search</h1>
                    <div className="gameGuideDetailsTOC">
                        <h5>Table of Contents</h5>
                        <ol>
                            <li>Chapter 1</li>
                            <li>Chapter 2</li>
                            <li>Chapter 3</li>
                        </ol>
                        <ul>
                            <li>Glossary</li>
                            <li>Glitches</li>
                        </ul>
                    </div>
                </div>
                <div className="gameGuideDetailsMainContent">
                    <div className="gameGuideDetailsBreadcrumbs">
                        <p>Breadcrumbs go here</p>
                    <div>
                    <h1>Title</h1>
                    <p>Stuff here</p>
                    <h5 className="gameGuideDetailsGoBack">...</h5>
                    <h5 className="gameGuideDetailsGoNext">Next =></h5>
                </div>
                <div className="gameGuideDetailsSub">
                    <h1>Game Pictures</h1>
                </div>
            </div>
        </>
    )
}

export default GameGuideDetails;