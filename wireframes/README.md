# TOP 2.0 CS Portal - UI/UX Wireframes

This directory contains high-fidelity HTML wireframes for the TOP 2.0 CS Portal application.

## 📁 Files

- **[index.html](index.html)** - Main wireframe index with design system documentation
- **[01-find-client.html](01-find-client.html)** - Initial search method selection page
- **[02-mobile-search.html](02-mobile-search.html)** - Mobile number search with auto-formatting
- **[03-choose-auth.html](03-choose-auth.html)** - Authentication method selection
- **[04-client-detail.html](04-client-detail.html)** - Complete client dashboard view
- **[05-client-list.html](05-client-list.html)** - Multiple client search results table

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#2563EB` - Main actions, links, highlights
- **Primary Purple**: `#7C3AED` - Gradient accent, secondary actions
- **Success Green**: `#10B981` - Success states, confirmations
- **Warning Amber**: `#F59E0B` - Warnings, time-sensitive info
- **Error Red**: `#EF4444` - Errors, destructive actions
- **Sidebar BG**: `#1E293B` - Navigation sidebar background

### Typography
- **Font Family**: Inter (300, 400, 500, 600, 700 weights)
- **Sizes**: 11px - 30px (8 levels)

### Spacing System
- **Base Unit**: 4px
- **Scale**: space-1 (4px) through space-16 (64px)

### Border Radius
- **sm**: 4px - Small elements
- **md**: 8px - Buttons, inputs
- **lg**: 12px - Cards, sections
- **xl**: 16px - Large containers

### Breakpoints
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 🔄 User Flow

```
1. Find Client (Entry Point)
   └─> Select search method (Mobile, Client ID, Email, Salesforce)
       └─> Mobile Number Search
           └─> Enter phone number with country code
               └─> Client Found
                   └─> Choose Authentication Method
                       ├─> App Authorization (Recommended)
                       ├─> SMS/Email OTP
                       └─> Personal Information Verification
                           └─> Authentication Success
                               └─> Client Detail View
                                   ├─> Overview Tab (Active)
                                   ├─> Transactions Tab
                                   ├─> Wallets Tab
                                   ├─> Cards Tab
                                   └─> Activity Log Tab
```

### Alternative Flow (Multiple Matches)
```
Mobile Number Search
└─> Multiple Clients Found
    └─> Client List View (Table)
        └─> Select Correct Client
            └─> Choose Authentication Method
                └─> (continues as above)
```

## 🔐 Security Features

### Authentication-First Design
- All sensitive client data remains masked until authentication is complete
- 3 authentication methods with varying security levels
- Session management with 15-minute time limit
- Extension option (1 time only)
- Automatic session termination on inactivity

### Data Masking
- Email: `j***@gmail.com` (first char + domain visible)
- Phone: `+65 9*** ****` (country code + first digit)
- ID Numbers: `S****123A` (partial masking)

### Audit Trail
- All searches logged with timestamp
- Authentication attempts tracked
- Agent actions recorded
- Session lifecycle documented

## 🎯 Key Features

### 1. Smart Phone Input
- Auto-formatting as user types (9123 4567)
- Country code dropdown with flags
- E.164 normalization
- Multiple format support

### 2. Session Timer
- Visible countdown in header
- Warning at 5 minutes remaining
- Extend session option
- Manual end session button

### 3. Client Dashboard
- Tabbed navigation for different data sections
- Quick stats at glance
- Recent activity feed
- Account balance summary
- KYC status badges

### 4. Responsive Design
- Works on desktop (1280px+)
- Tablet support (768px - 1024px)
- Mobile-friendly layouts

## 🛠️ Technical Implementation

### Frontend Stack
- **Framework**: React 18 + TypeScript
- **Styling**: CSS-in-JS (Styled Components or Emotion)
- **State Management**: Redux Toolkit or Zustand
- **Forms**: React Hook Form + Zod validation
- **API Client**: Axios or TanStack Query

### Backend Integration
- RESTful API endpoints
- JWT authentication
- Real-time updates via WebSocket
- Rate limiting (30 req/min per agent)

### Performance
- Target load time: <2 seconds
- P50 search response: <100ms
- P95 search response: <200ms
- P99 search response: <500ms

## 📋 Wireframe Features

### Interactive Elements
- ✅ Clickable navigation between pages
- ✅ Hover states on buttons and links
- ✅ Form validation states
- ✅ Auto-formatting phone input
- ✅ Loading/success states
- ✅ Responsive layouts

### Visual Design
- ✅ Complete color system
- ✅ Typography hierarchy
- ✅ Spacing consistency
- ✅ Icon system
- ✅ Status badges
- ✅ Gradient accents

## 🚀 How to Use

1. Open `index.html` in a web browser
2. Browse the wireframe gallery
3. Click "View Wireframe" on any card to see detailed page
4. Navigate through the flow using interactive buttons
5. Each page is fully self-contained with CSS

## 📝 Notes

- All wireframes are fully functional HTML/CSS with minimal JavaScript
- No external dependencies required (except Google Fonts)
- Designed for Chrome/Firefox/Safari/Edge
- Responsive breakpoints defined but optimized for desktop
- All interactions are simulated (no real backend)

## 📚 Related Documentation

- **PRD**: `../prd/PRD-TOP-2.0-CS-Portal-Complete.md`
- **API Specs**: `../API-Find-Client-By-Mobile.md`
- **Auth Flow**: `../prd/PRD-CS-Portal-Authentication-Flow.md`
- **Interactive Prototype**: `../find-client-by-mobile.html`

## 📅 Version History

- **v2.0** (2026-02-03) - Complete wireframe set with design system
  - 5 main pages covering full user flow
  - Index page with design system documentation
  - Interactive elements and hover states
  - Responsive layout foundations

---

**Created**: February 3, 2026
**Design System**: TOP 2.0
**Status**: Ready for Development
