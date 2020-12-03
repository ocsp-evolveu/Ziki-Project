const ph_FName = document.getElementById("ph_FName");
const ph_LName = document.getElementById("ph_LName");
const ph_Submit = document.getElementById("ph_Submit");
const photographyEvent = document.getElementById("photographyEvent");
const uploadPhotography = document.getElementById("uploadPhotography");
const photos = document.getElementById("uploadPhotography").querySelector('input[type="file"][multiple]');

ph_Submit.addEventListener('click', async () => {
    let link = "http://localhost:6001/uploadPhotography";
    const photographyData = new FormData();
    photographyData.append('first_Name', ph_FName.value);
    photographyData.append('last_Name', ph_LName.value);
    photographyData.append('votes', 0);
    for (let i = 0; i < photos.files.length; i++) {
        photographyData.append('photos', photos.files[i]);
    }
    let resp = await fetch(link, {
        method: "POST",
        body: photographyData
    })
    let response = await resp.json();
    if (resp === "Uploaded images successfully") {
        location.href = "index.html";
    }
    else {
        
        registerError.style.display = "block";
    }
    console.log(response);
});