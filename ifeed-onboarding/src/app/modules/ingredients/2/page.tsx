import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

const moduleItem = curriculumData.find((module) => module.slug === "ingredients")!;
const lessonIndex = 1;
const summary = "Explore the ingredient library and find the items you need for your feed plans.";
const steps = [
  "Search and filter the ingredient list efficiently.",
  "Inspect nutrient values for individual ingredients.",
  "Bookmark or save frequently used items.",
];

export default function IngredientsLesson2Page() {
  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
      customSummary={summary}
      customSteps={steps}
    />
  );
}
