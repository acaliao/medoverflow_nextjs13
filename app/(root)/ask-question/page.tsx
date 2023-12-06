import Question from "@/components/forms/Question";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  // const { userId } = auth();

  const userId = "123456789";
  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserById({ userId });
  console.log(mongoUser);

  return (
    <div>
      <div>
        <h1 className="h1-bold flex">Ask a question</h1>
        <div className="mt-9">
          <Question mongoUserId={JSON.stringify(mongoUser._id)} />
        </div>
      </div>
    </div>
  );
};

export default page;