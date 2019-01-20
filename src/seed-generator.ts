import * as faker from 'faker'
import { Prisma } from './generated/prisma'

const db = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT,
})

const generateUser = async (user) => {
  return await db.mutation.createUser({
    data: {
      name: user.name,
      email: user.email,
      // plaintext password: "nooneknows"
      password: '$2a$10$hACwQ5/HQI6FhbIISOUVeusy3sKyUDhSq36fF5d/54aAdiygJPFzm',
    },
  })
}

const generateCategories = async ({ title }) => {
  return await db.mutation.createCategory({
    data: {
      title,
    },
  })
}

const generateSubCategories = async ({ title, belongsTo }) => {
  return await db.mutation.createSubCategory({
    data: {
      title,
      categories: {
        connect: {
          title: belongsTo,
        },
      },
    },
  })
}

const generatePosts = async ({ title, email, belongsTo }) => {
  await db.mutation.createPost({
    data: {
      title,
      text: faker.lorem.sentence(),
      author: {
        connect: {
          email,
        },
      },
      subCategories: {
        connect: {
          title: belongsTo,
        },
      },
      isPublished: true,
      thumbnail: 'http://lorempixel.com/640/480/food/',
    },
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
    title: 'Burgers',
    belongsTo: 'Food',
  })
  await generateSubCategories({
    title: 'Sushi',
    belongsTo: 'Food',
  })
  await generateSubCategories({
    title: 'Indian',
    belongsTo: 'Food',
  })

  const emails = getEmails()
  await generatePosts({
    title: 'Dish Burger Bistro',
    email: emails[0],
    belongsTo: 'Burgers',
  })
  await generatePosts({
    title: faker.lorem.words(),
    email: emails[0],
    belongsTo: 'Burgers',
  })
  await generatePosts({
    title: faker.lorem.words(),
    email: emails[0],
    belongsTo: 'Burgers',
  })
  await generatePosts({
    title: faker.lorem.words(),
    email: emails[0],
    belongsTo: 'Burgers',
  })
}

seedMe()
