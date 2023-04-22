const React = require('react')
const Def = require('../default')

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      res.render('places/show')
    }
  })
      

function show () {
    return (
        <Def>
          <main>
            <h1>Show Page</h1>
          </main>
        </Def>
    )
}

module.exports = show
