export const classNames = (cls, mods = {}, additional = []) => {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([key, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ')
}