import Sidebar from "@/components/Sidebar"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import PortfolioIcon from '../../assets/icons/portfolio.svg'
import GroupIcon from '../../assets/icons/group.svg'
import MessageIcon from '../../assets/icons/message.svg'
import AnalyticsIcon from '../../assets/icons/analytics.svg'
import PackIcon from '../../assets/icons/pack.svg'
import SettingsIcon from '../../assets/icons/settings.svg'

const Dashboard = () => {

    const navItems = [
        {
            id: 1,
            imgSrc: PortfolioIcon,
            navText: 'My Portfolio',
            navUrl: '/main/my-portfolio',
        },
        {
            id: 2,
            imgSrc: GroupIcon,
            navText: 'My Group',
            navUrl: '/main/my-group',
        },
        {
            id: 3,
            imgSrc: MessageIcon,
            navText: 'Messages',
            navUrl: '/main/messages',
        },
        {
            id: 4,
            imgSrc: AnalyticsIcon,
            navText: 'Analytics',
            navUrl: '/main/analytics',
        },
        {
            id: 5,
            imgSrc: PackIcon,
            navText: 'Packs',
            navUrl: '/main/packs',
        },
        {
            id: 6,
            imgSrc: SettingsIcon,
            navText: 'Settings',
            navUrl: '/main/settings',
        }
    ]

    const pathName: string = location.pathname

    const currentPage = (): string => {
        if (pathName.includes('my-portfolio')) return 'My Portfolio'
        if (pathName.includes('my-group')) return 'My group'
        if (pathName.includes('messages')) return 'Messages'
        if (pathName.includes('analytics')) return 'Analytics'
        if (pathName.includes('packs')) return 'Packs'
        if (pathName.includes('settings')) return 'Settings'
        return 'My Portfolio'
    }

    const [pageTitle, setPageTitle] = useState(currentPage())

    return (
        <div className="flex h-full shadow-md">
            <div><Sidebar setPageTitle={setPageTitle} className="w-72" navItems={navItems} /></div>
            <div className="flex-1 px-4 sm-px-6 md:px-8 overflow-auto">
                {/* <Header pageTitle={pageTitle} /> */}
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard