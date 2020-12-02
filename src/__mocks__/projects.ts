import { Project } from "../models";
import { sanntek, zengarden, prodigy, recippy } from "./img";

export const projects: Project[] = [
  {
    id: "1",
    title: "SannTek",
    content:
      '# Hey there it is my best works and so on so far \n\n```tsx\nimport React from "react";\nimport Highlighter from "react-syntax-highlighter";\nimport { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";\n\ninterface Props {\n  language: string;\n  value: string;\n}\n\nexport const CodeBlock: React.FC<Props> = ({ language, value }) => {\n  console.log(language);\n\n  return (\n    <Highlighter style={atomOneDark} language={"javascript"}>\n      {value}\n    </Highlighter>\n  );\n};\n```',
    path: "sanntek",
    link: "test",
    code_link: "test",
    img: [
      {
        url: sanntek,
      },
    ],
  },
  {
    id: "5",
    title: "Recippy",
    content:
      '# Hey there it is my best works and so on so far \n\n```tsx\nimport React from "react";\nimport Highlighter from "react-syntax-highlighter";\nimport { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";\n\ninterface Props {\n  language: string;\n  value: string;\n}\n\nexport const CodeBlock: React.FC<Props> = ({ language, value }) => {\n  console.log(language);\n\n  return (\n    <Highlighter style={atomOneDark} language={"javascript"}>\n      {value}\n    </Highlighter>\n  );\n};\n```',
    path: "recippy",
    link: "test",
    code_link: "test",
    img: [
      {
        url: recippy,
      },
    ],
  },
  {
    id: "2",
    title: "Prodigy",
    path: "prodigy",
    content: `# Prodigy

## [Demo](https://prodigy.rufataliyev.com/app/) | [Github](https://github.com/rufataliy/ProdigyServer)

This project is inspired by my previous work experience as a language instructor. I was keeping track of my students from different sources on paper. Also, most of my teaching materials were paper-based. 
I decided to merge all main features of teaching management in a web application that will simplify the teaching and learning process.
## Schedule

![schedule.jpg](https://api.rufataliyev.com/uploads/schedule_399b9666d5.jpg)

As an instructor, you need to keep track of your schedule and plan your week or day. The same is applicable to the students. 
I utilized a scheduling library called [FullCalendar](https://fullcalendar.io/) that is tailored well for this purpose providing monthly, weekly and daily views for the events. This enables teachers to consult their schedule with ease and, also, students are able to see what classes they are assigned to. 
Classes can be individual or group. There is a possibility to create recurring classes or one time events. The teacher can add registered students to the class and assign a program (curriculum) to the class. Once a program is assigned all the students of the class will have access to the program all its sub-parts like lessons and sections.

![class model.jpg](https://api.rufataliyev.com/uploads/class_model_c1cfa68b47.jpg)
## Resources
I had a hard time keeping all my resources in one location that could be easily and partially shared with my students. Coming from this point, I took a modular approach to the modeling resources part. 
I designed a data model hierarchy of three major elements. Programs that can hold lessons that consist of sections. But lessons and sections are independent of the program and can be assigned and reused for other programs and lessons. The reason for this decision was that sometimes you need to build customized programs. For example, a teacher might need a program that contains some parts from beginner materials and some parts from intermediate ones. 

![sections.jpg](https://api.rufataliyev.com/uploads/sections_c1657d6c47.jpg)

There is also the vocabulary part but it is not attached to any model yet, like programs or lessons.
## Technologies and services
## Front-end
The front-end part of the application is built on [React](https://reactjs.org/) using [CRA](https://create-react-app.dev/). I chose [React](https://reactjs.org/)  because the application is a dynamic and lives behind an authentication gate, so I was not concerned about SEO. Speaking of authentication, I preferred not to handle user data and deferred this authentication to [Auth0 ](https://auth0.com/). It is a very comprehensive platform that can be integrated with numerous other services with multiple types of authentication methods. 
In the case of Prodigy, the user is redirected to the Auth0 server when he or she tries to access the app. After a successful login user will be redirected to the application with an access token.
Once the user logged in the Prodigy server gets some of the user data from [Auth0 ](https://auth0.com/) like email and name which later used for authorization. 
## UI components
Speaking of UI components, initially, I built the UI interface using [Antd ](https://ant.design/) which turned out to be over-complicated for my use case. So I switched to [React Bootstrap](https://react-bootstrap.github.io/). i was previously familiar with [Bootstrap  ](https://getbootstrap.com/) so It was quite easy migrate from [Antd ](https://ant.design/) to [Bootstrap  ](https://getbootstrap.com/). Also, styling with bootstrap CSS classes made my development faster and easier as I didn't need to write much CSS and focus on building features. 
## Back-end
Coming to the back-end, I decided to build my server with [Nodejs ](https://nodejs.org/en/) as it is fast and very well designed for dynamic applications. 
## Data structure
In terms of database, I decided to try [MongoDB](https://www.mongodb.com/ ) out. It was a good experience to learn how no-SQL databases work and how [MongoDB](https://www.mongodb.com/ ) indexing can make querying fast but I don't think no-SQL is the best choice when it comes to multi-relational data schemes.

I had a hard time designing relations between programs, lessons, and sections models and their relationship with users. Generally, in the app users have two types of relationship with the data: authors who created the data and non-authors that can only read the data. My challenge was to make the relationship between users and programs and its sub-part as optimal as possible to minimize routing and requests. 

I decided to keep user collection clean and track who can access program resources in programs collection. Programs collection also contains references to the lessons that attached to a program. So entry point to the resources for students in the class that a program was assigned to is [/programs](https://prodigy.rufataliyev.com/app/programs) endpoint. When a student hits programs he gets the list of programs that his or her class has access to. When the user tries to access lessons [programs/:programid/lessons/](https://prodigy.rufataliyev.com/app/programs/5eb8b9bfc5acb33858a35521/lessons/) endpoint is hit and server through programs checks authorization and populates the lessons field of the chosen program and sends back a list of lessons. The next step is to see the sections of the selected lesson. This time [programs/:programid/lessons/:lessonid/sections/]
(https://prodigy.rufataliyev.com/app/programs/5eb8b9bfc5acb33858a35521/lessons/5eb6ea3c359ddd09b012d307/sections/) the route will be hit and here again, passing through the programs endpoint we will check authorization and populate section references of the lessons of the chosen program.

![programs.png](https://api.rufataliyev.com/uploads/programs_d8cfdccc06.PNG)

This allows me to keep authorization at one point and keep the data flow unidirectional. Also, I don't need to store any user references in the lessons and sections collections apart from the author's info.

The application can be viewed [here](https://prodigy.rufataliyev.com/app/). I would be more than happy to hear your thoughts.`,
    img: [{ url: prodigy }],
  },
  {
    id: "3",
    title: "ZenGarden",
    path: "zengarden",
    content: `Zen Garden 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sed libero enim sed faucibus turpis in eu. Sagittis vitae et leo duis ut diam quam nulla. In massa tempor nec feugiat. Nunc congue nisi vitae suscipit tellus mauris a diam. Ante in nibh mauris cursus mattis molestie. Non consectetur a erat nam at lectus urna duis convallis. Sed egestas egestas fringilla phasellus faucibus. Venenatis tellus in metus vulputate eu scelerisque felis. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Proin libero nunc consequat interdum varius sit amet mattis. Facilisis sed odio morbi quis commodo. Mi quis hendrerit dolor magna. Et leo duis ut diam. Morbi tristique senectus et netus et malesuada fames. Arcu cursus vitae congue mauris rhoncus aenean. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Morbi tincidunt augue interdum velit. Iaculis nunc sed augue lacus viverra vitae congue eu. Rhoncus dolor purus non enim praesent elementum facilisis leo vel.

    Ut diam quam nulla porttitor massa. Fermentum dui faucibus in ornare. Purus gravida quis blandit turpis cursus in hac. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Et odio pellentesque diam volutpat commodo sed egestas. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Eu volutpat odio facilisis mauris. Viverra aliquet eget sit amet tellus cras adipiscing enim. Sagittis purus sit amet volutpat consequat mauris. Massa sapien faucibus et molestie ac. At erat pellentesque adipiscing commodo. Amet consectetur adipiscing elit ut aliquam. Elementum nisi quis eleifend quam. Tortor vitae purus faucibus ornare suspendisse sed. Neque viverra justo nec ultrices dui sapien. Odio tempor orci dapibus ultrices in iaculis. Ullamcorper malesuada proin libero nunc.
    `,
    img: [{ url: zengarden }],
  },
];
