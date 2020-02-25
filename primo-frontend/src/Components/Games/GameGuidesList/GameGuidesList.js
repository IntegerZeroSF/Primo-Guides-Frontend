import React from 'react';
import './GameGuidesList.css';

import {Link} from "react-router-dom";


function GameGuidesList() {
    return (
        <>
            <div className="gameGuidesBody">
                <div className="guideListSub">
                    <p>Picture goes here</p>
                </div>
                <div className="guideListSub2">
                    <h3 className="guidesListTitle">Guides</h3>
                    <div className="guidesListClasses">
                        <h3> Speedrun | Glitch Guide | Walkthrough | Full Clear </h3>
                    </div>
                </div>
                <div className="guideListSub3">
                     <div className="guidesListGuides">
                        <Link to="/Games/Guides/Guide" className="guidesListGuideName">
                            <h4 className="guidesListNameOfGuide" href="/Games/Guides/Guide">Speedrun Guide by XxSpeedDemonxX</h4>
                            <span className="guidesListGuideTags">Speedrun, Glitch Guide</span>
                            <p className="guidesListGuideDescrip"> Short description </p>
                        </Link>
                        <div className="guidesListGuideName">
                            <h4 className="guidesListNameOfGuide">Speedrun Guide by XxSpeedDemonxX</h4>
                            <span className="guidesListGuideTags">Speedrun, Glitch Guide</span>
                            <p className="guidesListGuideDescrip"> Short description </p>
                        </div>
                        <div className="guidesListGuideName">
                            <h4 className="guidesListNameOfGuide">Speedrun Guide by XxSpeedDemonxX</h4>
                            <span className="guidesListGuideTags">Speedrun, Glitch Guide</span>
                            <p className="guidesListGuideDescrip"> Short description </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GameGuidesList;