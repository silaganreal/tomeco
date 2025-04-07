import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, Shield, Settings, LayoutGrid, MailWarning } from 'lucide-react';
import AppLogo from './app-logo';
import { usePage } from '@inertiajs/react';

export function AppSidebar() {

    const { auth } = usePage().props
    const userRole = auth?.user?.role || 'user'

    const mainNavItems: NavItem[] = [
        {
            title: 'Dashboard',
            href: '/dashboard',
            icon: LayoutGrid,
        },
        {
            title: 'Violations',
            href: '/violations',
            icon: MailWarning
        }
    ];

    const adminNavItems: NavItem[] = [
        {
            title: 'Manage Users',
            href: '/admin/users',
            icon: Shield,
        },
    ];

    const superAdminNavItems: NavItem[] = [
        {
            title: 'System Controls',
            href: '/superadmin/system-controls',
            icon: Settings,
        },
    ];

    // const footerNavItems: NavItem[] = [
    //     {
    //         title: 'Repository',
    //         href: 'https://github.com/laravel/react-starter-kit',
    //         icon: Folder,
    //     },
    //     {
    //         title: 'Documentation',
    //         href: 'https://laravel.com/docs/starter-kits',
    //         icon: BookOpen,
    //     },
    // ];

    let roleBasedNavItems = [...mainNavItems]

    if(userRole === 'admin') {
        roleBasedNavItems = [...roleBasedNavItems, ...adminNavItems]
    }

    if(userRole === 'superadmin') {
        roleBasedNavItems = [...roleBasedNavItems, ...adminNavItems, ...superAdminNavItems]
    }

    return (
        <Sidebar collapsible="icon" variant="floating">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={roleBasedNavItems} />
            </SidebarContent>

            <SidebarFooter>
                {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
