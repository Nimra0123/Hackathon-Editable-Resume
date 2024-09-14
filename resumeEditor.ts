interface Resume {
    name: string;
    contact: string;
    summary: string;
  }
  
  const resumeKey = 'resumeData';
  
  // Load resume data from localStorage
  function loadResume() {
    const savedResume = localStorage.getItem(resumeKey);
    if (savedResume) {
      const resume: Resume = JSON.parse(savedResume);
      (document.getElementById('name') as HTMLInputElement).value = resume.name;
      (document.getElementById('contact') as HTMLInputElement).value = resume.contact;
      (document.getElementById('summary') as HTMLTextAreaElement).value = resume.summary;
    }
  }
  
  // Save resume data to localStorage
  function saveResume() {
    const resume: Resume = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      contact: (document.getElementById('contact') as HTMLInputElement).value,
      summary: (document.getElementById('summary') as HTMLTextAreaElement).value
    };
    localStorage.setItem(resumeKey, JSON.stringify(resume));
  }
  
  // Set up event listeners
  document.getElementById('saveResume')?.addEventListener('click', saveResume);
  document.getElementById('loadResume')?.addEventListener('click', loadResume);
  
  // Optionally load resume on page load
  loadResume();
  