import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

type Props = {
  activeCourse: { imageSrc: string; title: string }; //TODO: replace with DB types
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({
  activeCourse,
  hasActiveSubscription,
  hearts,
  points,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button variant="ghost">
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-md border"
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orane-500">
          <Image
            src="/hand-gesture.svg"
            height={28}
            width={28}
            alt="Points"
            className="mr-2"
          />
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orane-500">
          <Image
            src="/love.svg"
            height={28}
            width={28}
            alt="hearts"
            className="mr-2"
          />
          {hasActiveSubscription ? (
            <InfinityIcon className="h-4 w-4 stroke-[3]" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  );
};
