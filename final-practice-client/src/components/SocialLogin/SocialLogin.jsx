import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                photo: result.user?.photoURL,
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }
    return (
        <div className="px-8 pb-2">
            <div className="divider"></div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-sm mr-4">Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;