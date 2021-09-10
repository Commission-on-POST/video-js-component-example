# Videojs_Component

React Component library that show a example of how POST implements the VideoJs library in a React Component with private code stripped out.

### Table of Contents

- [Description](#description)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)

## Description

This is a npm package that exports a example React functional component that show how post imports and creates a React component for the videoJs library.

[Back To Top](#Videojs_Component)

## Technologies

- Videojs
- React

[Back To Top](#Videojs_Component)

### Installation

`npm i @commission-on-post/videojs-component`

[Back To Top](#Videojs_Component)

### Usage

.

Example to call the component :

```typescript
import "./App.css";
import React from "react";
import {VideoJSPlayer} from "@commission-on-post/videojs-component";

function App() {
  return (
    <div className="App">
      <VideoJSPlayer
        source={
            {
                src: "url-to-smooth-streaming-link-from-azure";
                videoType: true;
                volumeControl: true;
                thumbnail: "url-to-image";
                pictureInPicture: false;
            }
        }
        methods={
            [
                {
                    type: "timeUpdate",
                    func: "showAtTimeStamp",
                    funcData: [
                        {
                            id: "example-target",
                            timeStamp: 100
                        }
                    ]
                }
            ]
        }
        position={
            {
                top: 0;
                left: 0;
                width: 400;
                height: 500;
            }
        }
        control={
            {
                autoPlay: true;
                controlBar: true;
                hidePlayButton: true;
                inactivityTimer: 0;
                playbackSpeeds: [0.5, 1, 2];
            }
        }
    </div>
  );
}

export default App;

```

[Back To Top](#Videojs_Component)
