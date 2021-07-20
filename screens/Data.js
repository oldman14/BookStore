export const electronics = [
    {
        id: 1,
        name: 'Fifa 19',
        price: 49.99
    },
    {
        id: 2,
        name: 'Amazon Echo',
        price: 199
    },
    {
        id: 3,
        name: 'Bose QC 35 Headphones',
        price: 300
    }
]

export const books = [
    {
        id: 4,
        name: 'How to Kill a Mocking Bird',
        price: 10
    },
    {
        id: 5,
        name: 'War of Art',
        price: 7
    },
    {
        id: 6,
        name: 'Relentless',
        price: 5.99
    }
]

const bookOtherWordsForHome = {
    id: 1,
    bookName: 'Đừng Ngồi Chờ Chết Trong Gió Bão',
    bookCover:
      'https://salt.tikicdn.com/cache/w64/ts/product/eb/9e/54/cd58342f60a03b0fa24f8b6aa165397c.JPG',
    rating: 4.5,
    language: 'Eng',
    pageNo: 341,
    author: 'Giang Minh',
    genre: ['Kỹ năng sống'],
    readed: '12k',
    price: 45000,
    description:"Với văn phong hài hước, sắc sảo, Giang Minh – một cây viết thời đại, người được coi là “tổng biên tập không bao giờ giả vờ” đồng thời cũng là một trong những nhân vật có tầm ảnh hưởng lớn nhất trên mạng xã hội Trung Quốc đã thẳng thắn lột tả chân tướng muôn mặt của cuộc sống hiện đại. Cho dù bạn đang loay hoay trước những định hướng xã hội hay chỉ đơn giản là một con người bình thường muốn tìm kiếm sự yên vui giản dị, hạnh phúc đi qua năm tháng thì cuốn sách này cũng rất gần với bạn. Vì nó chính là hiện thực, là chiếc máy bay cứu chuộc bạn ra khỏi mớ hỗn độn, tỉnh táo tạo dựng lại cuộc đời ở những quãng thời gian đáng giá nhất của đời người.",
    backgroundColor: 'rgba(240,240,232,0.9)',
    navTintColor: '#000',
  };

  const bookTheMetropolis = {
    id: 2,
    bookName: 'Học Viện - The Institute',
    bookCover:
      'https://salt.tikicdn.com/cache/w64/ts/product/da/62/4f/d52882c613d485b5c1bb15fb788ffeb2.jpg',
    rating: 4.1,
    language: 'Eng',
    pageNo: 272,
    author: 'Stephen King',
    genre: ['Trinh Thám', 'Kinh dị'],
    readed: '13k',
    price: 173000,
    description:`Bên cạnh Bản đặc biệt The Institute ( Học Viện) làm nức lòng người hâm mộ ông hoàng truyện kinh dị Stephen King, 1980Books tiếp tục ra mắt bản thường của Học Viện để đưa tác phẩm đến gần với đông đảo người hâm mộ truyện hơn.

    Học Viện là tác phẩm áp út của tác giả bán được hơn 350 triệu cuốn sách trên toàn thế giới, Stephen King.
    
    Tác phẩm mở ra với nhân vật Tim Jamieson, một cựu cảnh sát người Mỹ bị mất việc đang lang thang trên cuộc hành trình dọc về phía bắc. Tình cờ, anh tới một thị trấn không-ai-biết-tới: DuPray. Tại đây anh được nhận vào làm người gác đêm của thị trấn, mong rằng quãng thời gian sắp tới sẽ êm đề`,
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#000',
  };

  const bookTheTinyDragon = {
    id: 3,
    bookName: 'Muôn Kiếp Nhân Sinh',
    bookCover:
      'https://salt.tikicdn.com/cache/w64/ts/product/30/ee/5a/e2aed009bb558b5d2cfbbe157b428ba4.jpg',
    rating: 3.5,
    language: 'Eng',
    pageNo: 110,
    author: 'Ana C Bouvier',
    genre: ['Tôn giáo', 'Tâm Linh'],
    readed: '13k',
    price: 104.800 ,
    description:`“Muôn kiếp nhân sinh” là tác phẩm do Giáo sư John Vũ - Nguyên Phong viết từ năm 2017 và hoàn tất đầu năm 2020 ghi lại những câu chuyện, trải nghiệm tiền kiếp kỳ lạ từ nhiều kiếp sống của người bạn tâm giao lâu năm, ông Thomas – một nhà kinh doanh tài chính nổi tiếng ở New York. Những câu chuyện chưa từng tiết lộ này sẽ giúp mọi người trên thế giới chiêm nghiệm, khám phá các quy luật về luật Nhân quả và Luân hồi của vũ trụ giữa lúc trái đất đang gặp nhiều tai ương, biến động, khủng hoảng từng ngày.`,
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#FFF',
  };

  const myBooksData = [
    {
      ...bookOtherWordsForHome,
    },
    {
      ...bookTheMetropolis,
    },
    {
      ...bookTheTinyDragon,
    },
  ];
  const categoriesData = [
    {
      id: 1,
      categoryName: 'Best Seller',
      books: [bookOtherWordsForHome, bookTheMetropolis, bookTheTinyDragon],
    },
    {
      id: 2,
      categoryName: 'The Latest',
      books: [bookTheMetropolis],
    },
    {
      id: 3,
      categoryName: 'Coming Soon',
      books: [bookTheTinyDragon],
    },
  ];
