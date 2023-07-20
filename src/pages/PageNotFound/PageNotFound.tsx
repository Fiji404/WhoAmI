import { ParticlesBg } from '@/components';
import { Link } from 'wouter';

export const PageNotFound = () => {
    return (
        <>
            <ParticlesBg />
            <main className="min-h-screen flex items-center justify-center flex-col text-center">
                <h1 className="font-heading text-6xl text-white">
                    Oops <span className="text-red-600">404</span> error
                </h1>
                <p className="mt-3 text-2xl text-white">Sorry, this page doesn't exist</p>
                <Link
                    href="/"
                    className="border border-accent px-2 py-1 rounded-[3px] bg-[#141414f1] hover:bg-[#1a1a1ade] mt-5 text-xl text-white transition-colors"
                >
                    Go to home page
                </Link>
            </main>
        </>
    );
};
