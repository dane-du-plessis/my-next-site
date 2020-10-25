import Page from './components/page';
export default () => {
  return (
    <Page title="Dane's Site">
      <div>
        <h2>The index content</h2>
      </div>
      <style jsx>{`
        hr {
          background: lightgray;
          height: 0.15rem;
          border: none;
          margin 1em 0.25em;
        }
      `}</style>
    </Page>
  );
};