import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

const moduleItem = curriculumData.find((module) => module.slug === "introduction")!;
const lessonIndex = 1;
const summary = "Learn the nutrition concepts that power feed planning and ingredient selection.";
const steps = [
  "Review key nutrients such as protein, energy, and fiber.",
  "Understand why these metrics matter for carabao health.",
  "Connect nutrient science to the platform’s ingredient tools.",
];

export default function IntroductionLesson2Page() {
  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
      customSummary={summary}
      customSteps={steps}
    />
  );
}
