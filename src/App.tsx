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

  return (
    <Router>
      <GlobalStyle />

      <Header />
      {showMenuSidebar && <SidebarMenu />}

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/categories' component={CategoriesPage} />
        <Route exact path='/filter/:filter/:value' component={MealsPage} />
        <Route exact path='/cuisines' component={CuisinesPage} />
        <Route exact path='/meal/:id' component={MealInfoPage} />
        <Route exact path='/random' component={RandomPage} />
      </Switch>
    </Router>
  );
}
