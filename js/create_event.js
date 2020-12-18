// ==================== Photography Section =============================


const ph_FName = document.getElementById("ph_FName");
const ph_LName = document.getElementById("ph_LName");
const ph_Submit = document.getElementById("ph_Submit");
const successSubmission = document.getElementById("successSubmission");
const photoSubmissionError = document.getElementById("photoSubmissionError");
const photographyEvent = document.getElementById("photographyEvent");
const uploadPhotography = document.getElementById("uploadPhotography");
const musicSuccessSubmission =document.getElementById("musicSuccessSubmission");
const photos = document.getElementById("uploadPhotography").querySelector('input[type="file"][multiple]');





//********* If you have 2 buttons to upload picture */
const photos1 = document.getElementById("btnPhoto1");
const photos2 = document.getElementById("btnPhoto2");




//=========== Open Accordion ====================

const openPhotographyUpload = () => {
    if (uploadPhotography.style.display === "none") {
        uploadPhotography.style.display = "block";
    }
    else {
        uploadPhotography.style.display = "none";
    }
}
photographyEvent.addEventListener('click', openPhotographyUpload);


//==================== Upload Info to database through API ==================

ph_Submit.addEventListener('click', async () => {
    let link = "http://localhost:6001/uploadPhotography";
    const photographyData = new FormData();
    photographyData.append('first_Name', ph_FName.value);
    photographyData.append('last_Name', ph_LName.value);
    photographyData.append('votes', 0);

    /*
    let allSelectedPictures = [];
    allSelectedPictures.push(photos1.files[0]);
    allSelectedPictures.push(photos2.files[0]);  

     for (let i = 0; i < allSelectedPictures.length; i++) {
        photographyData.append('photos', allSelectedPictures[i]);
    }
    */
    for (let i = 0; i < photos.files.length; i++) {
        photographyData.append('photos', photos.files[i]);
    }

    let response = await fetch(link, {
        method: "POST",
        body: photographyData
    })
    let resp = await response.json();
    if (resp === "error uploading images") {
        photoSubmissionError.style.display = "block";
    }
    else {
        photoSubmissionError.style.display = "none";
        // location.href = "create_events.html";
        successSubmission.style.display = "block";
    }
});


//============================ Music Section ======================================

const musicEvent = document.getElementById("musicEvent");
const m_FName = document.getElementById("m_FName");
const m_LName = document.getElementById("m_LName");
const m_Submit = document.getElementById("m_Submit");
const uploadMusic = document.getElementById("uploadMusic");
const musicError = document.getElementById("musicSubmissionError");
const men = document.getElementById("uploadMusic").querySelector('input[type="file"][multiple]');

//  Connect Accordian

const openMusicUpload = () => {
    if (uploadMusic.style.display === "none") {
        uploadMusic.style.display = "block";
    }
    else {
        uploadMusic.style.display = "none";
    }
}
musicEvent.addEventListener('click', openMusicUpload);


// connect to API


m_Submit.addEventListener('click', async () => {
    let link = "http://localhost:6001/uploadMusic";
    const musicData = new FormData();
    musicData.append('first_Name', m_FName.value);
    musicData.append('last_Name', m_LName.value);
    musicData.append('votes', 0);
    for (let i = 0; i < men.files.length; i++) {
        musicData.append('apple', men.files[i]);
    }
    let response = await fetch(link, {
        method: "POST",
        body: musicData
    })
    let resp = await response.json();
    if (resp === "error uploading music") {
        musicSubmissionError.style.display = "block";
    }
    else {
        musicSubmissionError.style.display = "block";
        // location.href = "create_events.html";
       
    }

    console.log(response);
});



//============================ Painting Section ======================================





const paintEvent = document.getElementById("paintEvent");
const uploadPainting = document.getElementById("uploadPainting");
const p_FName = document.getElementById("p_FName");
const p_LName = document.getElementById("p_LName");
const painting1 = document.getElementById("uploadPainting").querySelector('input[type="file"][multiple]');
const paintSubmissionError = document.getElementById(" paintSubmissionError");
const paintSuccessSubmission = document.getElementById("paintSuccessSubmission");

//  Accordian

const openPaintingUpload = () => {
    if (uploadPainting.style.display === "none") {
        uploadPainting.style.display = "block";
    }
    else {
        uploadPainting.style.display = "none";
    }
}
paintEvent.addEventListener('click', openPaintingUpload);


// receieve and send to API



p_Submit.addEventListener('click', async () => {
    let link = "http://localhost:6001/uploadPainting";
    const paintingData = new FormData();
    paintingData.append('first_Name', p_FName.value);
    paintingData.append('last_Name', p_LName.value);
    paintingData.append('votes', 0);

    for (let i = 0; i < painting1.files.length; i++) {
        paintingData.append('uploadPainting', painting1.files[i]);
    }

    let response = await fetch(link, {
        method: "POST",
        body: paintingData
    })
    let resp = await response.json();
    if (resp === "error uploading images") {
        paintSubmissionError.style.display = "block";
    }
    else {
        paintSubmissionError.style.display = "none";
        // location.href = "create_events.html";
        paintSuccessSubmission.style.display = "block";
    }
});
