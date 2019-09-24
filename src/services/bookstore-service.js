export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan Fowler',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51oxXEG6TRL._SX379_BO1,204,203,200_.jpg'
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael Nygard',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/419zAwJJH4L._SX342_QL70_.jpg'
    }
  ]

  getBooks = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(this.data)
          //reject(new Error('Error!'))
        }, 700)
      })
  }
}