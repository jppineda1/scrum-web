// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Hanckook Luccy',
    image: "images/user3.jfif",
    designation: 'React JS | NEXT JS | Node | GraphQL',
    view: "Hey everyone! I wanted to take a moment to recommend Jean for any React.js opportunities. I had the pleasure of working with him on multiple projects where he showcased a strong understanding of React.js and Next.js concepts and delivered high-quality code. He consistently demonstrated a willingness to learn and grow, and his enthusiasm for tackling new challenges was contagious. Jean is a reliable and dedicated team member who would be a great asset to any React.js team. Highly recommended! 👍! 🌟",
    linkednURL: "https://www.linkedin.com/in/user1/"
  },
  {
    id: 1,
    name: 'John Hayat',
    image: "images/user1.jpeg",
    designation: 'Data Scientist | Machine Learning Engineer | Python Developer',
    view: "I had the privilege of working alongside Jean on multiple university projects, and I must say, his talent and work ethic truly stood out. Recently, we were both part of the dynamic team at JMM Technologies, where Jean's professionalism and attention to detail shone brightly. I wholeheartedly endorse Jean for any opportunity that calls for a highly skilled and dedicated individual.",
    linkednURL: "https://www.linkedin.com/in/user1/"
  },
  {
    id: 2,
    name: 'All Khan',
    image: "images/user2.jpg",
    designation: 'DF | JavaScript | Tailwind | Sass | Bootstrap',
    view: "I wholeheartedly recommend Jean as a talented React frontend developer with an incredible flair for UI/UX design. His proficiency in Node.js further enhances his capabilities, allowing him to build robust and scalable applications. Jean's attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable addition to any development team.",
    linkednURL: "https://www.linkedin.com/in/user1/"
  },
  {
    id: 3,
    name: 'Tae Lincoln',
    image: "images/user.jpeg",
    designation: 'DF Stack Developer at Productbox',
    view: "I highly recommend H Javed for web frontend development positions. Their expertise in ReactJS and Next.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
    linkednURL: "https://www.linkedin.com/in/user/"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
