import { Header, Footer } from '../components';

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div>
      <Header />
      <main role="main">{children}</main>
      <Footer />

      <style jsx>{`
        div {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        main {
          flex: 1;
          display: flex;
          margin: 0 2rem;
          align-self: center;
          max-width: 1000px;
        }
      `}</style>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;900&display=swap');

        html {
          font-size: 17px;
        }

        body {
          font-family: 'Source Sans Pro', sans-serif;
          color: rgb(40, 45, 50);
          margin: 0;
          padding: 0;
        }

        h1, h2
          color: rgba(0, 0, 0, 0.9);
        }

        h1 {
          font-size: 3rem;
        }

        h2 {
          font-size: 2rem;
        }

        a {
          color: #26ade4;
          text-decoration: none;
          position: relative;
        }

        a::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -.15em;
          height: .15em;
          overflow: hidden;
          border-bottom: .15em solid #26ade4;
          opacity: 0;
          transition: all .1s ease-in-out;
        }

        a:hover::before {
          opacity: 1;
        }

        ::placeholder {
          font-size: 1rem;
          color: rgba(0, 0, 0, 0.25);
        }

        input {
          font-size: 1rem;
          color: rgba(0, 0, 0, 0.9);
          background-color: #fff;
          border: 1px solid rgba(0, 0, 0, 0.25);
          border-radius: 2px;
          padding: 1em;
          transition: 0.2s border-color;
        }

        input:hover, input:focus {
          border-color: #26ade4;
        }

        input[type="button"], input[type="submit"] {
          color: #fff;
          background-color: #26ade4;
          border: 0;
          text-transform: uppercase;
          font-size: 0.8rem;
          font-weight: 600;
          transition: background-color 0.2s ease;
        }

        input[type="button"]:hover, input[type="submit"]:hover {
          background-color: #239dcf;
          cursor: pointer;
        }

        
      `}</style>
    </div>
  );
};
