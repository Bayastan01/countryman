import { IApplicationState } from '../../setup/store'

export const selectOpenedNewPost = (state: IApplicationState) => state.newPost.isOpen
