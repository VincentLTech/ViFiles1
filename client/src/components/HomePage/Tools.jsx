import {useState} from 'react';

const Tools = () => {
    const [tools, setTools] = useState(['Javascript', 'Python', 'HTML', 'CSS', 'React.js', 'Express.js', 'Bootstrap', 'MongoDB', 'MySQL', 'Git', 'Github', 'Wordpress','Flask','Java','C++', 'PostgreSQL','Mongoose','Figma','API']);


    return (
        <section className='darkSection toolsSection'>
            <div className='toolsBox'>
                <h3>Languages & Tools</h3>
                <div className='toolsGrid'>
                    {
                        tools.map(tool => (
                            <div className="toolsPill">
                                <h6>{tool}</h6>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    );
}

export default Tools;
