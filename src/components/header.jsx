import { Container } from '../components/container';
import Register from '../components/register';
import { Image } from 'astro:assets';
import Logo from '../images/wug-logo.png';

export default function Header(props) {
    return (
        <header className="relative z-50 flex-none lg:pt-11 pb-8">
            <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
                <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
                    <img src={Logo.src} width="175" />
                </div>
                <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-primary sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
                    <div className="mx-auto flex items-center gap-4 px-4">
                        <p>Septemeber 20th & 21st - </p>
                        <p>Live Broadcast</p>
                    </div>
                </div>
                <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
                    <Register />
                </div>
            </Container>
        </header>
    );
}
