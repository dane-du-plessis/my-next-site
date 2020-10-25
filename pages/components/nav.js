import Link from "next/link";

const Item = ({ href, current, children }) => {
  return (
    <li>
      <Link href={href}>
        <a aria-current={current ? "page" : "false"}>{children}</a>
      </Link>
      <style jsx>{`
        li{

        }      

        a {

        }

        a:hover{

        }

        [aria-current="page"] {
          color: firebrick;
          font-weight: bold;
        }
      `}</style>
    </li>
  )
}

const Nav = ({ current }) => {
  const pages = ["home", "tech"];
  return (
    <ul>
      {pages.map((page, i) => {
        let href = "/" + page;
        return (
          <Item key={i} href={href} current={href == current}>
            {page}
          </Item>
        );
      })};

      <style jsx>{`
        ul {
          list-style-type: none;

          /*
             Have to remove user agent margin and padding when removing list
             markers.
          */
          margin: 0;
          padding: 0;

          display: flex;
          flex: 1;

          /* Handle narrow viewport by wrapping without media queries */
          flex-flow: row wrap;

          text-align: center;
        }
      `}</style>
    </ul>
  )
}