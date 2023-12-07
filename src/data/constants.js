import gitaGPT from '../images/gitaGPT.png';
import bash from '../images/bash.png';
import ansible from '../images/ansible.png';
import terraform from '../images/terraform.png';
import jenkins_ci from '../images/jenkins-ci.png';
import docker_ecs from '../images/docker_ecs.png';
import docker_node from '../images/docker_node.png';
import task_tracker from '../images/task_tracker.png';
import jenkins_docker_node from '../images/jenkins_docker_node.png';
import tenzies from '../images/tenzies.png';
import rock from '../images/rock.png';
import blackjack from '../images/blackjack.png';
import docker_blog from '../images/docker-blog.png';
import cloud_blog from '../images/cloud-blog.png';
import devops_blog from '../images/devops-blog.png';

export const Bio = {
  name: "Vedant Mahajan",
  roles: [
    "FrontEnd Developer",
    "DevOps Engineer",
    "Cloud Engineer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges",
  github: "https://github.com/Vedant-MAHAjan",
  resume:
    "https://drive.google.com/file/d/1GKK8b7aUodmMP_CCWHyy_dD_aBUnlY4Z/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/vedant-mahajan-b8573822b/",
  hashnode: "https://deepdevwithvedant.hashnode.dev/",
  gmail: "mahajanvedant226@gmail.com"
};

export const skills = [
  {    
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },      
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "Git",
        image:
          "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "AWS",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Linux",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Terraform",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Ansible",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Jenkins",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
    ],
  },
];

export const projects = [
  {
    id: 9,
    title: "Open Source contribution - BhagvadGita.ai",
    description:
      "ChatGPT for Bhagavad Gita i.e. GitaGPT. Now, we can talk to Krishna in our everyday lives.",
    image:
      gitaGPT,
    tags: [
      "React Js",
      "TypeScript",
      "GitHub",
      "Material UI"
    ],
    category: "web app",
    github: "https://github.com/gita/Bhagavad-Gita-AI",
    webapp: "https://bhagavadgita.ai/",
  },
  {
    id: 0,
    title: "Bash Scripting",
    description:
      "Execute a bash script on a virtual machine for remote deployment of web artifacts on virtual servers.",
    image:
      bash,
    tags: ["Linux", "Bash",],
    category: "devops",
    github: "https://github.com/Vedant-MAHAjan/Bash-Scripting",
  },
  {
    id: 1,
    title: "Configuration Management",
    description:
      "Configure Linux-based web and database servers using Ansible playbooks",
    image:
      ansible,
    tags: [
      "Ansible",
      "DevOps",
      "Bash",
      "Linux",
    ],
    category: "devops",
    github: "https://github.com/Vedant-MAHAjan/Configuration-Management-with-Ansible",
  },
  {
    id: 2,
    title: "Infrastructure as Code - Terraform ",
    description:
      "Website deployment using Terraform and AWS",
    image:
      terraform,
    tags: ["Terraform", "AWS", "Shell"],
    category: "devops",
    github: "https://github.com/Vedant-MAHAjan/Terraform",
  },
  {
    id: 3,
    title: "Continuous Integration",
    description:
      "Continuous Integration Pipeline using Jenkins",
    image:
      jenkins_ci,
    tags: ["Jenkins", "Maven", "SonarQube", "Nexus"],
    category: "devops",
    github: "https://github.com/Vedant-MAHAjan/Jenkins-CI",
  },
  {
    id: 10,
    title: "Docker with AWS ECR",
    description:
      "A Job Finding App made with React Native, Axios. Users can search for any job coming from API and apply there.",
    image:
      docker_ecs,
    tags: ["AWS", "Docker", "ECS"],
    category: "devops",
    github: "https://github.com/Vedant-MAHAjan/Docker-with-AWS-ECR",
  },
  {
    id: 4,
    title: "Docker for development",
    description:
      "Create a docker image for a NodeJS application with MongoDB backend",
    image:
      docker_node,
    tags: ["Docker", "NodeJS", "Docker-compose", "MongoDB", "Mongoose"],
    category: "devops",
    github: "https://github.com/Vedant-MAHAjan/Node-App-Containerization",
  },
  {
    id: 5,
    title: "Todo Web App",
    description:
      " A Todo Web App made with React JS, Redux",
    image: task_tracker,
    tags: ["React Js", "Local Storage", "State Management"],
    category: "web app",
    github: "https://github.com/Vedant-MAHAjan/Task-Tracker",
  },
  {
    id: 6,
    title: "Continuous Integration - Jenkins, Docker, NodeJS",
    description:
      "Use a Jenkinsfile to push a custom Node.js image to DockerHub on every pull request",
    image: jenkins_docker_node,
    tags: ["Jenkins", "Docker", "NodeJS"],
    category: "web app",
    github: "https://github.com/rishavchanda/Breaking-Bad",
    webapp: "https://breaking-bad-webapp.netlify.app",
  },
  {
    id: 7,
    title: "Tenzies",
    description:
      "This is a dice game where player has to match 10 dice with the same number in least number of dice roles.",
    image:
      tenzies,
    tags: ["ReactJS", "JavaScript", "CSS"],
    category: "web app",
    github: "https://github.com/Vedant-MAHAjan/Tenzies",
    webapp: "https://vedant-mahajan.github.io/Tenzies/",
  },
  {
    id: 8,
    title: "BlackJack",
    description:
      "In this game, you will be playing against the dealer. The goal is to get a hand with a higher total value than the dealer's hand without going over 21.",
    image:
      blackjack,
    tags: ["JavaScript", "HTML", "CSS"],
    category: "web app",
    github: "https://github.com/Vedant-MAHAjan/BlackJack",
    // webapp: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
  },
  {
    id: 8,
    title: "Rock-Paper-Scissors",
    description:
      "This is a simple rock paper scissors game built using HTML, CSS, and JavaScript.",
    image:
      rock,
    tags: ["JavaScript", "HTML", "CSS"],
    category: "web app",
    github: "https://github.com/Vedant-MAHAjan/BlackJack",
    // webapp: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
  }
];

export const blogs = [
  {
    id: 0,
    image: docker_blog,    
    title: "Welcome to Containerverse",    
    description: "The blog introduces Docker as a popular tool in DevOps, emphasizing its role in container technology. It explores the simplicity of containers, Docker's key components like images and Dockerfile, and highlights Docker's architecture, workflow, and coexistence with virtual machines.",
    link: "https://deepdevwithvedant.hashnode.dev/welcome-to-containerverse"
  },
  {
    id: 1,
    image: cloud_blog,    
    title: "Cloud Computing: Making IT Rain",
    description: "The blog explores the transformative impact of cloud computing on technology and businesses. It highlights the key concepts, benefits, and services of cloud computing, emphasizing its role as a revolutionary force in the digital world.",
    link: "https://deepdevwithvedant.hashnode.dev/cloud-computing-making-it-rain"
  },
  {
    id: 3,
    image: devops_blog,
    title: "The DevOps Revolution: Transforming Software Delivery",
    description: "The blog explores the growing influence of DevOps, emphasizing its collaborative approach between development and operations teams. The article outlines the DevOps lifecycle and key tools, showcasing its transformative impact on software delivery.",
    link: "https://deepdevwithvedant.hashnode.dev/the-devops-revolution-transforming-software-delivery"
  }
]


export const education = [
  {
    id: 0,
    school: "St. Francis Institute of Technology, Mumbai",
    date: "2020 - 2024",
    grade: "8.44 CGPA",
    degree: "Bachelor of Engineering - Information Technology",
  },
  {
    id: 1,
    school: "Nirmala Memorial Foundation College, Mumbai",
    date: "2018 - 2020",
    grade: "77%",
    degree: "HSC",
  },
  {
    id: 2,
    school: "Thakur Vidya Mandir, Mumbai",
    date: "2018",
    grade: "92.4%",
    degree: "SSC",
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/flipr.jpeg?alt=media&token=1d72532a-45eb-4c1a-a81a-c9bed9fec543",
    role: "DevOps & Fullstack Engineering Intern",
    company: "Flipr Inovations Pvt. Ltd.",
    date: "Aug 2023 - July 2023",
    desc: "Working on Flipr Platforms, managing DevOps, and streamlining the process with automation.",
    skills: [
      "Docker",
      "Terraform",
      "AWS",
      "EC2",
      "Portainer",
      "Nginx",
      "JavaScript",
      "TypeScript",
      "Node Js",
      " Next Js",
    ],
    doc: "https://media.licdn.com/dms/image/D4D2DAQFlp60ZqHuaFQ/profile-treasury-image-shrink_1280_1280/0/1691180828512?e=1692381600&v=beta&t=mM5Y_NE5EPlQhez5FAN6NLVSKcO_Ojt_9Gq3mnFGkAQ",
  },
  {
    id: 0,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/neurobit.jpeg?alt=media&token=1cacbb7b-e5ea-4efb-9b3d-f5a31b9564ad",
    role: "Frontend Engineer Intern",
    company: "Neurobit",
    date: "June 2023 - Present",
    desc: "Working on the frontend of the web application using ReactJS, Redux, and Material UI.",
    skills: [
      "ReactJS",
      "Redux",
      "NodeJs",
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/Screenshot%20from%202023-05-28%2023-20-46.png?alt=media&token=5570f995-e8f4-4f12-bb2f-73bcf4b20730",
  },
  {
    id: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/flipr.jpeg?alt=media&token=1d72532a-45eb-4c1a-a81a-c9bed9fec543",
    role: "Fullstack Externship",
    company: "Flipr",
    date: "June 2023 - July 2023",
    desc: "Built an employee management full stack web app used Docker and deployed on AWS ec2. I was the top performer in the program.",
    skills: [
      "ReactJS",
      "Redux",
      "NodeJs",
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
      "Docker",
      "AWS",
      "MongoDB",
    ],
  },
  {
    id: 2,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/girlScript.jpeg?alt=media&token=e656a621-cf3c-4230-bf0f-e74b4cec6035",
    role: "Open Source Contributor ",
    company: "GirlScript Summer of Code",
    date: "May 2023 - Present",
    desc: "Contributing to different open-source projects and learn from industry experts",
    doc: "https://media.licdn.com/dms/image/D4D22AQGzSpgFaR4hsQ/feedshare-shrink_800/0/1684079632872?e=1687996800&v=beta&t=i0xWn_k32Oj9SxKfc6rARSbOghXD9Ge6WyEb2p2vvrc",
  },
  {
    id: 3,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/gdsc.jpeg?alt=media&token=c162329c-efaa-4be8-a173-8d3f4c48ea70",
    role: "Android Developer",
    company: "DSC KIIT",
    date: "Nov2021 - Present",
    desc: "As an Android developer at the Google Developers Student Club (GDCS), I have had the opportunity to work on exciting projects and collaborate with talented developers who share my passion for technology. Through my involvement with GDCS, I have also had the opportunity to host and participate in numerous events, including hackathons, study jams, and workshops.",
    skills: [
      "Leadership",
      "Mobile Application Development",
      "Kotlin",
      "XML",
      "Figma",
    ],
  },
  {
    id: 4,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/Rudraksha.jpeg?alt=media&token=8f83f41e-d0a1-486f-9c7f-dd4cd1d09e8d",
    role: "Android Developer Intern",
    company: "Rudraksha Welffare Foundation",
    date: "June 2021 - Oct 2021",
    desc: "As an Android Developer Intern at Rudraksha Welfare Foundation from June 2021 to October 2021, I gained valuable hands-on experience in application development. During my tenure, I contributed to the development of the application's back-end cloud functions using Firebase and implemented a front-end with the MVVM structure, which was designed using Figma. I also added a one-to-one video call feature, conceptualized new features, and optimized app performance. This internship helped me enhance my skills in Android development and gave me an opportunity to work in a collaborative team environment.",
    skills: [
      "Android",
      "Java",
      "Kotlin",
      "XML",
      "Node Js",
      "Cloud Firestore",
      "Firebase",
      "Figma",
    ],
    doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/WhatsApp%20Image%202023-05-05%20at%2012.07.39%20AM.jpeg?alt=media&token=9f0e1648-568b-422d-bd0b-1f125f722245",
  },
];


export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
