import React, {Fragment, useEffect, useRef} from "react";

export type RefMap<TReference> = {
    [key: string]: TReference;
}

export function MapOfRefs() {
    // a map/dictionary of references
    const buttonRefMap = useRef<RefMap<HTMLButtonElement | null>>({});

    useEffect(() => {

        // Updating a map of references
        if (!buttonRefMap.current) {
            return;
        }

        // set the onclick property of the button to show a popup box on click
        const firstButton = buttonRefMap.current["my-button"];
        if (firstButton) {
            firstButton.onclick = () => alert("hello world");
        }

        // replaces the lorem ipsum text with "Lol, TL;DR"
        const secondButton = buttonRefMap.current["my-other-button"];
        if (secondButton) {
            secondButton.innerText = "Lol, TL;DR";
        }
    }, []);

    // storing a reference in a map of buttons
    return <Fragment>

        <button ref={(el) => buttonRefMap.current["my-button"] = el}>
            Hello World
        </button>
        <button ref={(el) => buttonRefMap.current["my-other-button"] = el}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
        </button>
    </Fragment>;
}