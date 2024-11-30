export interface DayContent {
  title: string;
  description: string;
  code?: string;
}

export const adventContent: Record<number, DayContent> = {
  1: {
    title: "CSS Feature: :has() Pseudo-Class",
    description: "The :has() pseudo-class is a powerful new addition to CSS that allows you to select an element based on its children or descendants.",
    code: `.container:has(.child) {
  border: 2px solid blue;
}`
  },
  // Add more days here...
};
