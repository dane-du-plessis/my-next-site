import React from 'react';
import Page from './components/page';

const blog = (props) => {
  return (
    <Page title="blog">
      <h2>August 24, 2020</h2>

      <p>On an 7 hour road trip I had several podcasts to listen to. These kept my attention and I decided that I'd share them here:</p>

      <a target="_blank" href="https://www.rzim.org/listen/thinking-out-loud/do-our-devices-own-us"><h3>Do our devices own us?</h3></a>

      <p>A really thought-provoking podcast called <em>Thinking out loud</em>, this episode gets the brain going how the technology we use is shaping modern culture.</p>

      <a target="_blank" href="https://changelog.com/jsparty/132"><h3>Theross takes us to security school</h3></a>

      <p>This <em>JS Party</em> episode takes a trip down the rabbit hole that is security on the web platform. Super informative and funny! I learned so much about security vulnerabilities in browsers, and am thinking seriously about making a tinfoil hat for my smartphone.</p>


    </Page>
  )
}

export default blog;