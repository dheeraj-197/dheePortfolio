import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        client : 'Adani',
        name: 'FIRLO (First India Logistics)',
        description: "Me and my team built an AI-powered Plant-Logistic application. This application provide solutions around Manufacturing, Logistics and Supply Chain Functions and also requirements around Inbound / Outbound and Production related processes. This include RFID based Plant Logistics Management System, we call it PLMS, GPS based Vehicle Tracking Systems and Asset, Inventory and Warehouse Management Systems.   ",
        tools: ['ReactJS', 'Redux', 'ES6', 'Bootstrap'],
        role: 'Front End Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        client : 'Verizon',
        name: 'Verizon (CCP Migration)',
        description: 'This application is related with 5G networking, that provide overall survillance to the client to track and manage the progress of ongoing projects in multiple countries.',
        tools: ['ReactJS','javascript', 'Bootstrap','CSS','HTML5'],
        role: 'Front End Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        client : 'IBM',
        name: 'IBM Referral Portal',
        description: 'We have developed a Web Application for IBM Recruitment Process. In this system Super admin, Admin Recruiter, HR Recruiter, Employee and Candidate were in the main roles. In this system Super Admin enrolls Admin recruiter and Admin recruiter creates jobs for particular Country and HR recruiter enrolls Employee who upload their LinkedIn/Facebook/ Twitter contacts in the account for whom the HR recruiter do the scoring and matching process and find out contacts that are most suitable for the job. Once matching done HR recruiter can see those connections on their accounts and send a request to the employee to invite that candidate to apply for the job. The jobs have referral bonus as well which goes to the Employee on referral.',        
        tools: ['HTML5', 'CSS3', 'JavaScript', 'jQuery Ajax', "Bootstrap"],
        code: '',
        role: 'Front End Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        client : 'Infosys',
        name: 'Infosys Referral Portal',
        description: "Functionality of this portal is same as that of Infosys Referral Portal.",
        tools: ['HTML5', 'CSS3', 'JavaScript', 'jQuery Ajax', "Bootstrap"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Front End Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },