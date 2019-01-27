export const typeDefs = /* GraphQL */ `type AggregateAppState {
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
  id: ID!
  defaultSearchValue: String!
}

type AppStateConnection {
  pageInfo: PageInfo!
  edges: [AppStateEdge]!
  aggregate: AggregateAppState!
}

input AppStateCreateInput {
  defaultSearchValue: String!
}

type AppStateEdge {
  node: AppState!
  cursor: String!
}

enum AppStateOrderByInput {
  id_ASC
  id_DESC
  defaultSearchValue_ASC
  defaultSearchValue_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AppStatePreviousValues {
  id: ID!
  defaultSearchValue: String!
}

type AppStateSubscriptionPayload {
  mutation: MutationType!
  node: AppState
  updatedFields: [String!]
  previousValues: AppStatePreviousValues
}

input AppStateSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AppStateWhereInput
  AND: [AppStateSubscriptionWhereInput!]
  OR: [AppStateSubscriptionWhereInput!]
  NOT: [AppStateSubscriptionWhereInput!]
}

input AppStateUpdateInput {
  defaultSearchValue: String
}

input AppStateUpdateManyMutationInput {
  defaultSearchValue: String
}

input AppStateWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  defaultSearchValue: String
  defaultSearchValue_not: String
  defaultSearchValue_in: [String!]
  defaultSearchValue_not_in: [String!]
  defaultSearchValue_lt: String
  defaultSearchValue_lte: String
  defaultSearchValue_gt: String
  defaultSearchValue_gte: String
  defaultSearchValue_contains: String
  defaultSearchValue_not_contains: String
  defaultSearchValue_starts_with: String
  defaultSearchValue_not_starts_with: String
  defaultSearchValue_ends_with: String
  defaultSearchValue_not_ends_with: String
  AND: [AppStateWhereInput!]
  OR: [AppStateWhereInput!]
  NOT: [AppStateWhereInput!]
}

input AppStateWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

type Category {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  subCategories(where: SubCategoryWhereInput, orderBy: SubCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SubCategory!]
}

type CategoryConnection {
  pageInfo: PageInfo!
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

type CategoryEdge {
  node: Category!
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [CategoryScalarWhereInput!]
  OR: [CategoryScalarWhereInput!]
  NOT: [CategoryScalarWhereInput!]
}

type CategorySubscriptionPayload {
  mutation: MutationType!
  node: Category
  updatedFields: [String!]
  previousValues: CategoryPreviousValues
}

input CategorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CategoryWhereInput
  AND: [CategorySubscriptionWhereInput!]
  OR: [CategorySubscriptionWhereInput!]
  NOT: [CategorySubscriptionWhereInput!]
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
  delete: [CategoryWhereUniqueInput!]
  connect: [CategoryWhereUniqueInput!]
  disconnect: [CategoryWhereUniqueInput!]
  update: [CategoryUpdateWithWhereUniqueWithoutSubCategoriesInput!]
  upsert: [CategoryUpsertWithWhereUniqueWithoutSubCategoriesInput!]
  deleteMany: [CategoryScalarWhereInput!]
  updateMany: [CategoryUpdateManyWithWhereNestedInput!]
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  subCategories_every: SubCategoryWhereInput
  subCategories_some: SubCategoryWhereInput
  subCategories_none: SubCategoryWhereInput
  AND: [CategoryWhereInput!]
  OR: [CategoryWhereInput!]
  NOT: [CategoryWhereInput!]
}

input CategoryWhereUniqueInput {
  id: ID
  title: String
}

scalar DateTime

scalar Long

type Mutation {
  createAppState(data: AppStateCreateInput!): AppState!
  updateAppState(data: AppStateUpdateInput!, where: AppStateWhereUniqueInput!): AppState
  updateManyAppStates(data: AppStateUpdateManyMutationInput!, where: AppStateWhereInput): BatchPayload!
  upsertAppState(where: AppStateWhereUniqueInput!, create: AppStateCreateInput!, update: AppStateUpdateInput!): AppState!
  deleteAppState(where: AppStateWhereUniqueInput!): AppState
  deleteManyAppStates(where: AppStateWhereInput): BatchPayload!
  createCategory(data: CategoryCreateInput!): Category!
  updateCategory(data: CategoryUpdateInput!, where: CategoryWhereUniqueInput!): Category
  updateManyCategories(data: CategoryUpdateManyMutationInput!, where: CategoryWhereInput): BatchPayload!
  upsertCategory(where: CategoryWhereUniqueInput!, create: CategoryCreateInput!, update: CategoryUpdateInput!): Category!
  deleteCategory(where: CategoryWhereUniqueInput!): Category
  deleteManyCategories(where: CategoryWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createSubCategory(data: SubCategoryCreateInput!): SubCategory!
  updateSubCategory(data: SubCategoryUpdateInput!, where: SubCategoryWhereUniqueInput!): SubCategory
  updateManySubCategories(data: SubCategoryUpdateManyMutationInput!, where: SubCategoryWhereInput): BatchPayload!
  upsertSubCategory(where: SubCategoryWhereUniqueInput!, create: SubCategoryCreateInput!, update: SubCategoryUpdateInput!): SubCategory!
  deleteSubCategory(where: SubCategoryWhereUniqueInput!): SubCategory
  deleteManySubCategories(where: SubCategoryWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createVote(data: VoteCreateInput!): Vote!
  updateVote(data: VoteUpdateInput!, where: VoteWhereUniqueInput!): Vote
  updateManyVotes(data: VoteUpdateManyMutationInput!, where: VoteWhereInput): BatchPayload!
  upsertVote(where: VoteWhereUniqueInput!, create: VoteCreateInput!, update: VoteUpdateInput!): Vote!
  deleteVote(where: VoteWhereUniqueInput!): Vote
  deleteManyVotes(where: VoteWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
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

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  isPublished: Boolean
  slug: String
  title: String!
  text: String!
  author: UserCreateOneWithoutPostsInput!
  votes: VoteCreateManyWithoutPostInput
  subCategories: SubCategoryCreateManyWithoutPostsInput
  thumbnail: String
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
  votes: VoteCreateManyWithoutPostInput
  subCategories: SubCategoryCreateManyWithoutPostsInput
  thumbnail: String
}

input PostCreateWithoutSubCategoriesInput {
  isPublished: Boolean
  slug: String
  title: String!
  text: String!
  author: UserCreateOneWithoutPostsInput!
  votes: VoteCreateManyWithoutPostInput
  thumbnail: String
}

input PostCreateWithoutVotesInput {
  isPublished: Boolean
  slug: String
  title: String!
  text: String!
  author: UserCreateOneWithoutPostsInput!
  subCategories: SubCategoryCreateManyWithoutPostsInput
  thumbnail: String
}

type PostEdge {
  node: Post!
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  isPublished: Boolean
  isPublished_not: Boolean
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  thumbnail: String
  thumbnail_not: String
  thumbnail_in: [String!]
  thumbnail_not_in: [String!]
  thumbnail_lt: String
  thumbnail_lte: String
  thumbnail_gt: String
  thumbnail_gte: String
  thumbnail_contains: String
  thumbnail_not_contains: String
  thumbnail_starts_with: String
  thumbnail_not_starts_with: String
  thumbnail_ends_with: String
  thumbnail_not_ends_with: String
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  isPublished: Boolean
  slug: String
  title: String
  text: String
  author: UserUpdateOneRequiredWithoutPostsInput
  votes: VoteUpdateManyWithoutPostInput
  subCategories: SubCategoryUpdateManyWithoutPostsInput
  thumbnail: String
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
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithoutSubCategoriesInput {
  create: [PostCreateWithoutSubCategoriesInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutSubCategoriesInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutSubCategoriesInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateOneWithoutVotesInput {
  create: PostCreateWithoutVotesInput
  update: PostUpdateWithoutVotesDataInput
  upsert: PostUpsertWithoutVotesInput
  delete: Boolean
  disconnect: Boolean
  connect: PostWhereUniqueInput
}

input PostUpdateWithoutAuthorDataInput {
  isPublished: Boolean
  slug: String
  title: String
  text: String
  votes: VoteUpdateManyWithoutPostInput
  subCategories: SubCategoryUpdateManyWithoutPostsInput
  thumbnail: String
}

input PostUpdateWithoutSubCategoriesDataInput {
  isPublished: Boolean
  slug: String
  title: String
  text: String
  author: UserUpdateOneRequiredWithoutPostsInput
  votes: VoteUpdateManyWithoutPostInput
  thumbnail: String
}

input PostUpdateWithoutVotesDataInput {
  isPublished: Boolean
  slug: String
  title: String
  text: String
  author: UserUpdateOneRequiredWithoutPostsInput
  subCategories: SubCategoryUpdateManyWithoutPostsInput
  thumbnail: String
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  isPublished: Boolean
  isPublished_not: Boolean
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  author: UserWhereInput
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
  subCategories_every: SubCategoryWhereInput
  subCategories_some: SubCategoryWhereInput
  subCategories_none: SubCategoryWhereInput
  thumbnail: String
  thumbnail_not: String
  thumbnail_in: [String!]
  thumbnail_not_in: [String!]
  thumbnail_lt: String
  thumbnail_lte: String
  thumbnail_gt: String
  thumbnail_gte: String
  thumbnail_contains: String
  thumbnail_not_contains: String
  thumbnail_starts_with: String
  thumbnail_not_starts_with: String
  thumbnail_ends_with: String
  thumbnail_not_ends_with: String
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
  slug: String
  title: String
}

type Query {
  appState(where: AppStateWhereUniqueInput!): AppState
  appStates(where: AppStateWhereInput, orderBy: AppStateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AppState]!
  appStatesConnection(where: AppStateWhereInput, orderBy: AppStateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AppStateConnection!
  category(where: CategoryWhereUniqueInput!): Category
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category]!
  categoriesConnection(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoryConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  subCategory(where: SubCategoryWhereUniqueInput!): SubCategory
  subCategories(where: SubCategoryWhereInput, orderBy: SubCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SubCategory]!
  subCategoriesConnection(where: SubCategoryWhereInput, orderBy: SubCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SubCategoryConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  vote(where: VoteWhereUniqueInput!): Vote
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote]!
  votesConnection(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VoteConnection!
  node(id: ID!): Node
}

type SubCategory {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category!]
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
}

type SubCategoryConnection {
  pageInfo: PageInfo!
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

type SubCategoryEdge {
  node: SubCategory!
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [SubCategoryScalarWhereInput!]
  OR: [SubCategoryScalarWhereInput!]
  NOT: [SubCategoryScalarWhereInput!]
}

type SubCategorySubscriptionPayload {
  mutation: MutationType!
  node: SubCategory
  updatedFields: [String!]
  previousValues: SubCategoryPreviousValues
}

input SubCategorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SubCategoryWhereInput
  AND: [SubCategorySubscriptionWhereInput!]
  OR: [SubCategorySubscriptionWhereInput!]
  NOT: [SubCategorySubscriptionWhereInput!]
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
  delete: [SubCategoryWhereUniqueInput!]
  connect: [SubCategoryWhereUniqueInput!]
  disconnect: [SubCategoryWhereUniqueInput!]
  update: [SubCategoryUpdateWithWhereUniqueWithoutCategoriesInput!]
  upsert: [SubCategoryUpsertWithWhereUniqueWithoutCategoriesInput!]
  deleteMany: [SubCategoryScalarWhereInput!]
  updateMany: [SubCategoryUpdateManyWithWhereNestedInput!]
}

input SubCategoryUpdateManyWithoutPostsInput {
  create: [SubCategoryCreateWithoutPostsInput!]
  delete: [SubCategoryWhereUniqueInput!]
  connect: [SubCategoryWhereUniqueInput!]
  disconnect: [SubCategoryWhereUniqueInput!]
  update: [SubCategoryUpdateWithWhereUniqueWithoutPostsInput!]
  upsert: [SubCategoryUpsertWithWhereUniqueWithoutPostsInput!]
  deleteMany: [SubCategoryScalarWhereInput!]
  updateMany: [SubCategoryUpdateManyWithWhereNestedInput!]
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  categories_every: CategoryWhereInput
  categories_some: CategoryWhereInput
  categories_none: CategoryWhereInput
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  AND: [SubCategoryWhereInput!]
  OR: [SubCategoryWhereInput!]
  NOT: [SubCategoryWhereInput!]
}

input SubCategoryWhereUniqueInput {
  id: ID
  title: String
}

type Subscription {
  appState(where: AppStateSubscriptionWhereInput): AppStateSubscriptionPayload
  category(where: CategorySubscriptionWhereInput): CategorySubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  subCategory(where: SubCategorySubscriptionWhereInput): SubCategorySubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  vote(where: VoteSubscriptionWhereInput): VoteSubscriptionPayload
}

type User {
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

type UserConnection {
  pageInfo: PageInfo!
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

type UserEdge {
  node: User!
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
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
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
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  update: UserUpdateWithoutVotesDataInput
  upsert: UserUpsertWithoutVotesInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  emailValidated: Boolean
  emailValidated_not: Boolean
  emailToken: String
  emailToken_not: String
  emailToken_in: [String!]
  emailToken_not_in: [String!]
  emailToken_lt: String
  emailToken_lte: String
  emailToken_gt: String
  emailToken_gte: String
  emailToken_contains: String
  emailToken_not_contains: String
  emailToken_starts_with: String
  emailToken_not_starts_with: String
  emailToken_ends_with: String
  emailToken_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  resetPasswordToken: String
  resetPasswordToken_not: String
  resetPasswordToken_in: [String!]
  resetPasswordToken_not_in: [String!]
  resetPasswordToken_lt: String
  resetPasswordToken_lte: String
  resetPasswordToken_gt: String
  resetPasswordToken_gte: String
  resetPasswordToken_contains: String
  resetPasswordToken_not_contains: String
  resetPasswordToken_starts_with: String
  resetPasswordToken_not_starts_with: String
  resetPasswordToken_ends_with: String
  resetPasswordToken_not_ends_with: String
  resetPasswordExpire: Float
  resetPasswordExpire_not: Float
  resetPasswordExpire_in: [Float!]
  resetPasswordExpire_not_in: [Float!]
  resetPasswordExpire_lt: Float
  resetPasswordExpire_lte: Float
  resetPasswordExpire_gt: Float
  resetPasswordExpire_gte: Float
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  role: UserRole
  role_not: UserRole
  role_in: [UserRole!]
  role_not_in: [UserRole!]
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  emailToken: String
  resetPasswordToken: String
}

type Vote {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  user: User
  post: Post
  type: VoteType!
}

type VoteConnection {
  pageInfo: PageInfo!
  edges: [VoteEdge]!
  aggregate: AggregateVote!
}

input VoteCreateInput {
  user: UserCreateOneWithoutVotesInput
  post: PostCreateOneWithoutVotesInput
  type: VoteType!
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
  user: UserCreateOneWithoutVotesInput
  type: VoteType!
}

input VoteCreateWithoutUserInput {
  post: PostCreateOneWithoutVotesInput
  type: VoteType!
}

type VoteEdge {
  node: Vote!
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: VoteType
  type_not: VoteType
  type_in: [VoteType!]
  type_not_in: [VoteType!]
  AND: [VoteScalarWhereInput!]
  OR: [VoteScalarWhereInput!]
  NOT: [VoteScalarWhereInput!]
}

type VoteSubscriptionPayload {
  mutation: MutationType!
  node: Vote
  updatedFields: [String!]
  previousValues: VotePreviousValues
}

input VoteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VoteWhereInput
  AND: [VoteSubscriptionWhereInput!]
  OR: [VoteSubscriptionWhereInput!]
  NOT: [VoteSubscriptionWhereInput!]
}

enum VoteType {
  LIKE
  DISLIKE
}

input VoteUpdateInput {
  user: UserUpdateOneWithoutVotesInput
  post: PostUpdateOneWithoutVotesInput
  type: VoteType
}

input VoteUpdateManyDataInput {
  type: VoteType
}

input VoteUpdateManyMutationInput {
  type: VoteType
}

input VoteUpdateManyWithoutPostInput {
  create: [VoteCreateWithoutPostInput!]
  delete: [VoteWhereUniqueInput!]
  connect: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutPostInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutPostInput!]
  deleteMany: [VoteScalarWhereInput!]
  updateMany: [VoteUpdateManyWithWhereNestedInput!]
}

input VoteUpdateManyWithoutUserInput {
  create: [VoteCreateWithoutUserInput!]
  delete: [VoteWhereUniqueInput!]
  connect: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [VoteScalarWhereInput!]
  updateMany: [VoteUpdateManyWithWhereNestedInput!]
}

input VoteUpdateManyWithWhereNestedInput {
  where: VoteScalarWhereInput!
  data: VoteUpdateManyDataInput!
}

input VoteUpdateWithoutPostDataInput {
  user: UserUpdateOneWithoutVotesInput
  type: VoteType
}

input VoteUpdateWithoutUserDataInput {
  post: PostUpdateOneWithoutVotesInput
  type: VoteType
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  user: UserWhereInput
  post: PostWhereInput
  type: VoteType
  type_not: VoteType
  type_in: [VoteType!]
  type_not_in: [VoteType!]
  AND: [VoteWhereInput!]
  OR: [VoteWhereInput!]
  NOT: [VoteWhereInput!]
}

input VoteWhereUniqueInput {
  id: ID
}
`