export const PROJECTS = [
  {
    id: '1',
    title: 'Web service for dynamic video streaming',
    description:
      'The Web service for dynamic video stream is realized using Node.js technology. Implementation is made in JavaScript programming language. The realized Web service based on the request responds with the sending of video stream. Optimization is made in the sense that using the asynchronous mode Node.js server technology and the same data are sent to all clients. This way, a larger number of clients will not load the server further.',
    image: {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQey8SQAQ7Ghngce6n_010526ccAn6zJJywyw&usqp=CAU',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://github.com/atokic/Web-service-for-dynamic-video-streaming',
    },
    technologies: [
      '#Node.js',
      '#Git'
    ],
  },
  {
    id: '2',
    title: 'Car Managment System',
    description:
      'Creation of an application as part of professional practice within the company HR Cloud. The idea of the project itself is to create an online advertisement based exclusively on the automotive industry. The project is conceived as a Web application that will demonstrate knowledge acquired within the framework of professional practice. The project consists of a front-end and a back-end part. The front-end part of the application was realized using the Angular and Bootstrap framework, while the back-end was realized through .NET Core, C# and MySQL database. Communication with the database is realized through Web API.',
    image: {
      src: 'https://mediapool.bmwgroup.com/cache/P9/201511/P90205462/P90205462-bmw-retail-online-2346px.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://github.com/atokic/Car-Managment-System',
    },
    technologies: [
      '#Angular',
      '#.NET Core',
      '#C#',
      '#MYSQL',
      '#Git'
    ],
  },
  {
    id: '3',
    title: 'Detection of small objects on aerial photos using the YOLO detector',
    description:
      "The work was realized with the help of Google Collaboratory, a product that allows running Python code in the Jupiter notebook, and allows the use of free resources such as the power of the graphics card. In addition to Google Collaboratory, the open source Darknet framework containing the YOLO algorithm, written using the C programming language and the CUDA platform, was used. The realized detection model requires an input image from the user and responds by sending an image containing the bounding boxes of the detected object and a value between 0 and 1 indicating the confidence scores.",
    image: {
      src: 'https://raw.githubusercontent.com/yoyotv/YOLO-project/master/small_object_detection/figures/yolov3.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://github.com/atokic/YOLOv4-Custom-Object-Detecion'
    },
    technologies: [
      '#Darknet',
      '#Google Collaboratory',
      '#CUDA',
      '#YOLO',
      '#Python',
      '#Git'
    ],
  },
  {
    id: '4',
    title: 'Svezabazene.hr',
    description:
      'Participation in the creation of the webshop and its further maintenance. In terms of volume of products,perhaps the largest webshop for swimming pool technology in Europe.',
    image: {
      src: 'https://lidermedia.hr/images/slike/2022/03/03/405650.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://svezabazene.hr/',
    },
    technologies: [
      '#Wordpress',
      '#Adobe Photoshop',
      '#Adobe Illustrator',
    ],
  },
  {
    id: '5',
    title: 'Estetika-dekorativni-kamen.com',
    description:
      'Creating and maintaining a website for a small business, initially built using clean HTML and CSS code, then built using WordPress. Also management of social networks for the company, such as Facebook page and Google profile.',
    image: {
      src: 'https://estetika-dekorativni-kamen.com/wp-content/uploads/2021/03/lamelar1.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://estetika-dekorativni-kamen.com/',
    },
    technologies: [
      '#Wordpress',
      '#Adobe Photoshop',
      '#Adobe Illustrator',
    ],
  },
  {
    id: '6',
    title: 'Bazenskatehnika.hr',
    description:
      'Website maintenance for a company with over 20 employees that has been in business for over 10 years and has won a AAA Silver Certificate of Excellence. Also management of social networks for the company, such as Instagram page, Facebook page, and Google profile.',
    image: {
      src: 'data:image/jpeg;base64,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',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://bazenskatehnika.hr/',
    },
    technologies: [
      '#Wordpress',
      '#Adobe Photoshop',
      '#Adobe Illustrator',
    ],
  },
  {
    id: '7',
    title: 'ReactJS Calculator',
    description:
      'Practicing ReactJs through a simple calculator app.',
    image: {
      src: 'https://raw.githubusercontent.com/atokic/ReactJS_Calculator/master/Screenshots/Screen_3.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://reactjs-simple-calculator-app.netlify.app/',
      repo: 'https://github.com/atokic/ReactJS_Calculator'
    },
    technologies: [
      '#React.js',
      '#Node.js',
      '#Git'
    ],
  },
  {
    id: '8',
    title: 'Booking App',
    description:
      'Build Booking App using MERN stack',
    image: {
      src: 'https://pageflows.com/media/videos/thumbnail_a228d311-cac9-4d6a-84ce-2c196f07d019.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://github.com/atokic/MERN-Booking-App',
    },
    technologies: [
      '#React.js',
      '#Node.js',
      '#Express.js',
      '#MongoDB',
      '#Git'
    ],
  },
  {
    id: '9',
    title: 'ReactJS Portfolio',
    description:
      'A project created using a tutorials in order to learn new skills and knowledge of React.js',
    image: {
      src: 'https://www.valueresearchonline.com/content-assets/images/49260_20210426-vr-premium__w660__.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://portfolio-ante.netlify.app/',
      repo: 'https://github.com/atokic/ReactJS_portfolio'
    },
    technologies: [
      '#React.js',
      '#SASS',
      '#Netlify',
      '#Git'
    ],
  },
  {
    id: '10',
    title: 'Python Youtube Downloader and Converter',
    description:
      'Python Youtube Downloader and Converter for download multiple YouTube videos in different quality, download playlists or download YouTube video and convert it to .mp3 format.',
    image: {
      src: 'https://www.techarge.in/wp-content/uploads/2021/04/Group-3-1-1-1-1.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://github.com/atokic/Python-Youtube-Downloader-and-Converter',
    },
    technologies: [
      '#Python',
      '#Git'
    ],
  },
  {
    id: '11',
    title: 'MERN ToDo List App',
    description:
      'ToDo List App created using MERN for learning purpose',
    image: {
      src: 'https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/960x0.jpg?format=jpg&width=960',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://github.com/atokic/MERN-ToDo-List',
    },
    technologies: [
      '#React.js',
      '#Node.js',
      '#Express.js',
      '#MongoDB',
      '#Git'
    ],
  },
    {
    id: '12',
    title: 'ReactJS Weather App',
    description:
      'A project created using a tutorials in order to learn new skills and knowledge of React.js',
    image: {
      src: 'https://miro.medium.com/max/700/1*NR-hMkFMHWqicy6QUa8XxQ.jpeg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://reactjs-simple-weather.netlify.app/',
      repo: 'https://github.com/atokic/ReactJS-Weather-App'
    },
    technologies: [
      '#React.js',
      '#Tailwind',
      '#Netlify',
      '#Git'
    ],
  },
];
