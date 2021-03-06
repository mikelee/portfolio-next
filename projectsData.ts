interface Project {
    id: number,
    name: string,
    description: string,
    image: string,
    url: string
}

const projects: Project[] = [
    {
        id: 1,
        name: 'Gravity Simulator',
        description: 'Create planets and watch how their gravitational forces influence each other\'s orbits.',
        image: '/gravity-simulator-image.png',
        url: 'https://gravitysimulator.herokuapp.com/'
    },
    {
        id: 2,
        name: 'Daily Achievements',
        description: 'A to-do list app with a twist. To-dos are linked to rewards. When all the required to-dos are completed, the reward is unlocked.',
        image: '/daily-achievements-image.png',
        url: 'https://dailyachievements.herokuapp.com/'
    },
    {
        id: 3,
        name: 'Mind Right',
        description: 'Keep a postive mindset and stay focused on what matters. Add quotes with a background image. Simply click shuffle when you need a reminder and one of your quotes will appear.',
        image: '/mind-right-image.png',
        url: 'https://mind-right-react.herokuapp.com/'
    },
    {
        id: 4,
        name: 'Sample business',
        description: 'Take a look at what your business\'s presence on the web could look like. Complete with SEO.',
        image: '/sample-business-image.png',
        url: 'https://sample-business.vercel.app/'
    }
];

export default projects;