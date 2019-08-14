export const addFeature = props => {
    return { type: 'ADD_FEATURE', payload: props.feature }
}

export const removeFeature = props => {
    return { type: 'REMOVE_FEATURE', payload: props.id }
}

