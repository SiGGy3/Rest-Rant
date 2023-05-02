const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <div className="container text-center row">
          <div className="col">
            <img src={data.place.pic} alt={data.place.name} />
          </div>
          <div className="col">
            <div>
              <h1>{data.place.name}</h1>
              <h2>Rating</h2>
              <p>Not Rated</p>
              <h2>Description</h2>
              <p>{data.place.showEstablished()}</p>

              <h3>
                Located in {data.place.city}, {data.place.state}
              </h3>
              <p>Serving {data.place.cuisines}</p>
            </div>
          </div>
        </div>

        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
        <div className="container text-center">
          <h2>Comment</h2>
          <h5>No comments yet!</h5>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;