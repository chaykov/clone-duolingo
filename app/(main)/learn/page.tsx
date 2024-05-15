import React from "react";
import { SticktWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";

const page = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <SticktWrapper>
        <UserProgress
          activeCourse={{ title: "Spanish", imageSrc: "/fr.svg" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </SticktWrapper>
      <FeedWrapper>
        <Header title="French" />
      </FeedWrapper>
    </div>
  );
};

export default page;
