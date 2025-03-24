// Fetch data from the server
fetch("https://json-server-vercel-pink-psi.vercel.app/characters", {
    method: "GET", // Retrieve information from the server
    headers: {
        "Content-Type": "application/json" // Inform the server that we're expecting JSON data
    }
})
.then(function(response) {  
    return response.json();  // Convert the response to a JavaScript object so that it can be readable
})
.then(function(data) {  
    // Loop through each character in the data array
    data.forEach(function(details) {  
        displayCharacter(details); // Call function to display character
    });
})

.catch(function(error) {
    console.error("Error fetching data:", error); // Display any errors in the console
});


// Function to display character names on the webpage
function displayCharacter(character) {  
    var characterBar = document.getElementById("character-bar"); // Get the container
    var span = document.createElement("span"); // Create a new <span> element
    span.textContent = character.name; // Set the character name as the text

    // Append the <span> to the container
    characterBar.appendChild(span);

    // Add a click event listener to the span
    span.addEventListener("click", function() {
        showCharacterDetails(character); // Show details when clicked
    });
}


// Function to handle character click event
function showCharacterDetails(character) {
    let image = document.getElementById("image"); // Get the image element
    image.src = character.image; // Set the image source
    image.alt = character.name; // Set the alt text for accessibility

    let show = document.getElementById("name"); // Get the name display element
    show.innerText = character.name; // Display the character name

    let votes = document.getElementById("vote-count"); // Get the vote count display element
    votes.textContent = character.votes; // Display the vote count
}


// Function to handle vote submission
function submition() {
    const formsub = document.getElementById("votes-form"); // Get the form element

    // Add event listener for form submission
    formsub.addEventListener("submit", (e) => { 
        e.preventDefault(); // Prevent form from refreshing the page

        const voteInput = parseInt(e.target.votes.value) || 0; // Get the input value and convert to number
        const votesDisplay = document.getElementById("vote-count"); // Get the vote count display
        const currentVotes = parseInt(votesDisplay.textContent) || 0; // Get current vote count

        votesDisplay.textContent = currentVotes + voteInput; // Update displayed vote count

        e.target.reset(); // Reset form input field
    });
}


// Initialize vote submission setup
submition();
