import project1 from "../assests/DSA_question.png";
import project2 from "../assests/hackerCup.png";
import project3 from "../assests/portfolio.png";
import project4 from "../assests/rating_codechef.png";

export const HERO_CONTENT = `I am a passionate Frontend Developer. I have honed my skills in Frontend technologies like React. My goal is to leverage my expertise to create innovative solutions that deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated Frontend Developer with a passion of creating the efficent websites. Currently I am a B.Tech final year student with branch Information Technology. I have worked with a variety of technologies, including React, Javascript, Tailwind CSS, HTML. I have also enhanced my skills in the Data Structure and Algorithm and solving DSA Question.`;
 
export const EDUCATION = [
    {
        year: "2021 - 2025", 
        deg: "B.Tech",
        sch: "Rajkiya Engineering College Bijnor",
        board: "AKTU",
        p: "Information Technology",
    }, 

    {
        year: "2019 - 2020",
        deg: "Intermediate",
        sch: "Modern Era Public School",
        board: "CBSE",
        p: "88.0%",
    },
    
    {
        year: "2017 - 2018",
        deg: "High School",
        sch: "Modern Era Public School",
        board: "CBSE",
        p: "92.0%",
    },
]; 

export const PROJECTS_And_Achievements = [
    {
        title: "Portfolio",
        image: project3,
        description: "My portfolio using react.",
        technologies: [
            {
                tech: "HTML",
                link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            },
            
            {
                tech: "TailwindCSS",
                link: "https://tailwindcss.com/",
            },

            {
                tech: "JavaScript",
                link: "https://www.w3schools.com/js/",
            },

            {
                tech: "React",
                link: "https://react.dev/",
            },

            {
                tech: "FramerMotion",
                link: "https://www.framer.com/motion/",
            },
        ],
    },

    {
        title: "Hacker Cup",
        image: project2,
        description: "Secured 3617th place at META HACKER CUP 2023 Round 2.",        
        technologies: [
            {
                tech: "Certificate",
                link: "https://www.facebook.com/codingcompetitions/hacker-cup/2023/certificate/857248022671915?source=google",
            },
        ],
    },

    {
        title: "Two Star Coder On Codechef",
        image: project4,
        description: "Two star coder on codehcef with a max rating of 1531.",
        technologies: [
            {
                tech: "Codechef_ID",
                link: "https://www.codechef.com/users/recb_0186",
            },
        ],
    },

    {
        title: "Total 737 DSA Question",
        image: project1, 
        description: "Soving a total on 737 DSA question on Leetcode, Codechef, GeeksForGeeks and Codeforces.",
        technologies: [
            {
                tech: "Leetcode_ID",
                link: "https://leetcode.com/u/Krishna_Kumar_/",
            },

            {
                tech: "Codechef_ID",
                link: "https://www.codechef.com/users/recb_0186",
            },

            {
                tech: "GeeksforGeeks_ID",
                link: "https://www.geeksforgeeks.org/user/krishna_kumar_18/",
            },

            {
                tech: "Codeforces_ID",
                link: "https://codeforces.com/profile/Krishna_Kumar18",
            },
        ],
    },
];

export const CONTACT = {
    address: "Mukerpur Khema Urf Bukhara, Bijnor, Uttar Pradesh-246701",
    phoneNo: "+917505148457",
    email: "krishnakumar750514@gmail.com",
};