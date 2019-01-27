import * as utils from '../utils'

const users = [
  {
    id: '1',
    role: 'ADMIN',
  },
  {
    id: '2',
    role: 'MEMBER',
  },
]

const contextMock = {
  prisma: {
    $exists: {
      user: ({ id, role }: { id: string; role: string }) => {
        return Boolean(users.find(item => item.id === id && item.role === role))
      },
    },
  },
}

describe('Utils', () => {
  it('should check whether a user is admin', async () => {
    // @ts-ignore
    const isAdmin = await utils.isAdmin(contextMock, '1')
    expect(isAdmin).toBe(true)

    // @ts-ignore
    const isAdmin = await utils.isAdmin(contextMock, '2')
    expect(isAdmin).toBe(false)
  })
})
