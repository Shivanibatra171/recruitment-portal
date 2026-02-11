const professions = [
  { name: "Doctor", image: "doctor.png" },
  { name: "Engineer", image: "engineer.png" },
  { name: "Teacher", image: "teacher.png" },
  { name: "Content Writer", image: "content writing.png" },
  { name: "Digital Marketer", image: "digital marketing.png" }
];

const citiesByCountry = {
  Pakistan: ["Karachi", "Lahore", "Islamabad", "Sukkur"],
  India: ["Mumbai", "Delhi", "Bangalore", "Hyderabad"],
  USA: ["New York", "Los Angeles", "Chicago", "Houston"],
  UAE: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"]
};

const countryPhoneCodes = {
  Pakistan: "+92",
  India: "+91",
  USA: "+1",
  UK: "+44"
};


const jobs = {
  Doctor: [
    { title: "General Physician", city: "Karachi", description: "Treat patients.", image:"doctor.png" },
    { title: "General Physician", city: "Sukkur", description: "Treats common illnesses and checks patients daily.", image:"doctor.png" },
    { title: "Surgeon", city: "Karachi", description: "Performs operations in large hospitals.", image:"surgeon.png" },
    { title: "Pediatrician", city: "Sukkur", description: "Provides medical care to children.", image:"pediatrician.png" },
    { title: "Gynecologist", city: "Lahore", description: "Treats women’s health and pregnancy issues.", image:"gynecologist.png" },
    { title: "Dermatologist", city: "Islamabad", description: "Treats skin, hair, and allergy problems.", image:"dermatologist.png" }
  ],
  Teacher: [
    { title: "Lecturer", city: "Karachi", description: "Teach students.", image:"lecturer.png" },
    { title: "School Teacher", city: "Sukkur", description: "Teaches students at school level.", image:"school_teacher.png" },
    { title: "College Lecturer", city: "Lahore", description: "Teaches college students in specific subjects.", image:"college_teacher.png" },
    { title: "University Professor", city: "Islamabad", description: "Teaches and researches at university level.", image:"university_professor.png" },
    { title: "Online Tutor", city: "Karachi", description: "Teaches students online from home.", image:"online_tutor.png" },
    { title: "Subject Specialist", city: "Lahore", description: "Teaches one subject with deep expertise.", image:"subject_specialist.png" }
  ],
  "Content Writer": [
    { title: "Blog Writer", city: "Karachi", description: "Write blogs.", image:"content.png" },
    { title: "Blog Writer", city: "Karachi", description: "Writes articles and blogs for websites.", image:"blog_writer.png" },
    { title: "SEO Content Writer", city: "Lahore", description: "Writes content to rank websites on Google.", image:"seo_writer.png" },
    { title: "Copywriter", city: "Islamabad", description: "Writes ads and promotional content.", image:"copywriter.png" },
    { title: "Social Media Content Writer", city: "Karachi", description: "Writes captions and posts for social media.", image:"social_media_writer.png" },
    { title: "Technical Writer", city: "Islamabad", description: "Writes guides and documentation for software or tools.", image:"technical_writer.png" }
  ],
  "Digital Marketer": [
    { title: "SEO Specialist", city: "Karachi", description: "Optimize SEO.", image:"marketing.png" },
    { title: "Social Media Manager", city: "Karachi", description: "Manages business social media pages.", image:"social_media_manager.png" },
    { title: "SEO Specialist", city: "Lahore", description: "Improves website visibility on search engines.", image:"seo_specialist.png" },
    { title: "Digital Ads Manager", city: "Karachi", description: "Runs paid ads on Google and social media.", image:"digital_ads_manager.png" },
    { title: "Email Marketing Specialist", city: "Islamabad", description: "Sends marketing emails to customers.", image:"email_marketer.png" },
    { title: "Content Marketing Strategist", city: "Lahore", description: "Plans content to grow brands online.", image:"content_marketer.png" }
  ],
  Engineer: [
    { title: "Software Engineer", city: "Lahore", description: "Develop software.", image:"software.png" },
    { title: "Software Engineer", city: "Islamabad", description: "Develops software, apps, and systems.", image:"software_engineer.png" },
    { title: "Computer Engineer", city: "Karachi", description: "Works on computer hardware and software.", image:"computer_engineer.png" },
    { title: "Electrical Engineer", city: "Sukkur", description: "Works with electrical systems and power lines.", image:"electrical_engineer.png" },
    { title: "Civil Engineer", city: "Lahore", description: "Designs and supervises buildings and roads.", image:"civil_engineer.png" },
    { title: "Mechanical Engineer", city: "Karachi", description: "Works with machines and mechanical systems.", image:"mechanical_engineer.png" }
  ]
};
const jobRequirements = {
  Doctor: {
    "General Physician": ["MBBS degree", "PMDC registration", "Hospital/clinic experience"],
    "Surgeon": ["MBBS + specialization (FCPS/MS)", "Strong practical training", "PMDC registration"],
    "Pediatrician": ["MBBS", "Child health specialization", "Hospital experience"],
    "Gynecologist": ["MBBS", "Gynecology specialization", "PMDC registration"],
    "Dermatologist": ["MBBS", "Skin specialization", "Clinical experience"]
  },
  Teacher: {
    "School Teacher": ["Bachelor degree", "Good subject knowledge", "Communication skills"],
    "College Lecturer": ["Master degree", "Strong subject grip", "Teaching skills"],
    "University Professor": ["PhD degree", "Research & teaching experience", "Publications"],
    "Online Tutor": ["Subject knowledge", "Laptop + internet", "English communication"],
    "Subject Specialist": ["Master degree", "Deep subject understanding", "Teaching experience"]
  },
  "Content Writer": {
    "Blog Writer": ["Good English writing", "Basic grammar", "Writing samples"],
    "SEO Content Writer": ["SEO basics knowledge", "Keyword usage", "Content writing skills"],
    "Copywriter": ["Creative writing", "Marketing understanding", "Strong vocabulary"],
    "Social Media Content Writer": ["Trend awareness", "Short content writing", "Social media knowledge"],
    "Technical Writer": ["Technical understanding", "Clear English writing", "Documentation skills"]
  },
  "Digital Marketer": {
    "Social Media Manager": ["Social media handling", "Content planning", "Basic design knowledge"],
    "SEO Specialist": ["SEO tools knowledge", "Keyword research", "Website basics"],
    "Digital Ads Manager": ["Facebook & Google Ads", "Budget handling", "Marketing basics"],
    "Email Marketing Specialist": ["Email tools knowledge", "Copywriting skills", "Analytics basics"],
    "Content Marketing Strategist": ["Content planning", "Marketing strategy", "Brand understanding"]
  },
  Engineer: {
    "Software Engineer": ["CS / SE degree", "Programming skills", "Problem-solving"],
    "Computer Engineer": ["Computer Engineering degree", "Hardware & software knowledge", "Technical skills"],
    "Electrical Engineer": ["Electrical Engineering degree", "Circuit knowledge", "Practical skills"],
    "Civil Engineer": ["Civil Engineering degree", "AutoCAD basics", "Site experience"],
    "Mechanical Engineer": ["Mechanical Engineering degree", "Machine knowledge", "Practical training"]
  }
};
