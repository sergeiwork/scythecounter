import React, { ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { LocalizeContextProps, withLocalize } from "react-localize-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import MainPage from "./controls/Pages/MainPage";
import PlayerScoreCounterPage from "./controls/Pages/PlayerScoreCounterPage";
import SummaryPage from "./controls/Pages/SummaryPage";

import en from "./localization/en.json";
import ru from "./localization/ru.json";

class App extends React.Component<LocalizeContextProps> {
  public constructor(props: LocalizeContextProps) {
    super(props);
    const lng = localStorage.getItem("language") ?? "en";
    props.initialize({
      languages: [
        { name: "English", code: "en" },
        { name: "Русский", code: "ru" },
      ],
      options: { renderToStaticMarkup, defaultLanguage: lng },
    });
    props.addTranslationForLanguage(en, "en");
    props.addTranslationForLanguage(ru, "ru");
    if (lng) props.setActiveLanguage(lng);
  }
  public render(): ReactNode {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/summary" exact component={SummaryPage} />
          <Route path="/player/*" component={PlayerScoreCounterPage} />
        </Switch>
      </Router>
    );
  }
}

export default withLocalize(App);
