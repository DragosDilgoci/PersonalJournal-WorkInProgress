import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">

            <img
                className="absolute inset-0 h-full w-full object-cover z-0"
                src="https://www.pixelstalk.net/wp-content/uploads/2016/10/Justice-in-funding-mission-pre-conference-registra.jpg"
                alt="Background"
            />

            <div className="relative z-10 flex flex-col items-center">
                <Link href="/">
                    <ApplicationLogo className="w-64 h-auto mb-4" />
                </Link>
            </div>

            <div className="relative text-customPurple z-10 w-full sm:max-w-md px-6 py-4 bg-transparent border-2 border-customLightblue drop-shadow-image shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
