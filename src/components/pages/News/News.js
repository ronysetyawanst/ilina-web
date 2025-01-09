import PropTypes from "prop-types";
import ContentCarousel from "../../elements/ContentCarousel";

export default function News({ dict }) {
  const articles = [
    {
      category: dict.legal_articles,
      articles: [
        {
          title: "Contoh Judul Artikel yang Panjang Banget",
          image: "img-litigation-lawyer-bg.png",
          author: "Dewi A. Sianipar; Chandra",
          date: "13 Juni 2024",
        },
        {
          title: "Contoh Judul Artikel Biasa",
          image: "img-corporate-bg.png",
          author: "Dewi Anggraeni Sianipar",
          date: "13 Juni 2024",
        },
        {
          title: "Contoh Judul Artikel",
          image: "img-corporate-bg.png",
          author: "Chandra",
          date: "13 Juni 2024",
        },
        {
          title: "Contoh Judul Artikel yang Panjang Banget",
          image: "img-corporate-bg.png",
          author: "Dewi A. Sianipar; Chandra",
          date: "13 Juni 2024",
        },
        {
          title: "Contoh Judul Artikel Biasa",
          image: "img-corporate-lawyer-bg.png",
          author: "Dewi Anggraeni Sianipar",
          date: "13 Juni 2024",
        },
        {
          title: "Contoh Judul Artikel",
          image: "img-corporate-lawyer-bg.png",
          author: "Chandra",
          date: "13 Juni 2024",
        },
      ],
    },
    {
      category: dict.latest_news,
      articles: [
        {
          title: "Perkembangan Hukum dengan Teknologi AI",
          image: "img-corporate-bg.png",
          author: "Dewi A. Sianipar; Chandra",
          date: "10 November 2024",
        },
        {
          title: "Inovasi Hukum dalam Penyelesaian Sengketa",
          image: "img-corporate-bg.png",
          author: "Dewi A. Sianipar; Chandra",
          date: "11 November 2024",
        },
        {
          title: "Revolusi Hukum",
          image: "img-corporate-lawyer-bg.png",
          author: "Dewi A. Sianipar; Chandra",
          date: "12 November 2024",
        },
      ],
    },
  ];

  return (
    <section className="">
      <Header dict={dict} />
      <ContentCarousel articles={articles} dict={dict} />
    </section>
  );
}

News.propTypes = {
  dict: PropTypes.object.isRequired
};

function Header({ dict }) {
  return (
    <header className="bg-[#927034] text-white px-4 md:px-8 lg:px-24 pt-10 md:pt-16 lg:pt-20 pb-10 md:pb-12 lg:pb-14">
      <h1 className="text-xl md:text-2xl font-medium font-balham uppercase">
        {dict.news_page_title}
      </h1>
    </header>
  );
}

Header.propTypes = {
  dict: PropTypes.object.isRequired
};