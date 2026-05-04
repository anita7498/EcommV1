
function isValidDate(dateStr) {

    const isString = typeof dateStr === 'string' ? true : false;
    const hasSeparator = /[-/.]/.test(dateStr);

    const givenDate = new Date(dateStr);
    if (dateStr && isString && hasSeparator && !isNaN(givenDate.getTime())) {
        return true;
    }
}

export default isValidDate;