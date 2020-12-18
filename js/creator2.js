const newfileUpload2 = document.getElementById("fileUpload2");
const newcontentTitle2 = document.getElementById("contentTitle2");
const newuploadedBy2 = document.getElementById("uploadedBy2");
const newcontentDescription2 = document.getElementById("contentDescription2");
const newsubmitFile2 = document.getElementById("submitFile2");
const newuploadMusic2 = document.getElementById("uploadMusic2");
const newmusicSubmissionError2 = document.getElementById("musicSubmissionError2");
const music2 = document.getElementById("fileUpload2").querySelector('input[type="file"][multiple]');



submitFile2.addEventListener('click', async () => {
    let link = "http://localhost:6001/myPhotography";
    const creatorphotopgraphydata = new FormData();
   creatorphotopgraphydata.append('content_Title2', contentTitle.value2);
   creatorphotopgraphydata.append('uploaded_By2', uploadedBy2.value);
   creatorphotopgraphydata.append('content_Description2',  contentDescription2.value);
   
    for (let i = 0; i < music2.files.length; i++) {
        creatorphotopgraphydata.append('yemiMusic2', music2.files[i]);
    }

    let response = await fetch(link, {
        method: "POST",
        body: creatorphotopgraphydata
    })
    let resp = await response.json();
    if (resp === "error uploading music") {
        musicSubmissionError2.style.display = "block";
    }
    else {
        musicSubmissionError2.style.display = "none";
        location.href = "index.html";
        
    }
});
