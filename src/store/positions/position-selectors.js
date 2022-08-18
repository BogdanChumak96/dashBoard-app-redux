export const selectAllPosition = state => state.positions

export const selectVisiblePosition = (state, filters = []) => {
    if (filters.length === 0) {
        return state.positions
    }
    return state.positions.filter(pos => {
        const positionFilters = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);

        return filters.every(filter => positionFilters.includes(filter));
    })
} 