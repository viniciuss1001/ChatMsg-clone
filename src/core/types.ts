import {Timestamp} from 'firebase/firestore'

export type User = {
     uid: string,
     email: string | null,
     birthday: BirthDate,
     firstName: string,
     lastName: string,
     picture: string,
}

export type BirthDate = {
     day: number,
     month: number,
     year: number,
}

export type SingUpType = {
     fistName: string,
     lastName: string,
     email: string,
     birtDay: BirthDate,
     passWord: string,
     confirmPassword: string,
}

export type LoginType = {
     email: string
     login: string
}

export type chatRoom = {
     createdAt: Timestamp
     id: string
     updatedAt: Timestamp
     userIds: [string, string]
     lastMessage: string
}

export type Message = {
     message: string
     messageId: string
     sender: string
     type: string
     createdAt: Timestamp
}