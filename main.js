Webcam.set({
    width: 300,
    height: 300,
    image_format:'png',
    png_quality:95
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function takeIMG(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="Img"src="'+data_uri+'">';
    });
}
console.log("ml5.version : ",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/AajOsQKQW/model.json',modelLoaded);
function modelLoaded(){
    console.log('modelLoaded');
}
function show(){
    image=document.getElementById("Img");
    classifier.classify(image,gotResult);
}
function gotResult(error,result){
    if (error){
        console.error(error);
    }else{
        console.log(result);
        document.getElementById("result_obj_name").innerHTML=result[0].label;
        document.getElementById("result_acc_name").innerHTML=result[0].confidence.toFixed(2)
    }
}