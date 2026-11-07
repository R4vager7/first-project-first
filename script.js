// Student Practice Script

function greetUser(username) {
    console.log(`Welcome to GitHub, ${username}!`);
}

const projects = ["Web Development", "Python Basics", "Algorithms"];

function listProjects(items) {
    console.log("Current Learning Topics:");
    items.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
}

// Execute functions
greetUser("R4vager7");
listProjects(projects);
