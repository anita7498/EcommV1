const getPagination = (page, limit, total) => {

    // Convert to numbers
    page = Number(page);
    limit = Number(limit);

    // Handle invalid values
    if (isNaN(page) || page < 1) page = 1;
    if (isNaN(limit) || limit < 1) limit = 10;

    // Enforce max limits (avoid abuse)
    const MAX_LIMIT = 50;
    if (limit > MAX_LIMIT) limit = MAX_LIMIT;

    // If page exceeds totalPages
    const totalPages = Math.ceil(total / limit);
    const safePage = page > totalPages ? totalPages : page;
    const safeSkip = (safePage - 1) * limit;

    return { safePage, limit, safeSkip };
};


const getPaginationMeta = ( total, page, limit, skip, currentPageRecord ) => {

    const totalPages = Math.ceil(total / limit);

    const remaining = total - (skip + currentPageRecord);

    return {
        totalRecord: total,
        page,
        limit,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
        remaining
    };
};

export { getPagination, getPaginationMeta }