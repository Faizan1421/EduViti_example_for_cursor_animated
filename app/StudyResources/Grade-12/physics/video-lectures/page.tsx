"use client";
import React from "react";
import { physics } from "@/data/classes/12";
import BackButton from "@/app/components/backbtn";
import LecturesCard from "@/app/components/droplectures";

export default function Grade9MathsQuestionBanks() {
  return (
    <main className="p-6">
      <BackButton />
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 mt-6 text-white text-center">
        Grade 12 <span className="text-primary">Physics</span> Video Lectures
      </h1>

      <LecturesCard list={physics.video_lectures} />
    </main>
  );
}
