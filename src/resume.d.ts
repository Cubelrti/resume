interface Study {
    name: string;
    time: string;
    description: string;
    school: string;
    status: string;
}

interface Language {
    title: string;
    score: string;
    portion: number;
}

interface Project {
    title: string;
    technique: string;
    description: string[];
    image: string;
    time: string;
    feature: string;
}
interface Contact {
    type: string;
    content: string;
}

interface Resume {
    name: string;
    description: string;
    study: Study;
    language: Language[];
    language_ability: string[];
    project: Project[];
    contact: Contact[];
}

declare module '*.json' {
    const data: Resume;
    export default data;
  }
