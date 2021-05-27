import Link from "next/link";

const Item = ({ href, current, children}) => {
  return (
    <li>
      <Link href={href}>
        <a aria-current={current ? "page" : "false"}>{children}</a>
      </Link>
      <style jsx>{`
        li{
          flex: 1;
        }

        a {
          display: block;
          padding: 10px 8px;
          font-size: 24px;
          text-decoration: none;
          transition: 0.2s;
        }

        a:hover{
          transition: 0.5s;
          color: dodgerblue;
          font-weight: bold;
        }

        [aria-current="page"] {
          color: dodgerblue;
          font-weight: bold;
        }
      `}</style>
    </li>
  )
}

const Nav = ({current}) => {
  const pages = ["home", "blog", "tech", "resources", "connect"];
  return (
    <ul>
      {pages.map((page, i) => {
        let href = "/" + page;
        return (
          <Item key={i} href={href} current={href == current}>
            {page}
          </Item>
        );
      })}
      <style jsx>{`
      
        ul {
          list-style-type: none;

          /*remove user aget nargin and padding when the list markers have been removed*/
          margin: 0;
          padding: 0;

          display: flex;
          flex: 1;

          flex-flow: row wrap;

          text-align: center;
        
        }
      `}</style>
    </ul>
  )
}

export default Nav;