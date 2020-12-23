const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        {
          title: 'name of the wind',
          author: 'patrick rothfuss',
          img: 'assets/1.jpg',
          isFav: true,
        },
        {
          title: 'the way of kings',
          author: 'brandon sanderson',
          img: 'assets/2.jpg',
          isFav: false,
        },
        {
          title: 'the final empire',
          author: 'brandon sanderson',
          img: 'assets/3.jpg',
          isFav: true,
        },
      ],
      url: 'https://isaacsokari.com',
    };
  },
  methods: {
    toggleBook() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) console.log({ data });
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleFav(book) {
      // const index = this.books.indexOf(book)
      // this.books[index].isFav = !this.books[index].isFav;

      // shorter solution
      
      book.isFav = !book.isFav;
    }
  },
});

app.mount('#app');

// console.log(app)
