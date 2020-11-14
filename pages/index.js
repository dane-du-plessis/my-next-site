import Page from './components/page';
const index = () => {
  return (
    <Page title="Dane's Site">
      <div>
        <p>This is the personal website of Dane du Plessis. </p>
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
export default index;