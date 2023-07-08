import React from "react";
import Template1 from "../../components/templates/Template1";
import Template2 from "../../components/templates/Template2";
import Template3 from "../../components/templates/Template3";
import Template4 from "../../components/templates/Template4";

const Preview = ({ templateId, userDetails }) => {
  switch (templateId) {
    case "template1":
      return <Template1 userDetails={userDetails} />;
    case "template2":
      return <Template2 userDetails={userDetails} />;
    case "template3":
      return <Template3 userDetails={userDetails} />;
    case "template4":
      return <Template4 userDetails={userDetails} />;
    default:
      return <div>Something went wrong</div>;
  }
};

export default Preview;
