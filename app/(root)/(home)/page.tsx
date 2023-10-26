import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "q1",
    title: "What are the key features of TypeScript?",
    tags: [
      { _id: "tag1", name: "TypeScript" },
      { _id: "tag2", name: "Programming" },
    ],
    author: {
      _id: "author1",
      name: "Alice Johnson",
      picture: "alice.jpg",
    },
    upvotes: 25,
    views: 123,
    answers: [],
    createdAt: new Date("2023-10-24T14:30:00Z"),
  },
  {
    _id: "q2",
    title: "How can I style a React component using CSS-in-JS?",
    tags: [
      { _id: "tag3", name: "React" },
      { _id: "tag4", name: "Styling" },
    ],
    author: {
      _id: "author2",
      name: "Bob Smith",
      picture: "bob.jpg",
    },
    upvotes: 18,
    views: 98,
    answers: [],
    createdAt: new Date("2023-10-23T09:45:00Z"),
  },
  {
    _id: "q3",
    title: "What is the best practice for error handling in Node.js?",
    tags: [
      { _id: "tag5", name: "Node.js" },
      { _id: "tag6", name: "Error Handling" },
    ],
    author: {
      _id: "author3",
      name: "Eve Anderson",
      picture: "eve.jpg",
    },
    upvotes: 1235,
    views: 200010,
    answers: [],
    createdAt: new Date("2023-10-22T20:15:00Z"),
  },
  {
    _id: "q4",
    title: "How to implement authentication in a React app?",
    tags: [
      { _id: "tag3", name: "React" },
      { _id: "tag7", name: "Authentication" },
    ],
    author: {
      _id: "author4",
      name: "David Wilson",
      picture: "david.jpg",
    },
    upvotes: 42,
    views: 175,
    answers: [],
    createdAt: new Date("2023-10-21T17:00:00Z"),
  },
  {
    _id: "q5",
    title: "What are the benefits of using Redux for state management?",
    tags: [
      { _id: "tag3", name: "React" },
      { _id: "tag8", name: "Redux" },
    ],
    author: {
      _id: "author5",
      name: "Grace Miller",
      picture: "grace.jpg",
    },
    upvotes: 30,
    views: 150,
    answers: [],
    createdAt: new Date("2023-10-20T11:20:00Z"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There are no questions to show"
            description="Be the first to break the silence! Ask a question and kickstart the discussion. Our query could be the next big thing others learn from. Get involved!"
            link="/ask-question"
            linkTitle="Ask a question"
          />
        )}
      </div>
    </>
  );
}
