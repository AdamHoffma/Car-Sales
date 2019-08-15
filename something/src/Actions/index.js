export const addFeature = feature => {
    return { type: 'ADD_FEATURE', payload: feature }
}

export const removeFeature = props => {
    return { type: 'REMOVE_FEATURE', payload: props.id }
}

