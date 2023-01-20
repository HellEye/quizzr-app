'use client'
import React from 'react'
import Card from '@ui/Card'

const Home = () => {
  return (
    <div className="grid grid-cols-1 place-items-stretch gap-y-16 gap-x-8 px-32 pb-8 lg:grid-flow-dense lg:grid-cols-2">
      <Card className="mt-8 flex flex-col gap-8 p-16 lg:col-span-2">
        <h1 className="font-cursive w-full text-center text-8xl">Welcome to Quizzr</h1>
        <h3 className="w-full text-center text-2xl italic">
          <span className="font-bold italic">WIP</span>, but it's online for the lulz
        </h3>
      </Card>
      <div className="min-h-32 col-start-1 flex h-full min-h-[16rem] w-full items-center justify-center bg-teal-900 lg:col-start-2">
        <h4 className="text-xl">Image here </h4>
      </div>
      <Card className="col-start-1">
        <div className="flex flex-col gap-4">
          <h2 className="w-full text-center text-3xl">What even is this?</h2>
          <p>Long story short, it's an app to help you study</p>
          <p>Long story a bit longer:</p>
          <ul className="flex list-disc flex-col gap-1 px-4">
            <li>Create multiple choice quizzes or flashcards!</li>
            <li>Set number of repeats of each question!</li>
            <li>
              Learn by repetition, each question will appear until you remember the answer a few
              times!
            </li>
            <li>Share your question sets with friends!</li>
            <li>Edit sets together!</li>
            <li>Share feedback with the quizz author!</li>
          </ul>
        </div>
      </Card>

      <div className="col-start-1 flex h-full min-h-[16rem]  w-full items-center justify-center bg-teal-900">
        <h4 className="text-xl">Image here </h4>
      </div>
      <Card className="col-start-1 lg:col-start-2 ">
        <div className="flex flex-col gap-4">
          <h2 className="w-full text-center text-3xl">That's neat, but I've got books</h2>
          <p>
            Good for you! But books/notes are pretty boring, and you usually read them once or
            twice, and in the same order every time.
          </p>
          <p>
            Here you always get different questions, with differently ordered answers, in random
            order!
          </p>
          <p>This helps you actually learn information, not just words</p>
        </div>
      </Card>
      <div className="min-h-32 col-start-1 flex h-full min-h-[16rem] w-full items-center justify-center bg-teal-900 lg:col-start-2">
        <h4 className="text-xl">Image here </h4>
      </div>
      <Card className="col-start-1">
        <div className="flex flex-col gap-4">
          <h2 className="w-full text-center text-3xl">
            But it takes a while to put everything into a question set
          </h2>
          <p>Sure, that's a good point. But you don't have to do it alone!</p>
          <p>If your friends also study the same topics, you can collaborate!</p>
          <p>
            In a set of 40 questions, with 8 people you only need to make 5 questions each. Doesn't
            seem too bad.
          </p>
          <p>
            And if you're feeling technical, there will (later) be import from a txt file, you can
            all write questions in any synchronised document, save it as a .txt and put everything
            in the app! <br /> This doens't include any extra functionality like images of course,
            but it's a good method to get something up quickly
          </p>
        </div>
      </Card>
    </div>
  )
}

export default Home
