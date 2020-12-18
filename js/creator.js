const uploadPaintingButton = document.getElementById("uploadPaintingButton");
const uploadPaintingInfo = document.getElementById("uploadPaintingInfo");
const paintingClose = document.getElementById("paintingClose");
const paintingContentTitle = document.getElementById("paintingContentTitle");
const paintingUploadedBy = document.getElementById("paintingUploadedBy");
const paintingContentDescription = document.getElementById("paintingContentDescription");
const paintingSubmitFile= document.getElementById("paintingSubmitFile");
const newPaintingSubmissionError = document.getElementById("paintingSubmissionError");
const paintingMan= document.getElementById("uploadPainting").querySelector('input[type="file"][multiple]');


 

// ACTIVATING UPLOAD TO VIEW  Painting FORM
    
const loadPainting = () => {
    if (uploadPaintingInfo.style.display === "none") {
        uploadPaintingInfo.style.display = "block";
    }
    else {
        uploadPaintingInfo.style.display = "none";
    }
 
}
uploadPaintingButton.addEventListener('click', loadPainting);

// //close the content frame or modal when the user clicks on X
paintingClose.onclick = function(event) {
uploadPaintingInfo.style.display = "none";
}


// Submitting to API

paintingSubmitFile.addEventListener('click', async () => {
    let link = "http://localhost:6001/upload_painting";
    const creatorPaintingData = new FormData();
   creatorPaintingData.append('content_Title', paintingContentTitle.value);
   creatorPaintingData.append('uploaded_By', paintingUploadedBy.value);
   creatorPaintingData.append('content_Description',  paintingContentDescription.value);
   
    for (let i = 0; i < paintingMan.files.length; i++) {
        creatorPaintingData.append('yemiPainting', paintingMan.files[i]);
    }
// console.log(creatorPaintingData)
    let response = await fetch(link, {
        method: "POST",
        body: creatorPaintingData 
    })
    let resp = await response.json();
    if (resp === "error uploading painting") {
        paintingSubmissionError.style.display = "block";
    }
    else {
        paintingSubmissionError.style.display = "none";
        location.href = "index.html";
        
    }
});




// PHOTGRAPHERS SETION

const uploadPhotographyButton= document.getElementById("uploadPhotographyButton");
const uploadPhotographersInfo = document.getElementById("uploadPhotographersInfo");
const photographersClose = document.getElementById("photographersClose");
const photographersContentTitle = document.getElementById("photographersContentTitle");
const photographersUploadedBy = document.getElementById("photographersUploadedBy");
const photographersContentDescription = document.getElementById("photographersContentDescription");
const photographersSubmitFile= document.getElementById("photographersSubmitFile");
const PhotographyError = document.getElementById("PhotographyError");
const photoMan= document.getElementById("uploadPhotographies").querySelector('input[type="file"][multiple]');


// ACTIVATING UPLOAD TO VIEW  Photographers FORM

const UploadPhotographers = () => {
    if (uploadPhotographersInfo.style.display === "none") {
        uploadPhotographersInfo.style.display = "block";
    }
    else {
        uploadPhotographersInfo.style.display = "none";
    }
}
uploadPhotographyButton.addEventListener('click', UploadPhotographers);

//close the content frame or modal when the user clicks on X
photographersClose.onclick = function(event) {
    uploadPhotographersInfo.style.display = "none";
}
    

// SUBMITTING TO API

photographersSubmitFile.addEventListener('click', async () => {
    let link = "http://localhost:6001/myPhotographer";
    const creatorPhotographiesData  = new FormData();
   creatorPhotographiesData.append('content_Title', photographersContentTitle.value);
   creatorPhotographiesData.append('uploaded_By', photographersUploadedBy.value);
   creatorPhotographiesData.append('content_Description',  photographersContentDescription.value);
   
   for (let i = 0; i < photoMan.files.length; i++) {
        creatorPhotographiesData.append('yemiPhotographs', photoMan.files[i]);
    }

    let response = await fetch(link, {
        method: "POST",
        body: creatorPhotographiesData
    })
    let resp = await response.json();
    if (resp === "error uploading photographer") {
        PhotographyError.style.display = "block";
    }
    else {
        PhotographyError.style.display = "none";
        location.href = "index.html";
        
    }
});




// MUSIC SECTION
const uploadMusicButton= document.getElementById("uploadMusicButton");
const uploadMusicInfo = document.getElementById("uploadMusicInfo");
const musicClose = document.getElementById("musicClose");
const musicContentTitle = document.getElementById("musicContentTitle");
const musicUploadedBy = document.getElementById("musicUploadedBy");
const musicContentDescription = document.getElementById("musicContentDescription");
const musicSubmitFile= document.getElementById("musicSubmitFile");
const musicSubmissionError = document.getElementById("musicSubmissionError");
const musicMan= document.getElementById("uploadMusic").querySelector('input[type="file"][multiple]');


// // ACTIVATING UPLOAD TO VIEW  MUSIC FORM

const LoadMyMusic = () => {
    if (uploadMusicInfo.style.display === "none") {
        uploadMusicInfo.style.display = "block";
    }
    else {
        uploadMusicInfo.style.display = "none";
    }
}
uploadMusicButton.addEventListener('click', LoadMyMusic);

// //close the content frame or modal when the user clicks on X
musicClose.onclick = function(event) {
    uploadMusicInfo.style.display = "none";
}

    


// // SENDING TO API

musicSubmitFile.addEventListener('click', async () => {
    let link = "http://localhost:6001/myMusic";
    const creatorMusicData = new FormData();
   creatorMusicData.append('content_Title', musicContentTitle.value);
   creatorMusicData.append('uploaded_By', musicUploadedBy.value);
   creatorMusicData.append('content_Description',  musicContentDescription.value);
   
    for (let i = 0; i < musicMan .files.length; i++) {
        creatorMusicData.append('yemiMusic', musicMan .files[i]);
    }

    let response = await fetch(link, {
        method: "POST",
        body: creatorMusicData
    })
    let resp = await response.json();
    if (resp === "error uploading music") {
        musicSubmissionError.style.display = "block";
    }
    else {
        musicSubmissionError.style.display = "none";
        location.href = "index.html";
        
    }
});





    

// //open the content frame when the user clicks on the button
//      for (i=0; i < btn.length; i++) {
//          btn[i].onclick = function() {
//          contentFrame.style.display = "block";
//          }
//      }
// // //close the content frame or modal when the user clicks on X
// close.onclick = function(event) {
//     contentFrame.style.display = "none";


// ACTIVATING UPLOAD TO VIEW  Painting FORM