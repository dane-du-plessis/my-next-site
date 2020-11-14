
import {withRouter } from "next/router";
import Link  from "next/link";

import Nav from "./nav";

function Header ({router}){
  return (
    <header>
      <div id="links">
        <Link href="/">
          <h1>
            <a className="title" role="link"> Dane's site </a>
          </h1>
        </Link>
        <nav>
          <Nav current={router.pathname}/>
        </nav>
      </div>
    </header>
  )
}

export default withRouter(Header);