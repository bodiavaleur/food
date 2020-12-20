import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import { Header, SidebarMenu } from "./components/organisms";
import {
  CategoriesPage,
  MealInfoPage,
  MealsPage,
  RandomPage,
  HomePage,
  CuisinesPage,
} from "./components/pages/";

export function App() {
  const showMenuSidebar = useSelector((state: any) => state.showMenuSidebar);
  const path = process.env.PUBLIC_URL;

  return (
    <Router>
      <GlobalStyle />

      <Header />
      {showMenuSidebar && <SidebarMenu />}

      <Switch>
        <Route exact path={path} component={HomePage} />
        <Route exact path={path + "/categories"} component={CategoriesPage} />
        <Route
          exact
          path={path + "/filter/:filter/:value"}
          component={MealsPage}
        />
        <Route exact path={path + "/cuisines"} component={CuisinesPage} />
        <Route exact path={path + "/meal/:id"} component={MealInfoPage} />
        <Route exact path={path + "/random"} component={RandomPage} />
      </Switch>
    </Router>
  );
}
