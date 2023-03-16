export default function handler(req, res) {
    res.status(200).json([
        {
            "id": 1,
            "title": "Complete Task List App",
            "description": "Finish building and testing the task list app by end of week",
            "completed": false,
            "dueDate": "2023-03-19"
        },
        {
            "id": 2,
            "title": "Prepare for Interview",
            "description": "Research the company, practice answering interview questions, and dress professionally",
            "completed": true,
            "dueDate": "2023-03-22"
        },
        {
            "id": 3,
            "title": "Go to the Gym",
            "description": "Do 30 minutes of cardio and 20 minutes of weight lifting",
            "completed": false,
            "dueDate": "2023-03-17"
        },
        {
            "id": 4,
            "title": "Buy Groceries",
            "description": "Get bread, milk, eggs, and fruit",
            "completed": false,
            "dueDate": "2023-03-16"
        },
        {
            "id": 5,
            "title": "Read a Book",
            "description": "Read at least one chapter of 'The Catcher in the Rye'",
            "completed": true,
            "dueDate": "2023-03-18"
        }
    ]);
}
