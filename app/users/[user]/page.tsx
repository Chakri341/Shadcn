import React, { use } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import CardList from '@/components/CardList';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Badge, BadgeCheck, BadgeCheckIcon, BadgeDollarSign, Candy, Citrus, Shield } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import EditUser from '@/components/EditUser';
import AppLineChart from '@/components/AppLineChart';

const SingleUser = () => {

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Single User</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className='mt-4 flex flex-col md:flex-row gap-4'>

        {/* left */}
        <div className='w-full md:w-2/5 space-y-6 p-2'>
            <div className='font-bold'>User Badges</div>
          <div className="flex gap-4 mt-4 p-2">
            <HoverCard>
              <HoverCardTrigger>
                <BadgeCheck
                  size={36}
                  className="rounded-full bg-blue-500/30 border border-blue-500/50 p-2"
                />
              </HoverCardTrigger>
              <HoverCardContent>
                <h1 className="font-bold mb-2">Verified User</h1>
                <p className="text-sm text-muted-foreground">
                  This user has been verified by the admin.
                </p>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <Shield
                  size={36}
                  className="rounded-full bg-green-800/30 border border-green-800/50 p-2"
                />
              </HoverCardTrigger>
              <HoverCardContent>
                <h1 className="font-bold mb-2">Admin</h1>
                <p className="text-sm text-muted-foreground">
                  Admin users have access to all features and can manage
                  users.
                </p>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <Candy
                  size={36}
                  className="rounded-full bg-yellow-500/30 border border-yellow-500/50 p-2"
                />
              </HoverCardTrigger>
              <HoverCardContent>
                <h1 className="font-bold mb-2">Awarded</h1>
                <p className="text-sm text-muted-foreground">
                  This user has been awarded for their contributions.
                </p>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <Citrus
                  size={36}
                  className="rounded-full bg-orange-500/30 border border-orange-500/50 p-2"
                />
              </HoverCardTrigger>
              <HoverCardContent>
                <h1 className="font-bold mb-2">Popular</h1>
                <p className="text-sm text-muted-foreground">
                  This user has been popular in the community.
                </p>
              </HoverCardContent>
            </HoverCard>
          </div>

          <div className='bg-primary-foreground p-4 rounded-lg mb-4'>
           <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile completion
                </p>
                <Progress value={66} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Username:</span>
                <span>john.doe</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span>john.doe@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Phone:</span>
                <span>+1 234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Location:</span>
                <span>New York, NY</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Role:</span>
                <Badge>Admin</Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Joined on 01.01.2025
            </p>
          </div>

          <div className='bg-primary-foreground p-4 rounded-lg mb-4'>
            <CardList title='Recent Transactions' />
          </div>
        </div>

        {/* right */}
       <div className="w-full md:w-3/5 space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage src="https://avatars.githubusercontent.com/u/1486366" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">John Doe</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              voluptas distinctio ab ipsa commodi fugiat labore quos veritatis
              cum corrupti sed repudiandae ipsum, harum recusandae ratione ipsam
              in, quis quia.
            </p>
          </div>
          {/* CHART CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Activity</h1>
            <AppLineChart/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SingleUser;

