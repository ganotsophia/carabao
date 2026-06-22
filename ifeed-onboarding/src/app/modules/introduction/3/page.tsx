import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

const moduleItem = curriculumData.find((module) => module.slug === "introduction")!;
const lessonIndex = 2;
const summary = "Set up secure access to iFeed V2 by linking your Google account.";
const steps = [
  "Open the Google sign-in flow from the login page.",
  "Grant the requested permissions to access the app.",
  "Confirm that your account is connected and ready to use.",
];

export default function IntroductionLesson3Page() {
  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
      customSummary={summary}
      customSteps={steps}
    />
  );
}
