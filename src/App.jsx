import React from "react";
import Card from "./Card";

function App() {
  let data = [
    {
      plan: "FREE",
      price: 0,
      user: "Single User",
      userEnabler: true,
      storage: "5GB Storage",
      storgeEnabler: true,
      publicproject: "Unlimited Public Projects",
      publicprojectEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateprojects: "Unlimited Private Projects",
      privateprojectsEnabler: false,
      support: "Dedicate Phone Support",
      supportEnabler: false,
      subDomain: "Free Subdomain",
      subDomainEnabler: false,
      reports: "Montly Status Reports",
      reportsEnabler: false,
    },

    {
      plan: "PLUS",
      price: 9,
      user: "5 User",
      userEnabler: true,
      storage: "50GB Storage",
      storgeEnabler: true,
      publicproject: "Unlimited Public Projects",
      publicprojectEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateprojects: "Unlimited Private Projects",
      privateprojectsEnabler: true,
      support: "Dedicate Phone Support",
      supportEnabler: true,
      subDomain: "Free Subdomain",
      subDomainEnabler: true,
      reports: "Montly Status Reports",
      reportsEnabler: false,
    },

    {
      plan: "PRO",
      price: 49,
      user: "unlimited Users",
      userEnabler: true,
      storage: "150GB Storage",
      storgeEnabler: true,
      publicproject: "Unlimited Public Projects",
      publicprojectEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateprojects: "Unlimited Private Projects",
      privateprojectsEnabler: true,
      support: "Dedicate Phone Support",
      supportEnabler: true,
      subDomain: " Unlimited Free Subdomain",
      subDomainEnabler: true,
      reports: "Montly Status Reports",
      reportsEnabler: true,
    },
  ];
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {data.map((e, i) => {
              return <Card key={i} data={e} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
