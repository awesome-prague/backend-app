import * as faker from 'faker'
import { prisma } from './generated/prisma-client/'
import { VoteType } from './generated/graphqlgen'

const db = prisma

const randomPick = <T>(arr: Array<T>) =>
  arr[Math.floor(Math.random() * arr.length)]

const generateUser = async (user: { email: string; name: string }) => {
  return await db.createUser({
    email: user.email,
    name: user.name,
    // plaintext password: "nooneknows"
    password: '$2a$10$hACwQ5/HQI6FhbIISOUVeusy3sKyUDhSq36fF5d/54aAdiygJPFzm',
  })
}

const generateCategories = async ({ title }: { title: string }) => {
  return await db.createCategory({
    title,
    normalizeTitle: title.toLocaleLowerCase(),
  })
}

const generateSubCategories = async ({
  title,
  belongsTo,
}: {
  title: string
  belongsTo: string
}) => {
  return await db.createSubCategory({
    categories: {
      connect: {
        title: belongsTo,
      },
    },
    title,
    normalizeTitle: title.toLocaleLowerCase(),
  })
}

const generatePosts = async ({
  title,
  email,
  belongsTo,
}: {
  title: string
  email: string
  belongsTo: string
}) => {
  await db.createPost({
    author: {
      connect: {
        email,
      },
    },
    title,
    normalizeTitle: title.toLocaleLowerCase(),
    text: faker.lorem.sentence(),
    subCategories: {
      connect: {
        title: belongsTo,
      },
    },
    isPublished: true,
    thumbnail: 'http://lorempixel.com/640/480/food/',
  })
}

const getEmails = () => [
  'admin@example.com',
  'petr@example.com',
  'anna123@example.com',
  'nerdy+test@example.com',
]
const generateMultipleUsers = async () => {
  const emails = getEmails()
  for (const email of emails) {
    await generateUser({
      name: faker.name.findName(),
      email,
    })
  }
}

const generateVotes = async ({
  email,
  postTitle,
  type,
}: {
  email: string
  postTitle: string
  type: VoteType
}) => {
  await db.createVote({
    type,
    post: {
      connect: {
        title: postTitle,
      },
    },
    user: {
      connect: {
        email,
      },
    },
  })
}

const seedMe = async () => {
  await generateMultipleUsers()

  await generateCategories({ title: 'Food' })
  await generateCategories({ title: 'Bars' })
  await generateCategories({ title: 'Sport' })

  await generateSubCategories({
    belongsTo: 'Food',
    title: 'Burgers',
  })
  await generateSubCategories({
    belongsTo: 'Food',
    title: 'Sushi',
  })
  await generateSubCategories({
    belongsTo: 'Food',
    title: 'Indian',
  })

  const emails = getEmails()
  const randomPostTitles = Array(10)
    .fill(1)
    .map(() => faker.lorem.words())
  await generatePosts({
    belongsTo: 'Burgers',
    email: randomPick(emails),
    title: 'Dish Burger Bistro',
  })
  await generatePosts({
    belongsTo: 'Burgers',
    email: randomPick(emails),
    title: randomPostTitles[0],
  })
  await generatePosts({
    belongsTo: 'Burgers',
    email: randomPick(emails),
    title: randomPostTitles[1],
  })
  await generatePosts({
    belongsTo: 'Burgers',
    email: randomPick(emails),
    title: randomPostTitles[2],
  })

  await generateVotes({
    email: randomPick(emails),
    postTitle: 'Dish Burger Bistro',
    type: 'LIKE',
  })
  await generateVotes({
    email: randomPick(emails),
    postTitle: 'Dish Burger Bistro',
    type: 'LIKE',
  })
  await generateVotes({
    email: randomPick(emails),
    postTitle: 'Dish Burger Bistro',
    type: 'LIKE',
  })

  await generateVotes({
    email: randomPick(emails),
    postTitle: randomPostTitles[0],
    type: 'LIKE',
  })
  await generateVotes({
    email: randomPick(emails),
    postTitle: randomPostTitles[0],
    type: 'LIKE',
  })

  await generateVotes({
    email: randomPick(emails),
    postTitle: randomPostTitles[1],
    type: 'LIKE',
  })
  await generateVotes({
    email: randomPick(emails),
    postTitle: randomPostTitles[1],
    type: 'DISLIKE',
  })
}

seedMe()
