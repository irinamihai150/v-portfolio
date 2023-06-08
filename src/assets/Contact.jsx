import { FaGithub, FaLinkedin } from "react-icons/fa"

function Contact() {
	return (
		<div>
			<section id='contact'>
				<h2 className='text-5xl text-center mb-5 mt-4 hover:text-white'>
					CONTACT ME{" "}
				</h2>
				<div className='flex items-center justify-center mb-12'>
					<a href='https://github.com/irinamihai150' rel='noopener noreferrer'>
						<FaGithub className='text-yellow-400 w-40 h-10' />
					</a>

					<a
						href='https://www.linkedin.com/in/irinamih/'
						rel='noopener noreferrer'
					>
						<FaLinkedin className='text-yellow-400 w-40 h-10' />
					</a>
				</div>
			</section>
		</div>
	)
}
export default Contact
