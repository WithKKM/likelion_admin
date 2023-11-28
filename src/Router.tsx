import { createBrowserRouter } from 'react-router-dom';
import SignUp from './routes/SignUp';
import LoginPage from './routes/LoginPage';
import LandingPage from './routes/LandingPage';
import Project from './routes/Project';
import Chat from './routes/Chat';
import Root from './routes/root';
import Mypage from './routes/Mypage';

import UnivPage from './routes/UnivPage';
import ProjectDetail from './components/project/Detail/ProjectDetail';
import ProjectRegister from './components/project/register/ProjectRegister';
import ProjectList from './components/project/ProjectList';
import Community from './routes/Community';
import RecruitPage from './routes/RecruitPage';
import AboutPage from './routes/AboutPage';
import RecruitAlert from './components/admin/RecruitAlert';
import User from './components/admin/User';
import Board from './components/admin/Board';
import BabyLion from './components/recruit/apply/mobile/BabyLion';
import Recruit from './components/univrecruit/UnivRecruit';
import UnivRecruit from './components/univrecruit/UnivRecruit';
import AdminBoard from './routes/AdminBoard';
import AdminPage from './routes/Admin';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <LandingPage />,
            },
            {
                path: '/signup',
                element: <SignUp />,
            },
            {
                path: '/login',
                element: <LoginPage />,
            },
            {
                path: '/mypage',
                element: <Mypage />,
            },
            {
                path: '/project',
                element: <Project />,
                children: [
                    {
                        path: '',
                        element: <ProjectList />,
                    },
                    {
                        path: 'register',
                        element: <ProjectRegister />,
                    },
                    {
                        path: ':projectId',
                        element: <ProjectDetail />,
                    },
                ],
            },
            {
                path: '/chat',
                element: <Chat />,
            },
            {
                path: '/recruit',
                element: <RecruitPage />,
                children: [
                    {
                        path: '',
                        element: <UnivRecruit />,
                    },
                    {
                        path: 'babylion',
                        element: <BabyLion />,
                    },
                ],
            },
            {
                path: '/univ',
                element: <UnivPage />,
            },
            {
                path: '/community',
                element: <Community />,
            },
            {
                path: '/chat',
                element: <Chat />,
            },
            {
                path: '/about',
                element: <AboutPage />,
            },
            {
                path: '/admin',
                element: <AdminPage />,
                children: [
                    {
                        path: '',
                        element: <User />,
                    },
                    {
                        path: 'recruitalert',
                        element: <RecruitAlert />,
                    },
                    {
                        path: 'board',
                        element: <AdminBoard />,
                    },
                ],
            },
        ],
    },
]);

export default router;
