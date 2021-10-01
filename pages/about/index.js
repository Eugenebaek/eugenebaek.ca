export default function About() {

    const experiences = [
        {title: "Technology Co-op", company: "Symcor", date: "July 2021 - Feb 2021"},
        {title: "Automation Specialist", company: "Fidelity Canada", date: "Jan 2020 - May 2020"},
        {title: "Head Systems Administrator", company: "Seung Oh Ltd", date: "Sept 2017 - Dec 2020"}
    ]

    return (
        <main className='w-full sm:w-1/2'>
            <div className='mb-16 font-normal'>
                <h1>Eugene Baek</h1>
                <h2>Technology Co-op @ Symcor</h2>
                <h2>University of Waterloo/Computer Engineering Student</h2>
            </div>
            <div className='mb-16'>
                <p className='mb-4'>Eugene Baek is a 2nd year Computer Engineering student at the University of
                    Waterloo. His passions are in game development and machine learning. To pursue these passions, he
                    uses C++ to
                    create Neural Networks and work with SFML to render projects.</p>
                <p className='mb-4'>In his first year, Eugene had the opportunity to work at Fidelity Canada as an
                    Automation Specialist.
                    As part of the Quality Assurance team, he was tasked to write automation scripts in Groovy and Java
                    to
                    verify the functionality of various webpage components and database interactions.</p>
                <p>Some of Eugene's hobbies include Hockey, League of Legends, and Photography. He is currently a Silver
                    4
                    Katarina main.</p>
            </div>
            <div>
                <h2 className='mb-2 font-normal'>Work Experience</h2>
                {experiences.map((experience) => (
                    <p><span className='underline'>{experience.date}</span> {experience.title} @ {experience.company}
                    </p>
                ))}
            </div>
        </main>
    )
}