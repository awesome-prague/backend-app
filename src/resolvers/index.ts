import { Query } from './Query'
import { Subscription } from './Subscription'
import { auth } from './Mutation/auth'
import { post } from './Mutation/post'
import { AuthPayload } from './AuthPayload'
import { User } from './User'
import { Post } from './Post'

export default {
  Query,
  User,
  Post,
  Mutation: {
    ...auth,
    ...post,
  },
  Subscription,
  AuthPayload,
}
