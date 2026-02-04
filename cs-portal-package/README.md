# dtcpay CS Portal (TOP 2.0) - Distribution Package

Welcome to the dtcpay Customer Support Portal!

## 📦 Package Contents

This package contains all the files needed to run the CS Portal locally or deploy it to a web server.

### Core Files

- **login.html** - Main login page (entry point)
- **index.html** - Find Client dashboard (home page after login)
- **styles.css** - Global styles and theme
- **script.js** - Core JavaScript functionality

### Search Pages

- **mobile-search.html** - Search by mobile number (recommended)
- **client-name-search.html** - Search by client name
- **client-id-search.html** - Search by client ID
- **email-search.html** - Search by email address
- **salesforce-search.html** - Import from Salesforce case

### Authentication Pages

- **choose-auth.html** - Select authentication method
- **app-auth.html** - Mobile app authentication
- **otp-auth.html** - OTP verification
- **personal-auth.html** - Personal security questions

### Other Pages

- **client-portal.html** - Client detail view
- **user-guide.html** - Interactive user guide with documentation

### Documentation

- **USER_GUIDE.md** - Complete documentation for login, search, and authentication
- **README.md** - This file

## 🚀 Quick Start

### Option 1: Open Locally

1. Extract all files to a folder
2. Open `login.html` in your web browser
3. Use any credentials to log in (demo mode)

### Option 2: Deploy to Web Server

1. Upload all files to your web server
2. Ensure the server serves `login.html` as the entry point
3. Configure authentication (see Configuration section)

### Option 3: Using Python HTTP Server

```bash
# Navigate to the folder containing these files
cd /path/to/cs-portal-package

# Start a local web server
python3 -m http.server 8000

# Open browser to http://localhost:8000/login.html
```

## 🔐 Authentication

**Demo Mode (Current):**
- Accepts any username/password
- Stores session in browser's sessionStorage
- No backend authentication required

**Production Setup:**
- Update `login.html` (handleLogin function) to call your authentication API
- Configure session management
- Implement proper security measures

## 🎨 Theme & Styling

The portal uses a professional purple gradient theme:
- Primary Color: `#6366F1` (purple)
- Gradient: `#667eea` to `#764ba2`
- Font: Inter (Google Fonts)

To customize:
1. Edit `styles.css` CSS variables under `:root`
2. Update gradient colors in `login.html` inline styles
3. Modify `--primary` color for buttons and interactive elements

## 📱 Features

### Login System
- Secure authentication flow
- Session management
- Remember me functionality
- Auto-redirect for unauthenticated access

### Client Search
- **5 search methods** for finding clients
- Mobile number (fastest, recommended)
- Client name with partial matching
- Client ID for exact matches
- Email address search
- Salesforce case import

### Authentication Methods
- **Mobile App Push** - Instant push notification approval
- **OTP Verification** - SMS-based 6-digit code
- **Personal Questions** - Security question verification

### User Guide
- Comprehensive documentation
- Step-by-step instructions
- Screenshot placeholders
- Best practices and tips
- Accessible from all pages

## 🔧 Configuration

### Update Portal Name/Branding

Edit the logo section in each HTML file:
```html
<img src="YOUR_LOGO_URL" alt="Your Company">
<span>Your Portal Name</span>
```

### Configure Logout

The logout functionality clears session and redirects to login:
```javascript
// In script.js
function logout() {
    sessionStorage.removeItem('authenticated');
    window.location.href = 'login.html';
}
```

### Add Backend Integration

Update `login.html`:
```javascript
// Replace demo authentication with API call
fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password })
})
```

## 📋 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security Notes

**Important for Production:**

1. **Enable HTTPS** - Always use SSL/TLS in production
2. **Implement Backend Auth** - Replace demo login with real authentication
3. **Add CSRF Protection** - Protect against cross-site request forgery
4. **Session Timeout** - Implement automatic session expiration
5. **Input Validation** - Validate all user inputs on backend
6. **Content Security Policy** - Add CSP headers to prevent XSS

## 📖 Documentation

Full documentation available in:
- `USER_GUIDE.md` - Text documentation
- `user-guide.html` - Interactive guide (open in browser)

## 🌐 Dependencies

External dependencies (loaded via CDN):
- **Feather Icons** - UI icons
- **Google Fonts (Inter)** - Typography

All other code is self-contained.

## 📞 Support

For questions or issues:
- Refer to `USER_GUIDE.md` for usage instructions
- Check `user-guide.html` for interactive documentation
- Contact your system administrator for technical support

## 📄 License

Internal use only - dtcpay Customer Support Portal

---

**Version:** 2.0
**Last Updated:** 2026-02-04
**Package Created:** For internal distribution

---

## 🎯 Quick Reference

**Default Entry Point:** `login.html`
**Main Dashboard:** `index.html` (after login)
**Documentation:** `user-guide.html` or `USER_GUIDE.md`
**Styles:** `styles.css`
**Scripts:** `script.js`

Enjoy using the CS Portal! 🚀
