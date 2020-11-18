function convertType(value, toType) {
    switch (toType) {
        case toType === 'boolean':
            return Boolean(value);
        case toType === 'string':
            return String(value);
        case toType === 'number':
            return Number(value);
    }
}