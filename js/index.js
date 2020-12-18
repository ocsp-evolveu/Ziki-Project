//Henry

let acc = document.getElementsByClassName("accordion");
let i;

window.addEventListener('click', (e) => {
    if (e.target.tagName == "BUTTON" && e.target.className.includes("accordion")) {
        e.target.classList.toggle("active");
        let panel = e.target.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }

})


const loadMoreImages = document.getElementById("loadMore"); // This targets the button and gives it an identity
const loadData = document.getElementById("loadData"); // This targets the button and gives it an identity

const loadArt = async () => {
    const artData = await fetch("........");
    const response = await artData.json();
    createTemplate(response);
}

/************************************************************************************************************************************************* */
// const loadPhotographyData = async () => { // this method triggers when the button is clicked
//     const data = await fetch("../data.json"); //get data from database (in this case the data.json is our database)
//     let resp = await data.json(); //convert data to json so we can read the data   
//     createTemplate(resp);
// }

const createTemplate = (jsonData) => {
    let cnt = 0;
    // for (let i = 0; i < resp.length; i++) {
    // while (cnt < jsonData.length) {
    //     loadData.appendChild(createButton(jsonData[cnt].name));
    //     loadData.appendChild(createAccordion(
    //         jsonData[0].src,
    //         jsonData[1].src,
    //         jsonData[2].src,
    //         jsonData[3].src,
    //         jsonData[4].src,
    //         jsonData[5].src,
    //     ));
    //     cnt++;
    // }
    // }
}

//************ Code to create button */
const createButton = (name) => {
    const btn = document.createElement("BUTTON");
    btn.setAttribute("class", "accordion");
    btn.textContent = name;
    return btn;
}

//**** Creates Picture Container */
const createAccordion = (i1, i2, i3, i4, i5, i6) => { // this method creates the accordion
    const divRow = document.createElement("DIV"); //create a new div
    divRow.setAttribute("class", "row"); //assign a class row to it;

    const col2 = createColumnForPicture(i1, i2, i3);
    const col1 = createColumnForPicture(i4, i5, i6);

    divRow.appendChild(col1);
    divRow.appendChild(col2);


    const divPanel = document.createElement("DIV"); //create a new div
    divPanel.setAttribute("class", "panel"); //assign a class panel to it;  
    divPanel.style.display = "none";
    // divPanel.classList.add("panel");

    divPanel.appendChild(divRow);
    return divPanel;
}

const createColumnForPicture = (img_1, img_2, img_3) => {
    const divCol = document.createElement("DIV"); //create a new div
    divCol.setAttribute("class", "column"); //assign a class column to it;
    const img1 = document.createElement("IMG"); //create a new image
    const img2 = document.createElement("IMG"); //create a new image
    const img3 = document.createElement("IMG"); //create a new image
    img1.setAttribute("src", img_1);//assign src to it - the path of the image;
    img2.setAttribute("src", img_2);//assign src to it - the path of the image;
    img3.setAttribute("src", img_3);//assign src to it - the path of the image;

    divCol.appendChild(img1); //attach the image to the div
    divCol.appendChild(img2); //attach the image to the div
    divCol.appendChild(img3); //attach the image to the div

    return divCol;
}

// window.addEventListener('load', loadPhotographyData); // Do something when the button is clicked

/************************************************************************************************************************************************************* */

/*================ Search Events*/
const searchButton = document.getElementById("searchEvents");
const searchQuery = document.getElementById("searchQuery");

const loadEvents = (e) => {
    e.preventDefault();

    //Check if there's events
    if (searchQuery.value == "") {
        alert("Please enter a query to search for");
    }
    else {
        console.log("Seeing here");
        let searchInput = searchQuery.value.toLowerCase();
        if (searchInput.includes("art")) {
            location.replace("./art.html");
        }
        else if (searchInput.includes("pho")) {
            location.replace("./photography.html");
        }
        else {
            location.replace("./no_events.html");
        }
    }

}

if (searchButton) {
    searchButton.addEventListener("click", (e) => loadEvents(e))
}

/*============================ Create evnt Section ====================*/
const photographyEvent = document.getElementById("photographyEvent");
const uploadPhotography = document.getElementById("uploadPhotography");

const openPhotographyUpload = () => {
    if (uploadPhotography.style.display === "none") {
        uploadPhotography.style.display = "block";
    }
    else {
        uploadPhotography.style.display = "none";
    }
}

if (photographyEvent) {
    photographyEvent.addEventListener('click', openPhotographyUpload);

}
//==========================================================================

// ================================ Login =================================
const username = document.getElementById("username");
const password = document.getElementById("password");
const login = document.getElementById("login");
const idloginError = document.getElementById("idloginError");


const loginToCreateEvent = () => {
    // Check if username and password is correct
    if (username.value === "henry" && password.value === "henry") {
        location.href = "create_events.html";
    } else {
        idloginError.style.display = "block";
        username.style.border = "1px red solid";
        password.style.border = "1px red solid";
    }
}

if (login) {
    login.addEventListener('click', loginToCreateEvent);

}

//Charles

function purpleGoogle() {
    document.getElementById("googleTag").style.color = "purple"
    return false  //don't do anything else
    }
    
    function purpleFacebook() {
    document.querySelector("#facebookTag").style.color = "purple"
    }


    //Yemi
       //display
    let video = document.getElementById("video")

function openFullscreen(){
    if (video.requestFullscreen) {
        video.requestFullscreen()
    }
}

      //upload
let contentFrame = document.getElementById("upload-content-frame");

//get the button that opens the content modal
let btn = document.getElementsByClassName("upload-btn");

//get the element that closes the modal/ content frame
let close = document.getElementById("close");

//open the content frame when the user clicks on the button
for (i=0; i < btn.length; i++) {
    btn[i].onclick = function() {
    contentFrame.style.display = "block";
    }
}


// //close the content frame or modal when the user clicks on X
// close.onclick = function(event) {
//     contentFrame.style.display = "none";
// }


