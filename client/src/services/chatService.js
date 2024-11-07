// chatService.js

export const fetchMessages = async () => [ 
    { sender: 'Alice', text: 'Hello, team!' },
    { sender: 'Bob', text: 'Hi Alice!' },
];

export const sendMessage = async (message) => {
    console.log('Message sent:', message);
};

// New function to fetch comments
export const fetchComments = async () => [
    { author: 'Charlie', text: 'This is a great project!' },
    { author: 'Diana', text: 'Looking forward to seeing the results!' },
];

// New function to post a comment
export const postComment = async (comment) => {
    console.log('Comment posted:', comment);
};
