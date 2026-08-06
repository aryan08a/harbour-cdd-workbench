import type { SectionId } from "./case-details";

export type RequestStatus = "Draft" | "Awaiting response" | "Partially responded" | "Response received" | "Completed" | "Cancelled";
export type RequestItemState = "Awaiting response" | "Received" | "Satisfied" | "Not satisfied" | "Withdrawn";
export type RiskRating = "Low" | "Moderate" | "High" | "Unable to assess";
export type RiskDimension = "Business activity exposure" | "Ownership and control exposure" | "Geographic exposure" | "Funding exposure" | "Account-use exposure";
export type RequestItem = { id: string; wording: string; requested: string; issueIds: string[]; state: RequestItemState; evidenceIds: string[]; assessment?: string; outcome?: string; withdrawnReason?: string };
export type InformationRequest = { id: string; recipient: string; status: RequestStatus; created: string; sent?: string; responded?: string; items: RequestItem[]; followUpOf?: string };
export type Synthesis = { dimensions: Partial<Record<RiskDimension, RiskRating>>; overall?: Exclude<RiskRating, "Unable to assess">; drivers: string; mitigation: string; reconciliation: string; disposition?: "Approve" | "Escalate"; rationale: string };
export type DecisionSupport = { requests: InformationRequest[]; synthesis: Synthesis; events: string[]; terminal?: { type: "Approved" | "Escalated"; at: string; rationale: string; destination?: string } };

const blankSynthesis = (): Synthesis => ({ dimensions: {}, drivers: "", mitigation: "", reconciliation: "", rationale: "" });
export const decisionSupport: Record<string, DecisionSupport> = {
  "CDD-2026-0418": { requests: [{ id: "IR-0418-01", recipient: "Alex Morgan", status: "Response received", created: "06 Aug 2026", sent: "06 Aug 2026", responded: "08 Aug 2026", items: [{ id: "av-item-1", wording: "Please provide evidence supporting the source of the initial funding for Alton & Vale Consulting Ltd.", requested: "A brief explanation and supporting source-of-funds record.", issueIds: ["av-i1"], state: "Received", evidenceIds: ["av-funds", "av-invoice"], assessment: "Response received; assessment pending." }] }], synthesis: blankSynthesis(), events: ["Information Request IR-0418-01 response recorded"] },
  "CDD-2026-0421": { requests: [], synthesis: blankSynthesis(), events: [] },
  "CDD-2026-0413": { requests: [{ id: "IR-0413-01", recipient: "Tom Bradley", status: "Response received", created: "04 Aug 2026", sent: "04 Aug 2026", responded: "06 Aug 2026", items: [{ id: "mo-item-1", wording: "Please clarify and evidence the source of the stated initial capital.", requested: "Supporting funding evidence.", issueIds: ["mo-i1"], state: "Received", evidenceIds: ["mo-response"], assessment: "Response does not evidence the stated source." }, { id: "mo-item-2", wording: "Please clarify expected international supplier payments.", requested: "Expected counterparties and currencies.", issueIds: ["mo-i2"], state: "Received", evidenceIds: ["mo-response"], assessment: "Response does not clarify counterparties." }] }], synthesis: blankSynthesis(), events: ["Information Request IR-0413-01 response recorded"] },
  "CDD-2026-0416": { requests: [], synthesis: blankSynthesis(), events: [] },
};

export const riskDimensions: RiskDimension[] = ["Business activity exposure", "Ownership and control exposure", "Geographic exposure", "Funding exposure", "Account-use exposure"];
export const requestItemStates: RequestItemState[] = ["Awaiting response", "Received", "Satisfied", "Not satisfied", "Withdrawn"];
export const sectionIds: SectionId[] = ["identity", "activity", "ownership", "representatives", "funds", "account"];
