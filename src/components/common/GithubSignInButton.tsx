import React from "react";
import { Button } from "../ui/button";
import { Github } from "lucide-react";
import { signIn } from "@/lib/auth";

const GithubSignInButton = () => {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <Button
          className="flex w-full cursor-pointer justify-center items-center space-x-2"
          variant="outline"
        >
          <Github size={35} />
          <span>Entrar com o github</span>
        </Button>
      </form>
    </>
  );
};

export default GithubSignInButton;
