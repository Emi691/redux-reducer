export function manageFriends(state, action){
    const index = state.friends.findIndex(element => element.id === action.id)

    switch (action.type) {
        case 'ADD_FRIEND':
            return {friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            return {friends: [...state.friends.slice(0, index), ...state.friends.slice(index + 1)]}
        default:
            return state
    }
}
