// dtcpay CS Portal - JavaScript

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    init();
});

function init() {
    // Initialize Feather Icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    // Set up event listeners
    setupEventListeners();
}

function setupEventListeners() {
    // Menu toggle for mobile
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleSidebar);
    }
}

// View Management
function showView(viewName) {
    // Hide all views
    const views = document.querySelectorAll('.view');
    views.forEach(view => view.classList.remove('active'));

    // Show selected view
    const selectedView = document.getElementById(viewName + 'View');
    if (selectedView) {
        selectedView.classList.add('active');
    }

    // Update navigation active state
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    // Refresh icons
    if (typeof feather !== 'undefined') {
        setTimeout(() => feather.replace(), 100);
    }
}

function showClientDetail(clientId) {
    console.log('Showing client details for:', clientId);

    // Hide clients view
    const clientsView = document.getElementById('clientsView');
    if (clientsView) {
        clientsView.classList.remove('active');
    }

    // Show client detail view
    const clientDetailView = document.getElementById('clientDetailView');
    if (clientDetailView) {
        clientDetailView.classList.add('active');
    }

    // Refresh icons
    if (typeof feather !== 'undefined') {
        setTimeout(() => feather.replace(), 100);
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Tab Management for Client Detail
function switchDetailTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));

    // Show selected tab content
    const selectedContent = document.getElementById(tabName + 'Tab');
    if (selectedContent) {
        selectedContent.classList.add('active');
    }

    // Update tab button active state
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    const selectedTab = document.querySelector(`[data-tab="${tabName}"]`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Refresh icons
    if (typeof feather !== 'undefined') {
        setTimeout(() => feather.replace(), 100);
    }
}

// Alias for easier use
function switchTab(tabName) {
    switchDetailTab(tabName);
}

// Drawer Management
function openTransactionDrawer() {
    const drawer = document.getElementById('transactionDrawer');
    if (drawer) {
        drawer.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Refresh icons
        if (typeof feather !== 'undefined') {
            setTimeout(() => feather.replace(), 100);
        }
    }
}

function closeDrawer(drawerId) {
    const drawer = document.getElementById(drawerId);
    if (drawer) {
        drawer.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Sidebar Toggle (Mobile)
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
}

// Toast Notifications
function showToast(message, type = 'info') {
    // Create toast element if it doesn't exist
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }

    // Set message and type
    toast.textContent = message;
    toast.className = 'toast toast-' + type;
    toast.style.display = 'block';

    // Auto-hide after 3 seconds
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

// Copy to clipboard
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('Copied to clipboard', 'success');
        }).catch(err => {
            console.error('Failed to copy:', err);
            showToast('Failed to copy', 'error');
        });
    }
}

// Card Management Functions
function openCardDetails(cardId) {
    console.log('Opening card details for:', cardId);
    showToast('Card details view - Feature coming soon', 'info');
}

function freezeCard(cardId) {
    console.log('Freezing card:', cardId);
    // In a real application, this would call an API
    if (confirm('Are you sure you want to freeze this card? The cardholder will not be able to make transactions.')) {
        showToast('Card frozen successfully', 'success');
        // Update UI to show frozen state
    }
}

function unfreezeCard(cardId) {
    console.log('Unfreezing card:', cardId);
    if (confirm('Are you sure you want to unfreeze this card?')) {
        showToast('Card unfrozen successfully', 'success');
    }
}

function replaceCard(cardId, reason) {
    console.log('Replacing card:', cardId, 'Reason:', reason);
    showToast('Card replacement initiated', 'success');
}

// Export functions for global use
window.showView = showView;
window.showClientDetail = showClientDetail;
window.switchDetailTab = switchDetailTab;
window.switchTab = switchTab;
window.openTransactionDrawer = openTransactionDrawer;
window.closeDrawer = closeDrawer;
window.showToast = showToast;
window.copyToClipboard = copyToClipboard;
window.openCardDetails = openCardDetails;
window.freezeCard = freezeCard;
window.unfreezeCard = unfreezeCard;
window.replaceCard = replaceCard;

// Handle ESC key for closing drawers
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const activeDrawer = document.querySelector('.drawer.active');
        if (activeDrawer) {
            activeDrawer.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// Search functionality
const searchInput = document.querySelector('.search-input');
if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value;
        if (query.length >= 3) {
            console.log('Searching for:', query);
            // Implement search logic here
        }
    });
}

// Refresh icons on any dynamic content change
const observer = new MutationObserver(function(mutations) {
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});

// Observe the entire document for changes
observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Custom Date Range Filter
document.addEventListener('DOMContentLoaded', function() {
    const dateRangeSelect = document.getElementById('dateRangeSelect');
    const customDateRange = document.getElementById('customDateRange');

    if (dateRangeSelect && customDateRange) {
        dateRangeSelect.addEventListener('change', function() {
            if (this.value === 'custom') {
                customDateRange.style.display = 'flex';
            } else {
                customDateRange.style.display = 'none';
            }
        });
    }
});

function applyCustomDateFilter() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    if (!startDate || !endDate) {
        showToast('Please select both start and end dates', 'error');
        return;
    }

    if (new Date(startDate) > new Date(endDate)) {
        showToast('Start date must be before end date', 'error');
        return;
    }

    console.log('Filtering transactions from', startDate, 'to', endDate);
    showToast('Date filter applied successfully', 'success');
    // In a real application, this would filter the transaction data
}

// Export the function
window.applyCustomDateFilter = applyCustomDateFilter;

// Balance History Date Filter with 31-day max
function applyBalanceDateFilter() {
    const startDate = document.getElementById('balanceStartDate').value;
    const endDate = document.getElementById('balanceEndDate').value;

    if (!startDate || !endDate) {
        showToast('Please select both start and end dates', 'error');
        return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start > end) {
        showToast('Start date must be before end date', 'error');
        return;
    }

    // Calculate difference in days
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 31) {
        showToast('Date range cannot exceed 31 days', 'error');
        return;
    }

    console.log('Filtering balance history from', startDate, 'to', endDate);
    showToast('Balance history filter applied successfully', 'success');
    // In a real application, this would filter the balance history data
}

window.applyBalanceDateFilter = applyBalanceDateFilter;

// Card Transaction Date Filter with 31-day max
function applyCardTransactionDateFilter() {
    const startDate = document.getElementById('cardTxnStartDate').value;
    const endDate = document.getElementById('cardTxnEndDate').value;

    if (!startDate || !endDate) {
        showToast('Please select both start and end dates', 'error');
        return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start > end) {
        showToast('Start date must be before end date', 'error');
        return;
    }

    // Calculate difference in days
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 31) {
        showToast('Date range cannot exceed 31 days', 'error');
        return;
    }

    console.log('Filtering card transactions from', startDate, 'to', endDate);
    showToast('Card transaction filter applied successfully', 'success');
    // In a real application, this would filter the card transaction data
}

window.applyCardTransactionDateFilter = applyCardTransactionDateFilter;

// AI Issue Analysis Functions
function analyzeIssueWithAI() {
    const input = document.getElementById('aiIssueInput');
    const issueDescription = input.value.trim();

    if (!issueDescription) {
        showToast('Please describe the client issue or bug', 'error');
        return;
    }

    // Hide empty state and show loading
    document.getElementById('aiEmptyState').style.display = 'none';
    document.getElementById('aiResultsSection').style.display = 'none';
    document.getElementById('aiLoadingState').style.display = 'block';

    // Simulate API call to backend
    // In production, this would call your backend AI service
    setTimeout(() => {
        displayAIAnalysisResults(issueDescription);
    }, 2500);
}

function displayAIAnalysisResults(issueDescription) {
    // Hide loading state
    document.getElementById('aiLoadingState').style.display = 'none';

    // Mock AI analysis result (in production, this comes from backend)
    const mockAnalysis = {
        rootCause: `
            <div style="margin-bottom: 16px;">
                <strong>Issue Identified:</strong> Withdrawal transaction stuck in pending status due to banking partner API timeout.
            </div>
            <div style="margin-bottom: 16px;">
                <strong>Root Cause:</strong> The withdrawal request was successfully queued (Transaction ID: TXN123456789) but the banking partner's API response timed out after 30 seconds. The transaction state was not updated from "PENDING" to "PROCESSING" as expected.
            </div>
            <div style="margin-bottom: 16px;">
                <strong>System Logs Analysis:</strong>
                <ul style="margin: 8px 0; padding-left: 20px;">
                    <li>2024-01-18 10:23:45 - Withdrawal initiated (Amount: $5,000 USD)</li>
                    <li>2024-01-18 10:23:47 - Request sent to banking partner API</li>
                    <li>2024-01-18 10:24:17 - API timeout (30s limit exceeded)</li>
                    <li>2024-01-18 10:24:18 - Transaction marked as "STUCK_PENDING"</li>
                </ul>
            </div>
            <div>
                <strong>Impact:</strong> Client funds are safe and reserved. No double-processing risk detected.
            </div>
        `,
        actions: [
            {
                priority: 'high',
                action: 'Manually trigger retry for Transaction ID: TXN123456789',
                icon: 'refresh-cw'
            },
            {
                priority: 'medium',
                action: 'Contact banking partner support to check their API status',
                icon: 'phone'
            },
            {
                priority: 'medium',
                action: 'Inform client via email about the delay and expected resolution time',
                icon: 'mail'
            },
            {
                priority: 'low',
                action: 'Create incident ticket for engineering team to review timeout threshold',
                icon: 'alert-triangle'
            }
        ],
        relatedInfo: [
            { label: 'Transaction ID', value: 'TXN123456789' },
            { label: 'Banking Partner', value: 'ABC Bank HK' },
            { label: 'Error Code', value: 'TIMEOUT_30s' },
            { label: 'Retry Count', value: '0/3' },
            { label: 'Client Impact', value: 'High' }
        ]
    };

    // Display root cause
    document.getElementById('aiAnalysisResult').innerHTML = mockAnalysis.rootCause;

    // Display recommended actions
    const actionsHTML = mockAnalysis.actions.map(action => {
        const priorityColors = {
            high: { bg: '#FEE2E2', border: '#EF4444', text: '#991B1B' },
            medium: { bg: '#FEF3C7', border: '#F59E0B', text: '#92400E' },
            low: { bg: '#DBEAFE', border: '#3B82F6', text: '#1E3A8A' }
        };
        const colors = priorityColors[action.priority];

        return `
            <div style="display: flex; align-items: start; gap: 12px; padding: 12px; background: ${colors.bg}; border-left: 3px solid ${colors.border}; border-radius: 6px;">
                <div style="width: 32px; height: 32px; background: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <i data-feather="${action.icon}" style="width: 18px; height: 18px; color: ${colors.border};"></i>
                </div>
                <div style="flex: 1;">
                    <div style="font-size: 13px; font-weight: 600; color: ${colors.text}; margin-bottom: 4px; text-transform: uppercase;">${action.priority} Priority</div>
                    <div style="font-size: 14px; color: #111827;">${action.action}</div>
                </div>
            </div>
        `;
    }).join('');
    document.getElementById('aiRecommendedActions').innerHTML = actionsHTML;

    // Display related information
    const relatedInfoHTML = mockAnalysis.relatedInfo.map(info => `
        <span style="padding: 6px 12px; background: white; border: 1px solid #E5E7EB; border-radius: 6px; font-size: 12px;">
            <strong style="color: #6B7280;">${info.label}:</strong>
            <span style="color: #111827;">${info.value}</span>
        </span>
    `).join('');
    document.getElementById('aiRelatedInfo').innerHTML = relatedInfoHTML;

    // Show results section
    document.getElementById('aiResultsSection').style.display = 'block';

    // Refresh feather icons
    if (typeof feather !== 'undefined') {
        setTimeout(() => feather.replace(), 100);
    }
}

function resetAIAnalysis() {
    // Clear input
    document.getElementById('aiIssueInput').value = '';

    // Hide results and show empty state
    document.getElementById('aiResultsSection').style.display = 'none';
    document.getElementById('aiEmptyState').style.display = 'block';

    showToast('Ready for new analysis', 'info');
}

function copyAIAnalysis() {
    const analysisText = document.getElementById('aiAnalysisResult').innerText;
    const actionsText = document.getElementById('aiRecommendedActions').innerText;
    const fullText = `AI ROOT CAUSE ANALYSIS\n\n${analysisText}\n\nRECOMMENDED ACTIONS\n\n${actionsText}`;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(fullText).then(() => {
            showToast('Analysis copied to clipboard', 'success');
        }).catch(err => {
            console.error('Failed to copy:', err);
            showToast('Failed to copy', 'error');
        });
    }
}

function exportAIAnalysis() {
    const analysisText = document.getElementById('aiAnalysisResult').innerText;
    const actionsText = document.getElementById('aiRecommendedActions').innerText;
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);

    const reportContent = `
dtcpay CS Portal - AI Issue Analysis Report
Generated: ${new Date().toLocaleString()}
Client ID: 260115130049329
Client Name: Chris Chu

========================================
ROOT CAUSE ANALYSIS
========================================

${analysisText}

========================================
RECOMMENDED ACTIONS
========================================

${actionsText}

========================================
End of Report
========================================
    `.trim();

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AI-Analysis-Report-${timestamp}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast('Report exported successfully', 'success');
}

// Open AI Analysis Panel (Sidebar)
function openAIPanel() {
    const panel = document.getElementById('aiAnalysisPanel');
    const mainWrapper = document.querySelector('.main-wrapper');

    if (panel) {
        // Slide in the panel
        panel.style.transform = 'translateX(0)';

        // Push main content to the left
        if (mainWrapper) {
            mainWrapper.style.transition = 'margin-right 0.3s ease';
            mainWrapper.style.marginRight = '480px';
        }

        // Refresh icons
        if (typeof feather !== 'undefined') {
            setTimeout(() => feather.replace(), 100);
        }
    }
}

// Close AI Analysis Panel
function closeAIPanel() {
    const panel = document.getElementById('aiAnalysisPanel');
    const mainWrapper = document.querySelector('.main-wrapper');

    if (panel) {
        // Slide out the panel
        panel.style.transform = 'translateX(100%)';

        // Reset main content position
        if (mainWrapper) {
            mainWrapper.style.marginRight = '0';
        }
    }
}

// Export AI functions
window.openAIPanel = openAIPanel;
window.closeAIPanel = closeAIPanel;
window.analyzeIssueWithAI = analyzeIssueWithAI;
window.resetAIAnalysis = resetAIAnalysis;
window.copyAIAnalysis = copyAIAnalysis;
window.exportAIAnalysis = exportAIAnalysis;

// Client View Toggle (List/Grid)
function switchClientView(viewType) {
    const listView = document.getElementById('clientListView');
    const gridView = document.getElementById('clientGridView');
    const listBtn = document.getElementById('listViewBtn');
    const gridBtn = document.getElementById('gridViewBtn');

    if (viewType === 'list') {
        listView.style.display = 'table';
        gridView.style.display = 'none';
        listBtn.classList.add('active');
        gridBtn.classList.remove('active');
    } else {
        listView.style.display = 'none';
        gridView.style.display = 'block';
        listBtn.classList.remove('active');
        gridBtn.classList.add('active');
    }

    // Refresh icons
    if (typeof feather !== 'undefined') {
        setTimeout(() => feather.replace(), 100);
    }
}

// Export the function
window.switchClientView = switchClientView;
