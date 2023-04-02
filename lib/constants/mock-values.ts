import { IExtendedUser, IMessageResponse } from '../types/api.types'

export const mockUsers: IExtendedUser[] = [
  {
    id: 1,
    name: 'name1',
    email: 'homenich101@gmail.com',
    image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  },
  {
    id: 2,
    name: 'name2',
    email: 'mail2@mail.com',
    image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  },
]

export const mockMessages: IMessageResponse[] = [
  {
    id: 1,
    text: 'hello world',
    create_at: new Date(),
    author: {
      id: 1,
      name: 'name1',
      email: 'homenich101@gmail.com',
      image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    },
    room: null,
  },
  {
    id: 2,
    text: 'hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!',
    create_at: new Date(),
    author: {
      id: 2,
      name: 'name2',
      email: 'mail2@mail.com',
      image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    },
    room: null,
  },
  {
    id: 3,
    text: 'hello world!',
    create_at: new Date(),
    author: {
      id: 2,
      name: 'name2',
      email: 'mail2@mail.com',
      image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    },
    room: null,
  },
  {
    id: 4,
    text: 'hello world!',
    create_at: new Date(),
    author: {
      id: 2,
      name: 'name2',
      email: 'mail2@mail.com',
      image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    },
    room: null,
  },
  {
    id: 5,
    text: 'hello world!',
    create_at: new Date(),
    author: {
      id: 2,
      name: 'name2',
      email: 'mail2@mail.com',
      image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    },
    room: null,
  },
  {
    id: 6,
    text: 'hello world!',
    create_at: new Date(),
    author: {
      id: 2,
      name: 'name2',
      email: 'mail2@mail.com',
      image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    },
    room: null,
  },
  {
    id: 7,
    text: 'hello world!',
    create_at: new Date(),
    author: {
      id: 2,
      name: 'name2',
      email: 'mail2@mail.com',
      image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    },
    room: null,
  },
  {
    id: 8,
    text: 'hello world!',
    create_at: new Date(),
    author: {
      id: 2,
      name: 'name2',
      email: 'homenich101@gmail.com',
      image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    },
    room: null,
  },
  {
    id: 9,
    text: 'hello world!',
    create_at: new Date(),
    author: {
      id: 2,
      name: 'name2',
      email: 'mail2@mail.com',
      image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    },
    room: null,
  },
  {
    id: 10,
    text: 'game start',
    create_at: new Date(),
    author: null,
    room: null,
  },
]
