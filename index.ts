export default <T extends Object, D extends Object>() => {
    const map = new WeakMap<T, D>();
    
    const internal = function (object: T) {
        if (!map.has(object))
            map.set(object, {} as D);
        return map.get(object);
    }

    return internal;
}
