

const Footer = () => {


    return (
        <footer className="footer p-10 bg-base-200 text-base-content bg-gradient-to-r from-[#6bc6d1] to-[#42cabd]">
            <aside className="flex flex-col">
                <img src={`/images/icon.png`} alt="" />
                <p className="text-3xl font-bold text-black">bloomscape Industries Ltd.</p>
                <p className="text-3xl font-bold text-black">Providing reliable tech since 2024</p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover text-base">Branding</a>
                <a className="link link-hover text-base">Design</a>
                <a className="link link-hover text-base">Marketing</a>
                <a className="link link-hover text-base">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover text-base">About us</a>
                <a className="link link-hover text-base">Contact</a>
                <a className="link link-hover text-base">Jobs</a>
                <a className="link link-hover text-base">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover text-base">Terms of use</a>
                <a className="link link-hover text-base">Privacy policy</a>
                <a className="link link-hover text-base">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;
