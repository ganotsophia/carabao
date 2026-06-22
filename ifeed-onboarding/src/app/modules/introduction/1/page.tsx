import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

const moduleItem = curriculumData.find((module) => module.slug === "introduction")!;
const lessonIndex = 0;
const summary = "Get introduced to the iFeed V2 platform and understand the key navigation elements.";
const steps = [
  "Explore the app layout and learn where modules, lessons, and resources are located.",
  "Identify how to move between the curriculum and module views.",
  "See how your lesson progress is tracked.",
];

export default function IntroductionLesson1Page() {
  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
      customSummary={summary}
      customSteps={steps}
    />
  );
}
