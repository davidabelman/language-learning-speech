
function audio_load(mp3_name, id, autoplay) {
        
        //alert("!loaded the audio!")

        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'sounds/'+mp3_name+'.mp3');
        if (autoplay==1) {
                audioElement.setAttribute('autoplay', 'autoplay')
        //        audioElement.load()
        };
        
        //$.get();
        //audioElement.addEventListener("load", function() {
        //audioElement.play();
        //}, true);

        $('#'+id).click(function() {
        //alert('play class clicked');
        audioElement.load()
        audioElement.play();
        });

        $('.pause').click(function() {
        audioElement.pause();
        });

};
