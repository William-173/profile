document.getElementById('contacts-btn').addEventListener('click', function() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <h2>How to Contact William</h2>
        <p>If you'd like to request a custom bot or have a chat with William about his work, here are the best ways to reach him:</p>
        <ul>
            <li><strong>Discord Username:</strong> yuri_x_william</li>
            <li><strong>Discord ID:</strong> 1096100702029369364</li>
            <li>You can also visit his <a href="https://www.joyland.ai/profile?userId=qqLpw&ref=qqLpw" target="_blank">Joyland profile</a> to see his work and projects.</li>
        </ul>
        <p>William is highly responsive on Discord, and it's his preferred platform for communication. Feel free to reach out anytime—he's available most days.</p>
        <button onclick="openDiscordProfile()">Go to Discord Profile</button>
    `;
});

document.getElementById('home-btn').addEventListener('click', function() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <h2>Welcome to William's Profile</h2>
        <p>William is a highly respected bot creator on Joyland.ai, known for his professionalism and creativity. His journey began with small bot projects, and he has since grown to become one of the go-to creators in the community.</p>
        <p>Specializing in various types of bots—ranging from conversation-driven assistants to interactive role-play experiences—William's creations are designed to bring joy and enhance user engagement. His bots are known for their reliability, innovation, and personalized touch.</p>
        <p>He is also a passionate mentor, guiding others in bot creation and offering advice within the Joyland community. Whether you're new to bot creation or an experienced creator, William's expertise is widely recognized, and many turn to him for help.</p>
        <p>For more information about William’s projects or if you need a custom bot made, feel free to check out the <strong>Contacts</strong> section for details on how to reach him.</p>
    `;
});

function openDiscordProfile() {
    // Open Discord profile using a direct link to add a user.
    window.open("https://discordapp.com/users/1096100702029369364", "_blank");
}
