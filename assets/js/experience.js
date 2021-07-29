//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  /*{
    title: "Processing Analyst",
    cardImage: "assets/images/experience-page/hpe.png",
    place: "Hewlett Packard Enterprise",
    time: "(Present)",
    desp: "<li>Assisted with troubleshooting issues and provide technical support.</li> <li>Escalated critical customer situations to the appropriate level of management.</li> <li>Supported the IT team in maintaining hardware, software, and other systems.</li> <li>Tracked issues until resolution according to agreed service levels</li>",
  },*/
  {
    title: "Technical Support Intern",
    cardImage: "assets/images/experience-page/cuemath-image.png",
    place: "Cue Learn Private Limited",
    time: "(Oct 2020 - Aug 2021)",
    desp: "<li>Assisted with troubleshooting issues and provide technical support.</li> <li>Escalated critical customer situations to the appropriate level of management.</li> <li>Supported the IT team in maintaining hardware, software, and other systems.</li> <li>Tracked issues until resolution according to agreed service levels</li>",
  },
  {
    title: "Data Science and Business Analytics Intern",
    cardImage: "assets/images/experience-page/sparks.png",
    place: "The Sparks Foundation",
    time: "(Nov 2020 - Jan 2021)",
    desp: "<li>Written code to collect, crunch and analyze data from various internal and external sources.</li><li>Built machine learning models using Python and scikit-learns</li><li>Worked in an agile environment as part of an interdisciplinary development team on the implementation of those ideas.</li>",
  },
  {
    title: "Data Analyst Trainee",
    cardImage: "assets/images/experience-page/mte.jpg",
    place: "MedTourEasy",
    time: "(Jan - Feb 2021)",
    desp:"<li>Used data analysis and statistical techniques to develop solutions to improve customer experience and to guide business decision making.</li><li>Interpreted data, analysed results using statistical techniques, and provided ongoing reports.</li><li>Acquired data from primary or secondary data sources and maintained databases/data analysis systems.</li>",
  },
  {
    title: "Online Coding Instructor",
    cardImage: "assets/images/experience-page/cuemath-image.png",
    place: "Cue Learn Private Limited",
    time: "(Aug 2020 - June 2021)",
    desp: "<li>Took online live classes to International students till grade 8 in Math and Coding subjects.</li><li>Trained students through a combination of worksheets, tab-based exercises and puzzle cards.</li><li>Monitored student progress and gave feedbacks.</li>",
  },
  {
    title: "Subject Matter Expert",
    cardImage: "assets/images/experience-page/srm.png",
    place: "Six Red Marbles",
    time: "(Feb 2021)",
    desp:"<li>Created well-explained, step by step solutions to the questions for college textbooks.</li><li>Created original content that is plagiarism-free and achieved the targets assigned.</li><li>Prepared accurate answers written in good English.</li>",
  },
   
  {
    title: "Front End Developer",
    cardImage: "assets/images/experience-page/findmind.png",
    place: "FindMind Analytics",
    time: "(Apr - May 2020)",
    desp:"<li>Used html, css and Javascript to create userfriendly web pages.</li><li>Maintained and improved company website.</li><li>Created and designed web page content.</li>",
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





//  Work experience cards


const volcards = document.querySelector(".vol-cards");
const vol = [
  {
    title: "Program Representative",
    cardImage: "assets/images/experience-page/vit.png",
    place: "",
    time: "(July 2019 - July 2021)",
    desp: "<li>Represented peers opinions and addressed issues during Quality Circle meetings.</li> <li>Collated feedbacks from students to pass on to the committee.</li> <li>Provided feedback on Curriculum, Student progression, Assessment methods and Learning resources.</li>",
  },
  {
    title: "National Service Scheme Volunteer",
    cardImage: "assets/images/experience-page/NSS.jpeg",
    place: "",
    time: "(Nov 2020 - May 2021)",
    desp: "<li>Worked in rural areas, adopted villages for the cause of serving through survey, education and health awareness programme.</li><li>Engaged in creative and constructive social actions.</li><li>Identified the needs and problems of the community and involved them in problem-solving.</li><li>Developed a sense of social and civic responsibility.</li>",
  },
  {
    title: "Google Crowdsource Contributor",
    cardImage: "assets/images/experience-page/crowdsource.png",
    place: "",
    time: "(Jan 2021 - Present)",
    desp:"<li>Level 6 Contributor.</li><li>Gained badges for Image label recognition and Handwriting recognition.</li><li>Utilised abilities to contribute to the building blocks of Artificial Intelligence (AI).",
  },
  ];
  
const showCards5 = () => {
  let output = "";
  vol.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/ style="height:200px; width:200px">
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              
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
  volcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards5);























// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "National Service Scheme",
    cardImage: "assets/images/experience-page/nss.jpeg",
    description:
      "Worked in rural areas, served the society through survey, teaching basic subjects and health awareness programme.",
  },
  {
    title: "Google Crowdsource Contributor",
    cardImage: "assets/images/experience-page/crowdsource.png",
    description:
      "Level 6 contributor with badges in Image label verification and Handwriting recognition",
  },

  {
    title: "Program Representative",
    cardImage: "assets/images/experience-page/vit.png",
    description:
      "Collated feedback from students and passed on to Quality Circle Meetings, Represented peers opinions to improve quality of their University experience.",
  },
 
 
  
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 600px;width:400px">
      
      <img src="${cardImage}" height="300" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

//Organizations
const org = document.querySelector(".org");
const orgcards = [
  {
    title: "Google Developers Group",
    cardImage: "assets/images/experience-page/gdg.png",
    description:
      "Google Developer Groups (GDGs) are for developers who are interested in Google's developer technology.",
  },
  {
    title: "Women TechMakers",
    cardImage: "assets/images/experience-page/WTM.jpg",
    description:
      "Women Techmakers program is meant to strengthen the women workforce and dismantle gender barriers in the field of technology.",
  },

  {
    title: "Women Who Code",
    cardImage: "assets/images/experience-page/wwc.jpg",
    description:
      "Women Who Code empowers women with skills needed for professional achievement",
  },
 
 
  
];

const showCards1 = () => {
  let output = "";
  orgcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 600px;width:400px">
      
      <img src="${cardImage}" height="300" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  org.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);






// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [

  {
    title: "Campus Ambassador - YAY",
    image: "assets/images/awards-page/Hackerrank_Python.png",
    time: "03/2020 - 08/2020",
    desp: "<li>Google Summer of Code is a global program focused on introducing students to open source software development.</li><hr /><li>It is a great platform to explore new areas, maybe discover a new career path!</li>",
  },
  {
    title: "Program Representative - VIT",
    image: "assets/images/awards-page/Deloitte.jpg",
    time: "06/2020 - 08/2020",
    desp: "<li>It is an open source community where students and mentors can apply.</li><hr /><li>Ample amount of technologies and projects are there and we are given opportunity to work on them according to our interest and knowledge.</li>",
  },
  {
    title: "Campus Ambassador - YAY",
    image: "assets/images/awards-page/JPMorgan.jpg",
    time: "03/2020 - 08/2020",
    desp: "<li>Google Summer of Code is a global program focused on introducing students to open source software development.</li><hr /><li>It is a great platform to explore new areas, maybe discover a new career path!</li>",
  },
 
  
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="40" height="300">
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
