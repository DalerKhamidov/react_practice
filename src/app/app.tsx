import Logos from "components/atoms/logos";
import Card from "components/organisms/card";
import {
  BeakerIcon,
  BookmarkIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  PhoneXMarkIcon,
  Bars3Icon,
  PencilIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import Button from "components/atoms/button";
import ThemeSwitcher from "components/context-switcher";
import VideoBackground from "components/context/video-background";
// import CopyButton from "components/molecules/copy-button";

const features = [
  {
    name: "Archery",
    description:
      "It is the most used form of combat among the Quincy. \nSince they're still human, maintaining a distance from highly dangerous Hollows as well as launching numerous attacks on multiple opponents gives them a great advantage offensively and defensively.",
    logo: CubeTransparentIcon,
    docs: "https://bleach.fandom.com/wiki/Heilig_Pfeil",
  },
  {
    name: "Blut",
    description: "A Quincy ability that gives a practitioner inhuman defensive and offensive capability. By making Reishi flow into their blood vessels, Quincy increase their attack and defense power drastically. Though Blut is significantly dangerous, it has one big flaw; the two forms of Blut for attack and defense work using two different Reishi systems, so they cannot be used at the same time.",
    logo: PencilIcon,
    docs: "https://bleach.fandom.com/wiki/Blut",
  },
  // {
  //   name: "Gintō",
  //   description:
  //     "Gintō are small liquid-filled capsules that store Reiryoku, and are used by the Quincy for spell casting in the same way that Shinigami use Kidō. Like Kidō, they are activated by calling out various commands.",
  //   logo: BookmarkIcon,
  //   docs: "https://bleach.fandom.com/wiki/Gint%C5%8D",
  // },
  // {
  //   name: "Hirenkyaku",
  //   description: "An advanced Quincy moving technique. It allows for high- speed movements by riding on the flow of Reishi created below the user's feet",
  //   logo: PhotoIcon,
  //   docs: "https://bleach.fandom.com/wiki/Hirenkyaku",
  // },
  // {
  //   name: "Shadow",
  //   description: "A Quincy ability that allows them to teleport themselves and/or others using shadows.",
  //   logo: BeakerIcon,
  //   docs: "https://bleach.fandom.com/wiki/Shadow",
  // },
  // {
  //   name: "Ransōtengai",
  //   description: "A high-level technique that allows the user to control their body parts using strings of Reiryoku controlled by their brain, forming lines or strings out of Reishi. ",
  //   logo: Bars3Icon,
  //   docs: "https://bleach.fandom.com/wiki/Rans%C5%8Dtengai",
  // },
  // {
  //   name: "Vollständig",
  //   description:
  //     "A part of Quincy evolution and the answer to the drawbacks of the outdated Quincy: Letzt Stil. It is the easiest ability to understand because a practitioner's appearance and power change drastically.",
  //   logo: PhoneXMarkIcon,
  //   docs: "https://bleach.fandom.com/wiki/Quincy:_Vollst%C3%A4ndig",
  // },
  // {
  //   name: "Schrift",
  //   description:
  //     "A letter bestowed by Yhwach that awakens unique abilities.",
  //   logo: ChevronDownIcon,
  //   docs: "https://bleach.fandom.com/wiki/Schrift",
  // },
];

const vid = document.getElementById("BleachIntro")

function App() {
  return (
    <main>
      {/* <header className="pt-16 z-10 relative max-w-screen-lg xl:max-w-screen-xl mx-auto">
          <h3 className="text-2xl sm:text-4xl leading-none font-bold tracking-tight text-[gold]">
            <span className="text-[#a41d1d] opacity-90">Quincy</span> @ Lichtreich
            
          </h3>
          <h1 className="text-6xl lg:text-7xl leading-none font-extrabold tracking-tight mb-8 sm:mb-10 text-blue-950 dark:text-blue-400">
            Wandenreich
          </h1>
          <p className="max-w-screen-lg text-lg sm:text-xl  text-[#a473f8] font-medium mb-10 sm:mb-11">
            The capital of the Lichtreich in the Human World, before being moved to the Schatten Bereich and becoming the base of the Wandenreich:{" "}
            <code className="font-mono text-blue-500 font-bold">影の領域</code>
            , <code className="font-mono text-blue-500 font-bold">Shatten Beraihi; German for "Shadow Realm"</code>,{" "}
            <code className="font-mono text-blue-500 font-bold">Vandenraihi; German for "Walled Empire"</code>,{" "}
            <code className="font-mono text-blue-500 font-bold">Japanese for "Invisible Empire"</code>
            , and{" "}
            <code className="font-mono text-blue-500 font-bold">
              For the remnants of the Quincy that remained in the World of the Living </code>
          </p>
      </header> */}
      <VideoBackground/>
      <div className="absolute top-12 right-12 ">
        <Logos.Vite className="w-56 h-56"/>
      </div>
      <section className="max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div className="sm:flex sm:space-x-5 space-y-4 sm:space-y-0 items-center">
          <a href="https://bleach-anime.com/en/character/" className="text-right">
            <Button>Visit on Quincyhub</Button>
          </a>
          <a>
            <div className="w-full sm:w-auto flex-none bg-blue-600 hover:bg-blue-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200">
              <div className="text-right">
                <ThemeSwitcher />
              </div>
            </div>
          </a>
          {/* <CopyButton text="npx degit jvidalv/vital my-app" /> */}
        </div>
      </section>
      <section className="max-w-screen-lg xl:max-w-screen-xl mx-auto grid grid-cols-10 gap-4">
        {features.map((props, index) => (
          <div key={index} className=" col-span-10 sm:col-span-5" >
            <Card
              title={props.name}
              description={props.description}
              Icon= {props.logo}
              href={props.docs}
            />
          </div>
        ))}
      </section>
      <footer className="pb-16 max-w-screen-lg xl:max-w-screen-xl mx-auto text-center sm:text-right text-gray-950 dark:text-gray-400 font-bold">
        <a href="https://github.com/DalerKhamidov">
          Daler Khamidov @ {new Date().getFullYear()}
        </a>
      </footer>
    </main>
  );
}

export default App;
