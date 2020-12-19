import React, { useState } from 'react';
import EmbeddedMap from './components/EmbeddedMap';
import Page from './components/page';

const Home = (props) => {
  const [show, setShow] = useState(false);
  return (
    <Page title="home">
      <div>
        <h2>
          Greetings!
      </h2>
        <p>
          Thanks for taking some time to visit my site!
      </p>
        <p>
          So, who am I? Well, it might help to know where I live.
      </p>

        <button onClick={e => setShow(!show)}>Toggle map.</button>
        <p></p>
        {show && <EmbeddedMap />}

        <p>
          I live in a world of opportunity at the southern reaches of the second-largest land mass on the planet, which I share with more than a billion other people.
          I have tremendous hope for my fellow humans. Each day I work with all my energy to see humanity thrive. In my case, this involves developing deep knowledge of information technology and being a skilled artisan.
      </p>
        <p>
          Enjoy looking around. I'm constantly working on this site so check in again soon to for updates. The best way to get in touch is to send me an Email (deleted my facebook account a while ago, and I'm not especially active on social media). I drew inspiration from <a href="https://jamonholmgren.com/">Jamon Holmgren's</a> site. His team's work with MobX in React Native has been really helpful in some of my projects.
      </p>
      </div>
    </Page>
  )
}

export default Home;