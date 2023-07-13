function exhaustiveCheck(_x: never): never {
    throw new Error("Exhaustive check fails!");
}

export {exhaustiveCheck}