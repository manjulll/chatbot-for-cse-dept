// script.js
function sendMessage() {
  const userInput = document.getElementById("user-input").value.trim();
  const chatBody = document.getElementById("chat-body");

  if (userInput === "") return;

  // Add user's message
  const userMessage = document.createElement("div");
  userMessage.className = "message user";
  userMessage.textContent = userInput;
  chatBody.appendChild(userMessage);

  // Add bot's response
  const botMessage = document.createElement("div");
  botMessage.className = "message bot";
  botMessage.innerHTML = getBotResponse(userInput); // Use innerHTML for links
  chatBody.appendChild(botMessage);

  // Clear input
  document.getElementById("user-input").value = "";

  // Scroll to the bottom
  chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotResponse(input) {
  const responses = {
    hello: "Hello there! How can I assist you with CSE department today?",
    hi: "Hi! Feel free to ask me anything about the CSE department.",
    "cse department":
      "The CSE department focuses on core areas like programming, algorithms, data structures, and software development.<br><br>" +
      "Popular topics include:<br>" +
      "1. Machine Learning<br>" +
      "2. Web Development<br>" +
      "3. Cybersecurity<br>" +
      "4. Cloud Computing<br>" +
      "<br>Explore more on CSE here: <a href='https://en.wikipedia.org/wiki/Computer_science' target='_blank'>Computer Science - Wikipedia</a>",
    "cse languages":
      "CSE students typically learn programming languages like:<br>" +
      "1. Python<br>" +
      "2. Java<br>" +
      "3. C++<br>" +
      "4. JavaScript<br><br>" +
      "Learn more about languages here: <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank'>JavaScript Docs - MDN</a>",
    "cse career paths":
      "CSE opens up diverse career paths, such as:<br>" +
      "1. Software Developer<br>" +
      "2. Data Scientist<br>" +
      "3. System Analyst<br>" +
      "4. Cloud Engineer<br>" +
      "5. Business Analyst<br><br>" +
      "Explore roles: <a href='https://www.naukri.com/data-scientist-jobs' target='_blank'>Data Scientist Jobs - Naukri</a>",
    "3rd sem time table":
      "You can visit the official website of the college's CSE department to check the latest timetable.<br>" +
      "Website: <a href='http://btechcsegehu.in/' target='_blank'>Department of CSE</a>",
    "admission procedure":
      "Admission to the CSE department involves applying online through the university portal. Eligibility includes a minimum of 60% in your 12th standard.<br>" +
      "Check details here: <a href='http://btechcsegehu.in/' target='_blank'>CSE Admissions</a>",
    faculty:
      "Our CSE department faculty consists of experts in AI, Machine Learning, and Software Development.<br>" +
      "View the complete list here: <a href='http://btechcsegehu.in/' target='_blank'>CSE Faculty</a>",
    placements:
      "The CSE department boasts excellent placement records with top companies like Infosys, Wipro, and Amazon.<br>" +
      "Check placement details here: <a href='http://btechcsegehu.in/' target='_blank'>CSE Placements</a>",
    "research opportunities":
      "The CSE department offers research opportunities in AI, Machine Learning, and Blockchain. Students can participate in ongoing projects.<br>" +
      "Contact the faculty for more details: <a href='http://btechcsegehu.in/' target='_blank'>CSE Research</a>",
    events:
      "Upcoming CSE department events include workshops on AI and coding competitions.<br>" +
      "Stay updated here: <a href='http://btechcsegehu.in/' target='_blank'>CSE Events</a>",
    alumni:
      "Our CSE alumni are placed in top companies worldwide. Join our alumni group to connect with them.<br>" +
      "Visit: <a href='http://btechcsegehu.in/' target='_blank'>CSE Alumni</a>",
    facilities:
      "The CSE department features state-of-the-art labs, a digital library, and collaborative spaces for students.<br>" +
      "Learn more about our facilities here: <a href='http://btechcsegehu.in/' target='_blank'>CSE Facilities</a>",
    faqs:
      "Find answers to common questions like admission criteria, course details, and exam schedules here:<br>" +
      "<a href='http://btechcsegehu.in/' target='_blank'>CSE FAQs</a>",
    contact:
      "For more information, contact the department office at +91 1234567890 or email us at cse@gehu.ac.in.<br>" +
      "Visit: <a href='http://btechcsegehu.in/' target='_blank'>CSE Contact</a>",
    bye: "Goodbye! Have a great time exploring CSE!",
    default:
      "I'm sorry, I didn't understand that. Can you ask something else about the CSE department?",
  };

  const lowerInput = input.toLowerCase();
  return (
    responses[lowerInput] ||
    responses.default
  );
}

// Add an event listener for the Enter key
const userInputElement = document.getElementById("user-input");
userInputElement.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    sendMessage();
    event.preventDefault();
  }
});
