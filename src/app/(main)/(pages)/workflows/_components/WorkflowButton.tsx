"use client";
import CustomModal from "@/components/global/CustomModal";
import { Button } from "@/components/ui/button";
import { useModal } from "@/providers/modal-provider";
import { Plus } from "lucide-react";
import React from "react";

type Props = {};

const WorkflowButton = (props: Props) => {
  const { setOpen, setClose } = useModal();
  const handleClick = () => {
    <CustomModal
      title="Create a Workflow Automation"
      subheading="Workflows are powerful taht helpyou automate tasks"
    >
      <h1>Hello</h1>
    </CustomModal>;
    console.log("Workflow Button");
  };
  return (
    <Button size={"icon"} onClick={handleClick}>
      <Plus />
    </Button>
  );
};

export default WorkflowButton;
