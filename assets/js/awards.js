/* Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Merit Scholarship Award",
    cardImage: "assets/images/education-page/education.jpg",
    place: "Vellore Institute of Technology",
    time: "(Oct 2020 - present)",
    desp: "<li>Received Merit Award for gaining the highest cgpa of the branch.</li><li>Received the award for three consecutive academic years.</li>",
  },
  {
    title: "Data Science Scholarship Award",
    cardImage: "assets/images/awards-page/DatascienceYAY.png",
    place: "YAY - GirlScript Foundation",
    time: "(Nov 2020 - Jan 2021)",
    desp: "<li>Written code to collect, crunch and analyze data from various internal and external sources.</li><li>Built machine learning models using Python and scikit-learns</li><li>Worked in an agile environment as part of an interdisciplinary development team on the implementation of those ideas.</li>",
  },
  
  {
    title: "Silver Club Award",
    cardImage: "assets/images/experience-page/cuemath-image.png",
    place: "Cue Learn Private Limited",
    time: "(Aug 2020 - June 2021)",
    desp: "<li>Worked with MOZILLA as a part of Google Summer Of Code.</li><li>Worked on Extension Activity Monitor which is a privileged extension for Firefox that uses the activityLog API (privileged API) to monitor the activities of the other installed extensions.</li><li>The activityLog API listens for logs from other installed extensions.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
*/

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Merit Scholarship Award",
    cardImage: "assets/images/experience-page/vit.png",
    description:
      "Received Merit Award for gaining the highest cgpa of the branch.",
  },
  {
    title: "Data Science Scholarship Award",
    cardImage: "assets/images/awards-page/DatascienceYAY.png",
    description:
      "Received scholarship for Data Science course based on academic merits.",
  },

  {
    title: "Silver Club Award",
    cardImage: "assets/images/experience-page/cuemath-image.png",
    description:
      "Received esteemed silver club award for best performance as an International Teacher.",
  },
 
 /*{
    title: "Google Crowdsource Contributor",
    cardImage: "assets/images/experience-page/crowdsource.png",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },*/
 
 
  
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 600px;width:400px">
      
      <img src="${cardImage}" height="200" width="350" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [

  {
    title: "Hackerrank - Python Certification",
    image: "assets/images/awards-page/Hackerrank_Python.png",
    time: "02/2021",
    desp: "<li>The HackerRank Skills Certification Test is a standardized assessment to help developers prove their coding skills.</li><hr/><li>It covers topics like Scalar Types, Operators and Control Flow Strings, Collections and Iteration, Modularity, Objects and Types and Classes.</li>",
  },
  {
    title: "Technology Consulting Virtual Internship",
    image: "assets/images/awards-page/Deloitte.jpg",
    time: "03/2021",
    desp: "<li>Gained exposure to international business priorities and local challenges.</li><hr /><li>Completed practical task modules in: Solution presentation, Understanding Cloud Computing, Design Business Case, Client Discovery.</li>",
  },
  {
    title: "Software Engineering Virtual Internship",
    image: "assets/images/awards-page/JPMorgan.jpg",
    time: "04/2020",
    desp: "<li>Introduced new products and worked with innovative new technology such as machine learning.</li><hr /><li>Completed practical task modules in JPMorgan Chase frameworks and tools.</li>",
  },
  {
    title: "Nexture Summit Participation",
    image: "assets/images/awards-page/Nexture Summit.png",
    time: "07/2021",
    desp: "<li>Nexture Summit is a non profit organization which provides free technical education to students.</li><hr /><li>An International Level 48 hour virtual event by the students and for the students.</li>",
  },
  {
    title: "International Teacher Certification",
    image: "assets/images/awards-page/International_Teacher.jpg",
    time: "08/2020",
    desp: "<li>Cuemath is the world’s leading live-class platform for math and coding skills.</li><hr /><li>Trained in Math and Coding knowledge, Cuemath curriculum, Cuemath methodology and Student engagement.</li>",
  },
  {
    title: "Cuemath - Python Certification",
    image: "assets/images/awards-page/Python.jpg",
    time: "08/2020",
    desp: "<li>Cuemath is the world’s leading live-class platform for math and coding skills.</li><hr /><li>Received Certification in Python in recognition of scores in Python assessment and evaluation.</li>",
  },
  {
    title: "30 days of Google Cloud Program",
    image: "assets/images/awards-page/gcp.jpg",
    time: "08/2020",
    desp: "<li>The program introduced Computing, Application Development, Big Data & Machine Learning using Google Cloud's training platform, Qwiklabs.</li><hr /><li>Completed Cloud Engineering Track and Data Science & Machine Learning Track and earned 12 skill badges.</li>",
  },
  {
    title: "IELTS Certification",
    image: "assets/images/awards-page/ielts.png",
    time: "01/2021",
    desp: "<li>The International English Language Testing System (IELTS)</li><li> An English language test for study, migration or work.</li><hr /><li>Overall Band score: 8/9</li> <li> CEFR Level : C1</li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
