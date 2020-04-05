import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
/* Data */
import recipes from "./data/recipes.json";
/* Pages */
import HomePage from "./pages/HomePage/HomePage.jsx";
import AllCategoryPage from "./pages/AllCategoryPage/AllCategoryPage.jsx";
import CollectionPage from "./pages/CollectionPage/CollectionPage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import SubscribePage from "./pages/SubscribePage/SubscribePage.jsx";
import CategoryPage from "./pages/CategoryPage/CategoryPage.jsx";
import DetailPage from "./pages/DetailPage/DetailPage.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
/* css */
import styles from "./nav.module.css";

/* here is some external content. look at the /CollectionPage route below
to see how this content is passed down to the components via props */
const myCollection = {
  title: "Delicious Soup",
  category: "Soup",
  detail: "how to cook the soup"
};

function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link className={styles.link} to="/">
            <img
              className={styles.logo}
              src="/images/homechef.jpg"
              alt="home chef"
            />
          </Link>
          <Link className={styles.link} to="/">
            <h1 className={styles.title}>HOME CHEF</h1>
          </Link>
          <Link className={styles.link} to="/category">
            <div className={styles.navTab}>All Category</div>
          </Link>
          <Link className={styles.link} to="/collection">
            <div className={styles.navTab}>My Collection</div>
          </Link>
          <Link className={styles.link} to="/about">
            <div className={styles.navTab}>About Us</div>
          </Link>
          <Link className={styles.link} to="/contact">
            <div className={styles.navTab}>Contact Us</div>
          </Link>
          <Link className={styles.subscribe} to="/subscribe">
            <button className={styles.subscribeButton}>Subscribe</button>
          </Link>
        </nav>
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/category" exact component={AllCategoryPage} />
        <Route
          path="/collection"
          exact
          render={() => <CollectionPage content={myCollection} />}
        />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/subscribe" exact component={SubscribePage} />
        {/* passing parameters via a route path */}
        <Route
          path="/category/:categoryID"
          exact
          render={({ match }) => (
            <CategoryPage
              categoryID={match.params.categoryID}
              content={Object.values(recipes)}
            />
          )}
        />
        <Route
          path="/category/:categoryID/:recipeID"
          exact
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <DetailPage
              categoryID={match.params.categoryID}
              recipeID={match.params.recipeID}
              content={Object.values(recipes)}
            />
          )}
        />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
