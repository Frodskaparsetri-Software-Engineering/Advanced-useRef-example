import React, {useEffect, useRef} from "react";

export function SingleBasicRef() {
    // single reference
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Updating a basic single reference
        if (!audioRef.current) {
            return;
        }

        // setting the audio source and playing it on start
        audioRef.current.src = "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3";
    }, []);

    return <audio ref={audioRef} controls/>;
}