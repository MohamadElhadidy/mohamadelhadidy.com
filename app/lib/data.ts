interface Project {
    id: number;
    image: string;
    title: string;
    description: string;
    URL: string;
    GitHub: string;
    Behance: string;
    Dribble: string;
  }

export const projectsData : Project[] = [
    {
        id: 1,
        image: '/project.png',
        title: 'FoodSure Website UI',
        description: 'A clean and intuitive UI design for a fast food delivery platform. Focused on enhancing user experience through simple navigation, quick checkout, and mobile responsiveness. Designed to make ordering food fast, fun, and frustration-free.',
        URL: 'https://mohamadelhadidy.com/',
        GitHub: 'https://github.com/MohamadElhadidy',
        Behance: 'https://www.behance.net/mohamadelhadidy98',
        Dribble: 'https://dribbble.com/MohamadElhadidy',
    }

]
