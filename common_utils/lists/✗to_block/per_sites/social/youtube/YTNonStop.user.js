/**
 * @param {string} e
 * @return {?}
 */
function parseHeaders(e){e=e.toString();var r,n,c,i,s,t=/^\/\/ @(\S+)(?:\s+(.*))?/,a={},l=e.split(/[\r\n]+/).filter(function(e,r,n){return e.match(t)});for(var f in l){switch([,r,s]=l[f].replace(/\s+$/,"").match(t),r){case"licence":r="license"}[i,n]=r.split(/:/).reverse(),i&&(n?(a[n]||(a[n]=new Object),c=a[n]):c=a,c[i]?(c[i]instanceof Array||(c[i]=new Array(c[i])),c[i].push(s||"")):c[i]=s||"")}return a.license&&(a.licence=a.license),a}
// https://sourceforge.net/p/greasemonkey/wiki/Metadata_Block/#multiplexing-metadata-blocks
var fileMETA = parseHeaders((function () {
  // ==UserScript==
  // @name            You(Tube) nonstop!
  // @namespace       tag:github.com,2020:K-mik@Z:YTNonStop:PreventsAnnoyingVideoPausedDialogsFromShowingUp:TryToTakeOverTheWorld
  // @homepageURL     https://github.com/K-mikaZ/new_approach_adb__1st/blob/master/common_utils/lists/✗to_block/per_sites/social/youtube/YTNonStop.user.js
  // @downloadURL     https://raw.githubusercontent.com/K-mikaZ/new_approach_adb__1st/master/common_utils/lists/✗to_block/per_sites/social/youtube/YTNonStop.user.js
  // @updateURL       https://github.com/K-mikaZ/new_approach_adb__1st/blob/master/common_utils/lists/✗to_block/per_sites/social/youtube/YTNonStop.user.js
  // @version         1.4.0
  // @description     Prevents annoying "video paused" dialogs from showing up
  // @description:en  Prevents annoying "video paused" dialogs from showing up
  // @description:de  Verhindert, dass nervige "Video angehaltene" Dialoge angezeigt werden
  // @description:fr  Empêche l'affichage des boîtes de dialogue ennuyeuses "vidéo en pause"
  // @description:it  Impedisce la visualizzazione di fastidiose finestre di dialogo "video in pausa"
  // @description:pt  Impede que diálogos "vídeo em pausa" irritantes apareçam
  // @author          K-mik@Z
  // @include         /y(ou)?t(u)?(be)?\.(.{2,})\/(.*)/
  // @grant           none
  // @icon            data:image/png;base64,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
  // ==/UserScript==
}));
// originally script from https://raw.githubusercontent.com/spmn/yt-dont-stop/master/js/payload.js
!function(){"use strict";const t={set:()=>0,get:()=>Date.now()};Object.defineProperty(window,"_lact",t)}();
// search _lact in example:  view-source:https://www.youtube.com/watch?v=-A87GERl-Nc&list=RDqSKK76h6h54&index=14
