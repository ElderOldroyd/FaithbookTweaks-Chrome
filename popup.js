// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let hideProfiles = document.getElementById('hideProfiles');
chrome.storage.sync.get('color', function(data) {
  hideProfiles.style.backgroundColor = data.color;
  hideProfiles.setAttribute('value', data.color);
});
hideProfiles.onclick = function(element) {
  //let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.insertCSS(tabs[0].id, {file: 'styles/hideProfilePictures.css'});
    /*chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});*/
  });
};

let hideImages = document.getElementById('hideImages');
chrome.storage.sync.get('color', function(data) {
  hideImages.style.backgroundColor = data.color;
  hideImages.setAttribute('value', data.color);
});
hideImages.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.insertCSS(tabs[0].id, {file: 'styles/hideImages.css'});
  });
};

/*

//This is a CSS selector that helps us find all of the profile pictures on the page
let hideProfileSelector = `img:not(.njmm-override):not(._1ift):not([alt^="Image"]):not(.scaledImageFitWidth):not([src*="rsrc"]), image:not(.njmm-override):not([src*="rsrc"]),.uiScaledImageContainer._26w6`;
//It got a little trickier with the new facebook update becuase the profile pictures are both img and image elements.
//This is not super optimized, but it does work. It probably messes up the optional settings (e.g.hide all videos)
//njmm-override is what we use to not block images twice
//_1ift is the class that emojis have
//alts that start with "Image" are regular images, along with the scaledImageFitWidth class
//if the src is rsrc, it's an icon we don't need to block
//.uiScaledImageContainer._26w6 takes care of the profile pictures in people's stories.

const hideImagesCSS = `[src*=scontent],[style*=scontent] {visibility:hidden}`;
let cssInject = document.createElement("style"); //We will put the code into this element
cssInject.setAttribute("type","text/css");
cssInject.innerHTML = code;
document.head.appendChild(cssInject); //Injecting the element into the head of the html DOM will allow everything in the body to use it.

let profileURL = // find some way to put the photo over the profile pictures
setInterval(hideProfileImages,500,profileURL);

function hideProfileImages(profileURL){

  let list = document.querySelectorAll(hideProfileSelector);

	//This will loop over all the pictures our list
	for (var i = 0; i <list.length;i++){
		let wid = list[i].width; //We need the width because the browser will adjust the element's width and height when we change the source. Retaining this will allow us to fix them.
		let hei = list[i].height; //Ditto

   	list[i].classList.add(`njmm-override`); //Adding this class will tell the selectors to not hide it, because it is already hidden
		list[i].setAttribute(`src`,`${profileURL}`); //Change the source, if it uses the source attribute
		list[i].style.backgroundImage = `url("${profileURL}")`;//Change the source, if it uses the backgroundImage attribute
		list[i].setAttribute(`xlink:href`,`${profileURL}`);//Change the source, if it uses the xlink attribute (new facebook does)
		list[i].style.visibility="visible"; //Force it to be visible anyway, just in case.

		list[i].width = wid; //Set the width to the original width.
		list[i].height = hei; //Set the height to the original height
	}
}


*/
