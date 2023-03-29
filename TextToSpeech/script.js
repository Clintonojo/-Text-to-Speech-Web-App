const textInput = document.getElementById('text-input');
const speakBtn = document.getElementById('speak-btn');

speakBtn.addEventListener('click', () => {
    const text = textInput.value;
    speak(text);
});

function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Your browser does not support the Web Speech API.');
    }
}



//We get references to the text-input and speak-btn elements from the HTML document and store them in variables.
//We add an event listener to the speak-btn. When it's clicked, it retrieves the text from the text-input element and calls the speak function with the text.
//In the speak function, we check if the speechSynthesis object is available in the window. If it is, we create a new SpeechSynthesisUtterance object with the given text and use the window.speechSynthesis.speak() method to speak the text.
//If the speechSynthesis object is not available, we display an alert message indicating that the browser does not support the Web Speech API.