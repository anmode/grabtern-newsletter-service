import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { NewsletterList } from "./newsletter/NewsletterList";
import { NewsletterCreate } from "./newsletter/NewsletterCreate";
import { NewsletterEdit } from "./newsletter/NewsletterEdit";
import { NewsletterShow } from "./newsletter/NewsletterShow";
import { SubscriberList } from "./subscriber/SubscriberList";
import { SubscriberCreate } from "./subscriber/SubscriberCreate";
import { SubscriberEdit } from "./subscriber/SubscriberEdit";
import { SubscriberShow } from "./subscriber/SubscriberShow";
import { EmailLogList } from "./emailLog/EmailLogList";
import { EmailLogCreate } from "./emailLog/EmailLogCreate";
import { EmailLogEdit } from "./emailLog/EmailLogEdit";
import { EmailLogShow } from "./emailLog/EmailLogShow";
import { SubscriptionList } from "./subscription/SubscriptionList";
import { SubscriptionCreate } from "./subscription/SubscriptionCreate";
import { SubscriptionEdit } from "./subscription/SubscriptionEdit";
import { SubscriptionShow } from "./subscription/SubscriptionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"grabtern-newsletter-service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Newsletter"
          list={NewsletterList}
          edit={NewsletterEdit}
          create={NewsletterCreate}
          show={NewsletterShow}
        />
        <Resource
          name="Subscriber"
          list={SubscriberList}
          edit={SubscriberEdit}
          create={SubscriberCreate}
          show={SubscriberShow}
        />
        <Resource
          name="EmailLog"
          list={EmailLogList}
          edit={EmailLogEdit}
          create={EmailLogCreate}
          show={EmailLogShow}
        />
        <Resource
          name="Subscription"
          list={SubscriptionList}
          edit={SubscriptionEdit}
          create={SubscriptionCreate}
          show={SubscriptionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
