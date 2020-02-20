import React from 'react';
import './GameGuideList.css';

function GameGuidesList() {
    return (
        <>
            <div className="gameGuidesBody">
                <div classname="guidesList">
                    <h3 className="guidesListTitle">Guides</h3>
                    <div className="guidesListClasses">
                        <h3> Speedrun | Glitch Guide | Walkthrough | Full Clear </h3>
                    </div>
                    <div className="guidesListGuides">
                        <div className="guidesListGuideName">
                            <h4 className="guidesListNameOfGuide">Speedrun Guide by XxSpeedDemonxX<h4><span className="guidesListGuideTags">Speedrun, Glitch Guide</span>
                            <p className="guidesListGuideDescrip"> Short description </p>
                        </div>
                        <div className="guidesListGuideName">
                            <h4 className="guidesListNameOfGuide">Speedrun Guide by XxSpeedDemonxX<h4><span className="guidesListGuideTags">Speedrun, Glitch Guide</span>
                            <p className="guidesListGuideDescrip"> Short description </p>
                        </div>
                        <div className="guidesListGuideName">
                            <h4 className="guidesListNameOfGuide">Speedrun Guide by XxSpeedDemonxX<h4><span className="guidesListGuideTags">Speedrun, Glitch Guide</span>
                            <p className="guidesListGuideDescrip"> Short description </p>
                        </div>
                    </div>
                </div>
                <div className="guideListSub">
                    <p>Picture goes here</p>
                </div>
            </div>
        </>
    )
}

export deafult GameGuidesList;