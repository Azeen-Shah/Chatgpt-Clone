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

const getChatResponse = async(incomingChatDiv) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const pElement = document.createElement("p");

    const requestOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "text-davinic-003",
            prompt: userText,
            max_tokens: 2048,
            temperature: 0.2,
            // top_p: 1,
            n: 1,
            stop: null
        })
    }

    try {
        const response = await (await fetch(API_URL, requestOption)).json();
        pElement.textContent = response.choices[0].text;

    } catch (error) {
        console.log(error);

    }

    incomingChatDiv.querySelector(".typing-animation").remove();
    incomingChatDiv.querySelector(".chat-detail").appendChild(pElement);
}

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
}

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
}


sendButton.addEventListener("click", handleOutgoingChat);





if (response.choices && response.choices.length > 0) {
    pElement.textContent = response.choices[0].text;
} else {
    console.log("Invalid or empty response from the API");
}