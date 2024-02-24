import { useState } from "react";
import logo from "./Latihan.png";
import rafa from "./rafa2.png";
import icon from "./search4.jpg";
import kotak from "./kotak4.png";
import tablet from "./tablet.png";
import hp from "./hp.png";
import buku from "./buku.png";
import computer from "./computer.png";
import design from "./design2.png";
import media from "./media.png";

function App() {
  const [gambar, gambarbaru] = useState(tablet);

  return (
    <>
      {/* 1. Font Family
      <div className="w-full">
        <p className="font-sans">The quick brown fox</p>
        <p className="font-serif">The quick brown fox</p>
        <p className="font-mono">The quick brown fox</p>
      </div>
      2. Hover
      <p className="font-sans hover:font-serif">Arahkan kursor ke saya</p>
      <br />
      3. font size
      <p className="text-sm">The quick brown fox</p>
      <p className="text-base">The quick brown fox</p>
      <p className="text-lg">The quick brown fox</p>
      <p className="text-xl">The quick brown fox</p>
      <p className="text-2xl">The quick brown fox</p>
      <p className="text-[50px]">The quick brown fox contoh custom</p>
      <br />
      4. Italic
      <p className="italic">The quick brown fox</p>
      <p className="not-italic">The quick brown fox</p>
      <br />
      5. Font weight
      <p className="font-light">The quick brown fox</p>
      <p className="font-normal">The quick brown fox</p>
      <p className="font-medium">The quick brown fox</p>
      <p className="font-semibold">The quick brown fox</p>
      <p className="font-bold">The quick brown fox</p>
      <br />
      6. Letter Spacing
      <p className="tracking-tighter">The quick brown fox</p>
      <p className="tracking-normal">The quick brown fox</p>
      <p className="tracking-widest">The quick brown fox</p>
      <br />
      7. Line Height
      <p className="leading-normal">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nam
        vitae, aliquam facere repellendus itaque hic? Aspernatur, soluta. Itaque
        aperiam animi nisi odit reiciendis at obcaecati libero laboriosam
        eligendi architecto.
      </p>
      <br />
      <p className="leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam eum
        quisquam eaque illo doloribus harum sit fugit nihil consequatur natus ex
        in mollitia voluptatem, ipsa, facilis ea. Vitae, maxime.
      </p>
      <br />
      <p className="leading-loose">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
        voluptatum, repellendus ipsum officia amet ab at. Dolor nesciunt ad
        quisquam ex libero ullam, facilis, eaque quibusdam, beatae voluptatem
        est non!
      </p>
      <br />
      8. Text Align
      <p className="text-right">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, aut
        officia! Saepe consequatur dolorem magnam voluptates quas recusandae
        cupiditate similique aperiam autem ipsam, aliquam error obcaecati
        tenetur molestias. Unde, eos!
      </p>
      <hr />
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        doloremque dicta, veniam corrupti dolore accusantium dolorum voluptatum
        maiores molestiae! Accusamus repellat consequuntur dolorem quas unde
        corrupti labore, inventore cumque sequi!
      </p>
      <hr />
      <p className="text-left">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
        nobis quia amet nisi animi! Nihil, aliquid et eum provident iusto, sit
        hic fugiat obcaecati quos laborum non dicta, quam optio.
      </p>
      <hr />
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolores
        autem doloremque veritatis incidunt, ullam quia hic nemo mollitia in
        quam quis minima voluptas sequi quaerat architecto doloribus velit
        recusandae.
      </p>
      <br />
      9. Text Color
      <p className="text-sky-300">The quick brown fox</p>
      <p className="text-sky-400">The quick brown fox</p>
      <p className="text-sky-500">The quick brown fox</p>
      <p className="text-sky-600">The quick brown fox</p>
      <p className="text-sky-700">The quick brown fox</p>
      <p className="text-sky-800">The quick brown fox</p>
      <p className="text-sky-900">The quick brown fox</p>
      <br />
      10. Text Decoration
      <p className="underline">The quick brown fox</p>
      <br />
      <p className="overline">The quick brown fox</p>
      <br />
      <p className="line-through">The quick brown fox</p>
      <br />
      <p className="no-underline">The quick brown fox</p>
      <br />
      <p className="underline decoration-solid">The quick brown fox</p>
      <br />
      <p className="underline decoration-double">The quick brown fox</p>
      <br />
      <p className="underline decoration-dotted">The quick brown fox</p>
      <br />
      <p className="underline decoration-dashed">The quick brown fox</p>
      <br />
      <p className="underline decoration-wavy">The quick brown fox</p>
      <br />
      11. Background
      <div className="bg-indigo-500">Background Color</div>
      <div className="bg-rose-500">Background Color</div>
      <div className="bg-teal-500">Background Color</div>
      <br />
      12. Width
      <div className="w-full bg-indigo-300">w-96</div>
      <div className="w-96 bg-indigo-400">w-96</div>
      <div className="w-80 bg-indigo-500">w-80</div>
      <div className="w-64 bg-indigo-600">w-64</div>
      <div className="w-48 bg-indigo-700">w-48</div>
      <div className="w-40 bg-indigo-800">w-40</div>
      <div className="w-32 bg-indigo-900 text-gray-50">w-32</div>
      <div className="w-24 bg-indigo-950 text-gray-50">w-24</div>
      <div className="w-[500px] bg-indigo-500">w-custom</div>
      <br />
      13. Height
      <div className="h-96 w-96 bg-indigo-300">h-96</div>
      <div className="h-80 w-80 bg-indigo-400">h-80</div>
      <div className="h-64 w-64 bg-indigo-500">h-64</div>
      <div className="h-48 w-48 bg-indigo-600">h-48</div>
      <div className="h-40 w-40 bg-indigo-700">h-40</div>
      <div className="h-32 w-32 bg-indigo-800">h-32</div>
      <div className="h-screen w-screen bg-indigo-800">Dynamic Resolution</div>
      <div className="h-[100px] w-24 bg-indigo-900 text-gray-50">h-custom</div>
      <br />
      14. Padding
      <div className="pt-6 bg-slate-500">pt-6</div>
      <div className="pr-4 bg-rose-500">pr-4</div>
      <div className="pb-8 bg-indigo-500">pb-8</div>
      <div className="pl-2 bg-teal-500">pl-2</div>
      <div className="py-2 bg-sky-500">py-2</div>
      <div className="px-2 bg-gray-500">px-2</div>
      <div className="p-[50px] bg-purple-500">padding custom</div>
      <br />
      15. Margin
      <div className="mt-6 bg-slate-500">mt-6</div>
      <div className="mr-4 bg-rose-500">mr-4</div>
      <div className="mb-8 bg-indigo-500">mb-8</div>
      <div className="ml-2 bg-teal-500">ml-2</div>
      <div className="my-2 bg-sky-500">my-2</div>
      <div className="mx-2 bg-gray-500">mx-2</div>
      <div className="m-[50px] bg-purple-500">Margin custom</div>
      <br />
      16. Justify Content + Gap
      <div className="flex justify-start bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">01</div>
        <div className="p-2 rounded-lg bg-sky-500">02</div>
        <div className="p-2 rounded-lg bg-sky-500">03</div>
      </div>
      <br />
      <div className="flex justify-center bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">01</div>
        <div className="p-2 rounded-lg bg-sky-500">02</div>
        <div className="p-2 rounded-lg bg-sky-500">03</div>
      </div>
      <br />
      <div className="flex justify-end bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">01</div>
        <div className="p-2 rounded-lg bg-sky-500">02</div>
        <div className="p-2 rounded-lg bg-sky-500">03</div>
      </div>
      <br />
      <div className="justify-between bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">01</div>
        <div className="p-2 rounded-lg bg-sky-500">02</div>
        <div className="p-2 rounded-lg bg-sky-500">03</div>
      </div>
      <br />
      17. Border
      <div className="rounded w-40 text-center border-2 border-rose-500">
        rounded
      </div>
      <div className="rounded-md w-40 text-center border-4 border-indigo-500">
        rounded-md
      </div>
      <div className="rounded-lg w-40 text-center border-2 border-teal-500">
        rounded-lg
      </div>
      <div className="rounded-full w-40 text-center border-8 border-sky-500">
        rounded-full
      </div>
      <div className="rounded-[100px] w-40 text-center border-[3px] border-slate-500">
        rounded-custom
      </div>
      <br />
      18. Flex
      <div className="flex">
        <div className="flex-none w-14 h-14 bg-sky-500">
          flex-none Lorem ipsum dolor sit.
        </div>
        <div className="flex-initial w-64 bg-violet-500">
          flex-initial Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sit distinctio, ex fugit laudantium natus, ad, dolorem mollitia veniam
          officia quaerat facere. Earum magni nulla ipsa eius reprehenderit,
          voluptatibus eaque ipsum.
        </div>
        <div className="flex-auto w-32 bg-sky-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illum
          porro doloribus facilis non consequatur aliquid explicabo. Sequi
          officiis, mollitia nisi doloremque tempore nostrum corporis totam
          voluptates, veritatis debitis reiciendis.
        </div>
      </div>
      <br />
      19. Cursor
      <br />
      <button
        type="button"
        className="cursor-pointer bg-rose-500 p-2 rounded-md"
      >
        Submit
      </button>
      <br />
      <br />
      <button
        type="button"
        className="cursor-progress bg-indigo-500 p-2 rounded-md"
      >
        Saving
      </button>
      <br />
      <br />
      <button
        type="button"
        disabled
        className="cursor-not-allowed bg-emerald-500 p-2 rounded-md"
      >
        Confirm
      </button>
      <br />
      <br />
      20. Shadow
      <div className="bg-cyan-500 shadow-md shadow-cyan-500/50 w-40 rounded-xl text-center py-2">
        Subscribe
      </div>
      <br />
      <div className="bg-blue-500 shadow-lg shadow-blue-500/50 w-40 rounded-xl text-center py-2">
        Like
      </div>
      <br />
      <div className="bg-indigo-500 shadow-xl shadow-indigo-500/50 w-40 rounded-xl text-center py-2">
        Share
      </div>
      <br />
      21. Display
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <span className="inline bg-slate-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
          ipsum ut similique autem consequuntur? Reiciendis ad provident
          obcaecati eius alias nostrum tempore accusamus perferendis,
          dignissimos ducimus, ipsam voluptates cumque odit!
        </span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <br />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <span className="inline-block bg-slate-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
          ipsum ut similique autem consequuntur? Reiciendis ad provident
          obcaecati eius alias nostrum tempore accusamus perferendis,
          dignissimos ducimus, ipsam voluptates cumque odit!
        </span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <br />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <span className="block bg-slate-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
          ipsum ut similique autem consequuntur? Reiciendis ad provident
          obcaecati eius alias nostrum tempore accusamus perferendis,
          dignissimos ducimus, ipsam voluptates cumque odit!
        </span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div> */}

      <div className="h-screen w-screen bg-gradient-to-l from-blue-950 to-black">
        <nav className=" h-[100px] w-[100%] flex gap-2 justify-center ">
          <img
            src={rafa}
            alt="Logo"
            className="h-[150px] w-[150px] rounded-lg hover:brightness-50 ease-out duration-300"
          />
          <div className="mt-[55px] flex gap-3 ml-4 font-sans text-white">
            <a className="text-white hover:text-[20px] ease-in-out duration-300">
              Home
            </a>
            <a className="text-white hover:text-[20px] ease-in-out duration-300">
              Studio
            </a>
            <a className="text-white hover:text-[20px] ease-in-out duration-300">
              Works
            </a>
            <a className="text-white hover:text-[20px] ease-in-out duration-300">
              Contact
            </a>
          </div>
          <div className="flex justify-end ml-[600px]">
            <p className="mt-[50px] mr-1">
              <img
                src={icon}
                alt="icon"
                className="h-6 w-6 mr-5 hover:h-6 cursor-pointer"
              />
            </p>
            <button className="bg-blue-400 text-blue-100 rounded-lg h-[40px] w-[100px] mt-[45px] hover:brightness-50 ease-in-out duration-500 ">
              Hire Now
            </button>
          </div>
        </nav>
        <div className="flex ml-[100px] mt-[70px] gap-[150px]">
          <div className="">
            <h1 className=" font-bold font-sans text-[40px] text-white">
              Think. Make. <br />
              Solve.
            </h1>
            <p className="font-semibold text-lg text-blue-700">—What we Do</p>
            <p className="text-white">
              we enjoy creating delightful, human-centered digital <br />{" "}
              experieces.
            </p>
            <button className="bg-blue-400 text-blue-100 rounded-lg h-[40px] w-[90px] mt-4 text-[15px] hover:brightness-50 ease-in-out duration-500">
              Learn More
            </button>
          </div>
          <div>
            <img
              src={logo}
              alt="Logo"
              className="h-[350px] w-[250px]  rounded-lg border-4 border-blue-900"
            />
          </div>
        </div>
      </div>

      <div className="flex w-screen h-screen bg-gradient-to-r from-black from to-blue-950 ">
        <div className="flex gap-[100px]">
          <img
            src={kotak}
            alt="kotak"
            className="h-[300px] w-[300px] mt-[150px] ml-[150px] animate-bounce"
          />
          <div>
            <h1 className="text-white mt-[150px] text-[50px] font-bold font-sans">
              Think Outside the <br /> square space
            </h1>
            <p className="text-blue-800 font-sans">— Who we Are</p>
            <p className="text-white font-sans">
              a creative group of disigners and developers with a passion for{" "}
              <br />
              the arts.
            </p>
            <button className="bg-blue-400 text-blue-100 rounded-lg h-[40px] w-[130px] mt-4 text-[15px] hover:brightness-50 ease-in-out duration-500">
              See our works
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-screen h-screen bg-gradient-to-r from-black from to-blue-950 gap-[180px] ">
        <div className="">
          <button
            onClick={() => gambarbaru(computer)}
            id="ha"
            className="text-white text-[50px] hover:text-blue-400 ease-in-out duration-200 ml-5 font-mono"
          >
            Web Design
          </button>
          <br />
          <button
            className="text-white text-[50px] hover:text-blue-400 ease-in-out duration-200 ml-5 font-mono"
            onClick={() => gambarbaru(buku)}
          >
            Ilustrasion
          </button>
          <br />
          <button
            className="text-white text-[50px] hover:text-blue-400 ease-in-out duration-200 ml-5 font-mono"
            onClick={() => gambarbaru(hp)}
          >
            Product Design
          </button>
          <br />
          <button
            className="text-white text-[50px] hover:text-blue-400 ease-in-out duration-200 ml-5 font-mono"
            onClick={() => gambarbaru(design)}
          >
            Development
          </button>
          <br />
          <button
            className="text-white text-[50px] hover:text-blue-400 ease-in-out duration-200 ml-5 font-mono"
            onClick={() => gambarbaru(media)}
          >
            Social Media
          </button>
        </div>
        <div>
          <img
            src={gambar}
            alt="tablet"
            id="tablet"
            className="w-[550px] h-[500px] hover:animate-spin"
          />
        </div>
      </div>
    </>
  );
}

export default App;
