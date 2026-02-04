# Product Requirements Document (PRD)
## dtcpay CS Portal - Individual Client Management

---

### 1. Executive Summary

**Product Name:** dtcpay CS Portal
**Version:** 1.0
**Date:** January 2026
**Owner:** Customer Success Team
**Company:** dtcpay (Fintech - B2C/B2B)

#### Purpose
Build a comprehensive internal portal for Customer Success (CS) team to efficiently manage, monitor, and support individual clients with a user-friendly interface optimized for operational efficiency.

#### Scope
Phase 1 focuses exclusively on **individual client (B2C)** management. B2B features are out of scope for this release.

---

### 2. Goals & Objectives

**Primary Goals:**
- Provide CS team with a single source of truth for all client information
- Reduce time spent searching across multiple systems
- Enable quick decision-making with comprehensive data visibility
- Improve customer support response time and accuracy
- Maintain complete audit trail of all changes

**Success Metrics:**
- Average customer inquiry resolution time reduced by 40%
- CS agent satisfaction score > 8/10
- 100% of client data accessible within 3 clicks
- Zero data access errors or inconsistencies

---

### 3. User Personas

**Primary User: CS Agent**
- Handles 30-50 client inquiries daily
- Needs quick access to client information
- Must verify identity and account status
- Handles card issues, transaction queries, and onboarding support
- Requires ability to take actions (freeze cards, update information)

**Secondary User: CS Team Lead/Manager**
- Monitors team performance
- Reviews audit logs for compliance
- Escalation point for complex cases

---

### 4. Functional Requirements

#### 4.1 Client Search & Overview

**FR-001: Client Search**
- Search by: Name, Email, Phone, Client ID, Card Number
- Auto-suggest results as user types (min 3 characters)
- Display search results with key identifiers (Name, ID, Status, Tier)
- Recent searches quick access (last 10 clients)

**FR-002: Client Dashboard Overview**
Upon selecting a client, display overview page with:
- Client photo/avatar (if available)
- Quick stats cards: Account Tier, Total Balance, Active Cards, Onboarding Status
- Status indicators: Account Status (Active/Suspended/Closed), Verification Level
- Quick action buttons: Contact Client, View Full Profile, Export Data

---

#### 4.2 Client Basic Information

**FR-003: Personal Information Display**
- Full Name (First, Middle, Last)
- Date of Birth (with age calculation)
- Nationality
- Country of Residence
- Contact Information (Email, Phone, Alternative Phone)
- Residential Address (Current and Previous if available)
- Preferred Language
- Tax Residency Information

**FR-004: Personal Information Edit**
- Edit capability with reason logging
- Field-level validation
- Change requires confirmation dialog
- Auto-save draft capability
- Audit log entry created on save

---

#### 4.3 Account Information

**FR-005: Account Details Display**
- Account ID
- Account Tier (Basic/Silver/Gold/Platinum)
- Tier Benefits Summary
- Pricing Plan Details (Fees, Limits)
- Affiliation Tags (Referral Source, Partner Code, Campaign)
- Account Opening Date
- Account Status History
- KYC/AML Status and Scores

**FR-006: Account Management**
- Change Account Tier (with reason dropdown)
- Modify Pricing Plan
- Add/Remove Affiliation Tags
- Suspend/Reactivate Account (requires manager approval)
- View Tier Eligibility Criteria

---

#### 4.4 Onboarding Status Tracking

**FR-007: Onboarding Progress Display**
- Visual progress bar/stepper showing completion
- Onboarding Stages:
  1. Registration Complete
  2. Email Verification
  3. Phone Verification
  4. KYC Document Upload
  5. KYC Document Review
  6. Address Verification
  7. Account Approved
  8. First Deposit
- Current Stage Highlight with timestamp
- Pending Actions/Blockers (Red flag indicators)
- Estimated Time to Completion

**FR-008: Onboarding Assistance**
- CS Notes section for each stage
- Send Reminder Email/SMS button
- Escalate to KYC Team button
- Document Re-upload Request
- View Uploaded Documents (secure preview)
- Rejection Reason History

---

#### 4.5 Transaction History

**FR-009: Transaction List View**
- Filterable by:
  - Transaction Type (Deposit, Withdrawal, Swap, Transfer)
  - Date Range (Preset: Today, 7D, 30D, 90D, Custom)
  - Status (Completed, Pending, Failed, Cancelled)
  - Currency
  - Amount Range
- Sortable by Date, Amount, Status
- Pagination (50 per page default)
- Export to CSV/Excel

**FR-010: Transaction Details (Drawer)**
- Transaction ID
- Type and Category
- Amount and Currency
- Fee Breakdown
- Exchange Rate (for swaps)
- From/To Information (Wallets/Banks)
- Timestamp (Created, Processing, Completed)
- Status with Status History
- Risk Score/Flags
- Related Transactions
- CS Notes section
- Action buttons: Refund, Cancel, Escalate

---

#### 4.6 Wallet Balance Management

**FR-011: Wallet Balance Overview**
- Multi-currency wallet display
- For each currency:
  - Current Balance (Large, prominent)
  - Available Balance vs. Locked Balance
  - Balance in USD Equivalent
  - 24h/7d/30d Change (with percentage and graph)
- Total Portfolio Value (USD)
- Top Holdings (visual chart)

**FR-012: Balance History (Side Panel)**
- Timeline view of balance changes
- Filterable by Currency and Date Range
- Each entry shows:
  - Timestamp
  - Change Amount (+/-)
  - Reason (Transaction ID linked)
  - Running Balance
- Balance graph (line chart)
- Manual Adjustment capability (requires approval + reason)

---

#### 4.7 Card Management

**FR-013: Cards List View**
- Display all cards in card-style layout
- For each card:
  - Card Type (Virtual/Physical)
  - Masked Card Number (last 4 digits visible)
  - Card Status (Active, Frozen, Expired, Under Application, Cancelled)
  - Card Balance
  - Expiry Date
  - Visual status badge

**FR-014: Card Details (Modal/Drawer)**
- Full Card Information:
  - Card Number (masked, reveal option with auth)
  - CVV (masked, reveal option with auth)
  - Cardholder Name
  - Issue Date / Expiry Date
  - Card Limits (Daily/Monthly)
  - Balance and Available Credit
- Application Details (if under application):
  - Application Date
  - Application Status
  - Expected Delivery Date
  - Tracking Number (if shipped)
  - Delivery Address
- Action Buttons:
  - Freeze Card (immediate, requires confirmation)
  - Unfreeze Card
  - Replace Card (Lost/Stolen/Damaged - dropdown)
  - Cancel Card (requires reason)
  - Update Delivery Address
  - Resend Tracking Info

**FR-015: Card Transactions**
- Separate tab within card details
- Transaction list specific to selected card
- Similar filtering as main transaction history
- Merchant Name, Category, Location
- Dispute Transaction button

---

#### 4.8 Whitelisted Wallet Addresses & Remittance

**FR-016: Whitelisted Addresses Display**
- List of all whitelisted crypto wallet addresses
- For each address:
  - Cryptocurrency Type
  - Wallet Address (shortened with copy button)
  - Label/Nickname
  - Date Added
  - Last Used Date
  - Status (Active/Pending/Removed)
  - Verification Status

**FR-017: Remittance Information**
- List of saved bank accounts/remittance partners
- For each entry:
  - Bank Name / Partner Name
  - Account Number (masked)
  - Account Holder Name
  - Currency
  - Country
  - Swift/Routing Codes
  - Status (Verified/Pending)
  - Date Added
- Add New button (opens form drawer)
- Remove option (requires confirmation)

---

#### 4.9 Login Log & Security

**FR-018: Login History Display**
- Reverse chronological list
- For each login attempt:
  - Timestamp
  - Status (Success/Failed)
  - IP Address (with geolocation flag)
  - Device Information (Browser, OS)
  - Location (City, Country)
  - Failure Reason (if failed)
  - 2FA Status
- Filter by Status, Date Range
- Flag Suspicious Activity (auto-highlight)
- Export capability

**FR-019: Security Actions**
- Force Logout All Sessions button
- Block IP Address (temporary/permanent)
- Reset Password (sends email)
- Enable/Disable 2FA
- View Active Sessions
- Security Alert Banner (if suspicious activity detected)

---

#### 4.10 Audit Log

**FR-020: Comprehensive Audit Trail**
- Complete history of all changes made to client account
- Tracked Changes:
  - Client information updates
  - Account tier/pricing changes
  - Password resets
  - Card status changes (freeze/unfreeze/replace)
  - Wallet address additions/removals
  - Manual balance adjustments
  - Permission changes
  - Document updates
  - Any CS agent actions
- For each entry:
  - Timestamp (precise to second)
  - Action Type (color-coded)
  - Changed Field(s)
  - Old Value → New Value
  - CS Agent Name and ID
  - IP Address of agent
  - Reason/Notes (if provided)
  - Related Entity (Card ID, Transaction ID, etc.)

**FR-021: Audit Log Filtering & Search**
- Filter by:
  - Date Range
  - Action Type
  - Agent Name
  - Changed Field
  - Entity Type
- Full-text search capability
- Export to PDF for compliance

---

### 5. Non-Functional Requirements

#### 5.1 Performance
- Page load time < 2 seconds
- Search results display < 1 second
- Real-time data updates (max 5 second delay)
- Support 100+ concurrent CS agents

#### 5.2 Security
- Role-based access control (RBAC)
- All sensitive data masked by default (click to reveal with auth)
- Session timeout after 30 minutes of inactivity
- All actions logged for compliance
- HTTPS only
- Data encryption at rest and in transit
- IP whitelist for office locations

#### 5.3 Usability
- Intuitive navigation, max 3 clicks to any data
- Responsive design (optimized for 1920x1080 and 1366x768)
- Keyboard shortcuts for common actions
- Consistent UI patterns throughout
- Accessible (WCAG 2.1 Level AA)
- Dark/Light mode toggle

#### 5.4 Reliability
- 99.9% uptime SLA
- Graceful error handling with user-friendly messages
- Auto-save for forms to prevent data loss
- Offline indicator when connection lost

---

### 6. UI/UX Design Principles

#### 6.1 Layout Strategy
- **Left Sidebar:** Main navigation menu (collapsible)
- **Top Bar:** Search, Notifications, User Profile, Quick Actions
- **Main Content Area:** Context-specific content
- **Right Drawer/Side Panel:** Supplementary information (balance history, notes)
- **Modals:** Critical actions requiring focus (freeze card, manual adjustments)
- **Drawers:** Detailed information (transaction details, card details)

#### 6.2 Information Hierarchy
- **Priority 1 (Immediately Visible):** Client identity, account status, critical alerts
- **Priority 2 (One Click):** Summary cards, key metrics, recent activity
- **Priority 3 (Two+ Clicks):** Detailed histories, audit logs, advanced filters

#### 6.3 Interaction Patterns
- **Popups/Modals:** Use for actions requiring confirmation or focused input (freeze card, manual balance adjustment, account suspension)
- **Drawers:** Use for viewing detailed information without losing context (transaction details, card details, balance history)
- **Side Panels:** Use for supplementary persistent information (client notes, quick stats, recent activity)
- **Inline Expansion:** Use for additional details within lists (expand transaction to see more fields)
- **Tabs:** Use for organizing related content sections (within client profile)

#### 6.4 Visual Design
- Clean, professional aesthetic
- Fintech color palette: Primary (Blue), Success (Green), Warning (Amber), Danger (Red)
- Card-based layouts for grouping related information
- Status badges with clear color coding
- Icons for quick recognition
- Generous whitespace for readability

---

### 7. Technical Considerations

#### 7.1 Technology Stack (Recommendations)
- **Frontend:** React/Next.js with TypeScript
- **UI Framework:** Material-UI, Ant Design, or Chakra UI
- **State Management:** Redux Toolkit or Zustand
- **API Integration:** REST API (axios/fetch)
- **Charts/Graphs:** Chart.js or Recharts
- **Table Component:** TanStack Table (React Table)
- **Forms:** React Hook Form with Zod validation

#### 7.2 API Integration
- All API endpoints are ready (per requirements)
- Implement proper error handling
- Loading states for all async operations
- Retry logic for failed requests
- Request caching where appropriate

---

### 8. User Flows

#### 8.1 Primary Flow: Handle Customer Inquiry
1. CS agent receives inquiry (phone/email/chat)
2. Agent opens CS Portal
3. Agent searches for client by name/email/ID
4. System displays search results
5. Agent selects correct client
6. Client dashboard loads with overview
7. Agent navigates to relevant section (e.g., Transactions, Cards)
8. Agent views details, identifies issue
9. Agent takes action (e.g., freeze card, view transaction)
10. System confirms action, logs in audit trail
11. Agent provides resolution to customer

#### 8.2 Card Freeze Flow
1. Agent navigates to client's Cards section
2. Agent clicks on specific card
3. Card details drawer opens
4. Agent clicks "Freeze Card" button
5. Confirmation modal appears with reason dropdown
6. Agent selects reason and confirms
7. System processes freeze request
8. Success message displayed
9. Card status updates to "Frozen" in real-time
10. Audit log entry created
11. Optional: Automated email sent to client

#### 8.3 Onboarding Support Flow
1. Agent receives inquiry about delayed onboarding
2. Agent searches and selects client
3. Agent navigates to "Onboarding Status" section
4. Agent views progress stepper, identifies current stage: "KYC Document Review"
5. Agent sees blocker flag: "Address proof rejected - unclear document"
6. Agent clicks "View Documents" to see uploaded files
7. Agent clicks "Request Re-upload" button
8. Agent adds note: "Please provide utility bill from last 3 months"
9. System sends automated email to client with instructions
10. Agent adds internal CS note for tracking
11. Agent marks inquiry as resolved

---

### 9. Phase 1 Scope

**In Scope:**
- All functional requirements listed above (FR-001 to FR-021)
- Individual client (B2C) management only
- Read and limited write operations (with approval workflows)
- Desktop web application

**Out of Scope (Future Phases):**
- B2B client management
- Mobile responsive version
- Advanced analytics/reporting dashboards
- Automated workflows/rules engine
- Client communication module (email/SMS from portal)
- Bulk operations
- Integration with external CRM systems

---

### 10. Acceptance Criteria

- All functional requirements implemented and tested
- CS team completes UAT with > 90% satisfaction
- No critical or high-severity bugs
- Performance benchmarks met
- Security audit passed
- Documentation complete (user guide, admin guide)
- Training materials prepared

---

### 11. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| API performance issues with large datasets | High | Implement pagination, lazy loading, caching |
| CS agents overwhelmed by complexity | High | Phased rollout, comprehensive training, tooltips/help |
| Sensitive data exposure | Critical | Strict access controls, masking, audit logging |
| User adoption resistance | Medium | Involve CS team in design, gather feedback iteratively |
| Browser compatibility issues | Medium | Test on all major browsers, provide recommended browser |

---

### 12. Timeline & Milestones

**Note:** Timeline removed per company policy - focus on deliverables only.

**Milestones:**
1. Design mockups approved
2. Core infrastructure setup
3. Client search & overview complete
4. All information sections complete
5. Action capabilities implemented
6. Audit logging complete
7. UAT completed
8. Production deployment

---

### 13. Success Criteria

**Launch Criteria:**
- All P0 and P1 features complete
- Zero critical bugs
- Security review passed
- CS team training completed
- Rollback plan prepared

**Post-Launch (30 days):**
- 90% of CS team actively using portal
- Average customer inquiry resolution time reduced by 40%
- No major incidents or data breaches
- CS team satisfaction > 8/10
- Gather feedback for Phase 2 enhancements

---

### 14. Appendix

#### A. Glossary
- **CS:** Customer Success/Customer Support
- **KYC:** Know Your Customer
- **AML:** Anti-Money Laundering
- **B2C:** Business to Consumer
- **B2B:** Business to Business
- **2FA:** Two-Factor Authentication

#### B. References
- dtcpay API Documentation
- dtcpay Brand Guidelines
- Internal Security Policies
- Compliance Requirements Documentation

---

**Document Version:** 1.0
**Last Updated:** January 19, 2026
**Next Review:** Upon design approval
