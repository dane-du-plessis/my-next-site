
const Footer = (props) => {
  return (
    <footer role="contentinfo">

      <div className="copyright">&copy; {new Date().getFullYear()} Dane du Plessis</div>

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