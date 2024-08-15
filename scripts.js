document.addEventListener("DOMContentLoaded", () => {
    const inputElement = document.getElementById("input");
    const outputElement = document.getElementById("output");

    inputElement.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const command = inputElement.value;
            executeCommand(command);
            inputElement.value = '';
        }
    });

    function executeCommand(command) {
        // For demonstration purposes, just echoing the command
        // In a real application, you would send the command to the server
        outputElement.textContent += `> ${command}\n`;
    }
});
