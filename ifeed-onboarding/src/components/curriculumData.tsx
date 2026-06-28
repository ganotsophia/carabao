export interface TestCase {
  testCase: string;
  expectedResult: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
  summary: string;
  steps: string[];
  stepTitles?: string[];
  testCases?: TestCase[];
}

export interface ModuleItem {
  id: number;
  slug: string;
  title: string;
  lessonsCount: number;
  duration: string;
  objective: string;
  completed: boolean;
  active: boolean;
  lessons: Lesson[];
}

export const curriculumData: ModuleItem[] = [
  {
    id: 1,
    slug: "introduction",
    title: "Introduction",
    lessonsCount: 3,
    duration: "20 min",
    objective: "Understand what iFeed V2 is, why it exists, and gain access to the platform using Google authentication.",
    completed: true,
    active: false,
    lessons: [
      {
        id: "1.1",
        title: "What is iFeed V2?",
        duration: "5 min",
        isCompleted: true,
        summary: "Learn what iFeed V2 is, how it helps formulate cost-effective carabao feeds using the Simplex Algorithm, and the different types of users who can benefit from the system (farmers and nutritionists).",
        steps: []
      },
      {
        id: "1.2",
        title: "Creating and Managing Your Account",
        duration: "5 min",
        isCompleted: true,
        summary: "Learn how to create an account, sign in using Google authentication, and securely sign out.",
        steps: [
          "Allow new users to create an account through Google, ensuring a secure, passwordless account.",
          "Enable existing users to log in through Google Sign-In for a secure and quick login experience.",
          "Allow users to securely log out, terminating active sessions to protect their information."
        ],
        stepTitles: ["Sign Up", "Sign In", "Sign Out"],
        testCases: [
          { testCase: "Sign up using a valid Google account", expectedResult: "User account is created and redirected to dashboard" },
          { testCase: "Sign in using an existing Google account", expectedResult: "User successfully logs in" },
          { testCase: "Sign out from dashboard", expectedResult: "User session ends and is redirected to login page" },
          { testCase: "Attempt to access dashboard after signing out", expectedResult: "User is prompted to log in again" }
        ]
      },
      {
        id: "1.3",
        title: "Reading the Dashboard",
        duration: "10 min",
        isCompleted: true,
        summary: "Understand the main sections of the dashboard including Start Formulating, My Formulations, and the Ingredients Library.",
        steps: [
          "Displays the list of active formulations either created by the user or shared with the user.",
          "Shows the ingredients provided by the application."
        ],
        stepTitles: ["Navigate through Start Formulating & My Formulations", "Navigate through Ingredients Library"],
        testCases: [
          { testCase: "Open Start Formulating", expectedResult: "Formulation options are displayed" },
          { testCase: "Open My Formulations", expectedResult: "User's formulations are displayed" },
          { testCase: "Open Ingredients Library", expectedResult: "Ingredient list is displayed" },
          { testCase: "Open a formulation from My Formulations", expectedResult: "Formulation details load successfully" }
        ]
      }
    ]
  },
  {
    id: 2,
    slug: "ingredients",
    title: "Managing ingredients",
    lessonsCount: 4,
    duration: "45 min",
    objective: "Master Excel imports and ingredient library management.",
    completed: false,
    active: true,
    lessons: [
      {
        id: "2.1",
        title: "Introduction to Feed Ingredients",
        duration: "10 min",
        isCompleted: true,
        summary: "Learn the main categories of feed ingredients and how to interpret nutritional labels.",
        steps: [
          "Study ingredient categories such as energy, protein, and minerals.",
          "Identify common nutrient values and their meanings.",
          "Connect ingredient quality to feed performance."
        ]
      },
      {
        id: "2.2",
        title: "Navigating the Ingredient Library",
        duration: "15 min",
        isCompleted: true,
        summary: "Explore the ingredient library and find the items you need for your feed plans.",
        steps: [
          "Search and filter the ingredient list efficiently.",
          "Inspect nutrient values for individual ingredients.",
          "Bookmark or save frequently used items."
        ]
      },
      {
        id: "2.3",
        title: "Importing Ingredients from Excel",
        duration: "12 min",
        isCompleted: true,
        summary: "Bring your ingredient data into the platform from an Excel spreadsheet.",
        steps: [
          "Format your Excel file with the required columns.",
          "Upload the spreadsheet using the import tool.",
          "Review and confirm the imported ingredient records."
        ]
      },
      {
        id: "2.4",
        title: "Troubleshooting Formatting Errors",
        duration: "8 min",
        isCompleted: true,
        summary: "Resolve common import issues and make sure your data is ready for use.",
        steps: [
          "Identify missing or incorrectly named columns.",
          "Fix units and data formats in the Excel file.",
          "Re-upload the corrected file and validate the results."
        ]
      }
    ]
  },
  {
    id: 3,
    slug: "nutrients",
    title: "Understanding nutrients",
    lessonsCount: 5,
    duration: "60 min",
    objective: "Explore primary nutritional metrics and feed constraints.",
    completed: false,
    active: false,
    lessons: [
      {
        id: "3.1",
        title: "Crude Protein & Energy Requirements",
        duration: "15 min",
        isCompleted: true,
        summary: "Understand protein and energy needs for proper ration formulation.",
        steps: [
          "Review how crude protein supports growth and production.",
          "Compare different energy sources used in feed.",
          "See how protein and energy targets influence ingredient choice."
        ]
      },
      {
        id: "3.2",
        title: "Dry Matter Intake (DMI) Calculations",
        duration: "10 min",
        isCompleted: true,
        summary: "Calculate the amount of feed a carabao needs each day in dry matter form.",
        steps: [
          "Define dry matter intake and why it matters.",
          "Use body weight and productivity to estimate DMI.",
          "Apply DMI to evaluate feed formulas."
        ]
      },
      {
        id: "3.3",
        title: "Fiber and Minerals in Carabao Diets",
        duration: "15 min",
        isCompleted: true,
        summary: "Learn why fiber and minerals are essential for rumen health and overall balance.",
        steps: [
          "Understand the role of fiber in digestion.",
          "Identify key minerals such as calcium and phosphorus.",
          "Balance fiber and minerals in feed formulas."
        ]
      },
      {
        id: "3.4",
        title: "Understanding Feed Constraints",
        duration: "20 min",
        isCompleted: true,
        summary: "Explore formula constraints and how they shape practical ration design.",
        steps: [
          "Identify nutrient and ingredient constraints.",
          "Prioritize the most important limits in each formula.",
          "Adjust recipes while keeping safety and performance goals."
        ]
      }
    ]
  },
  {
    id: 4,
    slug: "formulation",
    title: "Feed Formulation",
    lessonsCount: 4,
    duration: "50 min",
    objective: "Learn to build balanced feed formulas and optimize rations.",
    completed: false,
    active: false,
    lessons: [
      {
        id: "4.1",
        title: "Formulation Principles",
        duration: "15 min",
        isCompleted: false,
        summary: "Learn the basic principles of feed formulation and planning.",
        steps: [
          "Review the goals of balanced feed formulation.",
          "Match ingredient nutrients to target requirements.",
          "Draft a simple formula before refining it."
        ]
      },
      {
        id: "4.2",
        title: "Balancing Protein and Energy",
        duration: "15 min",
        isCompleted: false,
        summary: "See how to balance protein and energy without compromising the formula.",
        steps: [
          "Compare ingredient protein and energy contributions.",
          "Adjust ratios to meet both targets.",
          "Check the formula for nutrient balance."
        ]
      },
      {
        id: "4.3",
        title: "Applying Feed Constraints",
        duration: "10 min",
        isCompleted: false,
        summary: "Apply practical constraints such as cost, ingredient availability, and safety limits.",
        steps: [
          "Define the most important constraints for the recipe.",
          "Use constraints to narrow ingredient choices.",
          "Select the most viable balanced formula."
        ]
      },
      {
        id: "4.4",
        title: "Review and Adjustments",
        duration: "10 min",
        isCompleted: false,
        summary: "Review the formula and make adjustments for the best outcome.",
        steps: [
          "Verify the formula against targets and constraints.",
          "Evaluate cost and ingredient availability.",
          "Adjust the recipe for better balance."
        ]
      }
    ]
  },
  {
    id: 5,
    slug: "advanced",
    title: "Advanced Features",
    lessonsCount: 3,
    duration: "40 min",
    objective: "Explore advanced reporting, safety checks, and analytics tools.",
    completed: false,
    active: false,
    lessons: [
      {
        id: "5.1",
        title: "Safety and Validation Tools",
        duration: "15 min",
        isCompleted: false,
        summary: "Use validation tools to ensure formulas are safe and compliant.",
        steps: [
          "Check formulas for nutrient and ingredient safety.",
          "Review validation alerts and recommendations.",
          "Fix any issues before finalizing the formula."
        ]
      },
      {
        id: "5.2",
        title: "Analytics and Reporting",
        duration: "15 min",
        isCompleted: false,
        summary: "Learn how to generate reports and use analytics for decision-making.",
        steps: [
          "Open the reporting dashboard and review key metrics.",
          "Use filters to focus on the data you need.",
          "Apply insights to improve future plans."
        ]
      },
      {
        id: "5.3",
        title: "Advanced Workflow Tips",
        duration: "10 min",
        isCompleted: false,
        summary: "Discover expert workflow tips for faster and more accurate planning.",
        steps: [
          "Use templates and shortcuts to save time.",
          "Keep your ingredient library well organized.",
          "Leverage advanced features for repeatable success."
        ]
      }
    ]
  }
];