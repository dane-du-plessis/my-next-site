import React from "react";
import Page from "./components/page";

const blog = (props) => (
  <Page title="blog">
    <h2>Design patterns, who needs them?</h2>
    <h3>
      <em>Why software developers need bother with design patterns</em>
    </h3>
    <p>
      Why would anyone be interested in learning about design patterns in
      software development? Well, there are a number of very good reasons why
      all developers need to know what they are and why they exist.
    </p>

    <p>
      Although you might not spend every day using design patterns, you very
      likely making use of systems that incorporate them. A few decades ago,
      when the software world was young and smartphones were not a thing,
      intelligent people were discovering ways of dealing with complexities in
      software that you as a software engineer in the 2020s, are still going to
      bang your head against.
    </p>
    <p>
      Basically, design patterns are approaches to solve problems that arise
      naturally when developing complicated structures in logic with code.
      Here's a common scenario: Imagine a home automation system, where there
      are hundreds of devices using electricity. To keep the power bill down,
      and to preserve natural resources, all these devices receive instructions
      from a control system that is responsible for allocating power to every
      smart device in the home.
    </p>
    <p>
      Now imagine that you're interested in controlling all the lights in the
      house. A large home could have a hundred or more lights all using power at
      different times. There are two ways in which the lights could 'know' when
      then need to be in an on state:
      <ol>
        <li>
          Lights ask the control system, i.e. they could <strong>poll</strong>{" "}
          for instructions, or
        </li>
        <li>
          Lights sit around waiting on the control system for instructions, i.e.
          wait for a <strong>push</strong> from the controller.
        </li>
      </ol>
    </p>
    <p>
      Now this might seem a little redundant at first, but spend a few minutes
      imagining how you'd set up such a system without ever having done anything
      like it in software before. You could probably implement the first
      approach fairly easily. But the second might take some imagination,
      especially if you're using an object oriented language like Java or C++.
    </p>
    <p>
      Without much thinking, you could probably imagine quite of lot of
      scenarios like this one. Messaging apps, which need to update messages for
      everyone in a chat in realtime, a Tesla display that needs to update many
      times a second with new data from hundreds of sensors, let your
      imagination run wild!{" "}
    </p>
    <p>
      So, is there a design pattern meant for such a situation? There is, and
      it's called the Observer Pattern!
    </p>

    <p>
      Now if you're a creative problem solver, you've likely imagined something
      like this design pattern, <em>before</em> ever having heard about it, and
      that's great. The problem with 'rolling your own' design patterns as and
      when you need them is that you're not always around to explain them. So,
      using a widely known and implemented pattern makes it easier to understand
      and maintain for others. I'm not suggesting for a moment that you discard
      your creativity and adhere slavishly to the Gang of Four's design
      patterns. It is super important to maintain creativity. What I'd like to
      encourage you to do is learn as many of these patterns as possible and to
      start recognizing them in the libraries and frameworks you already use.
    </p>
    <p>
      If you're interested in learning more about these strange and wonderful
      things, I'd highly recommend
      <a
        target="_blank"
        href="https://www.youtube.com/playlist?list=PLrhzvIcii6GNjpARdnO4ueTUAVR9eMBpc"
      >
        {" "}
        Christopher's videos
      </a>{" "}
      on design patterns, in which he chalks-and-talks the different patterns
      found in the{" "}
      <a
        target="_blank"
        href="https://www.google.com/search?safe=active&q=head+first+design+patterns&oq=head+first+design+patterns"
      >
        <i>Head First Design Patterns</i>
      </a>{" "}
      book by Eric Freeman and Elisabeth Robson.
    </p>

    <h2>Be picky about what you choose to learn - November 29, 2020</h2>

    <h3>
      <em>
        Some reflections on an article I read about{" "}
        <a
          target="_blank"
          href="https://fs.blog/2019/02/compounding-knowledge/"
        >
          compounding knowledge
        </a>
      </em>
    </h3>
    <p>
      It has been one of the busiest years of my life. I'm not expecting things
      to slow down much for the forseeable future so it has become really
      important to learn effectively. Knowledge needs to increase exponentially,
      not linearly.
    </p>
    <p>
      In IT staying focussed on the right things can be a real challenge.
      Technology is changing quickly. As a result, it's easy to spend all one's
      time trying to stay informed of all the latest stuff.
    </p>
    <p>
      The usefulness of different types of information changes over time. The
      value of news coverage, for example, can have a very short half-life.
      Moreover, news information is widely distributed and can be easily
      accessed by anyone. There are many other things one can do that have more
      short and long-term value than watching the news. Doing a hundred situps
      will take you less than three minutes. Just doing that as often as some
      people check the news will give you good core strength in couple of weeks.
    </p>
    <p>
      Figure out what kinds of information have long-term value and internalize
      it. That adds far more value than rapidly changing, high-volume, low-value
      infotainment. Warren Buffet made an effort to learn the basics of many
      different businesses early on in his life. I'm not Buffet's biggest fan,
      but he certainly made some wise choices about how to apply himself we can
      all learn from. He made an effort to understand the nuts and bolts of as
      many different businesses as he could. With that deep knowledge, he was
      able to invest in the businesses he knew would be most likely to generate
      a good return. That's the the basic operating principle, and you can apply
      it to your learning.
    </p>

    <h2>Technology podcasts on a solo road trip - August 24, 2020</h2>
    <h3>
      <em>A quality technology podcast can make you smarter!</em>
    </h3>
    <p>
      On an 7 hour road trip I had several podcasts to listen to. These held my
      attention, and if your interests are similar you will likely find them
      useful too.
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
