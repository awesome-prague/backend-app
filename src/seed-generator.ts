import * as faker from 'faker'
import { prisma } from './generated/prisma-client/'

const db = prisma

const generateUser = async (user: { email: string; name: string }) => {
  return await db.createUser({
    email: user.email,
    name: user.name,
    // plaintext password: "nooneknows"
    password: '$2a$10$hACwQ5/HQI6FhbIISOUVeusy3sKyUDhSq36fF5d/54aAdiygJPFzm',
  })
}

const generateCategories = async ({ title }: { title: string }) => {
  return await db.createCategory({ title })
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
  await generatePosts({
    belongsTo: 'Burgers',
    email: emails[0],
    title: 'Dish Burger Bistro',
  })
  await generatePosts({
    belongsTo: 'Burgers',
    email: emails[0],
    title: faker.lorem.words(),
  })
  await generatePosts({
    belongsTo: 'Burgers',
    email: emails[0],
    title: faker.lorem.words(),
  })
  await generatePosts({
    belongsTo: 'Burgers',
    email: emails[0],
    title: faker.lorem.words(),
  })
}

seedMe()
