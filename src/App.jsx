import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// JSX COMPONENTS
import Goal from "./components/Goals/Goal";
import Member from "./components/Team/Member";
import Button from "./components/Button/Button";

// IMAGES
import book from "./assets/images/img/book.svg";
import book2 from "./assets/images/img/book2.svg";
import logoImage from "./assets/images/top/dimukaLogo.svg";
import logotipo from "./assets/images/top/logotipo.svg";
import image01 from "./assets/images/img/image-01.svg";
import image02 from "./assets/images/img/image-02.svg";
import coinBlur1 from "./assets/images/img/coin-blur.svg";
import coinBlur2 from "./assets/images/img/coin-blur2.svg";
import coinBlur3 from "./assets/images/img/coin-blur3.svg";
import app from "./assets/images/img/app.svg";

// ICONS
import gmail from "./assets/images/icons/gmail-icon.svg";
import facebook from "./assets/images/icons/facebook-icon.svg";
import instagram from "./assets/images/icons/instagram-icon.svg";
import whatsapp from "./assets/images/icons/whatsapp-icon.svg";
import phone from "./assets/images/icons/phone-icon.svg";
import linkedin from "./assets/images/icons/linkedin-icon.svg";
import menuIcon from "./assets/images/icons/menu.svg";
import closeMenuIcon from "./assets/images/icons/close_menu.svg";

// TEAM MEMBERS
import aziel from "./assets/images/team/aziel.svg";
import crisvan from "./assets/images/team/crisvan.svg";

export default function App() {
  const [headerShadow, setHeaderShadow] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      scrollY > 20 ? setHeaderShadow(true) : setHeaderShadow(false);
    });
  }, []);

  return (
    <div className={openMenu ? "overflow-y-hidden" : ""}>
      <header
        className={`
          flex items-center w-full bg-white transition duration-150 justify-between px-[110px] mobile:px-[40px] py-[10px] ${
            headerShadow ? "shadow-md fixed top-0 z-[100]" : " "
          }
          tablet:px-[60px]

        `}
      >
        <a href="/">
          <img src={logoImage} alt="" />
        </a>

        <nav>
          <ul
            className={`
            flex items-center gap-[30px] mobile:opacity-70 transition duration-150 mobile:${openMenu ? "flex mobile:opacity-100" : "hidden"}
            mobile:absolute mobile:top-0 mobile:left-0 mobile:w-full mobile:h-screen mobile:bg-coral
            mobile:z-10 mobile:flex-col mobile:justify-center
          `}
          >
            <li>
              <a
                className="hover:text-coral-red transition duration-150 focus:text-coral-red mobile:text-white mobile:hover:text-coral-red"
                href="#home"
              >
                Início
              </a>
            </li>

            <li>
              <a
                className="hover:text-coral-red transition duration-150 focus:text-coral-red mobile:text-white mobile:hover:text-coral-red"
                href="#about"
              >
                Sobre
              </a>
            </li>

            <li>
              <a
                className="hover:text-coral-red transition duration-150 focus:text-coral-red mobile:text-white mobile:hover:text-coral-red"
                href="#app"
              >
                Nosso App
              </a>
            </li>

            <li>
              <a
                className="hover:text-coral-red transition duration-150 focus:text-coral-red mobile:text-white mobile:hover:text-coral-red"
                href="#team"
              >
                Nossa Equipe
              </a>
            </li>

            <li>
              <a
                className="hover:text-coral-red transition duration-150 focus:text-coral-red mobile:text-white mobile:hover:text-coral-red"
                href="#contacts"
              >
                Contactos
              </a>
            </li>

            <li>
              <button
                className="absolute left-[155px] bottom-20 hidden mobile:block"
                onClick={() => setOpenMenu(false)}
              >
                <img src={closeMenuIcon} alt="Fechar menu" />
              </button>
            </li>
          </ul>

          <ul>
            <li
              onClick={() => setOpenMenu(true)}
              className="mobile:flex flex-col items-center gap-2 hidden"
            >
              <div className="w-[40px] h-[4px] rounded-full bg-coral-red"></div>
              <div className="w-[40px] h-[4px] rounded-full bg-coral"></div>
              <div className="w-[40px] h-[4px] rounded-full bg-coral-red"></div>
            </li>
          </ul>
        </nav>
      </header>

      <section id="home" className="w-full relative flex justify-center">
        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 1,
            },
          }}
          className="absolute w-[140px] left-0 -top-12 mobile:hidden"
          src={coinBlur1}
          alt="Coin image"
        />

        <div className="flex w-full items-center justify-between px-[110px] mobile:px-[10px] tablet:60px">
          <div
            className="
            flex items-start flex-col gap-4
            mobile:flex-col mobile:items-center mobile:justify-center mobile:gap-10 mobile:mt-20
            tablet:flex-col tablet:items-center tablet:justify-center tablet:gap-5 tablet:mt-10
          "
          >
            <motion.h1
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 1,
                },
              }}
              className="
                text-5xl text-[#333]
                mobile:text-center tablet:text-center
              "
            >
              APRENDA COMO <span className=" text-coral-red">ECONOMIZAR</span>.
            </motion.h1>

            <motion.p
              initial={{ x: -200, opacity: 0.5 }}
              className="mobile:text-center tablet:text-center"
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 1,
                },
              }}
            >
              In any case, there is a direct relation between the fundamental
              problem and a huge improvement of the internal network. However,
              aspects of the corporate asset growth has the potential to improve
              or transform The Unification of Substantial Breach.
            </motion.p>

            <Button value="Começar" style="bg-coral-red mt-6" />
          </div>

          <motion.div
            initial={{ y: 400, opacity: 0.5 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 1,
              },
            }}
          >
            <img
              className="w-[90rem] mobile:hidden tablet:hidden"
              src={image02}
              alt="Benner Image"
            />
          </motion.div>
        </div>

        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
              delay: 1,
            },
          }}
          className="w-[220px] absolute right-0 -top-16 mobile:hidden tablet:w-[160px] tablet:top-32"
          src={coinBlur2}
          alt="Coin image"
        />
      </section>

      <section className="w-full px-[110px] mobile:px-[40px] mobile:pt-20 tablet:px-[60px] tablet:pt-20">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
              delay: 0.5,
            },
          }}
          className="
            w-full flex bg-seashell items-center rounded-[30px]
            mobile:flex-wrap mobile:justify-center
          "
        >
          <Goal
            title="VISÃO"
            description="Eventually, the arrangement of the criterion the conceptual design
              the high performance of The Notion of Factual Paradigm"
          />

          <div className="w-[8px] rounded-lg h-[100px] bg-[#C4C4C4] mobile:w-[80%] mobile:h-[2px]"></div>

          <Goal
            title="VALORES"
            description="Eventually, the arrangement of the criterion the conceptual design
              the high performance of The Notion of Factual Paradigm"
          />

          <Goal
            title="MISSÃO"
            style="bg-coral rounded-r-[30px] mobile:rounded-r-[0px] mobile:rounded-br-[30px] mobile:rounded-bl-[30px]"
            titleStyle="text-white"
            descStyle="text-white"
            description="Eventually, the arrangement of the criterion the conceptual design
              the high performance of The Notion of Factual Paradigm"
          />
        </motion.div>
      </section>

      <section
        id="about"
        className="w-full relative pt-[180px] px-[110px] mobile:px-[40px] tablet:px-[60px]"
      >
        <div className="flex items-center justify-between gap-[80px] mobile:flex-wrap tablet:flex-wrap tablet:justify-center">
          <motion.div
            initial={{ y: 200, opacity: 0.5 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
          >
            <img className="w-[400px]" src={image01} alt="Image" />
          </motion.div>

          <motion.div
            initial={{ x: 200, opacity: 0.5 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            className="flex items-start flex-col gap-3"
          >
            <h2 className="text-3xl max-w-[500px]">
              Conheça um pouco sobre a{" "}
              <span className="text-coral-red">Dimuka</span>{" "}
              <span className="text-coral">kitadi</span>
            </h2>

            <div className="flex flex-col gap-5">
              <p className="max-w-[600px]">
                Somos uma startup de Literacia Financeira, criada para apoiar
                com a causa do nosso Executivo, que visa impactar, e tornar
                próspera Economia Nacional, interligando os iniciantes e
                profissionais de carreira.
              </p>

              <p className="max-w-[400px]">
                Actuando na sociedade propriamente no seu desenvolvimento no
                sector da Economia e Ensino.
              </p>
            </div>

            <Button value="Começar" style="bg-coral-red mt-4" />
          </motion.div>

          <img
            className="absolute -bottom-32 right-0 w-[180px]"
            src={book}
            alt="Book Image"
          />
        </div>
      </section>

      <section className="w-full relative pt-[180px] px-[110px] mobile:px-[40px] tablet:px-[60px]">
        <div className="flex items-center justify-between flex-row-reverse gap-[80px] mobile:flex-wrap tablet:flex-wrap tablet:justify-center">
          <motion.div
            initial={{ y: 200, opacity: 0.5 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
          >
            <img className="w-[400px]" src={image01} alt="Image" />
          </motion.div>

          <motion.div
            initial={{ x: -200, opacity: 0.5 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            className="flex items-start flex-col gap-3"
          >
            <h2 className="text-3xl max-w-[200px]">
              Educação de <span className="text-coral">qualidade.</span>
            </h2>

            <div className="flex flex-col gap-5">
              <p className="max-w-[600px]">
                O acesso a uma educação de qualidade é um direito, a qualidade e
                a eficiência da oferta educativa tem merecido a atenção do
                Governo e seus principais parceiros.
              </p>

              <p className="max-w-[400px]">
                Segundo a UNICEF cerca de 22% das crianças em Angola ainda se
                encontram fora do sistema do ensino e 48% das crianças
                matriculadas não concluem o ensino primário.
              </p>
            </div>
          </motion.div>

          <img
            className="absolute -bottom-24 left-0 w-[140px] mobile:-bottom-52 tablet:-bottom-44"
            src={coinBlur1}
            alt="Book Image"
          />
        </div>
      </section>

      <section
        id="app"
        className="
          w-full relative pt-[180px] px-[110px] mobile:px-[40px] flex flex-col gap-32
          oldMobile:px-[20px]
          tablet:px-[60px]
        "
      >
        <motion.h2
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          }}
          className="text-center flex flex-col items-center text-xl"
        >
          Conheça o
          <span className="text-3xl">
            nosso <span className="text-bondi-blue">aplicativo</span>
          </span>
        </motion.h2>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          }}
          className="w-full flex relative items-center px-[60px] py-[120px] bg-coral-red rounded-l-[40px] rounded-ee-[377px] rounded-e-[40px]"
        >
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-3xl">
              Dimuka <span className="text-white">App.</span>
            </h2>

            <p className="text-white max-w-[400px] text-sm">
              O dimuka app é um aplicativo que tem por objetivo ser um local de
              aprendizado mais voltado na área de finanças, o que o difere de
              outros apps da mesma categória são as suas fuincionalidades, ele
              lhe proporciona um ambiente divertido e amigavel trazendo uma
              tematica de jogos dentro do app que auxiliam do seu aprendizado.
            </p>
          </div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 1,
              },
            }}
            className="absolute -bottom-[270px] right-0 mobile:hidden tablet:hidden"
          >
            <img className="w-[720px]" src={app} alt="Imagem do aplicativo" />
          </motion.div>
        </motion.div>

        <div>
          <img
            className="absolute top-[280px] right-0 w-[160px]"
            src={coinBlur3}
            alt="Imagem moeda."
          />
        </div>
      </section>

      <section
        id="team"
        className="
          w-full relative pt-[180px] px-[110px] flex flex-col gap-16
          mobile:px-[40px]
        "
      >
        <div className="flex flex-col gap-2">
          <motion.h2
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            className="text-center text-3xl"
          >
            Nossa <span className="text-coral-red">equipe.</span>
          </motion.h2>

          <motion.p
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            className="text-center"
          >
            Trabalhamos arduamente para trazer a melhor experiência para você.
          </motion.p>
        </div>

        <div className="flex items-center gap-10 px-[110px] justify-center flex-wrap">
          <Member memberImage={aziel} />

          <Member memberImage={crisvan} />

          <Member memberImage={aziel} />

          <Member memberImage={crisvan} />
        </div>

        <img
          className="absolute w-[200px] left-0 -top-4 mobile:-top-20"
          src={book2}
          alt="Book image"
        />
      </section>

      <section
        className="
        w-full relative pt-[180px] px-[110px] flex flex-col justify-center items-center gap-10
        mobile:px-[40px] tablet:px-[60px]
      "
      >
        <div className="flex flex-col gap-2">
          <motion.h2
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            className="text-center text-3xl"
          >
            Mantenha-se <span className="text-coral">informado.</span>
          </motion.h2>

          <motion.p
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            className="text-center"
          >
            Apartir do seu email mantemos-lhe informado de tudo que se passa.
          </motion.p>
        </div>

        <form
          action=""
          className="w-3/5 flex gap-3 items-center mobile:flex-col mobile:justify-center mobile:w-full"
          method="POST"
        >
          <input
            className="w-full bg-gray-100 py-4 px-6 rounded-[16px]"
            type="text"
            placeholder="Digite seu email"
          />
          <button className="py-4 px-8 bg-coral-red text-sm text-white rounded-ss-[28px] rounded-s-[42px] rounded-ee-[28px] rounded-e-[42px]">
            Assinar
          </button>
        </form>
      </section>

      <footer
        id="contacts"
        className="
          w-full bg-seashell rounded-t-[100px] relative mt-[160px] py-24 px-[110px] flex items-start gap-24
          mobile:px-[40px] mobile:flex-wrap
          tablet:px-[60px] tablet:flex-wrap
        "
      >
        <div className="flex flex-col gap-5">
          <div>
            <img className="w-[160px]" src={logotipo} alt="" />
          </div>

          <div>
            <p className="text-[#333] text-sm">
              Somos uma startup de Literacia Financeira, criada para apoiar com
              a causa do nosso Executivo, que visa impactar, e tornar próspera
              Economia Nacional, interligando os iniciantes e profissionais de
              carreira.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-xl">Contacte-nos</h2>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <img className="w-[20px]" src={phone} alt="" />
              <span className="text-sm text-[#333]">+244 912 930 551</span>
            </li>

            <li>
              <li className="flex items-center gap-2">
                <img className="w-[20px]" src={gmail} alt="" />
                <span className="text-sm text-[#333]">
                  dimuka.kitadi@gmail.com
                </span>
              </li>
            </li>

            <li className="flex items-center gap-2">
              <img className="w-[20px]" src={whatsapp} alt="" />
              <span className="text-sm text-[#333]">+244 912 930 551</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-xl">Redes Sociais</h2>

          <p className="text-sm text-[#333]">
            There is no doubt, that Benny Binder is the firs person who
            formulated that aspects of the deep analysis is regularly debated in
            the light of The Modification of Core Notion
          </p>

          <ul className="flex items-center gap-3">
            <li>
              <a href="/">
                <img className="w-[20px]" src={facebook} alt="facebook" />
              </a>
            </li>

            <li>
              <a href="/">
                <img className="w-[20px]" src={instagram} alt="instagram" />
              </a>
            </li>

            <li>
              <a href="/">
                <img className="w-[20px]" src={linkedin} alt="linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
