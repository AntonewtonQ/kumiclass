import React from "react";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import { signIn } from "@/lib/auth";

const GoogleLoginButton = () => {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <Button
          variant="outline"
          className="w-full cursor-pointer flex items-center justify-center gap-2"
        >
          <Mail className="h-5 w-5 text-[#DB4437]" />
          Entrar com o Google
        </Button>
      </form>
    </div>
  );
};

export default GoogleLoginButton;
