import Image from 'next/image'
import React from 'react'
import Page from './components/page'


const tech = (props) => {
  return (
    <Page title="tech">
      <div>
        <h2>
          Technologies I use
      </h2>
        <p> This is not an exhaustive list. The more-or-less average developer these days needs to be familiar with an impressive gamut of tools and to list them all here would be unhelpful. </p>

        <h2>User-directed</h2>
        <h3>HTML and CSS</h3>
      Without at least some knowledge of these two you'll have a hard time building web interfaces. Note these are not actual programming languages - they are markup and style sheet languages respectively.

      <h3>JavaScript</h3>
        <p>
          My favourite multi-paradigm, high-level programming language without which the internet would be very boring indeed. The JavaScript ecosystem is a bit of a jungle and wrapping one's head around the ES versions can be a pain. For anyone starting out with this language, I highly recommend watching <a href="https://www.udemy.com/course/understand-javascript/">JavaScript - Understanding the Weird Parts</a> by Anthony Alicea. Although a bit dated now, it's still one of the best ways to get your head around many of JavaScript's quirks.
      </p>

        <h3>React</h3>
        <Image
          src="/react.svg"
          alt="react logo"
          layout="fixed"
          width={50}
          height={50}
        />
        <p>A beautifully documented, widely used JS framework for developing user interfaces which started its existence in the Phasebook world. It's easy to learn and comes with a community probably the size of Luxembourg. I've used it in multiple projects (including this website).</p>

        <h3>NextJS</h3>
        <Image
          src="/next.svg"
          alt="next js logo"
          layout="fixed"
          width={50}
          height={50}
        />
        <p>
          A <em>really good</em> framework for building server-side rendered, pre-optimized websites with React. That hardly does it justice. This site uses it. Go <a href="https://nextjs.org/" target="_blank">check it out</a>.
          </p>

        <h3>React Native</h3>
        <p>The quickest (well, possibly the quickest) way to build a cross platform mobile app. Not the least buggy option, but beats writing dedicated code for Android and iOS if you need an app running on both platforms.</p>

        <h3>Svelt - soon</h3>
        <p>
          OK I'm not really using this in production, but man is it cool! Richard Harris has some <a href="https://svelte.dev/blog/svelte-3-rethinking-reactivity" target="_blank">awesome</a> talks on his creation, highly recommended to anyone with an interest in the future of user interfaces.
      </p>

        <h3>Flutter and Dart</h3>
        <p>
          Flutter is a multi-platform user interface framework developed by the good people at Google. It's written in Dart, which uses some of the best bits from Java, Kotlin, and others. There's not much that can beat Flutter when it comes to speed of development, although React Native comes close. What really makes it amazing is the Dart language, which I really like.
      </p>

        <h2>
          Backend
      </h2>

        <h3>NodeJS</h3>
        <p>An accessible ecosystem with zillions of users and fantastic documentation everywhere. NodeJS is one of the best things to emerge from web technology and is powering a lot of systems around the world, including many I've contributed to.</p>

        <h3>Google Cloud Platform</h3>
        <p>
          A lot of people are using GCP for greenfield projects, especially smaller companies and freelancers. The flexibility and power GCP provides is amazing. Documentation wise, GCP is a lot more accessible than AWS.
          </p>

        <h3>Java and SQL</h3>
        <p>Java is the workhorse of many enterprise software systems. It's probably best to come to terms with the fact that some of these systems will likely outlive us. Rubbish, you say? Just consider COBOL. And there's not much that can beat SQL if all you want to know is may people live in Texas and earn more than $50k a year. </p>

        <h2>Hardware</h2>
        <p>I use a Lenovo ThinkPad T490 with Ubuntu installed. Diver compatibility is acceptable, and I've had about as many issues with this setup as with the Macbook Pro I use for work. As usual, the after-sales support that comes with Apple products is abysmal. The ThinkPad has about another three years of first-class support remaining. Both machines are extremely capable and are more than adequate for my needs as a software engineer.  </p>
      </div>
    </Page>
  )
}

export default tech