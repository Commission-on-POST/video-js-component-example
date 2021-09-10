/// <reference types="react" />
import { IFuncParams } from "@commission-on-post/post-cat-functionality-tool";
import "video.js/dist/video-js.css";
import "./VideoJsPlayerCss.css";
export interface VideoJsPlayerProps extends VideoJsPlayerDefaultProps {
    compId?: string;
    funcLog?: boolean;
    visibility?: string;
}
interface VideoJsPlayerDefaultProps {
    source: SourceType;
    methods?: IFuncParams[];
    position: PositionType;
    control: ControlType;
}
interface SourceType {
    src: string;
    videoType: boolean;
    volumeControl: boolean;
    thumbnail: string;
    pictureInPicture: boolean;
}
interface PositionType {
    top: number;
    left: number;
    width: number;
    height: number;
}
interface ControlType {
    autoPlay: boolean;
    controlBar: boolean;
    hidePlayButton: boolean;
    inactivityTimer: number;
    playbackSpeeds: number[];
}
export declare const VideoJSPlayer: (props?: VideoJsPlayerProps) => JSX.Element;
export default VideoJSPlayer;
