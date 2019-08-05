export const Mutation = {
  // User
  async createUser(parent, args, { prisma }, info) {
    const isEmailTaken = await prisma.exists.User({ email: args.data.email })
    if (isEmailTaken) throw new Error('Email Taken')

    if (args.password.length < 6) {
      throw new Error('Password must be 6 characters or longer.')
    }

    return prisma.mutation.createUser(null, info)
  },

  async deleteUser(parent, args, { prisma }, info) {
    const isUserExisting = await prisma.exists.User({ id: args.id })

    if (!isUserExisting) throw new Error('User is not existing')

    return prisma.mutation.deleteUser(null, info)
  },

  async updateUser(parent, args, { prisma }, info) {
    return prisma.mutation.updateUser(null, info)
  },

  // Post
  async createPost(parent, args, { prisma }, info) {
    return prisma.mutation.createPost(null, info)
  },

  async deletePost(parent, args, { prisma }, info) {
    return prisma.mutation.deletePost(null, info)
  },

  async updatePost(parent, args, { prisma }, info) {
    return prisma.mutation.updatePost(null, info)
  },

  // Comments
  async createComment(parent, args, { prisma }, info) {
    return prisma.mutation.createComment(null, info)
  },

  async deleteComment(parent, args, { prisma }, info) {
    return prisma.mutation.deleteComment(null, info)
  },

  async updateComment(parent, args, { prisma }, info) {
    return prisma.mutation.updateComment(null, info)
  }
}
