// inside method this -> object
// inside function this -> global object (window,global etc.)
const video = {
    title : 'a',
    play(){
        console.log(this); // Here this refers to this object video itself because it's method of this object
    }
};
video.play();
video.stop = function stop(){ /// If we add method also then also this will refer to same object video
    console.log(this);
}
video.stop();


function videoPlay(title){
    title;
    console.log(this); // Here this refers to global object like window
}

function Video(title){
    this.title = title;
    console.log( this); // Here this refers to current object ie. Video
}

const fun  = videoPlay("Factory Function ");
const con = new Video("Constructor Function ");

const videoTag = {
    title : 'a',
    tags:['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag) {
            console.log(this.title,tag);     
             // for this.title we get undefined because this here refers to window
            //object as it is inside callback function not inside showTags method directly
        });
    }
};
videoTag.showTags();
