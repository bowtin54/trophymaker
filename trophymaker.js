window.onload = () => {
    //function to draw text into canvas
    const drawText = (trophyTitle, trophyText, trophyHolder, timeStamp) => {
        if (timeStamp === undefined) timeStamp = "";

        var canvas = document.getElementById("trophy-area");
        var ctx = canvas.getContext("2d");

        // Draw trophy title
        ctx.font = "32px sans-serif";
        ctx.fillStyle = "#FFFFFF";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText(trophyTitle, 400, 70);

        // Draw trophy text
        ctx.font = "24px sans-serif";
        ctx.fillText(trophyText, 400, 120);

        // Draw trophy holder
        ctx.font = "14px sans-serif";
        ctx.textAlign = "right";
        ctx.textBaseline = "bottom";
        ctx.fillText(trophyHolder + timeStamp, canvas.width - 20, canvas.height - 20);
    }

    //function to load image according to the selected radio button
    const loadImage = (imageName) => {
        console.log(imageName);
        var image = new Image();
        image.src = imageName;
        image.onload = () => {
            var canvas = document.getElementById("trophy-area");
            var ctx = canvas.getContext("2d");
    
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);
            drawText(
                document.getElementById("trophy-title").value,
                document.getElementById("trophy-text").value,
                document.getElementById("trophy-holder").value
            )
        };
    }

    // Draw image for default canvas
    loadImage("gold.png");


    /////////////////////////////////////////////////////////////////////////
    ///////////////////////    EVENT LISTENERS    ///////////////////////////
    /////////////////////////////////////////////////////////////////////////

    //Event listener for radio buttons
    document.getElementsByName("trophy-type").forEach(
        element => element.addEventListener("change", event => loadImage(event.target.value + ".png"))
    );
    
    //Event listener for create image button
    document.getElementById("create-image").addEventListener(
        "click",
        () => { 
            const date = new Date();
            const timeStamp = 
                date.getFullYear() + "/"
                + date.getMonth() + "/"
                + date.getDay() + " "
                + date.getHours() + ":"
                + date.getMinutes();
            
            drawText(
                document.getElementById("trophy-title").value,
                document.getElementById("trophy-text").value,
                "@" + document.getElementById("trophy-holder").value,
                " " + timeStamp
        )}
    );

    document.getElementById("reset-everything").addEventListener("click", () => window.location.reload());
}