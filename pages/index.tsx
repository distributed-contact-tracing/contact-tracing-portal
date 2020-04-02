import { Layout, AuthorizeDataForm } from '../components';

const Home = () => (
  <Layout>
    <div className="container">
      <div className="child left">
        <h1>Distributed Contact Tracing</h1>
        <p>
          Här kan du som är legitimerad sjukvårdspersonal anmäla positiva
          provsvar på covid-19.
        </p>
      </div>
      <div className="child right">
        <AuthorizeDataForm />
      </div>

      <style jsx>{`
        .container {
          flex: 1;
          justify-self: center;
          display: flex;
          align-items: center;
        }

        .child {
          flex-basis: 50%;
        }

        .left {
          margin-right: 1rem;
        }

        .right {
          margin-left: 1rem;
        }

        h1 {
          max-width: 50%;
          line-height: 1;
        }
      `}</style>
    </div>
  </Layout>
);

export default Home;
