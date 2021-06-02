import React from 'react';
import {GithubFilled, FacebookFilled, LinkedinFilled} from '@ant-design/icons';

export interface Expeience {
  time: string;
  position: string;
  location: string;
  companyUrl: string;
  company:string;
  details: Array<string>;
}

export interface Education {
  time: string,
  school: string,
  major: string,
  gpa: string,
  relevantCoursework: Array<string>
}

export interface TechnicalSkills {
  [key: string]: Array<string>
}

export interface ResumeData {
  workExperience: Array<Expeience>,
  additionalExperience: Array<Expeience>,
  technicalSkills: TechnicalSkills,
  educations: Array<Education>
}

export interface PortfolioItem {
  imageUrl: string,
  title: string,
  description: string,
  link: string
}

export const coverText = {
  mainTitle: 'Hi, my name is Sateesh Kolluru',
  subTtile: 'A Software Engineer in Philadelfia'
};

export const aboutText = {
  title: 'About Me',
  content: 'My name is Sateesh Kolluru. I am currently a Software Engineer at Dell. I graduated from Villanova University University in December 2010 with a Masters. in Computer Science. I love Engineering solutions and exploring newest technologies.' 
}

export const socialMediaInfo = [
  {
    icon: <GithubFilled/>,
    url: 'https://github.com/vkolluru15'
  },
  {
    icon: <LinkedinFilled/>,
    url: 'https://www.linkedin.com/in/sateesh-kolluru-14901411/'
  }
];


export const resumeData: ResumeData = {
  workExperience: [
    {
      time: 'November 2017 - Present',
      position: 'Sr Principal Engineer',
      company: 'Dell',
      location: 'Chesterbrook, PA',
      companyUrl: 'https://boomi.com/',
      details: [
        'Big Data Engineering at Boomi, building data pipelines, transformations and dev ops on data models.',
        "Built datalake for the company from the ground zero using S3, Apache kafka, Apache flink, Apachespark.",
        "Built data ingestion pipelines continuously ingest around 100GB of data to data lake every day using Apache flink and Apache kafka.",
        "Managed Kubernetes to host the ingestion jobs to run on.",
        "Devops engineering to create playbooks using ansible and cloudformation to create aws resources needed.",
      ]
    },
    {
      time: 'April 2017 - September 2017',
      position: 'Principal Engineer',
      company: 'Vertex Inc',
      location: 'King of Prussia, PA',
      companyUrl: 'https://www.vertexinc.com/',
      details: [
        'Full stack development for support the sales and consumer tax software that is used to calculate the taxes for respective purposes by the customers',
        'Migrated monolithic app to independent microservices to facilitate smooth transition from Flex to React JS',
        'Code review and offer constructive suggestions to teammates to boost up program performance, test coverage and SEO'        
      ]
    },
    {
      time: 'October 2014 - April 2017',
      position: 'Senior Software Engineer',
      location: 'Conshohocken, PA',
      company: 'Morgan Stanley',
      companyUrl: 'https://www.morganstanley.com/',
      details: [
        'Built data ingestion pipeline from the file system and oracle database using java based application.',
        'Developed transformations using R to transform the raw ingested data and feed it to the linear regression model to predict the values.',
        'Full stack development for internal reporting system.'        
      ]
    },
    {
      time: 'January 2012 - September 2014',
      position: 'Senior Software Engineer',
      company: 'Amerisource Bergen Inc',
      location: 'Chesterbrook, PA',
      companyUrl: 'https://www.amerisourcebergen.com/',
      details: [
        'Full stack development for internal tools required by pricing team.',
        'Vendavo configuration engineer to implement Vendavo pricing suite.'        
      ]
    }
  ],
  additionalExperience:[
    {
      time: 'April 2011 - December 2011',
      position: 'Software Engineer',
      company: 'Vanguard',
      location: 'Malvern, PA',
      companyUrl: 'https://investor.vanguard.com/corporate-portal/',
      details: [
        'Fullstack development of a web application that serves the 401k accounts of retail/Institutional customers.',
        'Developed a cold call application that integrates CRm and Business intelligence application.'
      ]
    },
    
  ],

  technicalSkills: {
    'Languages': ['Javascript', 'R', 'Python', 'Java',  'PL/SQL', 'HTML & CSS'],
    'Web Frameworks': ['Hibernate', 'Flask', 'Spring', '.NET', 'React'],
    'Database': ['Oracle', 'Postgres SQL', 'My SQL', "Dynamo DB"],
    'Infrastracture': ['Git', 'Kubernetes', 'AWS' ],
  },

  educations: [
    {
      time: 'September 2008 - December 2010',
      school: 'Villanova University',
      major: 'Masters in Computer Science',
      gpa: '3.83/4.00',
      relevantCoursework: ['Full Stack Web Development', 'Data Structures', 'Algorithms', 'Statistics', 'Operating System', 'Object Oriented Programming']
    }
  ]
};

export const portfolioData: Array<PortfolioItem> = [
  {
    imageUrl: 'images/portfolio/crossy-road.png', // url here refers to the path under public folder, but you can use general https urls too!
    title: 'Game: VR Crossy Road',
    description: 'A VR crossy road game.',
    link: 'games/crossy-road/index.html', // url here refers to the path under public folder, but you can use general https urls too!
  },
  {
    imageUrl: 'images/portfolio/comics-screenshot.jpg',
    title: 'Comic: What if I am a twin',
    description: 'A self made comic with Bitmoji.',
    link: 'images/portfolio/comics.pdf',
  },
  {
    imageUrl: 'images/portfolio/kirby.png',
    title: 'Game: Kirby vs. Missile',
    description: 'A mini kirby game. Try to reach as many stars as your can while dodging the middles.',
    link: 'games/kirby/index.html',
  }
];
