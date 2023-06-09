// import React from 'react';
const munchiesRev = require('../images/Customer_Review.png')
const recipeShare = require('../images/recipes_share.jpg')
const githubIcon = require('../images/github.png')
const websiteIcon = require('../images/website.png')
const projectClub = require('../images/Project Club.jpg')

const Projects = () => {
    return (
        <section className='projectsSection' id='projects' >
            <div className='projectsBox'>
                <h3 className='siteTitles siteHeadings'>Projects</h3>
                <div className="projectsContainer">
                    <div className="projectCard">
                        <img src={projectClub} alt="club project image" />
                        <div className='projectInfo'>
                            <h4>Project Builder Site</h4>
                            <p>A full stack Web application that allows people to plan and share their project ideas with the world.</p>
                            <div className="projectsTech">
                                <h6>Flask | Python | MySQL</h6>
                                <div className='projectIcons'>
                                    <img src={githubIcon} onClick={() => window.open('https://github.com/GalacticKnight/Project-Builder')} alt="web icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projectCard">
                        <img src={munchiesRev} alt="taquiza project image" />
                        <div className='projectInfo'>
                            <h4>MunchiesRev</h4>
                            <p>A yelp-inspired restaurant review app that allows users to view, post, and share reviews on restaurants.</p>
                            <div className="projectsTech">
                                <h6>MongoDB | Express.js | React.js | Node.js</h6>
                                <div className='projectIcons'>
                                    <img src={githubIcon} onClick={() => window.open('https://github.com/DannyIGuesss/MunchiesRev-Group-Project')} alt="github icon" />
                                    <img src={websiteIcon} onClick={() => window.open('http://18.224.16.169/')} alt="github icon" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="projectCard">
                        <img src={recipeShare} alt="taquiza project image" />
                        <div className='projectInfo'>
                            <h4>Recipe Share</h4>
                            <p className='text-center'>Recipe sharing application</p>
                            <div className="projectsTech">
                                <h6>Python | Flask | MySQL</h6>
                                <div className='projectIcons'>
                                    <img src={githubIcon} onClick={() => window.open('https://github.com/GalacticKnight/Recipe')} alt="github icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
