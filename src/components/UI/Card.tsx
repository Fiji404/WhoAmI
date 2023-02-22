interface Props {
    children: React.ReactNode;
}

export const Card = ({ children }: Props) => {
    <div className="bg-secondary border border-[#1d1d1d] p-4 rounded-[3px]">{children}</div>;
};
