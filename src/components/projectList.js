import boardgames from '../static/project/boardgames.jpg';
import ecommerce from '../static/project/ecommerce.png';
import blog from '../static/project/blog.png';

const projectList = [
    {
        image: boardgames,
        name: "Board Games",
        detail: "A JavaScript-based website with gameplay for Sudoku, Tic-Tac-Toe, and Othello. Also have multiple playing option like Human vs Human & Human vs AI.",
        github: "https://github.com/rajat-2121/board-games",
        deployment: "https://chimerical-hummingbird-a213c6.netlify.app/",
        technologies: [
            "HTML", "CSS", "JavaScript"
        ]
    },
    {
        image: blog,
        name: "Blog-API",
        detail: "Blog App in a website where one can share blogs and read blog of other people. It has features like authentication, create, update or delete posts.",
        github: "https://github.com/rajat-2121/blog-API",
        deployment: "https://github.com/rajat-2121/blog-API",
        technologies: [
            "Node.js", "MongoDB", "Express"
        ]
    },
    {
        image: ecommerce,
        name: "E-Commerce website",
        detail: "An E-commerce platform for local wood carving vedors of Varanasi. Users can avail all basic features and sellers can manage their sales from the dashboard.",
        github: "https://github.com/rajat-2121/e-commerce",
        deployment: "https://fanciful-taffy-237bb1.netlify.app/",
        technologies: [
            "Node.js", "React.js", "Stripe"
        ]
    },
]

export default projectList