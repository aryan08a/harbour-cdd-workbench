export type CaseState =
  | "Queued"
  | "In review"
  | "Awaiting information"
  | "Approved"
  | "Escalated";

export type DueCondition = "Overdue" | "Due soon" | "On track";
export type OperationalPriority = "Standard" | "Manual priority";

export type DemoCase = {
  id: string;
  company: string;
  businessActivity: string;
  state: CaseState;
  owner: string | null;
  age: string;
  dueCondition: DueCondition;
  dueText: string;
  priority: OperationalPriority;
  priorityReason: string;
  nextAction: string;
  blockingIssues: number;
  sectionsComplete: number;
  customerResponse: boolean;
  risk?: "Low" | "Moderate" | "High";
  scenario:
    | "Standard approval"
    | "Active Information Request"
    | "Post-response reassessment"
    | "Ownership scope exception";
};

export const currentAnalyst = "Alex Hughes";
export const analysts = ["Alex Hughes", "Priya Shah"];

export const demoCases: DemoCase[] = [
  {
    id: "CDD-2026-0418",
    company: "Alton & Vale Consulting Ltd",
    businessActivity: "Management and technology consulting",
    state: "In review",
    owner: "Alex Hughes",
    age: "4 days",
    dueCondition: "Due soon",
    dueText: "Due today",
    priority: "Standard",
    priorityReason: "Customer response received",
    nextAction: "Assess source-of-funds response",
    blockingIssues: 1,
    sectionsComplete: 5,
    customerResponse: true,
    risk: "Moderate",
    scenario: "Standard approval",
  },
  {
    id: "CDD-2026-0421",
    company: "Lanebrook Studio Ltd",
    businessActivity: "Bespoke furniture design and retail",
    state: "Queued",
    owner: null,
    age: "1 day",
    dueCondition: "On track",
    dueText: "Due in 1 day",
    priority: "Standard",
    priorityReason: "New unassigned case",
    nextAction: "Claim and begin evidence review",
    blockingIssues: 2,
    sectionsComplete: 0,
    customerResponse: false,
    scenario: "Active Information Request",
  },
  {
    id: "CDD-2026-0413",
    company: "Meridian Office Supply Ltd",
    businessActivity: "Office equipment wholesaler",
    state: "In review",
    owner: "Alex Hughes",
    age: "6 days",
    dueCondition: "Overdue",
    dueText: "Overdue by 1 day",
    priority: "Manual priority",
    priorityReason: "Second response required",
    nextAction: "Create follow-up information request",
    blockingIssues: 2,
    sectionsComplete: 3,
    customerResponse: true,
    risk: "Moderate",
    scenario: "Post-response reassessment",
  },
  {
    id: "CDD-2026-0416",
    company: "Ridgewell Packaging Ltd",
    businessActivity: "Sustainable packaging supply",
    state: "In review",
    owner: "Priya Shah",
    age: "3 days",
    dueCondition: "Due soon",
    dueText: "Due tomorrow",
    priority: "Manual priority",
    priorityReason: "Scope exception identified",
    nextAction: "Prepare early escalation handoff",
    blockingIssues: 1,
    sectionsComplete: 2,
    customerResponse: false,
    scenario: "Ownership scope exception",
  },
];
