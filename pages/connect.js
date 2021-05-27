import React, { useState } from 'react';
import Page from './components/page';

const connect = (props) => {
  const [show, setShow] = useState(false);
  return (
    <Page title="connect">
      <div>
        <p> Fire me an email at <strong>daneasc</strong> at gmail dot com! If you're really eager to make contact, feel free to call or text me on <strong>zero seven one four six four four nine three four</strong>, with the appropriate country code (see the map).</p>
      </div>
    </Page>
  )
}

export default connect;