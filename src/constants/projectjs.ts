export type Project = {
    name: string,
    description: string,
    stack: string[],
    link: string;
    thumbnail: string;
}

export const projects: Project[] = [
    {
        name: 'VITALFLOW',
        description: `
            O VITALFLOW é um sistema de gestão que digitaliza os dados de pessoas idosas e com deficiência.
            Esse sistema foi inicialmente desenvolvido pra a Secretaria da Pessoa com Deficiência e do Idoso
            da cidade de São Sebastião. Dentre suas funcionalidades estão a gestão de prontuários, usuários e logs e
            emissão de relatórios analiticos. Com sua utilização as organizações podem otimizar seus processos através
            de um sistema amigável e intuitiva, imprimindo uma maior eficiência operacional.
        `,
        stack: ['next', 'node', 'docker', 'redis', 'postgreSQL', 'cloudflare R2'],
        link: '/sepedi',
        thumbnail: 'https://embed.so/video/2e9b9af3-3154-4735-9cef-db2026d29d00'
    },
    {
        name: 'CAMPUSFLOW',
        description: `
            O CAMPUSLFOW é um sistema modular que busca centralizar e otimizar os processos de gestão academica.
            Desenvolvido de maneira modular, o sistema conta com funcionalidades de avaliação institucional, que permite
            os alunos a avaliarem os professores e aspéctos gerais de sua instituição. Além disso o sistema contará com um módulo 
            para gestão de contratos, que enviará alertas sobre vencimentos e renovações de contratos, controle de carga horária e outros.
            Atualmente o CAMPUSFLOW é utilizado pela Faculdade de Tecnologia de São Sebastião.
        `,
        stack: ['next', 'node', 'docker', 'redis', 'postgreSQL', 'microservices'],
        link: '/sepedi',
        thumbnail: 'https://embed.so/video/d93c7ef7-cde7-4db3-bac9-326e74920223'
    },
    // {
    //     name: 'TREINAEAD',
    //     description: 'Lorem consequat officia pariatur officia cillum commodo do sint nostrud duis nisi. Anim labore labore deserunt nulla nulla excepteur mollit excepteur aliqua. Magna culpa nisi commodo irure reprehenderit tempor commodo eu.',
    //     stack: ['react', 'node', 'docker', 'postgreSQL', 'cloudflare R2'],
    //     link: '/sepedi',
    //     thumbnail: '/demos/sepedi.mp4'
    // },
    // {
    //     name: 'CAMPUSFLOW',
    //     description: 'Lorem consequat officia pariatur officia cillum commodo do sint nostrud duis nisi. Anim labore labore deserunt nulla nulla excepteur mollit excepteur aliqua. Magna culpa nisi commodo irure reprehenderit tempor commodo eu.',
    //     stack: ['next', 'node', 'docker', 'redis', 'postgreSQL', 'cloudflare R2'],
    //     link: '/sepedi',
    //     thumbnail: '/demos/sepedi.mp4'
    // },
]