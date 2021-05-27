import React, { useState } from 'react';
import Page from './components/page';

const connect = (props) => {
  const [show, setShow] = useState(false);
  return (
    <Page title="resources">
      <div>
        <h1>An uncurated list of blogs, people, projects, and podcasts</h1>
        <p>Listening to technical podcasts can make conplex ideas more familliar and deepen knowledge. It's one of the most effective ways to keep up to speed on new developments in software engineering.</p>

        <h3>Sofware Engineering Daily</h3>
        <p>An interesting tech podcast by ex-Amazon software engineer Jeff Meyerson. One especially memorable interview was with Kent Beck <a href="https://softwareengineeringdaily.com/2019/08/28/facebook-engineering-process-with-kent-beck/">https://softwareengineeringdaily.com/2019/08/28/facebook-engineering-process-with-kent-beck/</a>. </p>

        <h3>JS Party</h3>
        <p> Always fun and insightful, an weekly overview of web tech. Highly recommended. <a href="https://changelog.com/jsparty">https://changelog.com/jsparty</a></p>


      </div>
    </Page>
  )
}

export default connect;