// const chatInput = document.querySelector("#chat-input");
// const sendButton = document.querySelector("#send-btn");
// const chatContainer = document.querySelector(".chat-container");

// let userText = null;
// const API_KEY = "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";

// const createElement = (html, className) => {
//     const chatDiv = document.createElement("div");
//     chatDiv.classList.add("chat", className);
//     chatDiv.innerHTML = html;
//     return chatDiv;
// };

// const getChatResponse = async(incomingChatDiv) => {
//     const API_URL = "https://api.openai.com/v1/chat/completions";
//     const pElement = document.createElement("p");

//     const requestOption = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${API_KEY}`
//         },
//         body: JSON.stringify({
//             model: "gpt-3.5-turbo",
//             prompt: userText,
//             max_tokens: 2048,
//             temperature: 0.2,
//             // top_p: 1,
//             n: 1,
//             stop: null
//         })
//     }

//     try {
//         console.log("Request:", requestOption); // Request ko console log karo
//         const response = await (await fetch(API_URL, requestOption)).json();
//         console.log("Response:", response); // Response ko console log karo
//         pElement.textContent = response.choices[0].text;
//     } catch (error) {
//         console.log(error);
//     }


    // try {
    //     const response = await (await fetch(API_URL, requestOption)).json();
    //     pElement.textContent = response.choices[0].text;

    // } catch (error) {
    //     console.log(error);

    // }

//     incomingChatDiv.querySelector(".typing-animation").remove();
//     incomingChatDiv.querySelector(".chat-detail").appendChild(pElement);
// }

// const showTypingAnimation = () => {
//     const html = `<div class="chat-content">
//     <div class="chat-detail">
//         <img src="./img/gptPic.jpg" alt="Chatbot logo">
//         <div class="typing-animation">
//             <div class="typing-dot" style="--delay: 0.2s"></div>
//             <div class="typing-dot" style="--delay: 0.3s"></div>
//             <div class="typing-dot" style="--delay: 0.3s"></div>
//         </div>
//     </div>
//     <span class="material-symbols-outlined">content_copy</span>
// </div>`;

//     const incomingChatDiv = createElement(html, "incoming");
//     chatContainer.appendChild(incomingChatDiv);
//     getChatResponse(incomingChatDiv);
// }

// const handleOutgoingChat = () => {
//     userText = chatInput.value.trim();

//     const html = `<div class="chat-content">
//                      <div class="chat-detail">
//                         <img src="./img/userPic.jpg" alt="User Image">
//                         <p>${userText}</p>
//                     </div>
//                 </div>`;

//     const OutgoingChatDiv = createElement(html, "outgoing");
//     chatContainer.appendChild(OutgoingChatDiv);
//     setTimeout(showTypingAnimation, 500);
// }


// sendButton.addEventListener("click", handleOutgoingChat);



// const chatInput = document.querySelector("#chat-input");
// const sendButton = document.querySelector("#send-btn");
// const chatContainer = document.querySelector(".chat-container");

// let userText = null;
// const API_KEY = "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";

// const createElement = (html, className) => {
//     const chatDiv = document.createElement("div");
//     chatDiv.classList.add("chat", className);
//     chatDiv.innerHTML = html;
//     return chatDiv;
// };

// const getChatResponse = async (incomingChatDiv) => {
//     const API_URL = "https://api.openai.com/v1/chat/completions";
//     const pElement = document.createElement("p");

//     const requestOption = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${API_KEY}`
//         },
//         body: JSON.stringify({
//             model: "gpt-3.5-turbo",
//             messages: [{ "role": "user", "content": userText }],
//             temperature: 0.2,
//             max_tokens: 150,
//             stop: "\n"
//         })
//     };

    // try {
    //     console.log("Request:", requestOption); // Request ko console log karo
    //     const response = await fetch(API_URL, requestOption);
    //     if (!response.ok) {
    //         throw new Error("Network response was not ok");
    //     }
    //     const jsonResponse = await response.json();
    //     console.log("Response:", jsonResponse); // Response ko console log karo
    //     pElement.textContent = jsonResponse.choices[0].message.content;
    // } catch (error) {
    //     console.log(error);
    // }

//     try {
//         const response = await (await fetch(API_URL, requestOption)).json();
//         pElement.textContent = response.choices[0].text;

//     } catch (error) {
//         console.log(error);

//     }

//     incomingChatDiv.querySelector(".typing-animation").remove();
//     incomingChatDiv.querySelector(".chat-detail").appendChild(pElement);
// };

// const showTypingAnimation = () => {
//     const html = `<div class="chat-content">
//     <div class="chat-detail">
//         <img src="./img/gptPic.jpg" alt="Chatbot logo">
//         <div class="typing-animation">
//             <div class="typing-dot" style="--delay: 0.2s"></div>
//             <div class="typing-dot" style="--delay: 0.3s"></div>
//             <div class="typing-dot" style="--delay: 0.3s"></div>
//         </div>
//     </div>
//     <span class="material-symbols-outlined">content_copy</span>
// </div>`;

//     const incomingChatDiv = createElement(html, "incoming");
//     chatContainer.appendChild(incomingChatDiv);
//     getChatResponse(incomingChatDiv);
// };

// const handleOutgoingChat = () => {
//     userText = chatInput.value.trim();

//     const html = `<div class="chat-content">
//                      <div class="chat-detail">
//                         <img src="./img/userPic.jpg" alt="User Image">
//                         <p>${userText}</p>
//                     </div>
//                 </div>`;

//     const OutgoingChatDiv = createElement(html, "outgoing");
//     chatContainer.appendChild(OutgoingChatDiv);
//     setTimeout(showTypingAnimation, 500);
// };

// sendButton.addEventListener("click", handleOutgoingChat);


// const chatInput = document.querySelector("#chat-input");
// const sendButton = document.querySelector("#send-btn");
// const chatContainer = document.querySelector(".chat-container");

// let userText = null;
// const API_KEY = "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";

// const createElement = (html, className) => {
//     const chatDiv = document.createElement("div");
//     chatDiv.classList.add("chat", className);
//     chatDiv.innerHTML = html;
//     return chatDiv;
// };

// const getChatResponse = async(incomingChatDiv) => {
//     const API_URL = "https://api.openai.com/v1/chat/completions";
//     const pElement = document.createElement("p");

//     const requestOption = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${API_KEY}`
//         },
//         body: JSON.stringify({
//             model: "gpt-3.5-turbo",
//             messages: [{ role: "user", content: userText }],
//             temperature: 0.7,
//             max_tokens: 150,
//             stop: "\n"
//         })
//     };

//     try {
//         const response = await fetch(API_URL, requestOption);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         if (data && data.choices && data.choices.length > 0) {
//             pElement.textContent = data.choices[0].message.content;
//         } else {
//             throw new Error('Invalid response from the server');
//         }
//     } catch (error) {
//         console.log(error);
//         pElement.textContent = "Sorry, I couldn't understand that.";
//     }

//     incomingChatDiv.querySelector(".typing-animation").remove();
//     incomingChatDiv.querySelector(".chat-detail").appendChild(pElement);
// };

// const showTypingAnimation = () => {
//     const html = `<div class="chat-content">
//     <div class="chat-detail">
//         <img src="./img/gptPic.jpg" alt="Chatbot logo">
//         <div class="typing-animation">
//             <div class="typing-dot" style="--delay: 0.2s"></div>
//             <div class="typing-dot" style="--delay: 0.3s"></div>
//             <div class="typing-dot" style="--delay: 0.3s"></div>
//         </div>
//     </div>
//     <span class="material-symbols-outlined">content_copy</span>
// </div>`;

//     const incomingChatDiv = createElement(html, "incoming");
//     chatContainer.appendChild(incomingChatDiv);
//     getChatResponse(incomingChatDiv);
// };

// const handleOutgoingChat = () => {
//     userText = chatInput.value.trim();

//     const html = `<div class="chat-content">
//                      <div class="chat-detail">
//                         <img src="./img/userPic.jpg" alt="User Image">
//                         <p>${userText}</p>
//                     </div>
//                 </div>`;

//     const OutgoingChatDiv = createElement(html, "outgoing");
//     chatContainer.appendChild(OutgoingChatDiv);
//     setTimeout(showTypingAnimation, 500);
// };

// sendButton.addEventListener("click", handleOutgoingChat);


const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const chatContainer = document.querySelector(".chat-container");

let userText = null;
const API_KEY = "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";

const createElement = (html, className) => {
    const chatDiv = document.createElement("div");
    chatDiv.classList.add("chat", className);
    chatDiv.innerHTML = html;
    return chatDiv;
};

const getChatResponse = async (incomingChatDiv) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const pElement = document.createElement("p");

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a helpful assistant." }, // Add a system message
                { role: "user", content: userText }
            ],
            temperature: 0.7,
            max_tokens: 150,
            stop: "\n"
        })
    };

    try {
        const response = await fetch(API_URL, requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data && data.choices && data.choices.length > 0) {
            pElement.textContent = data.choices[0].message.content;
        } else {
            throw new Error('Invalid response from the server');
        }
    } catch (error) {
        console.log(error);
        pElement.textContent = "Sorry, I couldn't understand that.";
    }

    incomingChatDiv.querySelector(".typing-animation").remove();
    incomingChatDiv.querySelector(".chat-detail").appendChild(pElement);
};

const showTypingAnimation = () => {
    const html = `<div class="chat-content">
    <div class="chat-detail">
        <img src="./img/gptPic.jpg" alt="Chatbot logo">
        <div class="typing-animation">
            <div class="typing-dot" style="--delay: 0.2s"></div>
            <div class="typing-dot" style="--delay: 0.3s"></div>
            <div class="typing-dot" style="--delay: 0.3s"></div>
        </div>
    </div>
    <span class="material-symbols-outlined">content_copy</span>
</div>`;

    const incomingChatDiv = createElement(html, "incoming");
    chatContainer.appendChild(incomingChatDiv);
    getChatResponse(incomingChatDiv);
};

const handleOutgoingChat = () => {
    userText = chatInput.value.trim();

    const html = `<div class="chat-content">
                     <div class="chat-detail">
                        <img src="./img/userPic.jpg" alt="User Image">
                        <p>${userText}</p>
                    </div>
                </div>`;

    const OutgoingChatDiv = createElement(html, "outgoing");
    chatContainer.appendChild(OutgoingChatDiv);
    setTimeout(showTypingAnimation, 500);
};

sendButton.addEventListener("click", handleOutgoingChat);


