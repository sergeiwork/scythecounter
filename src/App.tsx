import React, { ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { LocalizeContextProps, withLocalize } from "react-localize-redux";
import { Route, Switch, HashRouter } from "react-router-dom";
import "./App.css";
import MainPage from "./controls/Pages/MainPage";
import PlayerScoreCounterPage from "./controls/Pages/PlayerScoreCounterPage";
import PlayersListPage from "./controls/Pages/PlayersListPage";
import SummaryPage from "./controls/Pages/SummaryPage";

import en from "./localization/en.json";
import ru from "./localization/ru.json";

class App extends React.Component<LocalizeContextProps> {
  public constructor(props: LocalizeContextProps) {
    console.log('v0.1');
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
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/list" exact component={PlayersListPage} />
          <Route path="/summary" exact component={SummaryPage} />
          <Route path="/player/*" component={PlayerScoreCounterPage} />
        </Switch>
      </HashRouter>
    );
  }
}

export default withLocalize(App);
