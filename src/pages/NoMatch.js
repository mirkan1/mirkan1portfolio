import React from 'react';
import '../css/nomatch.css';
import { routes } from '../components/Navbar';


export const NoMatch = ({ match }) => {
    let param = match.params.any;

    if (param === "privacy") {
        return (<></>)
    }
    
    for (let i in routes) {
        if (routes[i].name.toLowerCase() === param) {
            return (<></>)
        }
    }
    
    return (
        <div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <div></div>
                    <h1>404</h1>
                </div>
                <h2>Page not found</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <a href="/">home page</a>
            </div>
        </div>
    )
}
