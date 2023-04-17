import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const HomeSidebar = ({ setShowTeamModal, projects }) => {
    return (
        <div className="home-menu">
            <ul>
                <li>
                    <div className="btn btn--transparent btn--small btn--active">
                        <i className="fab fa-trello"></i> Boards
                    </div>
                </li>
                {/* <li>
                    <div className="btn btn--transparent btn--small">
                        <i className="fal fa-ruler-triangle"></i> Templates
                    </div>
                </li>
                <li>
                    <div className="btn btn--transparent btn--small">
                        <i className="fal fa-newspaper"></i> Feed
                    </div>
                </li> */}
            </ul>

            <div className="home-menu__section">
                <p className="home-menu__title">Projects</p>
                <div className="btn btn--transparent btn--small">
                    <button onClick={() => setShowTeamModal(true)}>
                        <i className="fal fa-plus"></i>
                    </button>
                </div>
            </div>
            <ul>
                <li>
                    {projects.map((project) => (
                        <Link
                            to={`/p/${project.id}`}
                            className="btn btn--transparent btn--small"
                            key={uuidv4()}
                        >
                            <i className="fal fa-users"></i> {project.title}
                        </Link>
                    ))}
                </li>
            </ul>
        </div>
    );
};

export default HomeSidebar;
