
import React from 'react'

const About = () => {

  return (
    <div className="card-columns">
      <div className="card">
        <img className="card-img-top" style={{ height: "20rem" }} src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">If you wish to forget anything on the spot, make a note that this thing is to be remembered.</h5>
          <p className="card-text">I would define, in brief, the poetry of words as the rhythmical creation of Beauty.</p>
        </div>
      </div>
      <div className="card p-3 my-2">
        <blockquote className="blockquote mb-0 card-body">
          <p>The true secret of happiness lies in taking a genuine interest in all the details of daily life.</p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              William Morris </small>
          </footer>
        </blockquote>
      </div>
      <div className="card my-2">
        <img className="card-img-top" style={{ height: "20rem", width: "fit-content" }} src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Friends</h5>
          <p className="card-text">It's great to reminisce about good memories of my past. It was enjoyable when it was today. So learning to enjoy today has two benefits: it gives me happiness right now, and it becomes a good memory later</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card bg-primary text-white text-center p-3 my-2">
        <blockquote className="blockquote mb-0">
          <p>Life is a series of natural and spontaneous changes. Don't resist them - that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.</p>
          <footer className="blockquote-footer">
            <small>
              Lao Tzu
            </small>
          </footer>
        </blockquote>
      </div>
      <div className="card text-center">
        <div className="card-body">
          <img className="card-img-top" style={{
            height: "20rem",
            width: "fit-content"
          }} src="https://images.unsplash.com/photo-1572095755909-4c3302539985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=441&q=80" alt="Card image cap" />
          <h5 className="card-title my-3">burger-holic</h5>
          <p className="card-text">"If more of us valued food and cheer and song above hoarded gold, it would be a merrier world."</p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              J.R.R Tolkien
            </small>
          </footer>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card my-2">
        <img className="card-img" style={{ height: "20rem", width: "fit-content" }} src="https://images.unsplash.com/photo-1657664042482-a6e53c1b03a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Card image" />
      </div>
      <div className="card p-3 text-right my-2">
        <blockquote className="blockquote mb-0">
          <p>Physical fitness is not only one of the most important keys to a healthy body, it is the basis of dynamic and creative intellectual activity.</p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              John F. Kennedy
            </small>
          </footer>
        </blockquote>
      </div>
      <div className="card my-2">
        <img className="text-center" style={{ height: "20rem", width: "fit-content" }} src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">Me, every morning: I really need some new clothes.</h5>
          <p className="card-text">
            "If you love something, wear it all the time... Find things that suit you. That's how you look extraordinary."</p>
            <footer className="blockquote-footer">
            <small className="text-muted">
             Vivienne Westwood
            </small>
          </footer>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>

  )
}

export default About
