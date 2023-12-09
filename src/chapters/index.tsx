import Chapter00 from "./00.tsx"
import Chapter01 from "./01.tsx"
import Chapter02 from "./02.tsx"
import Chapter03 from "./03.tsx"
import Chapter04 from "./04.tsx"
import Chapter05 from "./05.tsx"

const Chapters = () => {
	return (
		<>
			<h1 className="bg-red-900 py-2 text-center text-4xl font-bold text-white">
				Chapter 0 - Init
			</h1>
			<Chapter00 />
			<h1 className="bg-red-900 py-2 text-center text-4xl font-bold text-white">
				Chapter 1 - Create useTheme hook
			</h1>
			<Chapter01 />
			<h1 className="bg-red-900 py-2 text-center text-4xl font-bold text-white">
				Chapter 2 - Create ThemeToggle componenet and bring into Navbar. Also,
				update all Navbar styles with dark mode. Make sure dark mode is enabled
				in tailwind config.
			</h1>
			<Chapter02 />
			<h1 className="bg-red-900 py-2 text-center text-4xl font-bold text-white">
				Chapter 3 - Add dark mode clases to Layout, Container, and Section
				components
			</h1>
			<Chapter03 />
			<h1 className="bg-red-900 py-2 text-center text-4xl font-bold text-white">
				Chapter 4 - Update Button component to accept dark mode color props, and
				update all Button examples with the new props
			</h1>
			<Chapter04 />
			<h1 className="bg-red-900 py-2 text-center text-4xl font-bold text-white">
				Chapter 5 - Add dark mode classes to Card and Input components
			</h1>
			<Chapter05 />
		</>
	)
}

export default Chapters
