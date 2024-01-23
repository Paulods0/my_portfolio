"use client"
import useLanguage from "@/context/LanguangeContext"

const Footer = () => {
  const { language } = useLanguage()
  return (
    <footer className="lg:w-full w-[500px] h-[400px] lg:h-[400px] flex items-center justify-center lg:justify-end">
      <div className="w-full lg:w-[600px] px-8 text-[20px] lg:px-0 flex flex-col space-y-6 lg:mt-24 text-cinza">
        <h1 className="uppercase w-fit">
          {language === "en" ? "services" : "serviços"}
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 ">
          <ul className="w-fit">
            {language === "en" ? (
              <>
                <li>Frontend developer</li>
                <li>Backend developer</li>
                <li>Mobile developer</li>
                <li>UI/UX Design</li>
              </>
            ) : (
              <>
                <li>Desenvolvedor frontend</li>
                <li>Desenvolvedor backend</li>
                <li>Desenvolveor mobile</li>
                <li>UI/UX Designer</li>
              </>
            )}
          </ul>

          <ul className="self-end">
            <li>+244 941 685 402</li>
            <li className="">paulo.luguenda.dev@gmail.com</li>
            <li>ANGOLA, 🇦🇴 - Luanda</li>
          </ul>
        </div>

        <ul className="mt-32 flex space-x-4 items-center justify-between pr-6">
          <div>LinkedIn, Github, Twitter</div>
          <div>
            &copy;
            {language === "en"
              ? "All Rights Reserved."
              : "Todos os direitos reservados."}
          </div>
          <button
            onClick={() => document.getElementById("hero")!.scrollIntoView()}
            className="bg-laranja p-2 hidden w-fit lg:block rounded-xl text-preta"
          >
            {language === "en" ? "Back To Top" : "Ir ao topo"}
          </button>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
