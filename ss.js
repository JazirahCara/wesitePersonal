

/* var password = prompt("Password:");

if(password == "kopi"){
    document.href("<h2>Selamat datang bos!</h2>");
} else {
    document.write("<p>Password salah, coba lagi!</p>");
}

document.write("<p>Terima kasih sudah menggunakan aplikasi ini!</p>");
//
*/

  
  function redirinstagram() {
            window.location.href ="https://wa.me/+6281384012644" 
        }
         function redirwa() {
            window.location.href ="https://wa.me/+628731808346"
        }



document.addEventListener('DOMContentLoaded', () => {
    // Function to handle text-to-speech
    function speakText() {
        // Get the text from the textarea
        const text = document.querySelector('#text').value;
        
        // Check if text is not empty
        if (text.trim() === '') {
            alert('Please enter some text.');
            return;
        }
        
        // Create a new SpeechSynthesisUtterance instance
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Optionally, set properties such as language, rate, pitch
        utterance.lang = 'en-US'; // Language
        utterance.rate = 1;       // Speed of speech
        utterance.pitch = 1;      // Pitch of speech
        
        // Speak the text
        window.speechSynthesis.speak(utterance);
    }

    // Attach the function to the button's click event
    document.querySelector('#speakButton').addEventListener('click', speakText);
});