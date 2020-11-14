import React from 'react';
function createMarkup() {
    const map = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52886.3837610564!2d18.816291646386563!3d-34.059285057305466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdb565fbc4f737%3A0x42f889f307a16bb9!2sSomerset%20West%2C%20Cape%20Town!5e0!3m2!1sen!2sza!4v1598288690920!5m2!1sen!2sza" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;
    return { __html: map };
}

const EmbeddedMap = function Map() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
}

export default EmbeddedMap;