import icon1 from "../../public/images/Icon1.png";
import icon2 from "../../public/images/Icon2.png";
import icon3 from "../../public/images/Icon3.png";
import img1 from "../../public/images/Logo1.png";
import img2 from "../../public/images/Logo2.png";
import img3 from "../../public/images/Logo3.png";
import img4 from "../../public/images/Logo4.png";
import img5 from "../../public/images/Logo5.png";
import img6 from "../../public/images/Logo6.png";
import img7 from "../../public/images/Logo7.png";
const Serice = () => {
  const services = [
    {
      id: 1,
      title: " Menbership Organization",
      description:
        "Our menbership management software provides full automation of menbership renewal and payments",
      image: icon1,
    },
    {
      id: 2,
      title: " Menbership Organization",
      description:
        "Our menbership management software provides full automation of menbership renewal and payments",
      image: icon2,
    },
    {
      id: 3,
      title: " Menbership Organization",
      description:
        "Our menbership management software provides full automation of menbership renewal and payments",
      image: icon3,
    },
  ];
  return (
    <>
      <div className="md:px-14 px-4 py-16 mx-auto" id="service">
        <div data-aos="fade-up" className="text-center my-8">
          <h2 className="text-4xl text-neutral-700 font-semibold mb-2">
            Our Clients
          </h2>
          <p className="text-neutral-700">
            We have been working with some Fortune 500+ clients
          </p>
          <div className="my-12 flex flex-wrap justify-between items-center gap-8">
            <img src={img1} alt="logo1" />
            <img src={img2} alt="logo2" />
            <img src={img3} alt="logo3" />
            <img src={img4} alt="logo4" />
            <img src={img5} alt="logo5" />
            <img src={img6} alt="logo6" />
            <img src={img7} alt="logo7" />
          </div>
        </div>
        {/* ====== */}
        <div
          data-aos="fade-right"
          className="mt-20 md:w-1/2 mx-auto text-center"
        >
          <h2 className="text-4xl text-neutral-700 font-semibold mb-3">
            Manage your entire community in a single system
          </h2>
          <p className="text-neutral-700">Who is Nextcent suitable for?</p>
        </div>
        {/*====== */}
        <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
          {services.map((service, i) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-anchorpalcement="top-center"
              data-aos-delay={`${i * 150}`}
            >
              <div className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full">
                <div>
                  <div className="bg-[#E8F5E9]mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                    <img src={service.image} alt="" className="-ml-5" />
                  </div>
                  <h4 className="text-2xl font-bold text-neutral-700 mb-2 py-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-neutral-700">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Serice;
