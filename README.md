# web-based-job-portal
          A dynamic multi-page Job Portal web application built with HTML, CSS, and JavaScript. Features include dynamic job rendering, advanced form validation,  LocalStorage-based state management, and responsive UI design.

**Topics**

    html
    
    css
    
    javascript
    
    web-development
    
    frontend
    
    localstorage
    
    job-portal
    
    responsive-design
    
    dom-manipulation

**🚀 Features**

          🔹 Dynamic Job Listings
          
                   Jobs are rendered dynamically using JavaScript arrays and DOM manipulation. Users can view job details before applying.
          
          🔹 Multi-Page Navigation with State Management
          
                   Selected job data is stored in LocalStorage and automatically displayed on the Apply page.
          
          🔹 Smart Application Form
          
                    Auto-filled selected profession
                    
                    Country-based city dropdown
                    
                    Auto country phone code detection
                    
                    WhatsApp number format validation
                    
                    Email validation using Regular Expressions
                    
                    Resume upload support
                    
                    Job type selection (Full-time / Part-time / Remote)
          
          🔹 Dynamic Country → City Dropdown
          
                    City list updates automatically based on selected country.
          
          🔹 Success Confirmation Card
          
                    After successful form submission:
                    
                    Personalized thank-you message
                    
                    Displays applied profession & job type
                    
                    Success image confirmation
                    
                    Smooth scroll animation
                    
          🔹 Responsive Design
          
                    Built using Flexbox for a clean and mobile-friendly layout.
          
          🔹 Data Persistence
          
                    Uses browser LocalStorage API to:
                    
                    Store selected profession
                    
                    Maintain state between pages
                    
                    Ensure fast performance

**🛠️ Technology Stack**

          🌐 Frontend
                    HTML5 – Semantic page structure
                    CSS3 – Styling, layout (Flexbox), UI effects
                    JavaScript (ES6+) – Core logic, DOM manipulation, validation
                    
          💾 Data Storage
                    LocalStorage API (Client-side only)
                    Data stored in JSON format using:
                    JSON.stringify()
                    JSON.parse()
          
          🎨 UI & Assets
                    Custom UI components
                    Success confirmation image
                    Organized folder structure

Smart-Job-Portal/
          
          ├── index.html   
          ├── apply.html          
          ├── job.html
          ├── 
          ├── style.css
          │   
          ├── apply.js
          ├── data.js
          ├── main.js
          ├── jobDeatils.js
          │  
          ├── images/
          │   
          │       
          └── README.md
