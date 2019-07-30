import React from 'react'
import Signup from './session/signup_form_container'


const Main = (props) => {
    return (
    <section className="splash">
        <div className="splash-content">
            <aside>
                <h2>Connect with heroes and the multiverse around you on AssembledFaces.</h2>
                <ul>
                    <li><i className="far fa-newspaper"></i><span><strong>See photos and updates</strong> from friends in News Feed.</span></li>
                    <li><i className="far fa-star"></i><span><strong>Share what's new</strong> in your life on your Timeline.</span></li>
                    <li><i className="fas fa-search"></i><span><strong>Find more</strong> of what you're looking for with AssembledFaces Search.</span></li>
                </ul>
            </aside>
            <section>
                <h1>Sign Up</h1>
                <p>It's free and always will be.</p>
                
                <Signup />
            </section>    
        </div>
    </section>
    )
}

export default Main;