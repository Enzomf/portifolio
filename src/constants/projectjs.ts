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
            The integrated system was developed to digitize the records of elderly 
            and disabled individuals, initially for the Department of Elderly and Disabled 
            Persons (SEPEDI) in São Sebastião. It features functionalities for managing 
            records and users, and generating analytical reports, significantly enhancing 
            operational efficiency and effectiveness. The digital solution aims to streamline 
            processes, improve data access and accuracy, and reduce the reliance on physical 
            spaces and paper, ultimately benefiting healthcare professionals, social workers, 
            and service beneficiaries through an intuitive and decentralized information access platform.
        `,
        stack: ['next', 'node', 'docker', 'redis', 'postgreSQL', 'cloudflare R2'],
        link: '/sepedi',
        thumbnail: 'https://embed.so/video/2e9b9af3-3154-4735-9cef-db2026d29d00'
    },
    {
        name: 'CAMPUSFLOW',
        description: `
        The CAMPUSFLOW system is designed to provide a unified platform for the 
        integrated management of various university departments and processes. 
        It includes core functionalities such as course information management, 
        user authentication, and role-based access control. The system allows 
        students to evaluate faculty and campus infrastructure, enabling them 
        to provide feedback on technical competence, teaching quality, and facility 
        standards. Faculty members can perform self-assessments and track their progress, 
        while coordinators offer insights into faculty performance. Additionally, 
        the system manages faculty contracts, ensuring comprehensive and streamlined administrative operations.
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