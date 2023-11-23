import Project1 from './assets/project1.jpeg';
import Project2 from './assets/project2.jpg';
import Project3 from './assets/project3.jpeg';
import Project4 from './assets/project4.jpeg';
import Project5 from './assets/project5.jpg';
import Project6 from './assets/project6.jpg';

import Testimonial1 from './assets/testimonial1.jpg';
import Testimonial2 from './assets/testimonial2.jpg';
import Testimonial3 from './assets/testimonial3.jpg';
import Testimonial4 from './assets/testimonial4.jpg';
import Testimonial5 from './assets/testimonial5.jpg';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Works',
    path: 'work',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  {
    name: 'Testimonials',
    path: 'testimonial',
  },
  {
    name: 'Pricing',
    path: 'pricing',
  },
  {
    name: 'Blog',
    path: 'blog',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    name: 'Web Development',
    title: 'Crafting Modern and Responsive Websites',
    description:
      'Key Services:- Frontend Development (HTML, CSS, JavaScript, ReactJs) - Backend Development (Node.js, Express) - Database Design and Implementation - API Integration',
  },  
  {
    id: 2,
    name: ' Project Management ',
    title: ' Bringing Visions to Life ',
    description:
      ' Key Services:- Reliable Execution. - Experienced Team. - On-time Delivery. - Efficient Communication. ',
  },
  {
    id: 3,
    name: '  Maintenance and Optimization Services ',
    title: ' Keeping Your Website at Its Best ',
    description:
      'I go beyond the launch, offering ongoing maintenance, SEO optimization, performance tuning, and security enhancements to keep your website in top shape.',
  },

  {
    id: 4,
    name: ' E-commerce Solutions ',
    title: ' Robust E-commerce Platforms ',
    description:
      'Key Services:- Platform Setup (WordPress, Shopify, WooCommerce). - Payment Gateway Integration. - Custom Feature Development. ',
  },
  {
    id: 5,
    name: ' Coaching ',
    title: ' Personalized Development Training ',
    description:
      'Key Coaching Areas:- Programming Fundamentals. - Web Development Technologies (HTML, CSS, BOOTSTRAP, MERN STACK etc). - Best Coding Practices.',
  },
];

export const skills = [
    {
      id: 1,
      name: 'HTML / CSS',
      percentage: 100,
      description:
        'I have a deep understanding of HTML and CSS, allowing me to create visually appealing and responsive user interfaces. My proficiency includes building layouts, styling elements, and ensuring cross-browser compatibility.',
    },
    {
      id: 2,
      name: 'JavaScript',
      percentage: 85,
      description:
        'With a solid foundation in JavaScript, I can develop dynamic and interactive web applications. My expertise includes working with modern frameworks and libraries to enhance user experiences.',
    },
    {
      id: 3,
      name: 'ReactJS',
      percentage: 60,
      description:
        'I am proficient in building web applications using ReactJS. I have hands-on experience with component-based architecture, state management, and integrating APIs to create efficient and scalable applications.',
    },
    {
      id: 4,
      name: 'NodeJS',
      percentage: 70,
      description:
        'As a NodeJS developer, I specialize in building server-side applications. My skills include creating RESTful APIs, handling asynchronous operations, and optimizing server performance.',
    },
    {
      id: 5,
      name: 'WordPress',
      percentage: 82,
      description:
        'I am experienced in WordPress development, including theme customization, plugin integration, and overall website optimization. I create robust and user-friendly WordPress solutions tailored to client needs.',
    },
    {
      id: 6,
      name: 'Bootstrap',
      percentage: 95,
      description:
        'Bootstrap is one of my go-to frameworks for front-end development. I leverage its responsive grid system and pre-designed components to create consistent and visually appealing websites with efficiency.',
    },
    {
      id: 7,
      name: 'Tailwind CSS',
      percentage: 51,
      description:
        'I have basic proficiency in Tailwind CSS, utilizing its utility-first approach to streamline the styling process. While still expanding my skills in Tailwind, I can efficiently create clean and maintainable styles.',
    },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: 'Job',
    title: 'Zorro',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    id: 2,
    img: Project2,
    category: 'Volunteer',
    title: 'Gooir',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    id: 3,
    img: Project3,
    category: 'Personal',
    title: 'Explore',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  
];

export const cv = [
  {
    id: 1,
    title: 'B.SC, Computer Science',
    subtitle: 'University of Nigeria, Nsukka',
    date: '2019 - 2022',
    description:
      'Earned a Bachelor of Science degree in Computer Science from the University of Nigeria, Nsukka. Developed a strong foundation in computer science principles, including algorithms, data structures, and software development.',
    category: 'education',
  },
  {
    id: 2,
    title: 'NCE, Computer / Mathematics Education',
    subtitle: 'Federal College of Education, Eha-amufu',
    date: '2016 - 2019',
    description:
      'Completed a National Certificate in Education (NCE) with a focus on Computer and Mathematics Education at the Federal College of Education, Eha-amufu. Acquired pedagogical skills and expertise in teaching computer and mathematics.',
    category: 'education',
  },
  {
    id: 3,
    title: 'Web Development',
    subtitle: 'Utiva Programming School Course',
    date: '2022',
    description:
      'Successfully completed a comprehensive Web Development course at Utiva Programming School. Acquired practical skills in full-stack web development, including front-end and back-end technologies, and gained hands-on experience in building dynamic and responsive web applications.',
    category: 'education',
  },

  {
    id: 1,
    title: 'Intern, Web Development',
    subtitle: 'Enugu Tech Skill project',
    date: 'Jan 2022 - August 2022',
    description:
      'As an intern at Enugu Tech Skill project, I gained practical experience in web development. Worked closely with senior developers to build and maintain web applications. Developed proficiency in HTML, CSS, and JavaScript. Completed tasks such as bug fixing, feature implementation, and participated in team meetings.',
    category: 'experience',
  },
  {
    id: 2,
    title: 'Freelance Web Developer',
    subtitle: 'Self-Employed',
    date: 'January 2021 - Present',
    description:
      'Embarked on a freelancing journey to apply and expand my web development skills. Collaborated with clients to understand their requirements and delivered custom website solutions. Developed proficiency in client communication, project management, and problem-solving.',
    category: 'experience',
  },
  {
    id: 3,
    title: 'Personal Projects',
    subtitle: 'Various',
    date: 'Ongoing',
    description:
      'Continuously working on personal projects to enhance my programming skills. Projects include building web applications, experimenting with new technologies, and contributing to open-source projects. This hands-on experience has strengthened my understanding of programming concepts and best practices.',
    category: 'experience',
  },
];

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: 'Barbara Wilson',
    author: 'CEO Company',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    img: Testimonial2,
    name: 'Charlie Smith',
    author: 'Designer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    img: Testimonial3,
    name: 'Roy Wang',
    author: 'Manager GYM',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    img: Testimonial4,
    name: 'Jennifer Smith',
    author: 'CEO & Founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 5,
    img: Testimonial5,
    name: 'Paul Freeman',
    author: 'Photographer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
