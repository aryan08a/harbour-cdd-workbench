export type AuditCategory = "Case and ownership" | "Review sections" | "Evidence" | "Issues" | "Information Requests" | "Risk and synthesis" | "Approval or escalation" | "Administrative corrections";
export type AuditEvent = { id: string; at: string; actor: string; category: AuditCategory; action: string; record: string; before?: string; after?: string; rationale?: string; refs?: string[]; terminal?: boolean; correction?: boolean };
const analyst = "Alex Hughes";
const event = (id: string, at: string, category: AuditCategory, action: string, record: string, extras: Partial<AuditEvent> = {}): AuditEvent => ({ id, at, actor: analyst, category, action, record, ...extras });
export const auditHistory: Record<string, AuditEvent[]> = {
  "CDD-2026-0418": [
    event("av-a1", "04 Aug 2026 · 09:20", "Case and ownership", "Case created from the upstream onboarding handoff.", "CDD-2026-0418", { refs: ["Case"] }),
    event("av-a2", "05 Aug 2026 · 10:10", "Information Requests", "Information Request round 1 was sent to the authorised representative.", "IR-0418-01", { refs: ["IR-0418-01", "av-i1"] }),
    event("av-a3", "08 Aug 2026 · 09:15", "Information Requests", "Response receipt was recorded for Information Request round 1.", "IR-0418-01", { refs: ["av-funds", "av-invoice"] }),
  ],
  "CDD-2026-0421": [event("lb-a1", "07 Aug 2026 · 14:30", "Case and ownership", "Case created from the upstream onboarding handoff.", "CDD-2026-0421"), event("lb-a2", "08 Aug 2026 · 09:10", "Issues", "Missing source-of-funds evidence was recorded as a Blocking issue.", "lb-i2", { refs: ["Source of funds"] })],
  "CDD-2026-0413": [event("mo-a1", "04 Aug 2026 · 11:05", "Information Requests", "Information Request round 1 was sent to the authorised representative.", "IR-0413-01"), event("mo-a2", "06 Aug 2026 · 13:45", "Information Requests", "The funding request item was assessed as Not satisfied.", "mo-item-1", { before: "Received", after: "Not satisfied", rationale: "Response did not evidence the stated initial capital source.", refs: ["mo-response", "mo-i1"] }), event("mo-a3", "06 Aug 2026 · 14:10", "Issues", "Funding issue remained unresolved after response assessment.", "mo-i1")],
  "CDD-2026-0416": [event("rp-a1", "07 Aug 2026 · 10:15", "Evidence", "Shareholder register evidence was recorded from direct submission.", "rp-own", { refs: ["Ownership and control"] }), event("rp-a2", "07 Aug 2026 · 11:00", "Issues", "Ownership structure was identified as outside the supported review scope.", "rp-i1", { rationale: "Evidence identifies a legal-entity shareholder.", refs: ["rp-own", "Ownership and control"] })],
};
