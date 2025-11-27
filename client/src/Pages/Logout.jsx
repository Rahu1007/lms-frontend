import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HomeLayout from '../Layouts/HomeLayout';
import { logout } from '../Redux/Slices/AuthSlice';

function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        async function doLogout() {
            const response = await dispatch(logout());
            
            // The logout thunk handles success/error toasts internally.
            // We just need to navigate based on the result.
            if (logout.fulfilled.match(response)) {
                navigate('/login');
            } else {
                // If logout fails, the user is still logged in.
                // Navigate back to the previous page.
                navigate(-1);
            }
        }
        doLogout();
    }, [dispatch, navigate]);

    return (
        <HomeLayout>
            <div className="flex items-center justify-center min-h-[90vh] text-white">
                <p>Logging out...</p>
            </div>
        </HomeLayout>
    );
}

export default Logout;