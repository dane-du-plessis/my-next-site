import React from "react";
import Page from "./components/page";

const blog = (props) => (
  <Page title="blog">
    <h2>Be picky about what you choose to learn - November 29, 2020</h2>

    <p>
      Some reflections on an article I read about{" "}
      <a href="https://fs.blog/2019/02/compounding-knowledge/">
        compounding knowledge
      </a>
      .
    </p>
    <p>
      It has been one of the busiest years of my life. I'm not expecting things
      to slow down much for the forseeable future so it has become really
      important to learn effectively. Knowledge needs to increase exponentially,
      not linearly.
    </p>
    <p>
      In IT staying focussed on the right things can be a real
      challenge. Technology is changing quickly. As a result, it's easy to spend
      all one's time trying to stay informed of all the latest stuff.
    </p>
    <p>
      The usefulness of different types of information changes over time.  The
      value of news coverage, for example, can have a very short
      half-life. Moreover, news information is widely distributed and can be
      easily accessed by anyone. There are many other things one can do that have
      more short and long-term value than watching the news. Doing a hundred
      situps will take you less than three minutes. Just doing that as often as
      some people check the news will give you good core strength in couple of
      weeks.
    </p>
    <p>
      Figure out what kinds of information have long-term value and internalize
      it. That adds far more value than rapidly changing, high-volume, low-value
      infotainment. Warren Buffet made an effort to learn the basics of many
      different businesses early on in his life. I'm not Buffet's biggest fan, but
      he certainly made some wise choices about how to apply himself we can all
      learn from. He made an effort to understand the nuts and bolts of as many different businesses as he could. With that deep knowledge, he was able to invest in the businesses he knew would be most likely to generate a good return. That's the the basic operating principle, and you can apply it to your learning.
    </p>

    <h2>Technology podcasts on a solo road trip - August 24, 2020</h2>

    <p>
      On an 7 hour road trip I had several podcasts to listen to. These held my
      attention, and if your interests are similar you will likely find them useful too.
    </p>

    <a
      target="_blank"
      href="https://www.rzim.org/listen/thinking-out-loud/do-our-devices-own-us"
    >
      <h3>Do our devices own us?</h3>
    </a>

    <p>
      A really thought-provoking podcast called <em>Thinking out loud</em>, this
      episode gets the brain going how the technology we use is shaping modern
      culture.
    </p>

    <a target="_blank" href="https://changelog.com/jsparty/132">
      <h3>Theross takes us to security school</h3>
    </a>

    <p>
      This <em>JS Party</em> episode takes a trip down the rabbit hole that is
      security on the web platform. Super informative and funny! I learned so
      much about security vulnerabilities in browsers, and am thinking seriously
      about making a tinfoil hat for my smartphone.
    </p>
  </Page>
);

export default blog;
