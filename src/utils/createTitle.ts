const TITLE = import.meta.env.VITE_TITLE;

/**
 * Create a title for a page of the "MAIN TITLE | additional title" type
* @param {string} extraTitle - the additional line to be added to the main title
* */
function createTitle(extraTitle: string) {
    if (!TITLE) throw new Error("There is no 'TITLE' value");

    return String(TITLE) + " | " + extraTitle;
}

export {createTitle};