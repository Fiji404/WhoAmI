import { useTranslation } from 'react-i18next';

export const ContactMeForm = () => {
    const { t } = useTranslation();
    return (
        <form
            className="mt-10 flex justify-center flex-col gap-3 z-10 w-[90%] max-w-[500px]"
            action="https://formsubmit.io/send/fiji404.kontakt@gmail.com"
        >
            <input name="Full name" className="input" placeholder={t('Full name')!} type="text" />
            <input name="mail" className="input" placeholder="E-mail" type="text" required/>
            <textarea
                name="message"
                className="input min-h-[100px]"
                defaultValue={t("Hello 👋, I'm writing you because...")!}
            ></textarea>
            <input name="_redirect" type="hidden" id="name" value="" />
            <button className="input w-fit mx-auto px-10 text-[#979797] hover:text-white hover:border-[#313131] hover:bg-[#181818b2] transition-colors">
                {t('Send')}
            </button>
        </form>
    );
};
