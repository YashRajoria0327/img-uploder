// image upload
let uploadForm =  document.querySelector('#upload-form');
uploadForm.addEventListener('submit', function(){
    let imageFile = document.querySelector('#customFile').files[0];
    let imageName =  imageFile.name;


    let reader =  new FileReader();
    reader.readAsDataURL(imageFile);

    reader.addEventListener('load',function(){
        if(this.result && localStorage){
            let imagesList = localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')) :[];
            imagesList.push(this.result);
            localStorage.setItem('images',JSON.stringify(imagesList));


        }
    });
    displayImage();

});
// display Image
let displayImage =() =>{
    let imagesList = localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')) :[];
    if (imagesList.Length !== 0){
        let cardImages = ' ';
        for(let image of imagesList){
            cardImages += `<div class="col-md-3">
            <div class="card img-card" >
                <img src="${image}" alt="" class="img-fluid" id="img-body">
            </div>
            <div class="card-body">
                <h3 class="card-title">Collage pics</h3>
                
            </div>


        </div>`;
        }
        document.querySelector('#card-row').innerHTML = cardImages;
    }

}
displayImage();

// remove all images 

let removeBtn = document.querySelector('#remove-btn');
removeBtn.addEventListener('click',function(){
    localStorage.removeItem('images');
    displayImage();
})