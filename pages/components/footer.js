
const Footer = (props) => {
  const year = new Date().getFullYear();
  console.log(year);
  // return (<em>&#169; Dane P du Plessis {year}</em>);

  return (
    <footer role="contentinfo">

      <div className="copyright">&copy; {new Date().getFullYear()} Dane P du Plessis</div>

      <style jsx>{`

        footer {
          margin-top: 1em;
        }

        .copyright {
          text-align: center;
        }

      `}</style>
    </footer>
  );
}

export default Footer;