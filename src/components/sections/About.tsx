import { Separator } from "@/components/ui/separator";
import Badge from "@/components/Badge";

import { TextGenerateEffect } from "../ui/text-generate";

export default function About() {
  return (
    <section id="about" className="w-full col-span-12 relative mb-44">
      <h2 className="md:text-5xl text-3xl text-white font-bold  text-secondary">
        <span className="text-secondary"># </span>Sobre
      </h2>
      <div className="flex flex-col md:grid lg:grid-rows-1 lg:grid-cols-2 gap-20  ">
        <div className="">
          <TextGenerateEffect
            words={`
             Considero o desenvolvimento de sistemas uma paixão. Durante minha
            graduação em Gestão da Tecnologia da Informação, por incentivo de
            colegas e professores iniciei meus estudos no mundo do desenvolvimento
            web. Apartir dai mergulhei de cabeça nos mais variados assuntos da área,
            me tornando um desenvolvedor Full Stack. \n 
            Possuo um grande interesse em práticas que fomentem a qualidade dos
            sistemas, como testes automatizados, Clean Architecture, monitoramento e
            observabilidade. Durante minha carreira, tive a oportunidade de
            trabalhar em diversos projetos academicos e profissionais, o que me
            permitiu refinar minhas habilidades como desenvolvedor.
            `}
          />

          <Separator className="bg-[#39393962] my-8 rounded" />
          <h3 className="text-3xl text-white font-bold mb-6"><span className="text-secondary">## </span>Tech Stack</h3>
          <div
            className="flex justify-between md:justify-stretch flex-row gap-4 flex-wrap"
          >
            <Badge>Typescript</Badge>
            <Badge>React</Badge>
            <Badge>NextJS</Badge>
            <Badge>Tailwind</Badge>
            <Badge>NodeJS</Badge>
            <Badge>Docker</Badge>
            <Badge>Express</Badge>
            <Badge>MySQL</Badge>
            <Badge>MongoDB</Badge>
          </div>
        </div>

        <div className="">
          <img
            height={400}
            width={400}
            style={{
              borderRadius: '50%',
              margin: "0 auto"
            }}
            src="/images/foto-perfil.jpg"
            alt="foto de perfil"
          />
        </div>
      </div>
    </section>

  )
}
