const React = require('react')
const Def = require('./default')

function error404 () {
    return(
    <Def>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <img src="\images\404img.jpg" alt="404 image"/>
            <p> Oops! Sorry, but this page cannot be found!</p>
        </main>
    </Def>
    )
}

module.exports = error404