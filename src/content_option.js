import image from "./images/image.jpg";
import logo from "../src/images/airborne-innovations-logo.png";

const logotext = "ALEX";
const meta = {
    title: "Alex Moran",
    description: "I'm Alex Moran, a Platform Engineer.",
};

const ailogo = {
    img: logo,
    alt: "Airborne Innovations Logo",
};

const introdata = {
    title: "I’m Alex Moran",
    animated: {
        first: "I love coding",
        second: "I am a Platform Engineer",
        third: "I develop mobile apps",
    },
    // decribe me as a person that have many years of devops experience and have a passion for coding while also loving outdoor sports, traveling and esports.
    description: "I am a Platform Engineer with a passion for coding and a love for developing mobile apps. I have many years of devops experience and have a passion for coding while also loving outdoor sports, traveling and esports. I am a Platform Engineer with a passion for coding and a love for developing mobile apps. I have many years of devops experience and have a passion for coding while also loving outdoor sports, traveling and esports. I am a Platform Engineer with a passion for coding and a love for developing mobile apps. I have many years of devops experience and have a passion for coding while also loving outdoor sports, traveling and esports.",
    your_img_url: image,
};

const dataabout = {
    title: "abit about my self",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Django",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [{
        title: "DevOps Engineer",
        description: "I've worked as a DevOps Engineer in Wall Street for 5 years and have experience with Azure, AWS, Digital Ocean, and Google Cloud.",
    },
    {
        title: "Full Stack Developer",
        description: "I've worked as a Full Stack Developer for 7 years and have experience with Python, Django, Javascript, React, and Jquery.",
    },
    {
        title: "Sysadmin",
        description: "I've worked as a Sysadmin for 10 years and have experience with Linux, Windows, and Mac OS.",
    },
];

const dataportfolio = [{
        img: "https://fiatcafenyc.com/wp-content/uploads/2018/02/cropped-fiat_menu_hold.jpg",
        description: "French Italian Restaurant located in Nolita Soho NYC.",
        link: "https://www.fiatcafenyc.com/",
    },
    {
        img: "https://abadiq.com/logo-no-background.svg",
        description: "Medical Billing for you business.",
        link: "https://www.abadiq.com/",
    }];

const contactConfig = {
    YOUR_EMAIL: "alex@cybitnetworks.com",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    ailogo
};