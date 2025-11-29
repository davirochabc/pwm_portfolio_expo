
export const PROFILE = {
  name: "Davi Rocha",
  role: "Desenvolvedor Fullstack",
  description: "Treinando a nerdice, desenvolvendo aplicações com diversas tecnologias.",
  github: "https://github.com/davirochabc",
  linkedin: "https://linkedin.com/in/davirochabc", 
  avatar: require('../assets/images/meu_avatar.png'),
};

export const ABOUT = {
  description: "Sou um desenvolvedor apaixonado por tecnologia. Comecei minha jornada no desenvolvimento web e agora estou explorando o universo mobile com React Native. Gosto de criar interfaces limpas e funcionais.",
  
  appTechs: [
    "Expo Router (Navegação)",
    "React Native (Componentes Core)",
    "TypeScript (Tipagem)",
    "StyleSheet (Estilização)",
    "Expo Vector Icons (Ícones)",
    "Expo Linking (Links externos)"
  ]
};

export const ACADEMIC = [
  {
    id: '1',
    institution: "Universidade Católica de Pernambuco",
    course: "Ciência da Computação",
    period: "2022 - Cursando",
    description: "Foco em engenharia de software, algoritmos e desenvolvimento web."
  },
  {
    id: '2',
    institution: "Rocket",
    course: "Curso Completo de Java Springboot",
    period: "2024",
    description: "Especialização no ecosistema spring e no desenvolvimento de APIs Restful."
  }
];

export const PROFESSIONAL = [
  {
    id: '1',
    company: "ALEPE",
    role: "Auxiliar em desenvolvimento de sistemas",
    period: "2023 - Atualmente",
    description: "Desenvolvimento de landing pages e pequenos sistemas web para clientes locais."
  },
  
];

export const PROJECTS = [
  {
    id: '1',
    title: "Meu Primeiro Portfólio",
    description: "Versão Web deste portfólio criada inicialmente com HTML/CSS e depois migrada para React.",
    techs: ["HTML", "CSS", "TypeScript" , "JavaScript" , "React"],
    link: "https://github.com/davirochabc/meu-portfolio"
  },
  {
    id: '2',
    title: "My-Anime-Review",
    description: "App de catálogo e avaliador de animes",
    techs: ["React", "JavaScript", "TypeScript"],
    link: "https://github.com/PWMHunters/ProjetoWEB01.git"
  },
  {
    id: '3',
    title: "AdotePet",
    description: "Projeto realizado para adoção de cachorros, realizado em grupo.",
    techs: ["React-Nativ", "Expo" , "TypeScript"],
    link: "https://github.com/PWMHunters/pwm-expo-project.git" 
  }
];