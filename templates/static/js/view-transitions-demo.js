class ViewTransitionsDemo {
  constructor() {
    this.isTransitioning = false;
    this.currentView = 'list';
    this.init();
  }

  init() {
    // Add demo elements to the page if they don't exist
    this.addDemoElements();

    // Bind event listeners
    this.bindEvents();

    // Show browser support info
    this.showBrowserSupport();
  }

  addDemoElements() {
    // Check if demo elements already exist
    if (document.querySelector('.view-transitions-demo')) {
      return;
    }

    const demoContainer = document.createElement('div');
    demoContainer.className = 'view-transitions-demo';
    demoContainer.innerHTML = `
      <h3>View Transitions API Demo</h3>
      <p>Watch how elements maintain visual continuity while changing content and layout:</p>
      
      <div class="p-segmented-control">
        <div class="p-segmented-control__list">
          <button class="p-segmented-control__button" data-view="list" aria-selected="true">
            <span class="p-segmented-control__label">📋 List View</span>
          </button>
          <button class="p-segmented-control__button" data-view="grid">
            <span class="p-segmented-control__label">🔲 Grid View</span>
          </button>
          <button class="p-segmented-control__button" data-view="detail">
            <span class="p-segmented-control__label">🔍 Detail View</span>
          </button>
          <button class="p-segmented-control__button" data-view="form">
            <span class="p-segmented-control__label">✏️ Form View</span>
          </button>
        </div>
      </div>
      
      <!-- All views are always present, just with different visibility -->
      <div class="demo-views-container">
        
        <!-- List View: Simple list layout -->
        <div class="demo-view list-view" data-view="list">
          <div class="p-section--shallow">
            <h4>📋 List View</h4>
            <p>Simple list layout with basic information</p>
          </div>
          
          <div class="demo-items-container">
            <div class="p-card" data-item-id="1">
              <div class="p-card__inner">
                <div class="p-media-object">
                  <div class="p-media-object__image" style="view-transition-name: icon-1">🚀</div>
                  <div class="p-media-object__details">
                    <h5 style="view-transition-name: title-1">Project Alpha</h5>
                    <p style="view-transition-name: desc-1">High-priority development project</p>
                    <span class="p-chip is-readonly is-inline p-chip--positive" style="view-transition-name: status-1">Active</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="p-card" data-item-id="2">
              <div class="p-card__inner">
                <div class="p-media-object">
                  <div class="p-media-object__image" style="view-transition-name: icon-2">📊</div>
                  <div class="p-media-object__details">
                    <h5 style="view-transition-name: title-2">Data Analysis</h5>
                    <p style="view-transition-name: desc-2">Quarterly performance review</p>
                    <span class="p-chip is-readonly is-inline p-chip--caution" style="view-transition-name: status-2">Pending</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="p-card" data-item-id="3">
              <div class="p-card__inner">
                <div class="p-media-object">
                  <div class="p-media-object__image" style="view-transition-name: icon-3">🔧</div>
                  <div class="p-media-object__details">
                    <h5 style="view-transition-name: title-3">System Maintenance</h5>
                    <p style="view-transition-name: desc-3">Infrastructure updates</p>
                    <span class="p-chip is-readonly is-inline p-chip--information" style="view-transition-name: status-3">Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Grid View: Card-based grid layout -->
        <div class="demo-view grid-view" data-view="grid" style="display: none;">
          <div class="p-section--shallow">
            <h4>🔲 Grid View</h4>
            <p>Card-based grid layout with expanded information</p>
          </div>
          
          <div class="grid-row">
            <div class="grid-col-4" data-item-id="1">
              <div class="p-card--highlighted">
                <div class="p-card__inner">
                  <div class="p-media-object">
                    <div class="p-media-object__image" style="view-transition-name: icon-1">🚀</div>
                    <div class="p-media-object__details">
                      <h5 style="view-transition-name: title-1">Project Alpha</h5>
                      <p style="view-transition-name: desc-1">High-priority development project with multiple phases and team collaboration.</p>
                      <div class="p-chip is-readonly is-inline p-chip--positive" style="view-transition-name: status-1">Active</div>
                      <p class="u-text--small" style="view-transition-name: progress-text">75% Complete</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="grid-col-4" data-item-id="2">
              <div class="p-card--highlighted">
                <div class="p-card__inner">
                  <div class="p-media-object">
                    <div class="p-media-object__image" style="view-transition-name: icon-2">📊</div>
                    <div class="p-media-object__details">
                      <h5 style="view-transition-name: title-2">Data Analysis</h5>
                      <p style="view-transition-name: desc-2">Comprehensive quarterly performance review with detailed metrics and insights.</p>
                      <div class="p-chip is-readonly is-inline p-chip--caution" style="view-transition-name: status-2">Pending</div>
                      <p class="u-text--small" style="view-transition-name: deadline-text">Due: Next Week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="grid-col-4" data-item-id="3">
              <div class="p-card--highlighted">
                <div class="p-card__inner">
                  <div class="p-media-object">
                    <div class="p-media-object__image" style="view-transition-name: icon-3">🔧</div>
                    <div class="p-media-object__details">
                      <h5 style="view-transition-name: title-3">System Maintenance</h5>
                      <p style="view-transition-name: desc-3">Critical infrastructure updates including security patches and performance improvements.</p>
                      <div class="p-chip is-readonly is-inline p-chip--information" style="view-transition-name: status-3">Completed</div>
                      <p class="u-text--small" style="view-transition-name: date-text">Finished: Yesterday</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Detail View: Single item expanded -->
        <div class="demo-view detail-view" data-view="detail" style="display: none;">
          <div class="p-section--shallow">
            <h4>🔍 Detail View</h4>
            <p>Expanded view of a single item with full information</p>
          </div>
          
          <div class="p-card">
            <div class="p-card__inner">
              <div class="p-media-object">
                <div class="p-media-object__image" style="view-transition-name: icon-1">🚀</div>
                <div class="p-media-object__details">
                  <h5 style="view-transition-name: title-1">Project Alpha</h5>
                  <p style="view-transition-name: desc-1">High-priority development project</p>
                  <div class="p-chip is-readonly is-inline p-chip--positive" style="view-transition-name: status-1">Active</div>
                </div>
              </div>
              
              <div class="p-section--shallow">
                <h6>Description</h6>
                <p style="view-transition-name: detail-description">Project Alpha is a comprehensive development initiative focused on creating a next-generation platform that will revolutionize how teams collaborate and manage complex workflows.</p>
              </div>
              
              <div class="p-section--shallow">
                <h6>Progress</h6>
                <div class="p-progress-bar" style="view-transition-name: progress-bar">
                  <div class="p-progress-bar__filler" style="width: 75%"></div>
                </div>
                <p class="u-text--small" style="view-transition-name: progress-text">75% Complete</p>
              </div>
              
              <div class="p-section--shallow">
                <h6>Team</h6>
                <div class="p-chip is-readonly is-inline" style="view-transition-name: team-member-1">👨‍💻 John Doe</div>
                <div class="p-chip is-readonly is-inline" style="view-transition-name: team-member-2">👩‍💻 Jane Smith</div>
                <div class="p-chip is-readonly is-inline" style="view-transition-name: team-member-3">👨‍💻 Bob Johnson</div>
              </div>
              
              <div class="p-section--shallow">
                <h6>Timeline</h6>
                <p><strong>Start Date:</strong> <span style="view-transition-name: detail-start-date">January 15, 2024</span></p>
                <p><strong>Target Completion:</strong> <span style="view-transition-name: detail-deadline">March 30, 2024</span></p>
                <p><strong>Current Phase:</strong> Development & Testing</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Form View: Interactive form -->
        <div class="demo-view form-view" data-view="form" style="display: none;">
          <div class="p-section--shallow">
            <h4>✏️ Form View</h4>
            <p>Interactive form for editing item information</p>
          </div>
          
          <form class="p-form">
            <div class="p-form__group" style="view-transition-name: form-group-name">
              <label for="item-name" class="p-form__label">Item Name</label>
              <input type="text" id="item-name" value="Project Alpha" class="p-form__control" style="view-transition-name: title-1">
            </div>
            
            <div class="p-form__group" style="view-transition-name: form-group-description">
              <label for="item-description" class="p-form__label">Description</label>
              <textarea id="item-description" class="p-form__control" style="view-transition-name: detail-description">High-priority development project with multiple phases and team collaboration.</textarea>
            </div>
            
            <div class="grid-row">
              <div class="grid-col-4">
                <div class="p-form__group" style="view-transition-name: form-group-status">
                  <label for="item-status" class="p-form__label">Status</label>
                  <select id="item-status" class="p-form__control" style="view-transition-name: status-1">
                    <option value="active" selected>Active</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>
              
              <div class="grid-col-4">
                <div class="p-form__group" style="view-transition-name: form-group-priority">
                  <label for="item-priority" class="p-form__label">Priority</label>
                  <select id="item-priority" class="p-form__control" style="view-transition-name: form-input-priority">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high" selected>High</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div class="p-form__group" style="view-transition-name: form-group-deadline">
              <label for="item-deadline" class="p-form__label">Deadline</label>
              <input type="date" id="item-deadline" value="2024-03-30" class="p-form__control" style="view-transition-name: detail-deadline">
            </div>
            
            <div class="p-form__group">
              <button type="button" class="p-button--base">Cancel</button>
              <button type="submit" class="p-button--positive">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
      
      <div class="p-section--shallow">        
        <h5>Technical Details:</h5>
        <p>Each element has a unique <code>view-transition-name</code> that persists across views. The JavaScript triggers <code>document.startViewTransition()</code> to create smooth transitions between different DOM states.</p>
      </div>
    `;

    // Insert after the first h2 or at the top of the content
    const targetElement = document.querySelector('h2') || document.querySelector('.p-section--shallow') || document.body;
    targetElement.parentNode.insertBefore(demoContainer, targetElement.nextSibling);
  }

  bindEvents() {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.p-segmented-control__button')) {
        const button = e.target.closest('.p-segmented-control__button');
        const targetView = button.dataset.view;
        this.transitionToView(targetView);
      }
    });
  }

  async transitionToView(targetView) {
    console.log('Transitioning to', targetView);
    if (this.isTransitioning || targetView === this.currentView) {
      console.log('Already transitioning or same view, skipping transition.');
      return;
    }

    this.isTransitioning = true;

    // Check if View Transitions API is supported
    if (!document.startViewTransition) {
      console.warn('View Transitions API not supported in this browser.');
      // Fallback for unsupported browsers
      this.switchViewWithoutTransition(targetView);
      this.isTransitioning = false;
      return;
    }

    try {
      // Start the view transition
      const transition = document.startViewTransition(() => {
        this.switchViewWithoutTransition(targetView);
      });

      // Wait for the transition to complete
      await transition.finished;
    } catch (error) {
      console.warn('View transition failed:', error);
      // Fallback
      this.switchViewWithoutTransition(targetView);
    }

    this.isTransitioning = false;
  }

  switchViewWithoutTransition(targetView) {
    console.log('Switching view without transition to', targetView);

    // Hide all views
    document.querySelectorAll('.demo-view').forEach((view) => {
      view.style.display = 'none';
    });

    // Show target view
    const targetElement = document.querySelector(`.demo-view[data-view="${targetView}"]`);
    if (targetElement) {
      console.log('Showing target element:', targetElement);
      targetElement.style.display = 'block';
      this.currentView = targetView;
    }

    // Update active button state and aria-selected attributes
    document.querySelectorAll('.p-segmented-control__button').forEach((btn) => {
      const isSelected = btn.dataset.view === targetView;
      btn.setAttribute('aria-selected', isSelected.toString());
    });
  }

  showBrowserSupport() {
    // Browser support info is now displayed in the console for developers
    if (document.startViewTransition) {
      console.log('View Transitions API Supported');
    } else {
      console.log('View Transitions API Not Supported - Try Chrome 111+ for full functionality');
    }
  }

  // Method to demonstrate problematic transitions
  demonstrateProblems() {
    if (!document.startViewTransition) {
      console.warn('View Transitions API not supported');
      return;
    }

    // This will cause a problematic transition
    document.startViewTransition(() => {
      document.body.style.transform = 'scale(0.8) rotate(10deg)';
      setTimeout(() => {
        document.body.style.transform = '';
      }, 1000);
    });
  }
}

// Initialize the demo when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ViewTransitionsDemo();
  });
} else {
  new ViewTransitionsDemo();
}

// Export for global access
window.ViewTransitionsDemo = ViewTransitionsDemo;
