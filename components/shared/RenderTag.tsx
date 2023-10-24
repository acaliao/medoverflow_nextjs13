import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

interface Props {
  _id: number;
  name: string;
  count?: number;
  showCount?: boolean;
}
const RenderTag = ({ _id, name, count, showCount }: Props) => {
  return (
    <div>
      <Link href={`/tags/${_id}`} className="flex justify-between gap-2">
        <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
          {name}
        </Badge>
        {showCount && (
          <p className="small-medium text-dark500_light700">{count}</p>
        )}
      </Link>
    </div>
  );
};

export default RenderTag;
