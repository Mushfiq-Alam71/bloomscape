import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = ({ from }) => {
    const { googleLogin, githubLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then(result => {
                if (result.user) {
                    navigate(from);
                    console.log(result.user);
                }
            })
    }

    return (
        <div className="flex flex-row justify-center gap-4">
            <button onClick={() => handleSocialLogin(googleLogin)} className="btn btn-outline rounded-2xl"><FaGoogle />Google</button>
            <button onClick={() => handleSocialLogin(githubLogin)} className="btn btn-outline rounded-2xl"><FaGithub />Github</button>
        </div>
    );
};

export default SocialLogin;