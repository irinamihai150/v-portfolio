import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaReact,
	FaNodeJs,
	FaDatabase,
	FaGit,
	FaGithub,
	FaBootstrap,
} from "react-icons/fa"

function Project() {
	return (
		<div>
			{/* Projects section */}
			<section id='projects'>
				<h2 className='text-5xl text-center mb-4 hover:text-white'>
					MY PROJECTS
				</h2>

				<div className='grid grid-cols-3 gap-5 mx-6 my-6 max-sm:flex flex-col'>
					<div className=' border-4 bg-white border-black p-4 rounded-2xl mx-10'>
						<h3 className='text-center text-3xl mb-3 hover:text-purple-600'>
							Knowledge Checklist
						</h3>
						<p className='text-2xl '>
							As part of our graduation requirements at Code your Future, our
							team of 4 followed Agile development principles to create an
							application that allows students to track their progress in a
							knowledge checklist throughout the course. Our project involved
							using a variety of skills.
						</p>
						<span className='tech-stack text-1xl'>
							Technology stack:
							<p>
								<FaReact className='w-12 h-12 m-1 text-yellow-300' />
								<FaHtml5 className='w-12 h-12 m-1 text-yellow-300' />
								<FaCss3Alt className='w-12 h-12 m-1 text-yellow-300' />
								<FaJs className='w-12 h-12 m-1 text-yellow-300' />
								<FaReact className='w-12 h-12 m-1 text-yellow-300' />
								<FaNodeJs className='w-12 h-12 m-1 text-yellow-300' />
								<FaDatabase className='w-12 h-12 m-1 text-yellow-300' />
								<FaGit className='w-12 h-12 m-1 text-yellow-300' />
								<FaGithub className='w-12 h-12 m-1 text-yellow-300' />
								<FaBootstrap className='w-12 h-12 m-1 text-yellow-300' />
							</p>
						</span>
						<button
							className='bg-white w-60 h-14 rounded-md text-center flex justify-center items-center mx-auto mb-12 p-2  mt-3
'
						>
							<a
								href='https://starter-kit-v4nu.onrender.com/'
								className='hover:text-purple-600'
							>
								View Project
							</a>
						</button>
					</div>
					<div className=' border-4 bg-white border-black p-4 rounded-2xl mx-10'>
						<h3 className='text-center text-3xl mb-3  hover:text-purple-600'>
							City Mini Guide
						</h3>
						<p className='text-2xl pb-3'>
							A city mini guide project involving creating a concise and
							informative guide to a specific city. The guide provides essential
							information about the city, such as its Colleges, Pharmacies,
							Hospitals,Doctors.
						</p>
						<span className='tech-stack'>
							Technology stack:
							<p>
								<FaReact className='w-12 h-12 m-1 text-yellow-300' />
								<FaHtml5 className='w-12 h-12 m-1 text-yellow-300' />
								<FaCss3Alt className='w-12 h-12 m-1 text-yellow-300' />
								<FaJs className='w-12 h-12 m-1 text-yellow-300' />
								<FaReact className='w-12 h-12 m-1 text-yellow-300' />
								<FaNodeJs className='w-12 h-12 m-1 text-yellow-300' />
								<FaGit className='w-12 h-12 m-1 text-yellow-300' />
								<FaGithub className='w-12 h-12 m-1 text-yellow-300' />
								<FaBootstrap className='w-12 h-12 m-1 text-yellow-300' />
							</p>
						</span>
						<button
							className='bg-white w-60 h-14 rounded-md text-center flex justify-center items-center mx-auto mb-12 p-2
'
						>
							<a
								href='https://london-guide-react.netlify.app/'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:text-purple-600'
							>
								View Project
							</a>
						</button>
					</div>
					<div className=' border-4 bg-white border-black p-4 rounded-2xl mx-10 '>
						<h3 className='text-center text-3xl mb-3 hover:text-purple-600'>
							Hotel App
						</h3>
						<p className='text-2xl'>
							This is an individually project made as a coursework for the boot
							camp.
						</p>
						<span className='tech-stack'>
							Technology stack:
							<p>
								<FaReact className='w-12 h-12 m-1 text-yellow-300' />
								<FaHtml5 className='w-12 h-12 m-1 text-yellow-300' />
								<FaCss3Alt className='w-12 h-12 m-1 text-yellow-300' />
								<FaJs className='w-12 h-12 m-1 text-yellow-300' />
								<FaReact className='w-12 h-12 m-1 text-yellow-300' />
								<FaGithub className='w-12 h-12 m-1 text-yellow-300' />
								<FaBootstrap className='w-12 h-12 m-1 text-yellow-300' />
							</p>
						</span>
						<button
							className='bg-white w-60 h-16 rounded-md text-center flex justify-center items-center mx-auto mb-12 p-2
'
						>
							<a
								href='https://hotel-react-m.netlify.app/'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:text-purple-600'
							>
								View Project
							</a>
						</button>
					</div>
					<div className='border-4  bg-white border-black p-4  rounded-2xl mx-10 '>
						<h3 className='text-center text-3xl mb-3 hover:text-purple-600'>
							Quotes App
						</h3>
						<p className='text-2xl'>
							This project was created as a coursework and it displays random
							quotes. An API was utilized in the implementation of this project.
						</p>
						<span className='tech-stack'>
							Technology stack:
							<p>
								<FaReact className='w-12 h-12 m-1 text-yellow-300' />
								<FaHtml5 className='w-12 h-12 m-1 text-yellow-300' />
								<FaCss3Alt className='w-12 h-12 m-1 text-yellow-300' />
								<FaJs className='w-12 h-12 m-1 text-yellow-300' />
								<FaReact className='w-12 h-12 m-1 text-yellow-300' />
								<FaNodeJs className='w-12 h-12 m-1 text-yellow-300' />
								<FaGithub className='w-12 h-12 m-1 text-yellow-300' />
								<FaBootstrap className='w-12 h-12 m-1 text-yellow-300' />
							</p>
						</span>
						<button
							className='bg-white w-60 h-14 rounded-md text-center flex justify-center items-center mx-auto mb-12 p-2
'
						>
							<a
								href='https://hotel-react-m.netlify.app/'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:text-purple-600'
							>
								View Project
							</a>
						</button>
					</div>
					<div className=' border-4 bg-white border-black p-4 rounded-2xl mx-10'>
						<h3 className='text-center text-3xl mb-3 hover:text-purple-600'>
							Css challenge
						</h3>
						<p className='text-2xl'>
							This is a project that I completed to improve my CSS skills as
							part of an additional coursework.
						</p>
						<span className='tech-stack'>
							Technology stack:
							<p>
								<FaReact className='w-12 h-12 m-1 text-yellow-300' />
								<FaHtml5 className='w-12 h-12 m-1 text-yellow-300' />
								<FaCss3Alt className='w-12 h-12 m-1 text-yellow-300' />
								<FaGithub className='w-12 h-12 m-1 text-yellow-300' />
								<FaBootstrap className='w-12 h-12 m-1 text-yellow-300' />
							</p>
						</span>
						<button
							className='bg-white w-60 h-14 rounded-md text-center flex justify-center items-center mx-auto mb-12 p-2
'
						>
							<a
								href='https://job-listing-i-m.netlify.app/'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:text-purple-600'
							>
								View Project
							</a>
						</button>
					</div>
					<div className=' bg-white border-4 border-black p-4 rounded-2xl mx-10'>
						<h3 className='text-center text-3xl mb-3 hover:text-purple-600'>
							Front end Mentor Challenge
						</h3>
						<p className='text-2xl'>
							I undertook this individual challenge with the aim of improving my
							HTML and CSS skills.
						</p>
						<span className='tech-stack'>
							Technology stack:
							<p>
								<FaHtml5 className='w-12 h-12 m-1 text-yellow-300' />
								<FaCss3Alt className='w-12 h-12 m-1 text-yellow-300' />
								<FaGithub className='w-12 h-12 m-1 text-yellow-300' />
							</p>
						</span>
						<button
							className='w-60 h-14 rounded-md text-center flex justify-center items-center mx-auto mb-12 p-2
'
						>
							<a
								href='https://frontendchalenge.netlify.app/'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:text-purple-600'
							>
								View Project
							</a>
						</button>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Project
