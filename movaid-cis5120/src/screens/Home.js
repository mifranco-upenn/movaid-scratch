import React from "react";

import NavBar from "../components/NavBar";
import "./Home.css"

function Home() {

    const purchaseItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
    const todoItems = [
        {text: 'This is the first todo item', priority: 'high'},
        {text: 'This is the second todo item, with overflow', priority: 'medium'},
        {text: 'This is the third todo item', priority: 'low'}
    ]
    const planEvents = [
        {}
    ]
    const discoverCity = ['Things to do in Chinatown', 'Best Cheesesteaks in Philly', 'Trails around Philadelphia']

    return (
        <div className="screen-container">
            <div className="header">
                {/* <img></img> */}
                <h1>Good evening, John!</h1>
                <p>You are <strong>3 days</strong> away from moving into 123 Main Street.</p>
            </div>
            <div className="scrollable-content">
                <div className="widget-label">Purchase List</div>
                <div className="widget">
                    <ul className="purchase-list-container">
                        {purchaseItems.map((item, index) => (
                            <li className="purchase-list-item" key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className="full-list-text">Open Full List {">"}</p>
                </div>

                <div className="widget-label">To-Do</div>
                <div className="widget">
                    <ul className="todo-list">
                        {todoItems.map((item, index) => (
                          <li key={index} className="todo-item">
                            <div className="todo-item-text">{item.text}</div>
                            <img src={`/static/img/${item.priority}-priority-icon.png`} alt={item.priority} className="priority-icon"/>
                          </li>  
                        ))}
                    </ul>
                    <p className="full-list-text">Open Full List {">"}</p>
                </div>

                <div className="widget-label">Move-In Plan</div>
                <div className="widget">
                    <p>Widget Content</p>
                </div>

                <div className="widget-label">Discover Philadelphia</div>
                <div className="widget">
                    <ul>
                        {discoverCity.map((item, index) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                    <p className="full-list-text">Open All Recommendations {">"}</p>
                </div>
            </div>
            <NavBar selectedIcon={'Home'} />
        </div>
        
    )
}

export default Home;