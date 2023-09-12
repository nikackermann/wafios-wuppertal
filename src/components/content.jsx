import { Container } from '../components/container';

export default function Content(props) {
    return (
        <Container className="text-center">
            <div>
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Wuppertal Fastener Days
                </h1>
                <small class="text-2xl ml-2 font-semibold text-gray-500 dark:text-gray-400">
                    100 YEARS FUTURE COLD FORMING TECHNOLOGY
                </small>
            </div>
            <div className="mb-4 lg:mb-12 sm:flex sm:justify-center mt-12">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Experience innovative forming technology with the following
                    machines live in operation
                </div>
            </div>
        </Container>
    );
}
