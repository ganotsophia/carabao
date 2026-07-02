"use client";

import { useState } from "react";
import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

const moduleItem = curriculumData.find((module) => module.slug === "formulation")!;
const lessonIndex = 0;

const tabData = {
  single: {
    summary: "Learn how to set up your first single feed formulation with precise ingredient ratios.",
    steps: [
      "Choose the base ingredients for your single formula.",
      "Set target nutrient percentages for your mix.",
      "Run the solver and inspect the proposed formula.",
    ],
  },
  multiple: {
    summary: "Master multi-mix formulations. Learn how to balance multiple formulas across batches simultaneously.",
    steps: [
      "Select a group of target formulas to batch process.",
      "Allocate shared ingredients and bulk nutrient constraints.",
      "Execute multi-formulation optimization and compare outputs side-by-side.",
    ],
  },
};

export default function FormulationLesson1Page() {
  const [activeTab, setActiveTab] = useState<"single" | "multiple">("single");

  // Create the JSX for the tab buttons
  const tabsJSX = (
    <div className="flex border-b border-gray-200">
      <button
        onClick={() => setActiveTab("single")}
        className={`py-3 px-6 font-semibold text-sm transition-all border-b-2 -mb-[2px] ${
          activeTab === "single"
            ? "border-[#1E5631] text-[#1E5631]"
            : "border-transparent text-gray-400 hover:text-gray-600"
        }`}
      >
        Single Formulation
      </button>
      <button
        onClick={() => setActiveTab("multiple")}
        className={`py-3 px-6 font-semibold text-sm transition-all border-b-2 -mb-[2px] ${
          activeTab === "multiple"
            ? "border-[#1E5631] text-[#1E5631]"
            : "border-transparent text-gray-400 hover:text-gray-600"
        }`}
      >
        Multiple Formulation
      </button>
    </div>
  );

  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
      customSummary={tabData[activeTab].summary}
      customSteps={tabData[activeTab].steps}
      tabs={tabsJSX} 
    />
  );
}