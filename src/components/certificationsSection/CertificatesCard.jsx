import SingleCertificate from "./SingleCertificate";

const certificates = [
  {
    name: "HTML & CSS Certificate",
    date: "Oct 2021",
    provider: "Shyamsir Institute",
    image: "/images/html-css-cert.png",
    link: "/images/html-css-cert.png",
  },
  {
    name: "MongoDB Certificate",
    date: "March 2024",
    provider: "MongoDB University Course",
    image: "/images/mongo-cert.png",
    link: "/images/mongo-cert.png",
  },
  {
    name: "Java Certificate",
    date: "May 2023",
    provider: "Shyamsir Institute",
    image: "/images/java-cert.png",
    link: "/images/java-cert.png",
  },
  {
    name: "Python Certificate",
    date: "Sept 2022",
    provider: "Shyamsir Institute",
    image: "/images/python-cert.png",
    link: "/images/python-cert.png",
  },
  {
    name: "React Certificate",
    date: "May 2025",
    provider: "Scrimba Course Academy",
    image: "/images/react-cert.png",
    link: "/images/react-cert.png",
  },
  {
    name: "MIT App Inventor Certificate",
    date: "March 2022",
    provider: "Shyamsir Institute",
    image: "/images/mit-cert.png",
    link: "/images/mit-cert.png",
  },
  {
    name: "Scratch Certificate",
    date: "July 2021",
    provider: "Shyamsir Institute",
    image: "/images/sc-cert.png",
    link: "/images/sc-cert.png",
  },
];

const CertificatesCard = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
      {certificates.map((cert, index) => (
        <SingleCertificate
          key={index}
          name={cert.name}
          date={cert.date}
          provider={cert.provider}
          image={cert.image}
          link={cert.link}
        />
      ))}
    </div>
  );
};

export default CertificatesCard;