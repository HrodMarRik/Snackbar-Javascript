function snackbar() {
    const messageDiv = document.createElement("div");
    messageDiv.innerText = "message";
    messageDiv.style.position = "fixed";
    messageDiv.style.bottom = "0";
    messageDiv.style.left = "0";
    messageDiv.style.width = "100%";
    messageDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    messageDiv.style.color = "white";
    messageDiv.style.padding = "10px";
    messageDiv.style.textAlign = "center";
    
    document.body.appendChild(messageDiv);

    setTimeout(function() {
        messageDiv.style.display = "none";
    }, 3000);
}
