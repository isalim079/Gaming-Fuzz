const Footer = () => {
    return (
        <div>
            <footer className="footer p-5 md:p-10 bg-red-700 text-neutral-content pl-24 md:pl-20 mt-14 md:mt-36 md:flex md:justify-between md:px-48">
                <nav className="">
                <h1 className="font-orbitron text-2xl font-semibold text-gray-200">
                        GAMING
                    </h1>
                    <h2 className="font-orbitron text-2xl font-semibold text-gray-400">
                        FUZZ
                    </h2>
                </nav>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Boosting</a>
                    <a className="link link-hover">Coaching</a>
                    <a className="link link-hover">Hosting</a>
                    <a className="link link-hover">Game Currency</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Game Jobs</a>
                    <a className="link link-hover">Opportunity</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
