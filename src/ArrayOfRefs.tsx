import React, {useEffect, useRef} from "react";

export function ArrayOfRefs():any {
    // an array of references
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        // Updating an array of references
        if (!inputRefs.current) {
            return;
        }

        // changing the input placeholder texts for each one, with an index postfix
        for (let i = 0; i < inputRefs.current.length; i++) {
            const input = inputRefs.current[i];
            if (!input) {
                continue;
            }
            input.placeholder = `Hello ${i}`;
        }
    }, []);

    // storing multiple references to a set of inputs
    return Array.from(Array(10)).map((_, i) => <input key={i} ref={el => inputRefs.current[i] = el}/>)
}