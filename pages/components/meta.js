import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";

Router.onRouteChageStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChageError = () => NProgress.done();

const Meta = (props) => {
  return (<div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta charSet="utf-8" />
      <title>{props.title || "base site"} - Dane du Plessis</title>
      <meta name="description" content={props.description} />

    </Head>
    {/*TODO insert styles here later and make very nice  */}
    <style jsx global>{`
      body {

      }    

    `}</style>
  </div>);
};

export default Meta;