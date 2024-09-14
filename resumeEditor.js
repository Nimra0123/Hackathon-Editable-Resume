var _a, _b;
var resumeKey = 'resumeData';
// Load resume data from localStorage
function loadResume() {
    var savedResume = localStorage.getItem(resumeKey);
    if (savedResume) {
        var resume = JSON.parse(savedResume);
        document.getElementById('name').value = resume.name;
        document.getElementById('contact').value = resume.contact;
        document.getElementById('summary').value = resume.summary;
    }
}
// Save resume data to localStorage
function saveResume() {
    var resume = {
        name: document.getElementById('name').value,
        contact: document.getElementById('contact').value,
        summary: document.getElementById('summary').value
    };
    localStorage.setItem(resumeKey, JSON.stringify(resume));
}
// Set up event listeners
(_a = document.getElementById('saveResume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', saveResume);
(_b = document.getElementById('loadResume')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', loadResume);
// Optionally load resume on page load
loadResume();
