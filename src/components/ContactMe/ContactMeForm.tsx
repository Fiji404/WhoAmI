export const ContactMeForm = () => {
    return <form className="mt-10 flex justify-center flex-col gap-3 grow max-w-[500px]" action="">
        <input className="input" placeholder="Full name" type="text" />
        <input className="input" placeholder="E-mail" type="text" />
        <textarea className="input min-h-[100px]">Hello 👋, I'm writing you because...</textarea>
        <button className="input w-fit mx-auto px-10 text-[#979797] hover:text-white hover:border-[#313131] hover:bg-[#181818b2] transition-colors">Send</button>
    </form>
}       