import React from 'react';
import Page from './components/page';

const tech = (props) => {
  return (
    <Page title="tech">
      <div>
        <h2>
          Technologies I'm interested in 
      </h2>
        <p> This is not an exhaustive list. The more-or-less average developer these days needs to be familliar with an impressive gamut of tools and to list them all here would be unhelpful. I am busy with a mindmap of all these though, and will release that here soon.</p>

        <h2>Frontend</h2>
        <h3>HTML and CSS</h3>
      Without at least some knowledge of these two you have no business engineering user interfaces in 2020. Just my personal opinion. Note these are not actual programming languages; they are markkup and style sheet languages respectively.

      <h3>JavaScript</h3>
        <p>
          My favourite multi-paradigm, high-level programming language without which the internet would be very boring indeed.
      </p>

        <h3>React</h3>
        <p>A beautifully documented, widely used JS framework for developing user interfaces which started its existence in the Phasebook world. It's easy to learn and comes with a community probably the size of Luxembourg. I've used it in multiple projects (including this website).</p>

        <h3>React Native</h3>
        <p>The quickest (well, possibly the quickest) way to build a cross platform mobile app. Not necessariy the least buggy of all the options out there, but beats writing dedicated code for Android and iOS if you need an app running on both platforms.</p>

        <h3>Svelt - soon</h3>
        <p>
          OK I'm not really using this in production, but man is it cool! Richard Harris has some <a href="https://svelte.dev/blog/svelte-3-rethinking-reactivity" target="_blank">awesome</a> talks on his creation, highly recommended to anyone with an interest in the future of user interfaces.
      </p>

        <h2>
          Backend
      </h2>

        <h3>NodeJS</h3>
        <p>An accessible ecosystem with zillions of users and fantastic documentation everywhere. NodeJS is one of the best things to emerge from web technology and is powering a lot of systems around the world, including many I've contributed to.</p>

        <h3>Java, SQL - assorted flavours</h3>
        <p>Java is the workhorse of many enterprise software systems. It's probably best to come to terms with the fact that some of these systems will likely outlive us. Rubbish, you say? Just consider COBOL. And there's not much that can beat SQL if all you want to know is may people live in Texas and earn more than $50k a year. </p>

      </div>
    </Page>
  )
}

export default tech;