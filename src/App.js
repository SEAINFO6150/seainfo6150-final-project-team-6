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

const myCollection = {
  "Lemony Turkey Rice Soup": {
    name: "Lemony Turkey Rice Soup",
    description:
      "A wonderful, light soup perfect for the post-holiday turkey leftovers. It is so friendly when you need a 'light' meal after the heaviness of the holidays.",
    imageURL: "/images/lemony-turkey-rice-soup.jpg",
    detailURL: "/category/1/3",
  },
  "Summer Asian Slaw": {
    name: "Summer Asian Slaw",
    description:
      "A yummy slaw filled with summer ingredients - fresh herbs & peaches - and tossed in a yummy miso dressing. Perfect for picnics!",
    imageURL: "/images/summer-asian-slaw.jpg",
    detailURL: "/category/2/2",
  },
  "Chocolate Brownies": {
    name: "Chocolate Brownies",
    description:
      "The Best Brownie Recipe Ever has the perfect chewy fudge squares of chocolate. You’ll never buy a boxed brownie mix again!",
    imageURL: "/images/chocolate-brownies.jpg",
    detailURL: "/category/5/2",
  },
};

function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/">
            <img
              className={styles.logo}
              src="/images/homechef.jpg"
              alt="home chef"
            />
          </Link>
          <Link className={styles.title} to="/">
            HOME CHEF
          </Link>
          <Link className={styles.navTab} to="/category">
            All Category
          </Link>
          <Link className={styles.navTab} to="/collection">
            My Collection
          </Link>
          <Link className={styles.navTab} to="/about">
            About Us
          </Link>
          <Link className={styles.navTab} to="/contact">
            Contact Us
          </Link>
          <Link className={styles.subscribe} to="/subscribe">
            Subscribe
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
          render={() => (
            <CollectionPage content={Object.values(myCollection)} />
          )}
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
