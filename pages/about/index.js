export default function About() {

    const experiences = ["Fidelity Canada - Automation Specialist", "Symcor - Technology Co-op"]
    const experienceList = experiences.map((experience) => <p>{experience}</p>)

    return (
        <main className='w-1/2'>
            <div className='mb-10'>
                <h1>Eugene Baek</h1>
                <h2>Technology Co-op @ Symcor</h2>
                <h2>University of Waterloo/Computer Engineering Student</h2>
            </div>
            <div>
                <p>Eugene Baek is a 2nd year Computer Engineering student at the University of Waterloo. </p>
                <p>His passions are in game development and machine learning. To pursue these passions, he uses C++ to
                    create Neural Networks and work with SFML to render projects.</p>
                <p>In his first year, Eugene had the opportunity to work at Fidelity Canada as an Automation Specialist.
                    As
                    part of the Quality Assurance team, he was tasked to write automation scripts in Groovy and Java to
                    verify the functionality of various webpage components and database interactions.</p>
                <p>Some of Eugene's hobbies include Hockey, League of Legends, and Photography. He is currently a Silver
                    4
                    Katarina main.</p>
            </div>


            <div>
                <h2>Work Experience</h2>
                {experienceList}
            </div>
        </main>
    )
}