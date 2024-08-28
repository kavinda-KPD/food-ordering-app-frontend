import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"

export default function AuthCallbackPage() {

    const hasCreatedUser = useRef(false);

    const navigate = useNavigate();
    const { user } = useAuth0();

    const { createUser } = useCreateMyUser() || {};
    if (!createUser) {
        throw new Error('Unable to initialize Auth0 provider')
    }

    useEffect(() => {
        if (user?.sub && user?.email && !hasCreatedUser.current) {
            createUser({
                auth0Id: user.sub,
                email: user.email
            })
            hasCreatedUser.current = true;
        }

        navigate('/');
    }, [createUser, navigate, user])

    return (
        <div>Loadin...</div>
    )
}
