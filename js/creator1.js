const newfileUpload1 = document.getElementById("fileUpload1");
const newcontentTitle1 = document.getElementById("contentTitle1");
const newuploadedBy1 = document.getElementById("uploadedBy1");
const newcontentDescription1 = document.getElementById("contentDescription1");
const newsubmitFile1 = document.getElementById("submitFile1");
const newuploadMusic1 = document.getElementById("uploadMusic1");
const newmusicSubmissionError1 = document.getElementById("musicSubmissionError1");
const music1 = document.getElementById("fileUpload1").querySelector('input[type="file"][multiple]');



submitFile1.addEventListener('click', async () => {
    let link = "http://localhost:6001/myPainting";
    const creatorpaintingdata = new FormData();
   creatorpaintingdata.append('content_Title1', contentTitle1.value);
   creatorpaintingdata.append('uploaded_By1', uploadedBy1.value);
   creatorpaintingdata.append('content_Description1',  contentDescription1.value);
   
    for (let i = 0; i < music1.files.length; i++) {
        creatorpaintingdata.append('yemiMusic1', music1.files[i]);
    }

    let response = await fetch(link, {
        method: "POST",
        body: creatorpaintingdata
    })
    let resp = await response.json();
    if (resp === "error uploading music") {
        musicSubmissionError1.style.display = "block";
    }
    else {
        musicSubmissionError1.style.display = "none";
        location.href = "index.html";
        
    }
});
