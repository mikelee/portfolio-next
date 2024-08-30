export interface Project {
    id: number,
    name: string,
    description: string,
    imageLandscape: string,
    imagePortrait: string,
    video: string,
    url: string
}

const projects: Project[] = [
    {
        id: 1,
        name: 'Gravity Simulator',
        description: 'Create planets and watch how their gravitational forces influence each other\'s orbits.',
        imageLandscape: '/gravity-simulator-landscape.webp',
        imagePortrait: '/gravity-simulator-portrait.png',
        video: '/gravity-simulator-video.mp4',
        url: 'https://gravitysimulator.onrender.com/'
    },
    {
        id: 2,
        name: 'Rewarded',
        description: 'A to-do list app with a twist. To-dos are linked to rewards. When all the required to-dos are completed, the reward is unlocked.',
        imageLandscape: '/rewarded-landscape.webp',
        imagePortrait: '/rewarded-portrait.png',
        video: '/rewarded-video.mp4',
        url: 'https://rewarded.dev/'
    },
    {
        id: 3,
        name: 'Mind Right',
        description: 'Keep a postive mindset and stay focused on what matters. Add quotes with a background image. Simply click shuffle when you need a reminder and one of your quotes will appear.',
        imageLandscape: '/mindright-landscape.webp',
        imagePortrait: '/mind-right-portrait.png',
        video: '/mind-right-video.mp4',
        url: 'https://mindright.onrender.com/'
    },
    {
        id: 4,
        name: 'Evolution Simulator',
        description: 'See evolution in action, where only the fittest survive. Watch how creatures\' DNA evolves over time.',
        imageLandscape: '',
        imagePortrait: '',
        video: '/evolution-simulator-video.mp4',
        url: 'https://github.com/mikelee/evolution-simulator'
    }
];

export default projects;