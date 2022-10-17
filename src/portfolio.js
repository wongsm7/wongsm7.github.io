/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shun Min's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Wong Shun Min's Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Wong Shun Min",
  logo_name: "WongShunMin",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/ashutosh1919",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/wongsm7",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://sg.linkedin.com/in/wong-shun-min-b4241019b",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "wongsm7@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React & Vue",
        "⚡ Creating application backend in Node, Express, Flask & Laravel",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "vscode-icons:file-type-python",
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "VueJS",
          fontAwesomeClassname: "vscode-icons:file-type-vue",
          style: {
            color: "black",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "orange",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "black",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Integrating SaaS product with AWS Marketplace",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "DynamoDB",
          fontAwesomeClassname: "logos:aws-dynamodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "AWS",
      iconifyClassname: "simple-icons:amazonaws",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National University of Singapore",
      subtitle: "Bachelor of Computing (Honours) in Computer Science",
      logo_path: "nus_logo_full-vertical.jpg",
      alt_name: "NUS logo",
      duration: "Oct 2018 - Dec 2021",
      descriptions: [
        "⚡ I have studied Database Systems, Security and Software Engineering",
        "⚡ Apart from this, I have done courses on Full Stack Development and Cloud Computing. I have obtained cloud certifications like AWS Certified Cloud Practitioner and Solutions Architect.",
      ],
      website_link: "https://www.nus.edu.sg/",
    },
  ],

};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "- AWS",
      logo_path: "AWS-Certified-Cloud-Practitioner_badge.png",
      certificate_link:
        "https://www.credly.com/earner/earned/badge/a3daf9b0-207a-432b-904b-66150e80725b",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "AWS Certified Solutions Architect - Associate",
      subtitle: "- AWS",
      logo_path: "aws_solution_architect_logo.png",
      certificate_link:
        "https://www.credly.com/badges/93c4c963-4ddb-436f-a1f4-6f5bcb26b32b",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Create Your First React Native App",
      subtitle: "- Spencer Carli",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-02a8d72b-1bf9-4169-9848-970f1e427026/",
      alt_name: "Google",
      color_code: "#FFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Fullstack Software Engineer",
          company: "Cloudsine Pte Ltd",
          company_url: "https://www.cloudsine.tech/",
          logo_path: "cloudsine.jpg",
          duration: "June 2020 - PRESENT",
          location: "Hyderabad, Telangana",
          description: [
            '⚡Developed and maintained web applications according to business objectives and needs of clients',
            '⚡Reviewed code, debugged problems and corrected issues',
            '⚡Contributed ideas and suggestions in team meetings and delivered updates on new features and enhancements',
            '⚡Planned and integrated the SaaS product with AWS Marketplace',
            '⚡Gained hands-on expertise in VueJS, Laravel and Cloud technologies',    
          ],
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Technical Assistant Intern",
          company: "Certis Cisco Security Pte Ltd",
          company_url: "https://www.certisgroup.com/",
          logo_path: "certis.jpg",
          duration: "May 2021 - Aug 2021",
          location: "Singapore",
          description: [
            '⚡Developed a web application to control a robot using ReactJS, Flask and MQTT',
            '⚡Created webpage with login system to retrieve and display data from a robot using ReactJS, Express and PostgreSQL',
            '⚡Used cloud solution Heroku to deploy system',
            '⚡Emulated SSH with MQTT using Python'
          ],
          color: "#ee3c26",
        },
        {
          title: "Software Engineer Intern",
          company: "Equinix Asia Pacific Pte Ltd",
          company_url:
            "https://www.equinix.sg/",
          logo_path: "equinix.png",
          duration: "Nov 2018 - Dec 2018",
          location: "Singapore",
          description: [
            '⚡Worked independently to create Apple Passbook (.pkpass) generation library using Python',
            '⚡Built platform component that produces the mobile passes',
            '⚡Created dedicated dashboard in AppDynamics portal for identifying application errors',
            '⚡Developed new webpage for a dashboard with ReactJS',
          ],
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
