(function() {
	var video = document.getElementById("video"),
		i,
		track,
		loadcues = document.getElementById("loadcues"),
		hideTracks = function() {
			// Oddly, there's no way to remove a track from a video, so hide them instead
			for (i = 0; i < video.textTracks.length; i++) {
				video.textTracks[i].mode = "hidden";
			}
		};
	
	window.onload = function() {
        var path = window.location.pathname;
        var page = path.split("/").pop();
        console.log(page);
        if(page == "anime.html"){
        $.getJSON( "https://raw.githubusercontent.com/GlQuentin33/SubTitles/master/anime_list.json", function( json ) {
            var nums = json.sizes;
            readTextFile("https://raw.githubusercontent.com/GlQuentin33/SubTitles/master/anime_list.json", function(response)
            {
                nums = response.size;
            })
            for (let index = 0; index < nums; index++) {
                var btn = document.createElement("button");
                btn.innerHTML = json.animes[index].name;
                btn.opacity='1';
                btn.style.background = "url("+json.default_bg+")";
                btn.style.backgroundSize = "cover";
                btn.style.border = "hidden";
                anime_list.appendChild(btn);

                btn.addEventListener ("click", function() {
                // alert("did something");
                    window.location.href=json.animes[index].url;
                  });
            }
            console.log( "JSON Data received, name is " + json.animes[1].name);
            console.log( "JSON Data received, size is " + json.sizes);
        });
        }

        var anime_list = document.getElementById("anime-list");
        var loading = document.getElementById("kny_loading");
        var page = document.getElementById("web-page");

        loading.style.opacity = '1';
        page.style.opacity = '0';
        var del = 250;
        var during = 1000;
        
        loading.animate([ { opacity: 1 }, { opacity: 0 } ], 
            {
                delay: del,
                duration: during
            });
        page.animate([ { opacity: 0 }, { opacity: 1 } ], 
            {
                delay: del,
                duration: during
            });

            // sleep(2200);
            setInterval(function()
            {
                loading.style.opacity = '0';
                // video.style.opacity = '1';
                page.style.opacity = '1';
            },
            del+100)
            var elem = document.getElementById("load-area");

            setInterval(function()
            {
                loading.remove();
                elem.remove();
            },
            del+during)
            // loading.style.opacity = '0';

        // loading.hidden(true)
        // loading.opacity = 0;

		hideTracks();
		track = video.addTextTrack("captions", "English", "en");
		track.mode = "showing";
		track.addCue(new VTTCue(25.37, 26.46, "How?"));
		track.addCue(new VTTCue(29.92, 32.21, "How did this happen?"));
		track.addCue(new VTTCue(34.63, 37.14, "Nezuko, don't die! Don't die on me!"));
		track.addCue(new VTTCue(39.43, 41.56, "I'm gonna save you no matter what!"));
		track.addCue(new VTTCue(43.6, 44.94, "I won't let you die!"));
		track.addCue(new VTTCue(46.48, 50.77, "I swear your big brother will save you\nno matter what!"));
		track.addCue(new VTTCue(CMAS(1, 3.16), CMAS(1, 4.41), "Tanjiro?"));
		track.addCue(new VTTCue(CMAS(1, 7.67), CMAS(1, 9.79), "Your face is covered in soot."));
		track.addCue(new VTTCue(CMAS(1, 10.17), CMAS(1, 11.88), "Come over here."));
		track.addCue(new VTTCue(CMAS(1, 14.17), CMAS(1, 17.97), "It's dangerous with all this snow.\nYou don't have to go, you know."));
		track.addCue(new VTTCue(CMAS(1, 18.68), CMAS(1, 23.18), "Well, I want everyone\nto eat their fill on New Year's,"));
		track.addCue(new VTTCue(CMAS(1, 23.43), CMAS(1, 25.68), "so I'm gonna sell\nas much charcoal as I can."));
		track.addCue(new VTTCue(CMAS(1, 26.77), CMAS(1, 28.31), "Thank you."));
        addSub(track, CMAS(1, 29.9), CMAS(1, 30.94), "Big Bro!");
        addSub(track, CMAS(1, 32.73), CMAS(1, 34.4), "You're going to town again today?");
        addSub(track, CMAS(1, 34.74), CMAS(1, 36.32), "I'm going with you!");
        addSub(track, CMAS(1, 38.2), CMAS(1, 39.32), "Oh no, you're not.");
        addSub(track, CMAS(1, 39.57), CMAS(1, 42.2), "You know you can't walk fast like Tanjiro.");
        addSub(track, CMAS(1, 42.45), CMAS(1, 43.95), "Mom!");
        addSub(track, CMAS(1, 44.2), CMAS(1, 45.2), "You may not.");
        addSub(track, CMAS( 1,45.62 ), CMAS( 1,47.96 ), "Since he can't use the cart today,");
        addSub(track, CMAS( 1,48.37 ), CMAS( 1,51.04 ), "he won't be able to give you\na ride when you're tired.");
        addSub(track, CMAS( 1,53.42 ), CMAS( 1,55.05 ), "Big Bro!");
        addSub(track, CMAS( 1,56.34 ), CMAS( 1,57.88 ), "I wanna go with you!");
        addSub(track, CMAS( 1,58.63 ), CMAS( 2,0.64 ), "I promise I'll help you!");
        addSub(track, CMAS( 2,1.6 ), CMAS( 2,3.14 ), "Thanks, Hanako.");
        addSub(track, CMAS( 2,3.93 ), CMAS( 2,6.14 ), "But you're staying home today.");
        addSub(track, CMAS( 2,9.65 ), CMAS( 2,14.02 ), "You, too, Shigeru.\nBut I'll get you tons of goodies, okay?");
        addSub(track, CMAS( 2,14.02 ), CMAS( 2,15.11 ), "Really?");
        addSub(track, CMAS( 2,15.36 ), CMAS( 2,16.24 ), "Yeah.");
        addSub(track, CMAS( 2,18.11 ), CMAS( 2,20.91 ), "And Hanako, I'll read for you\nwhen I'm back.");
        addSub(track, CMAS( 2,21.16 ), CMAS( 2,21.99 ), "Okay!");
        addSub(track, CMAS( 2,22.41 ), CMAS( 2,23.49 ), "That's a good girl.");
        addSub(track, CMAS( 2,23.74 ), CMAS( 2,25.62 ), "Thank you so much, Tanjiro.");
        addSub(track, CMAS( 2,25.95 ), CMAS( 2,26.75 ), "Sure.");
        addSub(track, CMAS( 2,27.25 ), CMAS( 2,28.75 ), "Okay, I'll be heading out now.");
        addSub(track, CMAS( 2,29.33 ), CMAS( 2,30.12 ), "Takeo...");
        addSub(track, CMAS( 2,30.5 ), CMAS( 2,34.34 ), "Will you chop as much wood as you can?");
        addSub(track, CMAS( 2,34.71 ), CMAS( 2,37.42 ), "Sure, I'll do it, but...");
        addSub(track, CMAS( 2,38.01 ), CMAS( 2,40.8 ), "I was hoping we could do it together.");
        addSub(track, CMAS( 2,42.97 ), CMAS( 2,43.97 ), "There, there.");
        // addSub(track, CMAS( , ), CMAS( , ), "");

	};
}());

var isShowed = false;

function showChar(char)
{
    var elem = document.getElementsByClassName(char)[0];
    var child = elem.getElementsByClassName("thumb")[0];
    var bodys = document.getElementsByClassName("chara_zone")[0];
    // var image = child.style.background;



    var charactos = document.getElementsByClassName("chara_list")[0];
    var elems = charactos.getElementsByTagName("*");

    console.log("there is : "+ elems.length);
    for(let i=0;i<elems.length;i++){
        elems[i].opacity='0';
        elems[i].style.visibility = "hidden";
    }

    if(child.currentStyle){
        var img = child.currentStyle.backgroundImage;
    }
    else
    {
        var img = getComputedStyle(child,"").getPropertyValue("background-image");
    }

    var clickBehind = document.createElement("div");
    clickBehind.className = "clickit";
    
    bodys.appendChild(clickBehind);

    var charaBg = document.createElement("img");

    // charaBg.style.position = "relative";
    charaBg.opacity='1';
    charaBg.className = "character-bg";
    charaBg.style.backgroundImage = "url('https://kimetsu.com/anime/assets/img/common/bg/bg_repeat_red.jpg')";
    charaBg.style.backgroundSize = "contain";
    charaBg.addEventListener("click", function(){
        charaName.remove();
        charaBg.remove();
        charaInfo.remove();
        charaHead.remove();
        clickBehind.remove();
        for(let i=0;i<elems.length;i++){
            elems[i].opacity='1';
            elems[i].style.visibility = "visible";
        }
    });
    bodys.appendChild(charaBg);

    var charaHead = document.createElement("div");

    charaHead.className = "chara_head";
    charaHead.style.backgroundImage = img;
    charaHead.style.backgroundSize = "100%";
    charaHead.opacity='1';
    charaHead.addEventListener("click", function(){
        charaName.remove();
        charaBg.remove();
        charaInfo.remove();
        charaHead.remove();
        clickBehind.remove();
        for(let i=0;i<elems.length;i++){
            elems[i].opacity='1';
            elems[i].style.visibility = "visible";
        }
        
    });

    bodys.appendChild(charaHead);

    var charaName = document.createElement("h1");

    charaName.className = "chara_name";
    setText(charaName,char,"name");
    charaName.opacity='1';
    
    charaName.addEventListener("click", function(){
        charaName.remove();
        charaInfo.remove();
        charaBg.remove();
        charaHead.remove();
        clickBehind.remove();
        for(let i=0;i<elems.length;i++){
            elems[i].opacity='1';
            elems[i].style.visibility = "visible";
        }
    });

    bodys.appendChild(charaName);


    var charaInfo = document.createElement("h1");

    charaInfo.className = "chara_info";
    charaInfo.style.whiteSpace = "pre-line";
    setText(charaInfo,char,"info");
    charaInfo.opacity='1';
    
    charaInfo.addEventListener("click", function(){
        charaName.remove();
        charaInfo.remove();
        charaBg.remove();
        charaHead.remove();
        clickBehind.remove();
        for(let i=0;i<elems.length;i++){
            elems[i].opacity='1';
            elems[i].style.visibility = "visible";
        }
    });
    


    bodys.appendChild(charaInfo);

    bodys.addEventListener("click", function(){
        charaName.remove();
        charaBg.remove();
        charaHead.remove();
        charaInfo.remove();
        clickBehind.remove();
        for(let i=0;i<elems.length;i++){
            elems[i].opacity='1';
            elems[i].style.visibility = "visible";
        }
        
    });

    closeOnClick(charaHead, charaName, charaBg, elems);

/*    console.log("image = "+ img);

    // img = img.replace(/(url\(|\)|")/g, '');
    console.log("image = "+ img);*/
    // var test = document.getElementsByClassName("urokodaki")[0];
    // test.getElementsByClassName("thumb")[0].style.backgroundImage = img;

    

    // child.style.height = "250px";
}

function setText(el, char, type)
{
    $.getJSON( "https://raw.githubusercontent.com/GlQuentin33/SubTitles/master/chara_list.json", function( json ) {


        // charaName.style.backgroundImage = img;
        // charaName.style.backgroundSize = "100%";
        if(json[char]){
            el.innerHTML = json[char][type];
        }
        
        });
}

function closeOnClick(charaHead, charaName, charaBg, elems)
{

}

function topMost(htmlElement)
{
    var elements = document.getElementsByTagName("*");
    var highest_index = 0;

    for (var i = 0; i < elements.length - 1; i++) 
    {
        if (parseInt(elements[i].style.zIndex) > highest_index) 
        {        
            highest_index = parseInt(elements[i].style.zIndex);
        }
    }

    htmlElement.style.zIndex = highest_index + 1;
}

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

function getJsonData(json_file, data)
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        return myObj[data];
      }
    };
    xmlhttp.open("GET", json_file, true);
    xmlhttp.send();
}

function addSub(track, time1, time2, subs)
{
    return track.addCue(new VTTCue(time1, time2, subs));
}

function CMAS(minute, seconds)
{
    var mins = 60*minute;
    var secs = mins + seconds;
    return secs;
}