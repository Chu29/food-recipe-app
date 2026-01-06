import { SOCIAL_LINKS } from "../utils/constants";

const Footer = () => {
  return (
    <footer className=" max-w-7xl mx-auto px-4 py-10 ">
      <ul className="flex flex-col lg:flex-row gap-3 justify-around py-4">
        {SOCIAL_LINKS.map((link, index) => {
          const Icon = link.icon;
          return (
            <li
              key={index}
              className=" py-2 hover:border-t hover:border-b border-orange-300 flex items-center gap-1 "
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
              <div className="p-1 bg-gray-800 rounded-lg">
                <Icon className="w-5 h-5 text-gray-400 hover:text-white transition-all duration-200" />
              </div>
            </li>
          );
        })}
      </ul>
      <div className="pt-8 border-t border-gray-700">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ‣ Made with ❤️ by{" "}
            <a
              href="http://github.com/Chu29"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-orange-300 hover:text-orange-400 transition-colors"
            >
              Chu
            </a>
          </p>
          <img
            src="https://avatars.githubusercontent.com/u/218784251?s=400&u=24e9230d91fe8f0d415877bef7133ca13dd980f9&v=4"
            alt="Chu"
            className="w-8.75 rounded-[20px]"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
