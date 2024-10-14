import Footer from "./components/footer";
import Navigation from "./components/nav";
import { logos } from "./content";

export default function App() {
  return (
    <>
      <Navigation />
      <div className="content space-y-[70px]">
        <section className="mt-[152px]">
          <div className="container flex items-center justify-between">
            <div className="w-[535px] space-y-[30px]">
              <div className="flex w-fit items-center space-x-[10px] rounded-full bg-[#F3F0F8] px-[22px] py-[10px]">
                <img src="/cup.svg" alt="" loading="lazy" />
                <p>
                  <span className="text-sm font-bold text-primary">
                    12,000 {""}
                  </span>
                  top freelancers signed up last week
                </p>
              </div>
              <h1 className="font-clash text-[65px] font-semibold">
                Clients Analytics for Freelancer
              </h1>
              <p className="text-lg leading-9">
                Learn how to track the hot prospects to bring more fortune while
                freelancing from home or your favorite cafes.
              </p>
              <div className="flex space-x-[14px]">
                <button className="rounded-xl bg-primary px-7 py-5 text-xl font-semibold text-white">
                  Explore Features
                </button>
                <button className="flex items-center rounded-xl bg-black px-7 py-5 text-xl font-semibold text-white">
                  <img src="video-circle.svg" alt="" className="mr-[10px]" />
                  Watch Demo
                </button>
              </div>
            </div>
            <img src="/hero_illustration.jpg" loading="lazy" alt="" />
          </div>

          <div className="mt-[50px] space-y-[30px] text-black">
            <p className="text-center font-semibold">
              Over
              <span className="font-bold text-primary">
                {""} 280,000 {""}
              </span>
              big companies <br /> trust Benarrr for their
              <span className="font-bold text-primary">
                {""} businesses. {""}
              </span>
            </p>

            <div className="flex gap-[70px] overflow-hidden">
              {Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={index}
                  className="flex shrink-0 animate-infinite-scroll justify-center gap-[70px]"
                >
                  {[...logos, ...logos, ...logos, ...logos].map((item) => (
                    <img src={item} alt="" />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#EDEEF2] py-[70px]">
          <div className="container space-y-[30px]">
            <button className="rounded-full bg-primary px-[22px] py-[10px] text-sm font-bold text-white">
              Top Features
            </button>
            <p className="text-4xl font-bold leading-[48px]">
              Built-in Robust Features <br /> Versatile Purposes
            </p>
            {/* grid 3 */}
            <div className="grid grid-cols-3 gap-[30px]">
              {[
                {
                  title: "Real Tracking",
                  subtitle:
                    "Get the clients behavior faster and accurate by a few of clicks.",
                  icon: "global-search",
                },
                {
                  title: "Email Marketing",
                  subtitle:
                    "Send a couple of templates A/B testing to encourage clients",
                  icon: "device-message",
                },
                {
                  title: "Payment Gateway",
                  subtitle:
                    "Clients would send the money to your bank account, secured.",
                  icon: "security-card",
                },
              ].map((item) => (
                // item grid
                <div className="relative flex h-[350px] flex-col justify-between rounded-2xl bg-white p-[30px]">
                  {/* text */}
                  <div className="absolute left-[70px] top-12 aspect-square h-10 rounded-full bg-tertiary"></div>

                  <img
                    src={`/vuesax/linear/${item.icon}.svg`}
                    alt=""
                    className="z-10 w-[70px]"
                  />
                  <div className="space-y-[10px]">
                    <h1 className="text-[22px] font-bold">{item.title}</h1>
                    <p className="text-lg leading-9 text-[#989AAE]">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* grid 2 */}
            <div className="grid grid-cols-2 gap-[30px]">
              {[
                {
                  title: "Avoid Client Fraud",
                  subtitle:
                    "Our AI technologies can prevent client to steal your final income from each project you worked.",
                  icon: "bill",
                },
                {
                  title: "More Automations",
                  subtitle:
                    "Our system will notify clients regarding deadline payment, repetition orders, and many more.",
                  icon: "bezier",
                },
              ].map((item) => (
                // item grid
                <div className="relative flex h-[350px] flex-col justify-between rounded-2xl bg-white p-[30px]">
                  {/* text */}
                  <div className="absolute left-[70px] top-12 aspect-square h-10 rounded-full bg-tertiary"></div>
                  <img
                    src={`/vuesax/linear/${item.icon}.svg`}
                    alt=""
                    className="z-10 w-[70px]"
                  />
                  <div className="space-y-[10px]">
                    <h1 className="text-[22px] font-bold">{item.title}</h1>
                    <p className="text-lg leading-9 text-[#989AAE]">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container flex items-center justify-between">
          <div className="space-y-4">
            <img src="/featured_video.jpg" alt="" className="max-w-[530px]" />
            <div className="flex justify-between">
              {Array.from({ length: 3 }).map((_, index) => (
                <img
                  key={index}
                  src={`/video${index + 1}.png`}
                  alt={`video-${index + 1}`}
                  width={166}
                />
              ))}
            </div>
          </div>
          <div className="w-[530px] space-y-10">
            <button className="rounded-full bg-secondary px-[22px] py-[10px] text-sm font-bold text-white">
              Built For Winners
            </button>
            <div className="space-y-[10px]">
              <h1 className="text-4xl font-bold leading-[48px]">
                Watch How It Works
              </h1>
              <p className="text-lg leading-9">
                We designed a lot of features that can applied automatically so
                you do not have to run.
              </p>
            </div>
            <ul className="space-y-5">
              {[
                "Auto running when reaches certain number",
                "Calling backup when you overwhelmed",
                "Sending invoices to client completed projects",
                "Turn off tracker when the client not agree",
                "More great features coming soon",
              ].map((item) => (
                <li className="flex items-center text-lg font-semibold">
                  <img src="/icon-check.svg" alt="" className="mr-3" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-5">
              <button className="rounded-xl bg-primary px-[22px] py-[14px] font-semibold text-white">
                Get Free Trial
              </button>
              <div className="flex items-center space-x-[6px]">
                {/* colase potrait */}
                <div className="flex -space-x-[6px]">
                  <img src="/potrait/photo.png" alt="" className="w-8" />
                  <img src="/potrait/photo-1.png" alt="" className="w-8" />
                  <img src="/potrait/photo-2.png" alt="" className="w-8" />
                </div>
                <p>
                  <span className="font-bold">992 {""}</span>
                  people just signed up
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#EDEEF2] py-[70px]">
          <div className="container flex justify-between space-x-[30px]">
            <div className="space-y-[30px]">
              <button className="rounded-full bg-tertiary px-[22px] py-[10px] text-sm font-bold">
                Good Investment
              </button>
              <h1 className="text-4xl font-bold">
                Most Friendly Pricing <br /> Plans For Everyone
              </h1>
              <p className="text-lg leading-9">
                We designed a lot of features that can applied <br />{" "}
                automatically so you do not have to run.
              </p>
              <div className="flex flex-wrap space-x-[30px]">
                <img src="/logo-54.svg" alt="" />
                <img src="/logo-51.svg" alt="" />
              </div>
              <div className="flex space-x-[30px]">
                <img src="/logo-27.svg" alt="" />
                <img src="/logo-52.svg" alt="" />
              </div>
            </div>
            {/* price */}
            <div className="grid w-[670px] grid-cols-2 gap-5">
              {/* price 1 */}
              <div className="h-fit space-y-5 rounded-[26px] bg-white p-5">
                <h1 className="text-xl font-bold">Profesional</h1>
                <p className="text-4xl font-bold">
                  $4,999
                  <span className="text-base font-medium text-[#989AAE]">
                    /month
                  </span>
                </p>
                <p className="leading-9 text-[#989AAE]">
                  Good for freelancer having 5-15 clients per month about twice.
                </p>
                {[
                  "Real tracking behavior",
                  "100 GB file-size documents",
                  "24/7 customer support",
                  "Quick invoicing modules",
                ].map((item) => (
                  <li className="flex list-none items-center text-lg font-semibold">
                    <img
                      src="/icon-check.svg"
                      alt=""
                      className="mr-[10px]"
                      width={26}
                    />
                    {item}
                  </li>
                ))}
                <button className="w-full rounded-xl bg-black px-[22px] py-[14px] text-base font-semibold text-white">
                  Get Package
                </button>
              </div>
              {/* price 2 */}
              <div className="space-y-5 rounded-[26px] bg-white p-5">
                <h1 className="text-xl font-bold">For Team</h1>
                <p className="text-4xl font-bold">
                  $18,500
                  <span className="text-base font-medium text-[#989AAE]">
                    /month
                  </span>
                </p>
                <p className="leading-9 text-[#989AAE]">
                  Good for teams having 30 clients per month about twice.
                </p>
                {[
                  "Real tracking behavior",
                  "300 GB file-size documents",
                  "24/7 customer support",
                  "Quick invoicing modules",
                ].map((item) => (
                  <li className="flex list-none items-center text-lg font-semibold">
                    <img
                      src="/icon-check.svg"
                      alt=""
                      className="mr-[10px]"
                      width={26}
                    />
                    {item}
                  </li>
                ))}
                {[
                  "Anti fraud payments",
                  "Legal support backed",
                  "LMS for demo features",
                  "More coming soon",
                ].map((item) => (
                  <li className="flex list-none items-center text-lg font-semibold">
                    <img
                      src="/icon-check-2.svg"
                      alt=""
                      className="mr-[10px]"
                      width={26}
                    />
                    {item}
                  </li>
                ))}
                <button className="w-full rounded-xl bg-primary px-[22px] py-[14px] text-base font-semibold text-white">
                  Get Package
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* testimonial */}
        <section className="container space-y-[50px]">
          <div className="space-y-[30px] text-center">
            <button className="rounded-full bg-primary px-[22px] py-[10px] text-sm font-bold text-white">
              Success Customers
            </button>
            <h1 className="text-4xl font-bold">
              Listen What They’re <br /> Saying About Benarrr
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-[30px]">
            {[
              {
                name: "Sammy",
                role: "CMO, Akuna Pixela Team",
                testimonial:
                  "Benarrr helped us boosting our clients prospective to get more high quality projects ever.",
                image: "/potrait/photo.png",
              },
              {
                name: "Rama Jaya",
                role: "CEO, Pastikelarboss",
                testimonial:
                  "With great ecosystem Benarrr we were able secure top notch projects from companies.",
                image: "/potrait/photo-1.png",
              },
              {
                name: "Istimaidina",
                role: "Marketing, Hujan Abadi",
                testimonial:
                  "Benarrr helped us boosting our clients prospective to get more high quality projects ever.",
                image: "/potrait/photo-2.png",
              },
            ].map((item, index) => (
              <div
                className={`flex h-[350px] flex-col justify-between rounded-[26px] p-[30px] ${
                  index === 0 ? "bg-white shadow-custom" : null
                }`}
              >
                <img src={item.image} alt="" width={70} />
                <p className="text-lg">{item.testimonial}</p>
                <div className="space-y-1">
                  <h1 className="text-[22px] font-bold">{item.name}</h1>
                  <p className="text-[#989AAE]">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
