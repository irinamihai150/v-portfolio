function About() {
	return (
		<div>
			{/* home section */}
			<section
				id='home'
				className='flex flex-col justify-center items-center h-screen'
			>
				<p className='text-8xl pb-3'>Hey, I'm IRINA</p>
				<p className='text-6xl pb-3'>I'm a Junior Full-stack Developer</p>
				<span className='text-4xl pb-4 inline-block mx-1'>
					Front-End: React Html5 Css3 Javascript Bootstrap
				</span>
				<span className='text-4xl inline-block mx-4 '>
					Back-End: Node.js Express.js PostgresSql
				</span>
			</section>

			{/* about section */}
			<section id='about' className='mx-5 my-20 flex flex-col sm:flex-row'>
				<div className='w-full sm:w-1/2 pr-4'>
					<h2 className='text-5xl text-center'>ABOUT ME</h2>
					<p className='p-4 text-right text-3xl sm:text-left mx-10'>
						Hello! As a recent graduate of a software training program, I am
						thrilled to embark on my journey as a software developer and put
						into practice the skills and knowledge I have acquired through my
						intensive training. Throughout the program, I have gained
						proficiency in various programming languages, including Javascript,
						and have honed my expertise in both front-end and back-end web
						development. One of the most valuable aspects of the training was
						the opportunity to work on real-world projects, both independently
						and as part of a team. This experience has helped me cultivate
						strong collaboration skills, which I consider essential in the
						software development industry. I am enthusiastic about contributing
						to the technology sector and remain dedicated to continuous learning
						and exploration of new technologies to enhance my skill set and stay
						abreast of industry trends. Thank you for taking the time to read my
						introduction, and I eagerly look forward to further discussing
						potential opportunities
					</p>
				</div>
				<div className='w-full sm:w-1/2 mt-5 sm:mt-0'>
					<img
						className='rounded-full w-full h-80 sm:h-80 object-cover mx-auto'
						src='https://images.unsplash.com/photo-1600818797017-d6e5027210bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
						alt='a cup of coffee and a book'
					/>
				</div>
			</section>
		</div>
	)
}

export default About
