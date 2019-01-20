import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    posts: <T = Post[]>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    categories: <T = Category[]>(args: { where?: CategoryWhereInput, orderBy?: CategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    subCategories: <T = SubCategory[]>(args: { where?: SubCategoryWhereInput, orderBy?: SubCategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    votes: <T = Vote[]>(args: { where?: VoteWhereInput, orderBy?: VoteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    appStates: <T = AppState[]>(args: { where?: AppStateWhereInput, orderBy?: AppStateOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    post: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    category: <T = Category | null>(args: { where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    subCategory: <T = SubCategory | null>(args: { where: SubCategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    vote: <T = Vote | null>(args: { where: VoteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    postsConnection: <T = PostConnection>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    categoriesConnection: <T = CategoryConnection>(args: { where?: CategoryWhereInput, orderBy?: CategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    subCategoriesConnection: <T = SubCategoryConnection>(args: { where?: SubCategoryWhereInput, orderBy?: SubCategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    votesConnection: <T = VoteConnection>(args: { where?: VoteWhereInput, orderBy?: VoteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    appStatesConnection: <T = AppStateConnection>(args: { where?: AppStateWhereInput, orderBy?: AppStateOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createPost: <T = Post>(args: { data: PostCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCategory: <T = Category>(args: { data: CategoryCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSubCategory: <T = SubCategory>(args: { data: SubCategoryCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createVote: <T = Vote>(args: { data: VoteCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAppState: <T = AppState>(args: { data: AppStateCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePost: <T = Post | null>(args: { data: PostUpdateInput, where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCategory: <T = Category | null>(args: { data: CategoryUpdateInput, where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSubCategory: <T = SubCategory | null>(args: { data: SubCategoryUpdateInput, where: SubCategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateVote: <T = Vote | null>(args: { data: VoteUpdateInput, where: VoteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePost: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCategory: <T = Category | null>(args: { where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSubCategory: <T = SubCategory | null>(args: { where: SubCategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteVote: <T = Vote | null>(args: { where: VoteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPost: <T = Post>(args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCategory: <T = Category>(args: { where: CategoryWhereUniqueInput, create: CategoryCreateInput, update: CategoryUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSubCategory: <T = SubCategory>(args: { where: SubCategoryWhereUniqueInput, create: SubCategoryCreateInput, update: SubCategoryUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertVote: <T = Vote>(args: { where: VoteWhereUniqueInput, create: VoteCreateInput, update: VoteUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPosts: <T = BatchPayload>(args: { data: PostUpdateManyMutationInput, where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCategories: <T = BatchPayload>(args: { data: CategoryUpdateManyMutationInput, where?: CategoryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySubCategories: <T = BatchPayload>(args: { data: SubCategoryUpdateManyMutationInput, where?: SubCategoryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyVotes: <T = BatchPayload>(args: { data: VoteUpdateManyMutationInput, where?: VoteWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAppStates: <T = BatchPayload>(args: { data: AppStateUpdateManyMutationInput, where?: AppStateWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPosts: <T = BatchPayload>(args: { where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCategories: <T = BatchPayload>(args: { where?: CategoryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySubCategories: <T = BatchPayload>(args: { where?: SubCategoryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyVotes: <T = BatchPayload>(args: { where?: VoteWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAppStates: <T = BatchPayload>(args: { where?: AppStateWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    post: <T = PostSubscriptionPayload | null>(args: { where?: PostSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    category: <T = CategorySubscriptionPayload | null>(args: { where?: CategorySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    subCategory: <T = SubCategorySubscriptionPayload | null>(args: { where?: SubCategorySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    vote: <T = VoteSubscriptionPayload | null>(args: { where?: VoteSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    appState: <T = AppStateSubscriptionPayload | null>(args: { where?: AppStateSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Post: (where?: PostWhereInput) => Promise<boolean>
  Category: (where?: CategoryWhereInput) => Promise<boolean>
  SubCategory: (where?: SubCategoryWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Vote: (where?: VoteWhereInput) => Promise<boolean>
  AppState: (where?: AppStateWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateAppState {
  count: Int!
}

type AggregateCategory {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateSubCategory {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateVote {
  count: Int!
}

type AppState {
  defaultSearchValue: String!
}

"""A connection to a list of items."""
type AppStateConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AppStateEdge]!
  aggregate: AggregateAppState!
}

input AppStateCreateInput {
  defaultSearchValue: String!
}

"""An edge in a connection."""
type AppStateEdge {
  """The item at the end of the edge."""
  node: AppState!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AppStateOrderByInput {
  defaultSearchValue_ASC
  defaultSearchValue_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type AppStatePreviousValues {
  defaultSearchValue: String!
}

type AppStateSubscriptionPayload {
  mutation: MutationType!
  node: AppState
  updatedFields: [String!]
  previousValues: AppStatePreviousValues
}

input AppStateSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AppStateSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AppStateSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AppStateSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AppStateWhereInput
}

input AppStateUpdateManyMutationInput {
  defaultSearchValue: String
}

input AppStateWhereInput {
  """Logical AND on all given filters."""
  AND: [AppStateWhereInput!]

  """Logical OR on all given filters."""
  OR: [AppStateWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AppStateWhereInput!]
  defaultSearchValue: String

  """All values that are not equal to given value."""
  defaultSearchValue_not: String

  """All values that are contained in given list."""
  defaultSearchValue_in: [String!]

  """All values that are not contained in given list."""
  defaultSearchValue_not_in: [String!]

  """All values less than the given value."""
  defaultSearchValue_lt: String

  """All values less than or equal the given value."""
  defaultSearchValue_lte: String

  """All values greater than the given value."""
  defaultSearchValue_gt: String

  """All values greater than or equal the given value."""
  defaultSearchValue_gte: String

  """All values containing the given string."""
  defaultSearchValue_contains: String

  """All values not containing the given string."""
  defaultSearchValue_not_contains: String

  """All values starting with the given string."""
  defaultSearchValue_starts_with: String

  """All values not starting with the given string."""
  defaultSearchValue_not_starts_with: String

  """All values ending with the given string."""
  defaultSearchValue_ends_with: String

  """All values not ending with the given string."""
  defaultSearchValue_not_ends_with: String
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Category implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  subCategories(where: SubCategoryWhereInput, orderBy: SubCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SubCategory!]
}

"""A connection to a list of items."""
type CategoryConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CategoryEdge]!
  aggregate: AggregateCategory!
}

input CategoryCreateInput {
  title: String!
  subCategories: SubCategoryCreateManyWithoutCategoriesInput
}

input CategoryCreateManyWithoutSubCategoriesInput {
  create: [CategoryCreateWithoutSubCategoriesInput!]
  connect: [CategoryWhereUniqueInput!]
}

input CategoryCreateWithoutSubCategoriesInput {
  title: String!
}

"""An edge in a connection."""
type CategoryEdge {
  """The item at the end of the edge."""
  node: Category!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CategoryOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  title_ASC
  title_DESC
}

type CategoryPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
}

input CategoryScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [CategoryScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [CategoryScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CategoryScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
}

type CategorySubscriptionPayload {
  mutation: MutationType!
  node: Category
  updatedFields: [String!]
  previousValues: CategoryPreviousValues
}

input CategorySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CategorySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CategorySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CategorySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CategoryWhereInput
}

input CategoryUpdateInput {
  title: String
  subCategories: SubCategoryUpdateManyWithoutCategoriesInput
}

input CategoryUpdateManyDataInput {
  title: String
}

input CategoryUpdateManyMutationInput {
  title: String
}

input CategoryUpdateManyWithoutSubCategoriesInput {
  create: [CategoryCreateWithoutSubCategoriesInput!]
  connect: [CategoryWhereUniqueInput!]
  disconnect: [CategoryWhereUniqueInput!]
  delete: [CategoryWhereUniqueInput!]
  update: [CategoryUpdateWithWhereUniqueWithoutSubCategoriesInput!]
  updateMany: [CategoryUpdateManyWithWhereNestedInput!]
  deleteMany: [CategoryScalarWhereInput!]
  upsert: [CategoryUpsertWithWhereUniqueWithoutSubCategoriesInput!]
}

input CategoryUpdateManyWithWhereNestedInput {
  where: CategoryScalarWhereInput!
  data: CategoryUpdateManyDataInput!
}

input CategoryUpdateWithoutSubCategoriesDataInput {
  title: String
}

input CategoryUpdateWithWhereUniqueWithoutSubCategoriesInput {
  where: CategoryWhereUniqueInput!
  data: CategoryUpdateWithoutSubCategoriesDataInput!
}

input CategoryUpsertWithWhereUniqueWithoutSubCategoriesInput {
  where: CategoryWhereUniqueInput!
  update: CategoryUpdateWithoutSubCategoriesDataInput!
  create: CategoryCreateWithoutSubCategoriesInput!
}

input CategoryWhereInput {
  """Logical AND on all given filters."""
  AND: [CategoryWhereInput!]

  """Logical OR on all given filters."""
  OR: [CategoryWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CategoryWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  subCategories_every: SubCategoryWhereInput
  subCategories_some: SubCategoryWhereInput
  subCategories_none: SubCategoryWhereInput
}

input CategoryWhereUniqueInput {
  id: ID
  title: String
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createPost(data: PostCreateInput!): Post!
  createCategory(data: CategoryCreateInput!): Category!
  createSubCategory(data: SubCategoryCreateInput!): SubCategory!
  createUser(data: UserCreateInput!): User!
  createVote(data: VoteCreateInput!): Vote!
  createAppState(data: AppStateCreateInput!): AppState!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateCategory(data: CategoryUpdateInput!, where: CategoryWhereUniqueInput!): Category
  updateSubCategory(data: SubCategoryUpdateInput!, where: SubCategoryWhereUniqueInput!): SubCategory
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateVote(data: VoteUpdateInput!, where: VoteWhereUniqueInput!): Vote
  deletePost(where: PostWhereUniqueInput!): Post
  deleteCategory(where: CategoryWhereUniqueInput!): Category
  deleteSubCategory(where: SubCategoryWhereUniqueInput!): SubCategory
  deleteUser(where: UserWhereUniqueInput!): User
  deleteVote(where: VoteWhereUniqueInput!): Vote
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  upsertCategory(where: CategoryWhereUniqueInput!, create: CategoryCreateInput!, update: CategoryUpdateInput!): Category!
  upsertSubCategory(where: SubCategoryWhereUniqueInput!, create: SubCategoryCreateInput!, update: SubCategoryUpdateInput!): SubCategory!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertVote(where: VoteWhereUniqueInput!, create: VoteCreateInput!, update: VoteUpdateInput!): Vote!
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  updateManyCategories(data: CategoryUpdateManyMutationInput!, where: CategoryWhereInput): BatchPayload!
  updateManySubCategories(data: SubCategoryUpdateManyMutationInput!, where: SubCategoryWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyVotes(data: VoteUpdateManyMutationInput!, where: VoteWhereInput): BatchPayload!
  updateManyAppStates(data: AppStateUpdateManyMutationInput!, where: AppStateWhereInput): BatchPayload!
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  deleteManyCategories(where: CategoryWhereInput): BatchPayload!
  deleteManySubCategories(where: SubCategoryWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyVotes(where: VoteWhereInput): BatchPayload!
  deleteManyAppStates(where: AppStateWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Post implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  slug: String
  title: String!
  text: String!
  author: User!
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
  subCategories(where: SubCategoryWhereInput, orderBy: SubCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SubCategory!]
  thumbnail: String
}

"""A connection to a list of items."""
type PostConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  isPublished: Boolean
  slug: String
  title: String!
  text: String!
  thumbnail: String
  author: UserCreateOneWithoutPostsInput!
  votes: VoteCreateManyWithoutPostInput
  subCategories: SubCategoryCreateManyWithoutPostsInput
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateManyWithoutSubCategoriesInput {
  create: [PostCreateWithoutSubCategoriesInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateOneWithoutVotesInput {
  create: PostCreateWithoutVotesInput
  connect: PostWhereUniqueInput
}

input PostCreateWithoutAuthorInput {
  isPublished: Boolean
  slug: String
  title: String!
  text: String!
  thumbnail: String
  votes: VoteCreateManyWithoutPostInput
  subCategories: SubCategoryCreateManyWithoutPostsInput
}

input PostCreateWithoutSubCategoriesInput {
  isPublished: Boolean
  slug: String
  title: String!
  text: String!
  thumbnail: String
  author: UserCreateOneWithoutPostsInput!
  votes: VoteCreateManyWithoutPostInput
}

input PostCreateWithoutVotesInput {
  isPublished: Boolean
  slug: String
  title: String!
  text: String!
  thumbnail: String
  author: UserCreateOneWithoutPostsInput!
  subCategories: SubCategoryCreateManyWithoutPostsInput
}

"""An edge in a connection."""
type PostEdge {
  """The item at the end of the edge."""
  node: Post!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  isPublished_ASC
  isPublished_DESC
  slug_ASC
  slug_DESC
  title_ASC
  title_DESC
  text_ASC
  text_DESC
  thumbnail_ASC
  thumbnail_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  slug: String
  title: String!
  text: String!
  thumbnail: String
}

input PostScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [PostScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  isPublished: Boolean

  """All values that are not equal to given value."""
  isPublished_not: Boolean
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  thumbnail: String

  """All values that are not equal to given value."""
  thumbnail_not: String

  """All values that are contained in given list."""
  thumbnail_in: [String!]

  """All values that are not contained in given list."""
  thumbnail_not_in: [String!]

  """All values less than the given value."""
  thumbnail_lt: String

  """All values less than or equal the given value."""
  thumbnail_lte: String

  """All values greater than the given value."""
  thumbnail_gt: String

  """All values greater than or equal the given value."""
  thumbnail_gte: String

  """All values containing the given string."""
  thumbnail_contains: String

  """All values not containing the given string."""
  thumbnail_not_contains: String

  """All values starting with the given string."""
  thumbnail_starts_with: String

  """All values not starting with the given string."""
  thumbnail_not_starts_with: String

  """All values ending with the given string."""
  thumbnail_ends_with: String

  """All values not ending with the given string."""
  thumbnail_not_ends_with: String
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PostSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PostWhereInput
}

input PostUpdateInput {
  isPublished: Boolean
  slug: String
  title: String
  text: String
  thumbnail: String
  author: UserUpdateOneRequiredWithoutPostsInput
  votes: VoteUpdateManyWithoutPostInput
  subCategories: SubCategoryUpdateManyWithoutPostsInput
}

input PostUpdateManyDataInput {
  isPublished: Boolean
  slug: String
  title: String
  text: String
  thumbnail: String
}

input PostUpdateManyMutationInput {
  isPublished: Boolean
  slug: String
  title: String
  text: String
  thumbnail: String
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  delete: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
  deleteMany: [PostScalarWhereInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
}

input PostUpdateManyWithoutSubCategoriesInput {
  create: [PostCreateWithoutSubCategoriesInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  delete: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutSubCategoriesInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
  deleteMany: [PostScalarWhereInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutSubCategoriesInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateOneWithoutVotesInput {
  create: PostCreateWithoutVotesInput
  connect: PostWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PostUpdateWithoutVotesDataInput
  upsert: PostUpsertWithoutVotesInput
}

input PostUpdateWithoutAuthorDataInput {
  isPublished: Boolean
  slug: String
  title: String
  text: String
  thumbnail: String
  votes: VoteUpdateManyWithoutPostInput
  subCategories: SubCategoryUpdateManyWithoutPostsInput
}

input PostUpdateWithoutSubCategoriesDataInput {
  isPublished: Boolean
  slug: String
  title: String
  text: String
  thumbnail: String
  author: UserUpdateOneRequiredWithoutPostsInput
  votes: VoteUpdateManyWithoutPostInput
}

input PostUpdateWithoutVotesDataInput {
  isPublished: Boolean
  slug: String
  title: String
  text: String
  thumbnail: String
  author: UserUpdateOneRequiredWithoutPostsInput
  subCategories: SubCategoryUpdateManyWithoutPostsInput
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpdateWithWhereUniqueWithoutSubCategoriesInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutSubCategoriesDataInput!
}

input PostUpsertWithoutVotesInput {
  update: PostUpdateWithoutVotesDataInput!
  create: PostCreateWithoutVotesInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostUpsertWithWhereUniqueWithoutSubCategoriesInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutSubCategoriesDataInput!
  create: PostCreateWithoutSubCategoriesInput!
}

input PostWhereInput {
  """Logical AND on all given filters."""
  AND: [PostWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  isPublished: Boolean

  """All values that are not equal to given value."""
  isPublished_not: Boolean
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  thumbnail: String

  """All values that are not equal to given value."""
  thumbnail_not: String

  """All values that are contained in given list."""
  thumbnail_in: [String!]

  """All values that are not contained in given list."""
  thumbnail_not_in: [String!]

  """All values less than the given value."""
  thumbnail_lt: String

  """All values less than or equal the given value."""
  thumbnail_lte: String

  """All values greater than the given value."""
  thumbnail_gt: String

  """All values greater than or equal the given value."""
  thumbnail_gte: String

  """All values containing the given string."""
  thumbnail_contains: String

  """All values not containing the given string."""
  thumbnail_not_contains: String

  """All values starting with the given string."""
  thumbnail_starts_with: String

  """All values not starting with the given string."""
  thumbnail_not_starts_with: String

  """All values ending with the given string."""
  thumbnail_ends_with: String

  """All values not ending with the given string."""
  thumbnail_not_ends_with: String
  author: UserWhereInput
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
  subCategories_every: SubCategoryWhereInput
  subCategories_some: SubCategoryWhereInput
  subCategories_none: SubCategoryWhereInput
}

input PostWhereUniqueInput {
  id: ID
  slug: String
  title: String
}

type Query {
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category]!
  subCategories(where: SubCategoryWhereInput, orderBy: SubCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SubCategory]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote]!
  appStates(where: AppStateWhereInput, orderBy: AppStateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AppState]!
  post(where: PostWhereUniqueInput!): Post
  category(where: CategoryWhereUniqueInput!): Category
  subCategory(where: SubCategoryWhereUniqueInput!): SubCategory
  user(where: UserWhereUniqueInput!): User
  vote(where: VoteWhereUniqueInput!): Vote
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  categoriesConnection(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoryConnection!
  subCategoriesConnection(where: SubCategoryWhereInput, orderBy: SubCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SubCategoryConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  votesConnection(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VoteConnection!
  appStatesConnection(where: AppStateWhereInput, orderBy: AppStateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AppStateConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type SubCategory implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category!]
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
}

"""A connection to a list of items."""
type SubCategoryConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SubCategoryEdge]!
  aggregate: AggregateSubCategory!
}

input SubCategoryCreateInput {
  title: String!
  categories: CategoryCreateManyWithoutSubCategoriesInput
  posts: PostCreateManyWithoutSubCategoriesInput
}

input SubCategoryCreateManyWithoutCategoriesInput {
  create: [SubCategoryCreateWithoutCategoriesInput!]
  connect: [SubCategoryWhereUniqueInput!]
}

input SubCategoryCreateManyWithoutPostsInput {
  create: [SubCategoryCreateWithoutPostsInput!]
  connect: [SubCategoryWhereUniqueInput!]
}

input SubCategoryCreateWithoutCategoriesInput {
  title: String!
  posts: PostCreateManyWithoutSubCategoriesInput
}

input SubCategoryCreateWithoutPostsInput {
  title: String!
  categories: CategoryCreateManyWithoutSubCategoriesInput
}

"""An edge in a connection."""
type SubCategoryEdge {
  """The item at the end of the edge."""
  node: SubCategory!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SubCategoryOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  title_ASC
  title_DESC
}

type SubCategoryPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
}

input SubCategoryScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [SubCategoryScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [SubCategoryScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SubCategoryScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
}

type SubCategorySubscriptionPayload {
  mutation: MutationType!
  node: SubCategory
  updatedFields: [String!]
  previousValues: SubCategoryPreviousValues
}

input SubCategorySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SubCategorySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SubCategorySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SubCategorySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: SubCategoryWhereInput
}

input SubCategoryUpdateInput {
  title: String
  categories: CategoryUpdateManyWithoutSubCategoriesInput
  posts: PostUpdateManyWithoutSubCategoriesInput
}

input SubCategoryUpdateManyDataInput {
  title: String
}

input SubCategoryUpdateManyMutationInput {
  title: String
}

input SubCategoryUpdateManyWithoutCategoriesInput {
  create: [SubCategoryCreateWithoutCategoriesInput!]
  connect: [SubCategoryWhereUniqueInput!]
  disconnect: [SubCategoryWhereUniqueInput!]
  delete: [SubCategoryWhereUniqueInput!]
  update: [SubCategoryUpdateWithWhereUniqueWithoutCategoriesInput!]
  updateMany: [SubCategoryUpdateManyWithWhereNestedInput!]
  deleteMany: [SubCategoryScalarWhereInput!]
  upsert: [SubCategoryUpsertWithWhereUniqueWithoutCategoriesInput!]
}

input SubCategoryUpdateManyWithoutPostsInput {
  create: [SubCategoryCreateWithoutPostsInput!]
  connect: [SubCategoryWhereUniqueInput!]
  disconnect: [SubCategoryWhereUniqueInput!]
  delete: [SubCategoryWhereUniqueInput!]
  update: [SubCategoryUpdateWithWhereUniqueWithoutPostsInput!]
  updateMany: [SubCategoryUpdateManyWithWhereNestedInput!]
  deleteMany: [SubCategoryScalarWhereInput!]
  upsert: [SubCategoryUpsertWithWhereUniqueWithoutPostsInput!]
}

input SubCategoryUpdateManyWithWhereNestedInput {
  where: SubCategoryScalarWhereInput!
  data: SubCategoryUpdateManyDataInput!
}

input SubCategoryUpdateWithoutCategoriesDataInput {
  title: String
  posts: PostUpdateManyWithoutSubCategoriesInput
}

input SubCategoryUpdateWithoutPostsDataInput {
  title: String
  categories: CategoryUpdateManyWithoutSubCategoriesInput
}

input SubCategoryUpdateWithWhereUniqueWithoutCategoriesInput {
  where: SubCategoryWhereUniqueInput!
  data: SubCategoryUpdateWithoutCategoriesDataInput!
}

input SubCategoryUpdateWithWhereUniqueWithoutPostsInput {
  where: SubCategoryWhereUniqueInput!
  data: SubCategoryUpdateWithoutPostsDataInput!
}

input SubCategoryUpsertWithWhereUniqueWithoutCategoriesInput {
  where: SubCategoryWhereUniqueInput!
  update: SubCategoryUpdateWithoutCategoriesDataInput!
  create: SubCategoryCreateWithoutCategoriesInput!
}

input SubCategoryUpsertWithWhereUniqueWithoutPostsInput {
  where: SubCategoryWhereUniqueInput!
  update: SubCategoryUpdateWithoutPostsDataInput!
  create: SubCategoryCreateWithoutPostsInput!
}

input SubCategoryWhereInput {
  """Logical AND on all given filters."""
  AND: [SubCategoryWhereInput!]

  """Logical OR on all given filters."""
  OR: [SubCategoryWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SubCategoryWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  categories_every: CategoryWhereInput
  categories_some: CategoryWhereInput
  categories_none: CategoryWhereInput
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
}

input SubCategoryWhereUniqueInput {
  id: ID
  title: String
}

type Subscription {
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  category(where: CategorySubscriptionWhereInput): CategorySubscriptionPayload
  subCategory(where: SubCategorySubscriptionWhereInput): SubCategorySubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  vote(where: VoteSubscriptionWhereInput): VoteSubscriptionPayload
  appState(where: AppStateSubscriptionWhereInput): AppStateSubscriptionPayload
}

type User implements Node {
  id: ID!
  email: String!
  emailValidated: Boolean
  emailToken: String
  password: String!
  resetPasswordToken: String
  resetPasswordExpire: Float
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  role: UserRole!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  emailValidated: Boolean
  emailToken: String
  password: String!
  resetPasswordToken: String
  resetPasswordExpire: Float
  name: String!
  role: UserRole
  posts: PostCreateManyWithoutAuthorInput
  votes: VoteCreateManyWithoutUserInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutPostsInput {
  email: String!
  emailValidated: Boolean
  emailToken: String
  password: String!
  resetPasswordToken: String
  resetPasswordExpire: Float
  name: String!
  role: UserRole
  votes: VoteCreateManyWithoutUserInput
}

input UserCreateWithoutVotesInput {
  email: String!
  emailValidated: Boolean
  emailToken: String
  password: String!
  resetPasswordToken: String
  resetPasswordExpire: Float
  name: String!
  role: UserRole
  posts: PostCreateManyWithoutAuthorInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  emailValidated_ASC
  emailValidated_DESC
  emailToken_ASC
  emailToken_DESC
  password_ASC
  password_DESC
  resetPasswordToken_ASC
  resetPasswordToken_DESC
  resetPasswordExpire_ASC
  resetPasswordExpire_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  role_ASC
  role_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  emailValidated: Boolean
  emailToken: String
  password: String!
  resetPasswordToken: String
  resetPasswordExpire: Float
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  role: UserRole!
}

enum UserRole {
  MEMBER
  EDITOR
  ADMIN
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  emailValidated: Boolean
  emailToken: String
  password: String
  resetPasswordToken: String
  resetPasswordExpire: Float
  name: String
  role: UserRole
  posts: PostUpdateManyWithoutAuthorInput
  votes: VoteUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  email: String
  emailValidated: Boolean
  emailToken: String
  password: String
  resetPasswordToken: String
  resetPasswordExpire: Float
  name: String
  role: UserRole
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
}

input UserUpdateOneWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutVotesDataInput
  upsert: UserUpsertWithoutVotesInput
}

input UserUpdateWithoutPostsDataInput {
  email: String
  emailValidated: Boolean
  emailToken: String
  password: String
  resetPasswordToken: String
  resetPasswordExpire: Float
  name: String
  role: UserRole
  votes: VoteUpdateManyWithoutUserInput
}

input UserUpdateWithoutVotesDataInput {
  email: String
  emailValidated: Boolean
  emailToken: String
  password: String
  resetPasswordToken: String
  resetPasswordExpire: Float
  name: String
  role: UserRole
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserUpsertWithoutVotesInput {
  update: UserUpdateWithoutVotesDataInput!
  create: UserCreateWithoutVotesInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  emailValidated: Boolean

  """All values that are not equal to given value."""
  emailValidated_not: Boolean
  emailToken: String

  """All values that are not equal to given value."""
  emailToken_not: String

  """All values that are contained in given list."""
  emailToken_in: [String!]

  """All values that are not contained in given list."""
  emailToken_not_in: [String!]

  """All values less than the given value."""
  emailToken_lt: String

  """All values less than or equal the given value."""
  emailToken_lte: String

  """All values greater than the given value."""
  emailToken_gt: String

  """All values greater than or equal the given value."""
  emailToken_gte: String

  """All values containing the given string."""
  emailToken_contains: String

  """All values not containing the given string."""
  emailToken_not_contains: String

  """All values starting with the given string."""
  emailToken_starts_with: String

  """All values not starting with the given string."""
  emailToken_not_starts_with: String

  """All values ending with the given string."""
  emailToken_ends_with: String

  """All values not ending with the given string."""
  emailToken_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  resetPasswordToken: String

  """All values that are not equal to given value."""
  resetPasswordToken_not: String

  """All values that are contained in given list."""
  resetPasswordToken_in: [String!]

  """All values that are not contained in given list."""
  resetPasswordToken_not_in: [String!]

  """All values less than the given value."""
  resetPasswordToken_lt: String

  """All values less than or equal the given value."""
  resetPasswordToken_lte: String

  """All values greater than the given value."""
  resetPasswordToken_gt: String

  """All values greater than or equal the given value."""
  resetPasswordToken_gte: String

  """All values containing the given string."""
  resetPasswordToken_contains: String

  """All values not containing the given string."""
  resetPasswordToken_not_contains: String

  """All values starting with the given string."""
  resetPasswordToken_starts_with: String

  """All values not starting with the given string."""
  resetPasswordToken_not_starts_with: String

  """All values ending with the given string."""
  resetPasswordToken_ends_with: String

  """All values not ending with the given string."""
  resetPasswordToken_not_ends_with: String
  resetPasswordExpire: Float

  """All values that are not equal to given value."""
  resetPasswordExpire_not: Float

  """All values that are contained in given list."""
  resetPasswordExpire_in: [Float!]

  """All values that are not contained in given list."""
  resetPasswordExpire_not_in: [Float!]

  """All values less than the given value."""
  resetPasswordExpire_lt: Float

  """All values less than or equal the given value."""
  resetPasswordExpire_lte: Float

  """All values greater than the given value."""
  resetPasswordExpire_gt: Float

  """All values greater than or equal the given value."""
  resetPasswordExpire_gte: Float
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  role: UserRole

  """All values that are not equal to given value."""
  role_not: UserRole

  """All values that are contained in given list."""
  role_in: [UserRole!]

  """All values that are not contained in given list."""
  role_not_in: [UserRole!]
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
  emailToken: String
  resetPasswordToken: String
}

type Vote implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  user: User
  post: Post
  type: VoteType!
}

"""A connection to a list of items."""
type VoteConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [VoteEdge]!
  aggregate: AggregateVote!
}

input VoteCreateInput {
  type: VoteType!
  user: UserCreateOneWithoutVotesInput
  post: PostCreateOneWithoutVotesInput
}

input VoteCreateManyWithoutPostInput {
  create: [VoteCreateWithoutPostInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateManyWithoutUserInput {
  create: [VoteCreateWithoutUserInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateWithoutPostInput {
  type: VoteType!
  user: UserCreateOneWithoutVotesInput
}

input VoteCreateWithoutUserInput {
  type: VoteType!
  post: PostCreateOneWithoutVotesInput
}

"""An edge in a connection."""
type VoteEdge {
  """The item at the end of the edge."""
  node: Vote!

  """A cursor for use in pagination."""
  cursor: String!
}

enum VoteOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  type_ASC
  type_DESC
}

type VotePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  type: VoteType!
}

input VoteScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [VoteScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [VoteScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [VoteScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  type: VoteType

  """All values that are not equal to given value."""
  type_not: VoteType

  """All values that are contained in given list."""
  type_in: [VoteType!]

  """All values that are not contained in given list."""
  type_not_in: [VoteType!]
}

type VoteSubscriptionPayload {
  mutation: MutationType!
  node: Vote
  updatedFields: [String!]
  previousValues: VotePreviousValues
}

input VoteSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [VoteSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [VoteSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [VoteSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: VoteWhereInput
}

enum VoteType {
  LIKE
  DISLIKE
}

input VoteUpdateInput {
  type: VoteType
  user: UserUpdateOneWithoutVotesInput
  post: PostUpdateOneWithoutVotesInput
}

input VoteUpdateManyDataInput {
  type: VoteType
}

input VoteUpdateManyMutationInput {
  type: VoteType
}

input VoteUpdateManyWithoutPostInput {
  create: [VoteCreateWithoutPostInput!]
  connect: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  delete: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutPostInput!]
  updateMany: [VoteUpdateManyWithWhereNestedInput!]
  deleteMany: [VoteScalarWhereInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutPostInput!]
}

input VoteUpdateManyWithoutUserInput {
  create: [VoteCreateWithoutUserInput!]
  connect: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  delete: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [VoteUpdateManyWithWhereNestedInput!]
  deleteMany: [VoteScalarWhereInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutUserInput!]
}

input VoteUpdateManyWithWhereNestedInput {
  where: VoteScalarWhereInput!
  data: VoteUpdateManyDataInput!
}

input VoteUpdateWithoutPostDataInput {
  type: VoteType
  user: UserUpdateOneWithoutVotesInput
}

input VoteUpdateWithoutUserDataInput {
  type: VoteType
  post: PostUpdateOneWithoutVotesInput
}

input VoteUpdateWithWhereUniqueWithoutPostInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutPostDataInput!
}

input VoteUpdateWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutUserDataInput!
}

input VoteUpsertWithWhereUniqueWithoutPostInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutPostDataInput!
  create: VoteCreateWithoutPostInput!
}

input VoteUpsertWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutUserDataInput!
  create: VoteCreateWithoutUserInput!
}

input VoteWhereInput {
  """Logical AND on all given filters."""
  AND: [VoteWhereInput!]

  """Logical OR on all given filters."""
  OR: [VoteWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [VoteWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  type: VoteType

  """All values that are not equal to given value."""
  type_not: VoteType

  """All values that are contained in given list."""
  type_in: [VoteType!]

  """All values that are not contained in given list."""
  type_not_in: [VoteType!]
  user: UserWhereInput
  post: PostWhereInput
}

input VoteWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type PostOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'isPublished_ASC' |
  'isPublished_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'title_ASC' |
  'title_DESC' |
  'text_ASC' |
  'text_DESC' |
  'thumbnail_ASC' |
  'thumbnail_DESC'

export type VoteType =   'LIKE' |
  'DISLIKE'

export type VoteOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'type_ASC' |
  'type_DESC'

export type UserRole =   'MEMBER' |
  'EDITOR' |
  'ADMIN'

export type SubCategoryOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'title_ASC' |
  'title_DESC'

export type CategoryOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'title_ASC' |
  'title_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'emailValidated_ASC' |
  'emailValidated_DESC' |
  'emailToken_ASC' |
  'emailToken_DESC' |
  'password_ASC' |
  'password_DESC' |
  'resetPasswordToken_ASC' |
  'resetPasswordToken_DESC' |
  'resetPasswordExpire_ASC' |
  'resetPasswordExpire_DESC' |
  'name_ASC' |
  'name_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'role_ASC' |
  'role_DESC'

export type AppStateOrderByInput =   'defaultSearchValue_ASC' |
  'defaultSearchValue_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface UserUpdateWithoutPostsDataInput {
  email?: String
  emailValidated?: Boolean
  emailToken?: String
  password?: String
  resetPasswordToken?: String
  resetPasswordExpire?: Float
  name?: String
  role?: UserRole
  votes?: VoteUpdateManyWithoutUserInput
}

export interface PostWhereInput {
  AND?: PostWhereInput[] | PostWhereInput
  OR?: PostWhereInput[] | PostWhereInput
  NOT?: PostWhereInput[] | PostWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  isPublished?: Boolean
  isPublished_not?: Boolean
  slug?: String
  slug_not?: String
  slug_in?: String[] | String
  slug_not_in?: String[] | String
  slug_lt?: String
  slug_lte?: String
  slug_gt?: String
  slug_gte?: String
  slug_contains?: String
  slug_not_contains?: String
  slug_starts_with?: String
  slug_not_starts_with?: String
  slug_ends_with?: String
  slug_not_ends_with?: String
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  thumbnail?: String
  thumbnail_not?: String
  thumbnail_in?: String[] | String
  thumbnail_not_in?: String[] | String
  thumbnail_lt?: String
  thumbnail_lte?: String
  thumbnail_gt?: String
  thumbnail_gte?: String
  thumbnail_contains?: String
  thumbnail_not_contains?: String
  thumbnail_starts_with?: String
  thumbnail_not_starts_with?: String
  thumbnail_ends_with?: String
  thumbnail_not_ends_with?: String
  author?: UserWhereInput
  votes_every?: VoteWhereInput
  votes_some?: VoteWhereInput
  votes_none?: VoteWhereInput
  subCategories_every?: SubCategoryWhereInput
  subCategories_some?: SubCategoryWhereInput
  subCategories_none?: SubCategoryWhereInput
}

export interface PostUpdateWithoutVotesDataInput {
  isPublished?: Boolean
  slug?: String
  title?: String
  text?: String
  thumbnail?: String
  author?: UserUpdateOneRequiredWithoutPostsInput
  subCategories?: SubCategoryUpdateManyWithoutPostsInput
}

export interface CategoryWhereInput {
  AND?: CategoryWhereInput[] | CategoryWhereInput
  OR?: CategoryWhereInput[] | CategoryWhereInput
  NOT?: CategoryWhereInput[] | CategoryWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  subCategories_every?: SubCategoryWhereInput
  subCategories_some?: SubCategoryWhereInput
  subCategories_none?: SubCategoryWhereInput
}

export interface UserCreateOneWithoutVotesInput {
  create?: UserCreateWithoutVotesInput
  connect?: UserWhereUniqueInput
}

export interface PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput
  data: PostUpdateManyDataInput
}

export interface UserCreateWithoutVotesInput {
  email: String
  emailValidated?: Boolean
  emailToken?: String
  password: String
  resetPasswordToken?: String
  resetPasswordExpire?: Float
  name: String
  role?: UserRole
  posts?: PostCreateManyWithoutAuthorInput
}

export interface SubCategoryUpdateManyWithoutPostsInput {
  create?: SubCategoryCreateWithoutPostsInput[] | SubCategoryCreateWithoutPostsInput
  connect?: SubCategoryWhereUniqueInput[] | SubCategoryWhereUniqueInput
  disconnect?: SubCategoryWhereUniqueInput[] | SubCategoryWhereUniqueInput
  delete?: SubCategoryWhereUniqueInput[] | SubCategoryWhereUniqueInput
  update?: SubCategoryUpdateWithWhereUniqueWithoutPostsInput[] | SubCategoryUpdateWithWhereUniqueWithoutPostsInput
  updateMany?: SubCategoryUpdateManyWithWhereNestedInput[] | SubCategoryUpdateManyWithWhereNestedInput
  deleteMany?: SubCategoryScalarWhereInput[] | SubCategoryScalarWhereInput
  upsert?: SubCategoryUpsertWithWhereUniqueWithoutPostsInput[] | SubCategoryUpsertWithWhereUniqueWithoutPostsInput
}

export interface PostCreateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
}

export interface AppStateSubscriptionWhereInput {
  AND?: AppStateSubscriptionWhereInput[] | AppStateSubscriptionWhereInput
  OR?: AppStateSubscriptionWhereInput[] | AppStateSubscriptionWhereInput
  NOT?: AppStateSubscriptionWhereInput[] | AppStateSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AppStateWhereInput
}

export interface PostCreateWithoutAuthorInput {
  isPublished?: Boolean
  slug?: String
  title: String
  text: String
  thumbnail?: String
  votes?: VoteCreateManyWithoutPostInput
  subCategories?: SubCategoryCreateManyWithoutPostsInput
}

export interface VoteSubscriptionWhereInput {
  AND?: VoteSubscriptionWhereInput[] | VoteSubscriptionWhereInput
  OR?: VoteSubscriptionWhereInput[] | VoteSubscriptionWhereInput
  NOT?: VoteSubscriptionWhereInput[] | VoteSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: VoteWhereInput
}

export interface CategoryCreateInput {
  title: String
  subCategories?: SubCategoryCreateManyWithoutCategoriesInput
}

export interface SubCategorySubscriptionWhereInput {
  AND?: SubCategorySubscriptionWhereInput[] | SubCategorySubscriptionWhereInput
  OR?: SubCategorySubscriptionWhereInput[] | SubCategorySubscriptionWhereInput
  NOT?: SubCategorySubscriptionWhereInput[] | SubCategorySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: SubCategoryWhereInput
}

export interface SubCategoryCreateManyWithoutCategoriesInput {
  create?: SubCategoryCreateWithoutCategoriesInput[] | SubCategoryCreateWithoutCategoriesInput
  connect?: SubCategoryWhereUniqueInput[] | SubCategoryWhereUniqueInput
}

export interface CategorySubscriptionWhereInput {
  AND?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  OR?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  NOT?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CategoryWhereInput
}

export interface SubCategoryCreateWithoutCategoriesInput {
  title: String
  posts?: PostCreateManyWithoutSubCategoriesInput
}

export interface AppStateWhereInput {
  AND?: AppStateWhereInput[] | AppStateWhereInput
  OR?: AppStateWhereInput[] | AppStateWhereInput
  NOT?: AppStateWhereInput[] | AppStateWhereInput
  defaultSearchValue?: String
  defaultSearchValue_not?: String
  defaultSearchValue_in?: String[] | String
  defaultSearchValue_not_in?: String[] | String
  defaultSearchValue_lt?: String
  defaultSearchValue_lte?: String
  defaultSearchValue_gt?: String
  defaultSearchValue_gte?: String
  defaultSearchValue_contains?: String
  defaultSearchValue_not_contains?: String
  defaultSearchValue_starts_with?: String
  defaultSearchValue_not_starts_with?: String
  defaultSearchValue_ends_with?: String
  defaultSearchValue_not_ends_with?: String
}

export interface PostCreateManyWithoutSubCategoriesInput {
  create?: PostCreateWithoutSubCategoriesInput[] | PostCreateWithoutSubCategoriesInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
}

export interface VoteUpdateManyMutationInput {
  type?: VoteType
}

export interface PostCreateWithoutSubCategoriesInput {
  isPublished?: Boolean
  slug?: String
  title: String
  text: String
  thumbnail?: String
  author: UserCreateOneWithoutPostsInput
  votes?: VoteCreateManyWithoutPostInput
}

export interface CategoryWhereUniqueInput {
  id?: ID_Input
  title?: String
}

export interface SubCategoryCreateInput {
  title: String
  categories?: CategoryCreateManyWithoutSubCategoriesInput
  posts?: PostCreateManyWithoutSubCategoriesInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
  emailToken?: String
  resetPasswordToken?: String
}

export interface UserCreateInput {
  email: String
  emailValidated?: Boolean
  emailToken?: String
  password: String
  resetPasswordToken?: String
  resetPasswordExpire?: Float
  name: String
  role?: UserRole
  posts?: PostCreateManyWithoutAuthorInput
  votes?: VoteCreateManyWithoutUserInput
}

export interface UserUpdateManyMutationInput {
  email?: String
  emailValidated?: Boolean
  emailToken?: String
  password?: String
  resetPasswordToken?: String
  resetPasswordExpire?: Float
  name?: String
  role?: UserRole
}

export interface VoteCreateInput {
  type: VoteType
  user?: UserCreateOneWithoutVotesInput
  post?: PostCreateOneWithoutVotesInput
}

export interface CategoryUpdateManyMutationInput {
  title?: String
}

export interface AppStateCreateInput {
  defaultSearchValue: String
}

export interface VoteUpdateInput {
  type?: VoteType
  user?: UserUpdateOneWithoutVotesInput
  post?: PostUpdateOneWithoutVotesInput
}

export interface PostUpdateInput {
  isPublished?: Boolean
  slug?: String
  title?: String
  text?: String
  thumbnail?: String
  author?: UserUpdateOneRequiredWithoutPostsInput
  votes?: VoteUpdateManyWithoutPostInput
  subCategories?: SubCategoryUpdateManyWithoutPostsInput
}

export interface SubCategoryUpdateInput {
  title?: String
  categories?: CategoryUpdateManyWithoutSubCategoriesInput
  posts?: PostUpdateManyWithoutSubCategoriesInput
}

export interface UserUpdateOneRequiredWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutPostsDataInput
  upsert?: UserUpsertWithoutPostsInput
}

export interface PostUpsertWithWhereUniqueWithoutSubCategoriesInput {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutSubCategoriesDataInput
  create: PostCreateWithoutSubCategoriesInput
}

export interface PostUpdateManyDataInput {
  isPublished?: Boolean
  slug?: String
  title?: String
  text?: String
  thumbnail?: String
}

export interface PostUpdateWithWhereUniqueWithoutSubCategoriesInput {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutSubCategoriesDataInput
}

export interface VoteUpdateManyWithoutUserInput {
  create?: VoteCreateWithoutUserInput[] | VoteCreateWithoutUserInput
  connect?: VoteWhereUniqueInput[] | VoteWhereUniqueInput
  disconnect?: VoteWhereUniqueInput[] | VoteWhereUniqueInput
  delete?: VoteWhereUniqueInput[] | VoteWhereUniqueInput
  update?: VoteUpdateWithWhereUniqueWithoutUserInput[] | VoteUpdateWithWhereUniqueWithoutUserInput
  updateMany?: VoteUpdateManyWithWhereNestedInput[] | VoteUpdateManyWithWhereNestedInput
  deleteMany?: VoteScalarWhereInput[] | VoteScalarWhereInput
  upsert?: VoteUpsertWithWhereUniqueWithoutUserInput[] | VoteUpsertWithWhereUniqueWithoutUserInput
}

export interface SubCategoryUpdateWithoutCategoriesDataInput {
  title?: String
  posts?: PostUpdateManyWithoutSubCategoriesInput
}

export interface VoteUpdateWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput
  data: VoteUpdateWithoutUserDataInput
}

export interface SubCategoryUpdateManyWithoutCategoriesInput {
  create?: SubCategoryCreateWithoutCategoriesInput[] | SubCategoryCreateWithoutCategoriesInput
  connect?: SubCategoryWhereUniqueInput[] | SubCategoryWhereUniqueInput
  disconnect?: SubCategoryWhereUniqueInput[] | SubCategoryWhereUniqueInput
  delete?: SubCategoryWhereUniqueInput[] | SubCategoryWhereUniqueInput
  update?: SubCategoryUpdateWithWhereUniqueWithoutCategoriesInput[] | SubCategoryUpdateWithWhereUniqueWithoutCategoriesInput
  updateMany?: SubCategoryUpdateManyWithWhereNestedInput[] | SubCategoryUpdateManyWithWhereNestedInput
  deleteMany?: SubCategoryScalarWhereInput[] | SubCategoryScalarWhereInput
  upsert?: SubCategoryUpsertWithWhereUniqueWithoutCategoriesInput[] | SubCategoryUpsertWithWhereUniqueWithoutCategoriesInput
}

export interface VoteUpdateWithoutUserDataInput {
  type?: VoteType
  post?: PostUpdateOneWithoutVotesInput
}

export interface VoteUpsertWithWhereUniqueWithoutPostInput {
  where: VoteWhereUniqueInput
  update: VoteUpdateWithoutPostDataInput
  create: VoteCreateWithoutPostInput
}

export interface PostUpdateOneWithoutVotesInput {
  create?: PostCreateWithoutVotesInput
  connect?: PostWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: PostUpdateWithoutVotesDataInput
  upsert?: PostUpsertWithoutVotesInput
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutAuthorDataInput
  create: PostCreateWithoutAuthorInput
}

export interface SubCategoryWhereInput {
  AND?: SubCategoryWhereInput[] | SubCategoryWhereInput
  OR?: SubCategoryWhereInput[] | SubCategoryWhereInput
  NOT?: SubCategoryWhereInput[] | SubCategoryWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  categories_every?: CategoryWhereInput
  categories_some?: CategoryWhereInput
  categories_none?: CategoryWhereInput
  posts_every?: PostWhereInput
  posts_some?: PostWhereInput
  posts_none?: PostWhereInput
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
}

export interface PostScalarWhereInput {
  AND?: PostScalarWhereInput[] | PostScalarWhereInput
  OR?: PostScalarWhereInput[] | PostScalarWhereInput
  NOT?: PostScalarWhereInput[] | PostScalarWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  isPublished?: Boolean
  isPublished_not?: Boolean
  slug?: String
  slug_not?: String
  slug_in?: String[] | String
  slug_not_in?: String[] | String
  slug_lt?: String
  slug_lte?: String
  slug_gt?: String
  slug_gte?: String
  slug_contains?: String
  slug_not_contains?: String
  slug_starts_with?: String
  slug_not_starts_with?: String
  slug_ends_with?: String
  slug_not_ends_with?: String
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  thumbnail?: String
  thumbnail_not?: String
  thumbnail_in?: String[] | String
  thumbnail_not_in?: String[] | String
  thumbnail_lt?: String
  thumbnail_lte?: String
  thumbnail_gt?: String
  thumbnail_gte?: String
  thumbnail_contains?: String
  thumbnail_not_contains?: String
  thumbnail_starts_with?: String
  thumbnail_not_starts_with?: String
  thumbnail_ends_with?: String
  thumbnail_not_ends_with?: String
}

export interface VoteCreateManyWithoutUserInput {
  create?: VoteCreateWithoutUserInput[] | VoteCreateWithoutUserInput
  connect?: VoteWhereUniqueInput[] | VoteWhereUniqueInput
}

export interface SubCategoryUpdateWithWhereUniqueWithoutPostsInput {
  where: SubCategoryWhereUniqueInput
  data: SubCategoryUpdateWithoutPostsDataInput
}

export interface PostCreateOneWithoutVotesInput {
  create?: PostCreateWithoutVotesInput
  connect?: PostWhereUniqueInput
}

export interface SubCategoryUpdateWithoutPostsDataInput {
  title?: String
  categories?: CategoryUpdateManyWithoutSubCategoriesInput
}

export interface SubCategoryCreateManyWithoutPostsInput {
  create?: SubCategoryCreateWithoutPostsInput[] | SubCategoryCreateWithoutPostsInput
  connect?: SubCategoryWhereUniqueInput[] | SubCategoryWhereUniqueInput
}

export interface CategoryUpdateManyWithoutSubCategoriesInput {
  create?: CategoryCreateWithoutSubCategoriesInput[] | CategoryCreateWithoutSubCategoriesInput
  connect?: CategoryWhereUniqueInput[] | CategoryWhereUniqueInput
  disconnect?: CategoryWhereUniqueInput[] | CategoryWhereUniqueInput
  delete?: CategoryWhereUniqueInput[] | CategoryWhereUniqueInput
  update?: CategoryUpdateWithWhereUniqueWithoutSubCategoriesInput[] | CategoryUpdateWithWhereUniqueWithoutSubCategoriesInput
  updateMany?: CategoryUpdateManyWithWhereNestedInput[] | CategoryUpdateManyWithWhereNestedInput
  deleteMany?: CategoryScalarWhereInput[] | CategoryScalarWhereInput
  upsert?: CategoryUpsertWithWhereUniqueWithoutSubCategoriesInput[] | CategoryUpsertWithWhereUniqueWithoutSubCategoriesInput
}

export interface CategoryCreateManyWithoutSubCategoriesInput {
  create?: CategoryCreateWithoutSubCategoriesInput[] | CategoryCreateWithoutSubCategoriesInput
  connect?: CategoryWhereUniqueInput[] | CategoryWhereUniqueInput
}

export interface CategoryUpdateWithWhereUniqueWithoutSubCategoriesInput {
  where: CategoryWhereUniqueInput
  data: CategoryUpdateWithoutSubCategoriesDataInput
}

export interface VoteCreateManyWithoutPostInput {
  create?: VoteCreateWithoutPostInput[] | VoteCreateWithoutPostInput
  connect?: VoteWhereUniqueInput[] | VoteWhereUniqueInput
}

export interface CategoryUpdateWithoutSubCategoriesDataInput {
  title?: String
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface CategoryUpdateManyWithWhereNestedInput {
  where: CategoryScalarWhereInput
  data: CategoryUpdateManyDataInput
}

export interface PostSubscriptionWhereInput {
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PostWhereInput
}

export interface CategoryScalarWhereInput {
  AND?: CategoryScalarWhereInput[] | CategoryScalarWhereInput
  OR?: CategoryScalarWhereInput[] | CategoryScalarWhereInput
  NOT?: CategoryScalarWhereInput[] | CategoryScalarWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
}

export interface PostWhereUniqueInput {
  id?: ID_Input
  slug?: String
  title?: String
}

export interface CategoryUpdateManyDataInput {
  title?: String
}

export interface VoteWhereUniqueInput {
  id?: ID_Input
}

export interface CategoryUpsertWithWhereUniqueWithoutSubCategoriesInput {
  where: CategoryWhereUniqueInput
  update: CategoryUpdateWithoutSubCategoriesDataInput
  create: CategoryCreateWithoutSubCategoriesInput
}

export interface PostUpdateManyMutationInput {
  isPublished?: Boolean
  slug?: String
  title?: String
  text?: String
  thumbnail?: String
}

export interface SubCategoryUpdateManyWithWhereNestedInput {
  where: SubCategoryScalarWhereInput
  data: SubCategoryUpdateManyDataInput
}

export interface SubCategoryUpsertWithWhereUniqueWithoutCategoriesInput {
  where: SubCategoryWhereUniqueInput
  update: SubCategoryUpdateWithoutCategoriesDataInput
  create: SubCategoryCreateWithoutCategoriesInput
}

export interface SubCategoryScalarWhereInput {
  AND?: SubCategoryScalarWhereInput[] | SubCategoryScalarWhereInput
  OR?: SubCategoryScalarWhereInput[] | SubCategoryScalarWhereInput
  NOT?: SubCategoryScalarWhereInput[] | SubCategoryScalarWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
}

export interface PostUpdateManyWithoutSubCategoriesInput {
  create?: PostCreateWithoutSubCategoriesInput[] | PostCreateWithoutSubCategoriesInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput
  update?: PostUpdateWithWhereUniqueWithoutSubCategoriesInput[] | PostUpdateWithWhereUniqueWithoutSubCategoriesInput
  updateMany?: PostUpdateManyWithWhereNestedInput[] | PostUpdateManyWithWhereNestedInput
  deleteMany?: PostScalarWhereInput[] | PostScalarWhereInput
  upsert?: PostUpsertWithWhereUniqueWithoutSubCategoriesInput[] | PostUpsertWithWhereUniqueWithoutSubCategoriesInput
}

export interface SubCategoryUpdateManyDataInput {
  title?: String
}

export interface CategoryUpdateInput {
  title?: String
  subCategories?: SubCategoryUpdateManyWithoutCategoriesInput
}

export interface SubCategoryUpsertWithWhereUniqueWithoutPostsInput {
  where: SubCategoryWhereUniqueInput
  update: SubCategoryUpdateWithoutPostsDataInput
  create: SubCategoryCreateWithoutPostsInput
}

export interface PostCreateInput {
  isPublished?: Boolean
  slug?: String
  title: String
  text: String
  thumbnail?: String
  author: UserCreateOneWithoutPostsInput
  votes?: VoteCreateManyWithoutPostInput
  subCategories?: SubCategoryCreateManyWithoutPostsInput
}

export interface PostUpsertWithoutVotesInput {
  update: PostUpdateWithoutVotesDataInput
  create: PostCreateWithoutVotesInput
}

export interface VoteCreateWithoutUserInput {
  type: VoteType
  post?: PostCreateOneWithoutVotesInput
}

export interface VoteUpdateManyWithWhereNestedInput {
  where: VoteScalarWhereInput
  data: VoteUpdateManyDataInput
}

export interface SubCategoryCreateWithoutPostsInput {
  title: String
  categories?: CategoryCreateManyWithoutSubCategoriesInput
}

export interface VoteScalarWhereInput {
  AND?: VoteScalarWhereInput[] | VoteScalarWhereInput
  OR?: VoteScalarWhereInput[] | VoteScalarWhereInput
  NOT?: VoteScalarWhereInput[] | VoteScalarWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  type?: VoteType
  type_not?: VoteType
  type_in?: VoteType[] | VoteType
  type_not_in?: VoteType[] | VoteType
}

export interface VoteCreateWithoutPostInput {
  type: VoteType
  user?: UserCreateOneWithoutVotesInput
}

export interface VoteUpdateManyDataInput {
  type?: VoteType
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  emailValidated?: Boolean
  emailValidated_not?: Boolean
  emailToken?: String
  emailToken_not?: String
  emailToken_in?: String[] | String
  emailToken_not_in?: String[] | String
  emailToken_lt?: String
  emailToken_lte?: String
  emailToken_gt?: String
  emailToken_gte?: String
  emailToken_contains?: String
  emailToken_not_contains?: String
  emailToken_starts_with?: String
  emailToken_not_starts_with?: String
  emailToken_ends_with?: String
  emailToken_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  resetPasswordToken?: String
  resetPasswordToken_not?: String
  resetPasswordToken_in?: String[] | String
  resetPasswordToken_not_in?: String[] | String
  resetPasswordToken_lt?: String
  resetPasswordToken_lte?: String
  resetPasswordToken_gt?: String
  resetPasswordToken_gte?: String
  resetPasswordToken_contains?: String
  resetPasswordToken_not_contains?: String
  resetPasswordToken_starts_with?: String
  resetPasswordToken_not_starts_with?: String
  resetPasswordToken_ends_with?: String
  resetPasswordToken_not_ends_with?: String
  resetPasswordExpire?: Float
  resetPasswordExpire_not?: Float
  resetPasswordExpire_in?: Float[] | Float
  resetPasswordExpire_not_in?: Float[] | Float
  resetPasswordExpire_lt?: Float
  resetPasswordExpire_lte?: Float
  resetPasswordExpire_gt?: Float
  resetPasswordExpire_gte?: Float
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  role?: UserRole
  role_not?: UserRole
  role_in?: UserRole[] | UserRole
  role_not_in?: UserRole[] | UserRole
  posts_every?: PostWhereInput
  posts_some?: PostWhereInput
  posts_none?: PostWhereInput
  votes_every?: VoteWhereInput
  votes_some?: VoteWhereInput
  votes_none?: VoteWhereInput
}

export interface VoteUpsertWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput
  update: VoteUpdateWithoutUserDataInput
  create: VoteCreateWithoutUserInput
}

export interface SubCategoryWhereUniqueInput {
  id?: ID_Input
  title?: String
}

export interface UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput
  create: UserCreateWithoutPostsInput
}

export interface UserUpdateInput {
  email?: String
  emailValidated?: Boolean
  emailToken?: String
  password?: String
  resetPasswordToken?: String
  resetPasswordExpire?: Float
  name?: String
  role?: UserRole
  posts?: PostUpdateManyWithoutAuthorInput
  votes?: VoteUpdateManyWithoutUserInput
}

export interface VoteUpdateManyWithoutPostInput {
  create?: VoteCreateWithoutPostInput[] | VoteCreateWithoutPostInput
  connect?: VoteWhereUniqueInput[] | VoteWhereUniqueInput
  disconnect?: VoteWhereUniqueInput[] | VoteWhereUniqueInput
  delete?: VoteWhereUniqueInput[] | VoteWhereUniqueInput
  update?: VoteUpdateWithWhereUniqueWithoutPostInput[] | VoteUpdateWithWhereUniqueWithoutPostInput
  updateMany?: VoteUpdateManyWithWhereNestedInput[] | VoteUpdateManyWithWhereNestedInput
  deleteMany?: VoteScalarWhereInput[] | VoteScalarWhereInput
  upsert?: VoteUpsertWithWhereUniqueWithoutPostInput[] | VoteUpsertWithWhereUniqueWithoutPostInput
}

export interface SubCategoryUpdateWithWhereUniqueWithoutCategoriesInput {
  where: SubCategoryWhereUniqueInput
  data: SubCategoryUpdateWithoutCategoriesDataInput
}

export interface VoteUpdateWithWhereUniqueWithoutPostInput {
  where: VoteWhereUniqueInput
  data: VoteUpdateWithoutPostDataInput
}

export interface UserCreateWithoutPostsInput {
  email: String
  emailValidated?: Boolean
  emailToken?: String
  password: String
  resetPasswordToken?: String
  resetPasswordExpire?: Float
  name: String
  role?: UserRole
  votes?: VoteCreateManyWithoutUserInput
}

export interface VoteUpdateWithoutPostDataInput {
  type?: VoteType
  user?: UserUpdateOneWithoutVotesInput
}

export interface CategoryCreateWithoutSubCategoriesInput {
  title: String
}

export interface UserUpdateOneWithoutVotesInput {
  create?: UserCreateWithoutVotesInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutVotesDataInput
  upsert?: UserUpsertWithoutVotesInput
}

export interface AppStateUpdateManyMutationInput {
  defaultSearchValue?: String
}

export interface PostUpdateWithoutAuthorDataInput {
  isPublished?: Boolean
  slug?: String
  title?: String
  text?: String
  thumbnail?: String
  votes?: VoteUpdateManyWithoutPostInput
  subCategories?: SubCategoryUpdateManyWithoutPostsInput
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutAuthorDataInput
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[] | PostUpdateWithWhereUniqueWithoutAuthorInput
  updateMany?: PostUpdateManyWithWhereNestedInput[] | PostUpdateManyWithWhereNestedInput
  deleteMany?: PostScalarWhereInput[] | PostScalarWhereInput
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[] | PostUpsertWithWhereUniqueWithoutAuthorInput
}

export interface UserUpdateWithoutVotesDataInput {
  email?: String
  emailValidated?: Boolean
  emailToken?: String
  password?: String
  resetPasswordToken?: String
  resetPasswordExpire?: Float
  name?: String
  role?: UserRole
  posts?: PostUpdateManyWithoutAuthorInput
}

export interface SubCategoryUpdateManyMutationInput {
  title?: String
}

export interface VoteWhereInput {
  AND?: VoteWhereInput[] | VoteWhereInput
  OR?: VoteWhereInput[] | VoteWhereInput
  NOT?: VoteWhereInput[] | VoteWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  type?: VoteType
  type_not?: VoteType
  type_in?: VoteType[] | VoteType
  type_not_in?: VoteType[] | VoteType
  user?: UserWhereInput
  post?: PostWhereInput
}

export interface PostCreateWithoutVotesInput {
  isPublished?: Boolean
  slug?: String
  title: String
  text: String
  thumbnail?: String
  author: UserCreateOneWithoutPostsInput
  subCategories?: SubCategoryCreateManyWithoutPostsInput
}

export interface UserUpsertWithoutVotesInput {
  update: UserUpdateWithoutVotesDataInput
  create: UserCreateWithoutVotesInput
}

export interface PostUpdateWithoutSubCategoriesDataInput {
  isPublished?: Boolean
  slug?: String
  title?: String
  text?: String
  thumbnail?: String
  author?: UserUpdateOneRequiredWithoutPostsInput
  votes?: VoteUpdateManyWithoutPostInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AppStatePreviousValues {
  defaultSearchValue: String
}

/*
 * A connection to a list of items.

 */
export interface PostConnection {
  pageInfo: PageInfo
  edges: PostEdge[]
  aggregate: AggregatePost
}

export interface Post extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  slug?: String
  title: String
  text: String
  author: User
  votes?: Vote[]
  subCategories?: SubCategory[]
  thumbnail?: String
}

export interface AppState {
  defaultSearchValue: String
}

export interface AggregateAppState {
  count: Int
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  emailValidated?: Boolean
  emailToken?: String
  password: String
  resetPasswordToken?: String
  resetPasswordExpire?: Float
  name: String
  createdAt: DateTime
  updatedAt: DateTime
  role: UserRole
}

export interface User extends Node {
  id: ID_Output
  email: String
  emailValidated?: Boolean
  emailToken?: String
  password: String
  resetPasswordToken?: String
  resetPasswordExpire?: Float
  name: String
  createdAt: DateTime
  updatedAt: DateTime
  role: UserRole
  posts?: Post[]
  votes?: Vote[]
}

/*
 * A connection to a list of items.

 */
export interface AppStateConnection {
  pageInfo: PageInfo
  edges: AppStateEdge[]
  aggregate: AggregateAppState
}

/*
 * An edge in a connection.

 */
export interface AppStateEdge {
  node: AppState
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface VoteConnection {
  pageInfo: PageInfo
  edges: VoteEdge[]
  aggregate: AggregateVote
}

export interface AggregateVote {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface VotePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  type: VoteType
}

export interface AggregateSubCategory {
  count: Int
}

export interface VoteSubscriptionPayload {
  mutation: MutationType
  node?: Vote
  updatedFields?: String[]
  previousValues?: VotePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface SubCategoryConnection {
  pageInfo: PageInfo
  edges: SubCategoryEdge[]
  aggregate: AggregateSubCategory
}

export interface PostSubscriptionPayload {
  mutation: MutationType
  node?: Post
  updatedFields?: String[]
  previousValues?: PostPreviousValues
}

/*
 * An edge in a connection.

 */
export interface CategoryEdge {
  node: Category
  cursor: String
}

export interface PostPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  slug?: String
  title: String
  text: String
  thumbnail?: String
}

export interface AggregatePost {
  count: Int
}

export interface Category extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  title: String
  subCategories?: SubCategory[]
}

export interface AppStateSubscriptionPayload {
  mutation: MutationType
  node?: AppState
  updatedFields?: String[]
  previousValues?: AppStatePreviousValues
}

export interface CategorySubscriptionPayload {
  mutation: MutationType
  node?: Category
  updatedFields?: String[]
  previousValues?: CategoryPreviousValues
}

/*
 * An edge in a connection.

 */
export interface VoteEdge {
  node: Vote
  cursor: String
}

export interface CategoryPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  title: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface SubCategory extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  title: String
  categories?: Category[]
  posts?: Post[]
}

export interface AggregateCategory {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface Vote extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  user?: User
  post?: Post
  type: VoteType
}

export interface SubCategoryPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  title: String
}

export interface SubCategorySubscriptionPayload {
  mutation: MutationType
  node?: SubCategory
  updatedFields?: String[]
  previousValues?: SubCategoryPreviousValues
}

/*
 * An edge in a connection.

 */
export interface PostEdge {
  node: Post
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface CategoryConnection {
  pageInfo: PageInfo
  edges: CategoryEdge[]
  aggregate: AggregateCategory
}

/*
 * An edge in a connection.

 */
export interface SubCategoryEdge {
  node: SubCategory
  cursor: String
}

export interface AggregateUser {
  count: Int
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type DateTime = Date | string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number