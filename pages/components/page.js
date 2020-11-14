import Meta from './meta';
import Header from './header';
import Footer from './footer';

const Page = (props) => {
  return (
    <div className="page">
    <Meta title={props.title} description={props.description}/>

    <Header/>

    <main role="main" className="main">
      {props.children}
    </main>
    <Footer />

    <style jsx>{`
        .page {
          margin: auto;
          max-width: 950px;
        }

        .main {
          padding: 3px 0px;
        }
      `}</style>
    </div>
  );
};
export default Page;