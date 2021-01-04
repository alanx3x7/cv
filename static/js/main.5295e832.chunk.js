(this["webpackJsonpcv-website-react"]=this["webpackJsonpcv-website-react"]||[]).push([[0],{27:function(e,n,i){"use strict";i.r(n);var t=i(0),s=i(1),a=i.n(s),c=i(15),r=i.n(c),o=i(8),l=i(2);function d(e){return Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)(o.b,{className:"nav-link navbar-text-style",to:e.navLink,children:e.navText})})}function j(e){return Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)("a",{className:"nav-link navbar-icon-style",href:e.navLink,children:Object(t.jsx)("i",{className:e.icon})})})}var m=function(){return Object(t.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark navbar-main fixed-top",children:[Object(t.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(t.jsx)("span",{className:"navbar-toggler-icon"})}),Object(t.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(t.jsxs)("ul",{className:"navbar-nav",children:[Object(t.jsx)(d,{navLink:"/",navText:"About"}),Object(t.jsx)(d,{navLink:"/projects",navText:"Projects"}),Object(t.jsx)(d,{navLink:"/wip",navText:"WIP"})]}),Object(t.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(t.jsx)(j,{navLink:"https://github.com/alanx3x7",icon:"fab fa-github"}),Object(t.jsx)(j,{navLink:"https://www.linkedin.com/in/alan-lai-0129",icon:"fab fa-linkedin"})]})]})]})};var p=function(){return Object(t.jsxs)("div",{className:"home-title",children:[Object(t.jsx)("h1",{children:"Hi, I'm Alan"}),Object(t.jsx)("p",{children:"MSE Robotics @ Johns Hopkins University "})]})};var b=function(){return Object(t.jsxs)("div",{className:"home-education",children:[Object(t.jsx)("h2",{children:"Education"}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{className:"col-lg-3 education-left position-relative",children:Object(t.jsx)("img",{className:"education-icon",src:"images/university.shield.small.white.png",alt:"Johns Hopkins University Logo"})}),Object(t.jsxs)("div",{className:"col-lg-9",children:[Object(t.jsx)("h2",{children:"Johns Hopkins University"}),Object(t.jsxs)("ul",{children:[Object(t.jsxs)("li",{children:["MSE Robotics (GPA: 4.0/4.0) ",Object(t.jsx)("span",{className:"left-align",children:"Aug 2020 ~ May 2021"})]}),Object(t.jsxs)("li",{children:["BS Computer Science (GPA: 4.0/4.0) ",Object(t.jsx)("span",{className:"left-align",children:"Aug 2016 ~ May 2020"})]}),Object(t.jsxs)("li",{children:["BS Biomedical Engineer (GPA: 4.0/4.0) ",Object(t.jsx)("span",{className:"left-align",children:"Aug 2016 ~ May 2020"})]}),Object(t.jsx)("br",{}),Object(t.jsxs)("li",{children:["Dean's List (GPA ",">"," 3.5) ",Object(t.jsx)("span",{className:"left-align",children:"All semesters"})]}),Object(t.jsxs)("li",{children:["Richard J. Johns Award ",Object(t.jsx)("span",{className:"left-align",children:"2020"})]}),Object(t.jsxs)("li",{children:["Outstanding Senior Award ",Object(t.jsx)("span",{className:"left-align",children:"2020"})]}),Object(t.jsxs)("li",{children:["Most Valuable Peer Award ",Object(t.jsx)("span",{className:"left-align",children:"2019"})]})]})]})]})]})},x=[{id:1,icon:"images/logo-lcsr.jpg",position:"Research Assistant",company:"LCSR JHU Robotics",dates:"Sep 2019 - Present",location:"Baltimore, MD",description:["Implemented deep learning vision algorithms for mosquito detection (>97% accuracy) and pose estimation (<0.35 mm RMSE) for autonomous robotic salivary gland extraction","Integrated model with ROS and Firefly DL camera for real-time inference for malaria vaccine production system"],skills:["Python","C++","ROS","DL"]},{id:2,icon:"images/logo-jhu.png",position:"Head Course Assistant",company:"Department of Computer Science, JHU",dates:"Sep 2018 - Present",location:"Baltimore, MD",description:["Led CAs for Computer Vision & Computer Systems Fundamentals","Held weekly office hours to assist understanding for 120+ students per semester with homework and class material","Produced problem set and optimize projects for students to improve their theoretical and coding skills","Designed grading rubrics, automated grading scripts, and graded student homework"],skills:["Python","C++","C","Assembly (6502, MIPS, x86)"]},{id:3,icon:"images/logo-neocis.png",position:"Software Engineer Intern",company:"Neocis Inc.",dates:"Jun 2020 - Aug 2020",location:"Miami, FL",description:["Automated process of manipulator arm calibration via IR marker tracking","Engineered an algorithm for improving Yomi dental surgery robot manipulator accuracy by 50% via calibration and simultaneous registration of manipulator and tracker arms","Transformed said algorithm as a control software utility, and drafted relevant software requirement specification (SRS), ECO, and functional testing documents"],skills:["Python","C++","C"]},{id:4,icon:"images/logo-cbid.png",position:"Design Team Member",company:"Center for Bioengineering Innovation & Design",dates:"Apr 2017 - May 2020",location:"Baltimore, MD",description:["Developed a novel piezoelectric bone-cutting medical device that allows surgeons to perform minimally invasive craniosynostosis surgery while minimizing dural injuries and blood loss","Conducted needs identification, root cause analysis, stakeholder and competitive analysis, solution concept generation, prototyping, and testing, following an iterative \u201cSpiral Innovation\u201d model","Used computer aided design and finite element analysis to design a viable tip for production","Worked alongside pediatric neurosurgeons at the Johns Hopkins Hospital","Led the engineering team and served as main point of contact with industry partners"],skills:["Arduino","C++","MATLAB","CAD"]}];function h(e){return Object(t.jsx)("div",{className:"col-sm-2 position-relative experience-card-left",children:Object(t.jsx)("img",{className:"experience-icon",src:e.icon,alt:"Johns Hopkins University Logo"})})}function u(e){return Object(t.jsx)("ul",{id:"experience-description-"+e.id,children:e.description.map((function(e,n){return Object(t.jsx)("li",{children:e},n)}))})}function O(e){return Object(t.jsxs)("div",{className:"col-sm-10 experience-content",children:[Object(t.jsxs)("h4",{children:[e.position," ",Object(t.jsx)("span",{className:"left-align experience-date",children:e.date})]}),Object(t.jsxs)("h5",{children:[e.company," ",Object(t.jsx)("span",{className:"left-align",children:e.location})]}),Object(t.jsx)(u,{description:e.description,id:e.id}),e.skills.map((function(e,n){return Object(t.jsxs)("span",{className:"badge rounded-pill bg-primary skill-token",children:[" ",e," "]},n)})),Object(t.jsx)("button",{id:"experience-button-"+e.id,onClick:function(e){console.log(e),console.log(e.target)},className:"btn btn-outline-primary expand-button btn-sm d-none",children:"Expand"})]})}function v(e){return Object(t.jsx)("div",{className:"col-xl-6",children:Object(t.jsxs)("div",{className:"row experience-card rounded",children:[Object(t.jsx)(h,{icon:e.experience.icon}),Object(t.jsx)(O,{position:e.experience.position,description:e.experience.description,company:e.experience.company,date:e.experience.dates,skills:e.experience.skills,location:e.experience.location,id:e.id})]})})}var g=function(){return Object(t.jsxs)("div",{className:"home-experience",children:[Object(t.jsx)("h2",{children:"Experience"}),Object(t.jsx)("div",{className:"row",children:x.map((function(e){return Object(t.jsx)(v,{id:e.id,experience:e},e.id)}))})]})},f=[{name:"Python",expertise:10},{name:"C++",expertise:10},{name:"Java",expertise:8},{name:"MATLAB",expertise:8},{name:"C",expertise:7},{name:"Assembly",expertise:5},{name:"HTML/CSS",expertise:4},{name:"Javascript",expertise:4}],N=[{name:"Computer Vision",expertise:10},{name:"Deep Learning",expertise:8},{name:"Robot Kinematics",expertise:7},{name:"Arduino",expertise:6},{name:"Machine Learning",expertise:6},{name:"Mechatronics",expertise:6},{name:"Robot Dynamics",expertise:5},{name:"Web Development/React",expertise:"This"}],y="\u2b50",k="\u2b50";function w(e){return Object(t.jsxs)("li",{children:[e.name,Object(t.jsx)("span",{className:"left-align",children:function(e,n){if("number"!==typeof e)return e;for(var i="",t=0;t<e/2;t++)i+=n;return i}(e.expertise,e.icon)})]})}var A=function(){return Object(t.jsxs)("div",{className:"home-skills",children:[Object(t.jsx)("h2",{children:"Skills"}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{className:"col-md-6 skill-col",children:Object(t.jsxs)("div",{children:[Object(t.jsx)("h4",{children:"Languages"}),f.map((function(e,n){return Object(t.jsx)(w,{name:e.name,expertise:e.expertise,icon:y},n)}))]})}),Object(t.jsx)("div",{className:"col-md-6 skill-col",children:Object(t.jsxs)("div",{children:[Object(t.jsx)("h4",{children:"Technical Skills"}),N.map((function(e,n){return Object(t.jsx)(w,{name:e.name,expertise:e.expertise,icon:k},n)}))]})})]})]})};var S=function(){function e(){for(var e=document.querySelectorAll(".experience-content"),n=0;n<e.length;n++){var i=e[n].children[2];i.scrollHeight>i.clientHeight?e[n].lastChild.classList.remove("d-none"):e[n].lastChild.classList.add("d-none")}}return Object(s.useEffect)((function(){e(),window.addEventListener("resize",e)}),[]),Object(t.jsxs)("div",{className:"navbar-spacing",children:[Object(t.jsx)(p,{}),Object(t.jsx)(b,{}),Object(t.jsx)(g,{}),Object(t.jsx)(A,{})]})};var C=function(){return Object(t.jsxs)("div",{className:"position-relative",children:[Object(t.jsx)("div",{className:"projects-title-page-top",children:Object(t.jsx)("h1",{children:"Projects"})}),Object(t.jsx)("div",{className:"projects-title-page-bottom",children:Object(t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 3000 185.4",children:Object(t.jsx)("path",{fill:"currentColor",d:"M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z"})})})]})};var L=function(){return Object(t.jsx)("div",{className:"col-md-4 project-tile",children:Object(t.jsx)("h3",{children:"Project Title"})})};var M=function(){return Object(t.jsx)("div",{className:"project-tile-grid",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)(L,{}),Object(t.jsx)(L,{}),Object(t.jsx)(L,{}),Object(t.jsx)(L,{}),Object(t.jsx)(L,{})]})})};var P=function(){return Object(t.jsxs)("section",{className:"project-page-main navbar-spacing",children:[Object(t.jsx)(C,{}),Object(t.jsx)(M,{})]})};var D=function(){return Object(t.jsx)("div",{className:"navbar-spacing",children:Object(t.jsx)("h1",{children:"This is where WIP go"})})};var H=function(){var e=(new Date).getFullYear();return Object(t.jsxs)("div",{className:"bottom_container",children:[Object(t.jsx)("a",{className:"footer-link",href:"https://www.linkedin.com/in/alan-lai-0129",children:"LinkedIn"}),Object(t.jsx)("a",{className:"footer-link",href:"https://github.com/alanx3x7",children:"GitHub"}),Object(t.jsx)("a",{className:"footer-link",href:"https://github.com/alanx3x7",children:"Website"}),Object(t.jsxs)("p",{className:"copyright",children:["\xa9 ",e," Alan Lai"]})]})};var J=function(){return Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)(m,{}),Object(t.jsxs)(l.c,{children:[Object(t.jsx)(l.a,{path:"/projects",children:Object(t.jsx)(P,{})}),Object(t.jsx)(l.a,{path:"/wip",children:Object(t.jsx)(D,{})}),Object(t.jsx)(l.a,{path:"/",component:S})]}),Object(t.jsx)(H,{})]})};r.a.render(Object(t.jsx)(a.a.StrictMode,{children:Object(t.jsx)(o.a,{children:Object(t.jsx)(J,{})})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.5295e832.chunk.js.map