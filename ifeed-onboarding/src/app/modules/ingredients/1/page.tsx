import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

const moduleItem = curriculumData.find((module) => module.slug === "ingredients")!;
const lessonIndex = 0;
const summary = "Learn the main categories of feed ingredients and how to interpret nutritional labels.";
const steps = [
  "Study ingredient categories such as energy, protein, and minerals.",
  "Identify common nutrient values and their meanings.",
  "Connect ingredient quality to feed performance.",
];

export default function IngredientsLesson1Page() {
  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
      customSummary={summary}
      customSteps={steps}
    />
  );
}
