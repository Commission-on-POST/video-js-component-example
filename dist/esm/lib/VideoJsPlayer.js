var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { FunctionalitySelector, FunctionalityRemover, } from "@commission-on-post/post-cat-functionality-tool";
import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "./VideoJsPlayerCss.css";
var defaultProps = {
    source: {
        src: "//postsms-usw22.streaming.media.azure.net/041be8b3-c50f-42c5-801c-ecefaca07c61/SWF-cartoon-intro.ism/manifest",
        videoType: true,
        volumeControl: true,
        thumbnail: "",
        pictureInPicture: false,
    },
    position: { top: 0, left: 0, width: 480, height: 30 },
    control: {
        autoPlay: false,
        controlBar: true,
        hidePlayButton: false,
        inactivityTimer: 0,
        playbackSpeeds: [0.5, 1, 1.5, 2],
    },
    methods: [],
};
export var VideoJSPlayer = function (props) {
    if (props === void 0) { props = defaultProps; }
    var videoRef = React.useRef(null);
    var propsCopy = __assign({}, props);
    if (!propsCopy.source)
        propsCopy.source = defaultProps.source;
    if (!propsCopy.methods)
        propsCopy.methods = defaultProps.methods;
    if (!propsCopy.position)
        propsCopy.position = defaultProps.position;
    if (!propsCopy.control)
        propsCopy.control = defaultProps.control;
    var options = {
        sources: [
            {
                src: propsCopy.source.src + "(format=m3u8-aapl)",
                type: "application/x-mpegURL",
            },
            {
                src: propsCopy.source.src + "(format=m3u8-cmaf)",
                type: "application/x-mpegURL",
            },
            {
                src: propsCopy.source.src + "(format=mpd-time-csf)",
                type: "application/dash+xml",
            },
            {
                src: propsCopy.source.src + "(format=mpd-time-cmaf)",
                type: "application/dash+xml",
            },
        ],
        controls: propsCopy.control.controlBar,
        bigPlayButton: !propsCopy.control.hidePlayButton && propsCopy.source.videoType,
        autoplay: propsCopy.control.autoPlay,
        width: propsCopy.position.width,
        height: propsCopy.position.height,
        poster: propsCopy.source.thumbnail,
        inactivityTimeout: propsCopy.control.inactivityTimer
            ? propsCopy.control.inactivityTimer
            : 0,
        playbackRates: propsCopy.control.playbackSpeeds
            ? propsCopy.control.playbackSpeeds
            : [0.5, 1, 1.5, 2],
        controlBar: {
            fullscreenToggle: propsCopy.source.videoType,
            volumePanel: {
                inline: propsCopy.source.volumeControl,
            },
            pictureInPictureToggle: !!propsCopy.source.pictureInPicture,
        },
    };
    // This seperate functional component fixes the removal of the videoelement
    // from the DOM when calling the dispose() method on a player
    var VideoHtml = function (top, left) { return (React.createElement("div", { "data-vjs-player": true, style: {
            top: top,
            left: left,
            visibility: "hidden",
            position: "absolute",
        } },
        React.createElement("video", { ref: videoRef, className: "video-js vjs-big-play-centered", id: propsCopy.compId }))); };
    React.useEffect(function () {
        var videoElement = videoRef.current;
        var player = null;
        if (videoElement) {
            videoElement.parentElement.style.visibility = propsCopy.visibility
                ? propsCopy.visibility
                : "visible";
            player = videojs(videoElement, options, function () {
                if (propsCopy.compId && propsCopy.methods.length > 0) {
                    FunctionalitySelector(propsCopy.compId, "MediaPlayer", propsCopy.methods, propsCopy.funcLog);
                    document
                        .getElementsByTagName("body")[0]
                        .dispatchEvent(new Event(propsCopy.compId + "-loaded"));
                }
            });
        }
        return function () {
            if (player) {
                player.dispose();
            }
            if (videoElement) {
                if (propsCopy.compId && propsCopy.methods.length > 0) {
                    FunctionalityRemover(propsCopy.compId, "MediaPlayer", propsCopy.methods, propsCopy.funcLog);
                }
            }
        };
    }, [options, propsCopy, videoRef]);
    return VideoHtml(propsCopy.position.top, propsCopy.position.left);
};
export default VideoJSPlayer;
