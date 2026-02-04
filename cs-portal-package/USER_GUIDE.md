# dtcpay CS Portal - User Guide

## Table of Contents
1. [Introduction](#introduction)
2. [Logging In](#logging-in)
3. [Finding Clients](#finding-clients)
4. [Client Authentication](#client-authentication)

---

## Introduction

Welcome to the dtcpay CS Portal (TOP 2.0). This guide will help you navigate the portal's core features: logging in, searching for clients, and authenticating client identities.

---

## Logging In

### Accessing the Portal

1. **Navigate to the Login Page**
   - Open your browser and go to the CS Portal URL
   - You will be automatically redirected to `login.html` if not already logged in

2. **Enter Your Credentials**
   - **Username or Email**: Enter your assigned CS agent username or email address
   - **Password**: Enter your secure password

3. **Optional: Remember Me**
   - Check the "Remember me" box to have your username pre-filled on future visits
   - Note: This only remembers your username, not your password

4. **Sign In**
   - Click the "Sign In" button to access the portal
   - Upon successful login, you'll be redirected to the main dashboard

### Security Features

- All credentials are encrypted during transmission
- Sessions expire after a period of inactivity
- Failed login attempts are logged for security monitoring

### Forgot Password?

If you've forgotten your password:
1. Click the "Forgot password?" link on the login page
2. Contact your system administrator for password reset assistance

### Signing Out

To log out of the portal:
1. Click on your user avatar in the top-right corner
2. Select "Sign Out" from the dropdown menu
3. You'll be redirected to the login page

---

## Finding Clients

Once logged in, you'll see the "Find Client" page with multiple search methods.

### Primary Search Method

#### Mobile Number (Recommended)
The fastest and most accurate way to find a client:

1. Click on the "Mobile Number" card
2. Enter the client's registered mobile number
3. Click "Search" or press Enter
4. Results will appear showing matching clients

**Why it's recommended:**
- Fastest search method
- Most accurate results
- Primary identifier in the system

### Alternative Search Methods

#### 1. Client Name
Search using the client's full or partial name:

1. Click on the "Client Name" card
2. Enter the client's first name, last name, or both
3. The system will show all matching results
4. Select the correct client from the list

**Tips:**
- Use full names for more accurate results
- Partial names will show multiple matches
- Results are sorted by relevance

#### 2. Client ID
Search using the unique client identifier:

1. Click on the "Client ID" card
2. Enter the complete Client ID
3. System will return exact match

**When to use:**
- You have the exact Client ID from previous interactions
- Client provided their ID number
- Most precise search method

#### 3. Email Address
Search using the client's registered email:

1. Click on the "Email Address" card
2. Enter the complete email address
3. Search for exact match

**Note:** Email addresses must match exactly as registered in the system.

#### 4. Salesforce Case
Import client information from an existing Salesforce case:

1. Click on the "Salesforce Case" card
2. Enter the Salesforce Case Number
3. System will retrieve and populate client information

**Use this when:**
- Client has an existing case in Salesforce
- You need to link the interaction to a case
- Faster than searching from scratch

### Search Results

After searching, you'll see:
- **Client List**: Multiple matches displayed in a list or grid
- **Client Details**: Click on any result to view full details
- **Quick Actions**: Options to contact, view history, or authenticate

---

## Client Authentication

Once you've found the correct client, you must authenticate their identity before accessing sensitive information.

### Why Authentication is Required

Client authentication ensures:
- Identity verification before discussing account details
- Compliance with data protection regulations
- Security of client information
- Prevention of unauthorized access

### Authentication Flow

1. **Select Authentication Method**
   After finding a client, you'll be prompted to choose an authentication method:

   #### Method 1: Mobile App Authentication (Recommended)
   **Best for:** Quick and secure verification

   **Steps:**
   1. Select "Mobile App Authentication"
   2. System sends a push notification to client's registered mobile app
   3. Client approves the authentication request in their app
   4. Instant verification (typically 10-30 seconds)

   **Features:**
   - Instant verification
   - No information sharing needed
   - Most secure method
   - Client-friendly experience

   #### Method 2: OTP Verification
   **Best for:** Clients without app access or app issues

   **Steps:**
   1. Select "OTP Verification"
   2. System sends a One-Time Password to client's registered mobile number
   3. Ask the client for the 6-digit code
   4. Enter the code in the verification field
   5. Click "Verify"

   **Features:**
   - Fast verification (1-2 minutes)
   - Works via SMS
   - No app required
   - Code expires after 5 minutes

   #### Method 3: Personal Questions
   **Best for:** Situations where digital methods aren't available

   **Steps:**
   1. Select "Personal Questions"
   2. System displays security questions from client's profile
   3. Ask the client each question
   4. Verify their answers match the system
   5. Mark each answer as correct/incorrect
   6. Minimum 3 correct answers required

   **Question types may include:**
   - Date of birth
   - Last transaction details
   - Account opening date
   - Registered address details
   - Recent activity information

2. **Authentication Success**
   Once authenticated:
   - Client's full profile becomes accessible
   - Sensitive information is revealed
   - All actions are logged with timestamp
   - Session remains authenticated for duration of call/interaction

3. **Authentication Failure**
   If authentication fails:
   - System limits number of attempts
   - Consider trying alternative method
   - Escalate to supervisor if needed
   - Document failed attempts

### Skip Authentication (Use With Caution)

In rare circumstances, you may skip authentication:

**Warning:** Skipping authentication should only be used in specific scenarios:
- Public information inquiries only
- Account opening assistance
- General product questions
- Client not available to authenticate

**To skip authentication:**
1. Click "Skip Authentication" at the bottom of the auth method screen
2. Read the security warning
3. Provide a valid reason for skipping
4. Confirm your decision
5. **Action will be logged and audited**

**Remember:** When authentication is skipped:
- Access to sensitive data is restricted
- All actions are flagged for review
- Manager notification may be sent
- Cannot process account changes

### Best Practices

1. **Always authenticate when possible**
   - Don't skip unless absolutely necessary
   - Use app authentication for fastest results

2. **Client Communication**
   - Explain why authentication is needed
   - Guide clients through the process
   - Be patient with less tech-savvy clients

3. **Security First**
   - Never accept authentication details via email
   - Don't share OTP codes
   - Verify identity before proceeding
   - When in doubt, escalate

4. **Documentation**
   - All authentication attempts are logged
   - Failed attempts trigger security reviews
   - Successful auth is timestamped
   - Maintain accurate records

---

## Quick Reference

### Login Process
```
1. Navigate to portal → 2. Enter credentials → 3. Click Sign In → 4. Access dashboard
```

### Finding a Client
```
1. Choose search method → 2. Enter search criteria → 3. View results → 4. Select client
```

### Client Authentication
```
1. Choose auth method → 2. Send verification → 3. Receive confirmation → 4. Access client data
```

---

## Support

If you encounter issues or have questions:

- **Technical Issues**: Contact IT Support
- **Process Questions**: Refer to your team lead
- **System Bugs**: Report to System Administrator
- **Password Reset**: Contact IT Security

---

## Security Reminders

⚠️ **Important:**
- Never share your login credentials
- Always log out when leaving your workstation
- Report suspicious activity immediately
- Authenticate clients before discussing sensitive information
- Follow data protection regulations at all times

---

**Document Version:** 1.0
**Last Updated:** 2025
**For:** dtcpay CS Portal (TOP 2.0)

---

*This guide is for authorized CS agents only. Confidential and proprietary information.*
