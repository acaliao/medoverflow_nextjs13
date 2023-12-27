import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";
const hotQuestions = [
  { _id: "1", title: "What is the best way to maintain a healthy weight?" },
  { _id: "2", title: "How can I lower my cholesterol?" },
  { _id: "3", title: "What are the symptoms of diabetes?" },
  {
    _id: "4",
    title: "How often should I get a check-up?",
  },
  { _id: "5", title: "What are some ways to manage stress?" },
];

const popularTags = [
  { _id: "1", name: "Heart", count: 100 },
  { _id: "2", name: "Covid", count: 100 },
  { _id: "3", name: "Breathing", count: 100 },
  { _id: "4", name: "Anxiety", count: 100 },
  { _id: "5", name: "Depression", count: 100 },
];
const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              key={question._id}
              href={`/question/${question._id}`}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron-right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              count={tag.count}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
