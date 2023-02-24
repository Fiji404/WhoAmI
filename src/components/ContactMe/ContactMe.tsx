import { SectionHeading } from '../UI/SectionHeading';
import { ContactMeForm } from './ContactMeForm';
import { ContactMeSocials } from './ContactMeSocials';

export const ContactMe = () => {
    return (
        <section className="mt-20 container">
            <header>
                <SectionHeading text="Contact Me" />
            </header>
            <div className='flex justify-center'>
                <ContactMeForm />
            </div>
            <p className='mt-4 text-center text-[#757575]'>OR</p>
            <ContactMeSocials />
        </section>
    );
};
