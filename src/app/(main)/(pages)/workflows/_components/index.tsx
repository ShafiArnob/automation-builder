import React from "react";
import Workflow from "./Workflow";

type Props = {};

const Workflows = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col m-2">
        <Workflow
          name="Arnob"
          description="Creating a workflow app"
          id="12345"
          publish={false}
        />
      </section>
    </div>
  );
};

export default Workflows;
