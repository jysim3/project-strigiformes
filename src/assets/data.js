export const projectDetails = {
  food: {
    heading: "Food content identifier",
    subheading:
      "Create an app that identify food content after you take a photo of the ingredients",
    img: require("@/assets/food_ocr.png"),
    content: "Join our project in making an app that has real usage!",
    href: "/project/food",
    tags: ["Javascript", "React", "Vue", "OCR", "Server"],
    lines: [
      "Built an AI application that allows users to easily identify groups of ingredients in any food product",
      "Allows user to easily avoid categories of ingredients by taking a photo of the ingredient list",
    ],
    subproject: [
      {
        type: "Backend",
        title: "OCR",
        subtitle:
          "Create an AI engine that takes in a photo and output a series of text",
        tags: ["AI", "OCR", "Neural Nets"],
        lines: [
          "Responsible for creating the Optical Character Recognition (OCR) model to allow the server to identify ingredients contained in the photo",
          "(if from scratch) Was able to accurately recognise x% of the images produced",
        ],
      },
      {
        type: "Backend",
        title: "Server integration",
        subtitle:
          "Create a server that runs on the cloud to facilitate the front end",
        tags: ["AWS", "Python/Go", "API"],
        lines: [
          "Responsible for creating the server in Amazon Web Services (AWS)",
          "Developed the API to facilitate the front end's request",
          "Used technology such as lambda (or nginx) to deploy the website and model to the cloud",
        ],
      },
      {
        type: "Frontend",
        title: "Website",
        subtitle:
          "Create a website to allows user to upload a photo and returns the information from the server",
        tags: ["Javascript", "React", "Vue"],
        lines: [
          "Responsible for developing the website to allow users to use our AI model",
          "Used a frontend framework to create a responsive website that allows user to upload photo and display the result retrieved by our API",
        ],
      },
      {
        type: "Frontend",
        title: "Phone App",
        subtitle:
          "Create a phone app to take in a photo and uploads it to the server",
        tags: ["Android (Kotlin)", "iOS (swift)", "Flutter", "React Native"],
        lines: [
          "Responsible for developing the app (in android and/or iOS) to allow users to use our AI model",
          "Allowed the user to take a photo using their phone and display the result in real time",
        ],
      },
      {
        type: "Others",
        title: "Graphic design",
        subtitle: "Create an elegant mock up for the app/website",
        tags: ["Figma", "Photoshop"],
        lines: [],
      },
    ],
  },
};
export const current_projects = [
  {
    id: "food",
    heading: "Food content identifier",
    subheading:
      "Create an app that identify food content after you take a photo of the ingredients",
    img: require("@/assets/food_ocr.png"),
    content:
      "Join our project in making an app that has real usage! See the project page here: ",
    href: "/project/food",
    tags: ["Javascript", "React", "Vue", "OCR", "Server"],
  },
];
export const projects = [
  {
    heading: "Website",
    subheading:
      "Learn the language with the highest demand, Javascript (Github 2021)! Build websites such as this one! ",
    img: require("@/assets/website.gif"),
    content:
      "Don't get intimidated by the difficulty of this project. They are easier than expected and incredibly fun!",
    href: "",
    tags: ["Javascript", "React", "Vue"],
  },
  {
    heading: "Artificial Intelligence",
    subheading:
      "Use AI to do various different tasks, this example shows the machine learning to play snake by itself using machine learning.",
    img: "http://jysim3.com/db/static/pygame-window-2020-07-08-13-34-27_Trim.gif",
    content:
      "Don't get intimidated by the difficulty of this project. They are easier than expected and incredibly fun!",
    href: "",
    tags: ["AI", "Python"],
  },
  {
    heading: "App with amazing technology",
    subheading:
      "Using technology such as NFC or QR Code, there is no doubt that employer will be impressed with your skills.",
    img: require("@/assets/pointr-qr.png"),
    content:
      "Don't get intimidated by the difficulty of this project. They are easier than expected and incredibly fun!",
    href: "",
    tags: ["QR", "Web", "Apps"],
  },
  {
    heading: "Messenger app",
    subheading:
      "Whether it is iOS, Android or cross-platform, create an app that allows you and your friend to chat among each other. You can be sure no one is spying on you!",
    content:
      "Don't get intimidated by the difficulty of this project. They are easier than expected and incredibly fun!",
    img: "https://cdn.dribbble.com/users/878428/screenshots/15392719/media/9c31c2b0672390e6a42880efe82c52e3.png",
    href: "",
    tags: ["iOS", "Android", "Apps"],
  },
  {
    heading: "Trading bot",
    subheading:
      "Make a crypto trading bot with Python. With a trading bot portfolio, you will be certain that the employer will be impressed.",
    content:
      "Don't get intimidated by the difficulty of this project. They are easier than expected and incredibly fun!",
    img: "https://raw.githubusercontent.com/freqtrade/freqtrade/develop/docs/assets/freqtrade-screenshot.png",
    href: "",
    tags: ["Crypto", "Python"],
  },
  {
    heading: "Make a game",
    subheading:
      "Make a game using Unity and C#. Find out more about what company values when you present your game project.",
    content:
      "Don't get intimidated by the difficulty of this project. They are easier than expected and incredibly fun!",
    img: require("@/assets/game-preview.gif"),
    href: "",
    tags: ["Unity", "C#"],
  },
];
