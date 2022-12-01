import "./App.css";

import Card from "./components/Card";

import movies from "./data/movies.json";

const App = () => {
  return (
    <div className="page">
      <div className="layout">
        <main className="container">
          {/* <h1>Main</h1> */}
          <Card {...movies[0]} />
          <Card {...movies[1]} />
          <Card {...movies[2]} />
        </main>
        <article className="container">
          {/* <h1>article</h1> */}
          <Card {...movies[3]} />
          <Card {...movies[2]} />
          <Card {...movies[0]} />
        </article>
      </div>
    </div>
  );
};

export default App;
