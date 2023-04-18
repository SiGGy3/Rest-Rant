const React = require('react')
const Def = require('./default')

function Def (html) {
    return (
        <html>
            <head>
                <title>Welcome to the Rest Rant</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }  

module.exports = Def