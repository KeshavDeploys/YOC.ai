"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


const page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-powered Practice and Feedback</h2>

          <p className="text-lg">
            Practice on real interview questions & get instant feedback
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12 tracking-tight text-white">Why Choose YOC.ai?</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Feature Card */}
            <div className="bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 rounded-2xl p-6 border border-zinc-800 shadow-md hover:shadow-xl text-white">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold mb-2">Real Interview Questions</h4>
              <p className="text-zinc-400 text-sm">Practice with questions curated from actual company interviews across tech roles.</p>
            </div>

            {/* Feature Card */}
            <div className="bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 rounded-2xl p-6 border border-zinc-800 shadow-md hover:shadow-xl text-white">
              <div className="text-3xl mb-4">⚡</div>
              <h4 className="text-xl font-semibold mb-2">Instant AI Feedback</h4>
              <p className="text-zinc-400 text-sm">Receive lightning-fast feedback with tips on how to improve both accuracy and clarity.</p>
            </div>

            {/* Feature Card */}
            <div className="bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 rounded-2xl p-6 border border-zinc-800 shadow-md hover:shadow-xl text-white">
              <div className="text-3xl mb-4">📊</div>
              <h4 className="text-xl font-semibold mb-2">Adaptive Questioning</h4>
              <p className="text-zinc-400 text-sm">Interview questions get smarter as you go — adapting to your strengths and weaknesses for a personalized practice experience.</p>
            </div>

            {/* Feature Card */}
            <div className="bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 rounded-2xl p-6 border border-zinc-800 shadow-md hover:shadow-xl text-white">
              <div className="text-3xl mb-4">🛠️</div>
              <h4 className="text-xl font-semibold mb-2">15+ Technologies</h4>
              <p className="text-zinc-400 text-sm">Practice interviews in React, Node.js, Python, SQL, DevOps & more — all in one place.</p>
            </div>
          </div>
        </div>
      </section>

  <section className="py-24 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h3 className="text-4xl font-bold mb-12 text-white">Frequently Asked Questions</h3>

    {/* FAQ Accordion */}
    <div className="space-y-4 text-left">
      {[
        {
          question: "What was the vision to create YOC.ai?",
          answer:
            "To democratize interview preparation by combining real-world questions, adaptive AI feedback, and personalized learning — making every candidate interview-ready, regardless of background.",
        },
        {
          question: "What kind of questions can I practice?",
          answer:
            "You can practice questions from Frontend, Backend, Full Stack, Cloud, DevOps, and even System Design.",
        },
        {
          question: "How accurate is the AI feedback?",
          answer:
            "Our AI is trained on real-world interview patterns and provides fast, helpful feedback to improve your clarity, structure, and overall response quality — with up to 70% accuracy.",
        },
        {
          question: "How is YOC.ai different from other interview prep platforms?",
          answer:
            "Unlike traditional platforms instead of one to one mentor sessions, YOC.ai uses AI to simulate real interviews, offer instant feedback, and adapt to your skill level — all in one personalized, interactive experience.",
        },
        {
          question: "Do I need to install anything?",
          answer:
            "Nope. Everything runs in the browser. Just log in and start practicing!",
        },
      ].map((item, i) => {
        const [openIndex, setOpenIndex] = useState<null | number>(null);
        const isOpen = openIndex === i;

        return (
          <div
            key={i}
            className="border border-zinc-700/50 rounded-xl px-6 py-4 transition-all duration-300"
          >
            <button
              onClick={() =>
                setOpenIndex(isOpen ? null : i)
              }
              className="flex justify-between items-center w-full text-white text-left"
            >
              <span className="text-lg font-medium">{item.question}</span>
              <span className="text-2xl">{isOpen ? "−" : "+"}</span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                isOpen ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm text-zinc-400">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>


<footer className="w-full mt-10 border-t border-zinc-800">
  <div className="max-w-7xl mx-auto px-6 py-8 text-center text-sm text-zinc-500">
    <p>&copy; {new Date().getFullYear()} <span className="text-white font-medium">YOC.ai</span>. All rights reserved.</p>
  </div>
</footer>


    </>
  );
};

export default page;
