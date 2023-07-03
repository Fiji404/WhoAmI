import { SectionHeading } from '@components/UI/SectionHeading';
import { useTranslation } from 'react-i18next';
import { WelcomeHeaderArrow } from './WelcomeHeaderArrow/WelcomeHeaderArrow';
import { WelcomeHeaderAvatar } from './WelcomeHeaderAvatar/WelcomeHeaderAvatar';

export const WelcomeHeader = () => {
    const { t } = useTranslation();

    return (
        <>
            <section className="max-w-[85%] h-[95vh] mx-auto">
                <div className="flex flex-col items-center justify-center h-full py-7">
                    <div className="flex justify-between flex-wrap w-full items-center h-full md:justify-center">
                        <SectionHeading
                            styles="heading"
                            text={t("I'm a thriving frontend developer")}
                        />
                        <WelcomeHeaderAvatar />
                    </div>
                    <WelcomeHeaderArrow />
                </div>
            </section>
        </>
    );
};
