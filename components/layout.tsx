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
          color: #2e2e2e;
          background-color: #f4f2eb;
          margin: 0;
          padding: 0;
          background-image: url('/people.png');
          background-position: right bottom;
          background-repeat: no-repeat;
        }

        h1 {
          color: #ff5454;
          font-size: 4rem;
        }

        h2 {
          font-size: 2rem;
        }

        a {
          color: #4e86f1;
          text-decoration: none;
          position: relative;
        }

        a::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -0.15em;
          height: 0.15em;
          overflow: hidden;
          border-bottom: 0.15em solid #4e86f1;
          opacity: 0;
          transition: all 0.1s ease-in-out;
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

        input:hover,
        input:focus {
          border-color: #4e86f1;
        }

        input[type='button'],
        input[type='submit'] {
          color: #fff;
          background-color: #4e86f1;
          border: 0;
          text-transform: uppercase;
          font-size: 0.8rem;
          font-weight: 600;
          transition: background-color 0.2s ease;
        }

        input[type='button']:hover,
        input[type='submit']:hover {
          background-color: #6495f1;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};
