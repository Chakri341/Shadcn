"use client"
import { DollarSign, Laptop, LogOut, Moon, MoonIcon, Settings, Sun, SunIcon, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from './ui/button'
import { useTheme } from 'next-themes'
import { SidebarTrigger } from './ui/sidebar'

const NavBar = () => {
    const { setTheme } = useTheme();

    return (
        <div className='flex justify-between p-4'>
            {/* //left */}
            <SidebarTrigger className='cursor-pointer' />
            {/* //right */}
            <div className='flex items-center gap-4'>

                <Link href={'/'}>Dashboard</Link>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href="/users/profile">
                                <div className='flex items-center gap-2'>
                                    <User className="h-[1.2rem] w-[1.2rem] mr-2" />
                                    Profile
                                </div>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <div className='flex items-center gap-2'>
                                <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
                                Settings
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/payments">
                                <div className='flex items-center gap-2'>
                                    <DollarSign className="h-[1.2rem] w-[1.2rem] mr-2" />
                                    Payments
                                </div>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <div className='flex items-center gap-2'>
                                <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
                                Logout
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </div>
    )
}

export default NavBar