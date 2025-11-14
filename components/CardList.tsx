import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { latestTransactions, popularContent } from '@/lib/dataLists';
import { Badge } from './ui/badge';
import Image from 'next/image';



const CardList = ({ title }: { title: string }) => {
    const ListItems = title === "Popular Content" ? popularContent : latestTransactions;
    return (
        <div>
            <h1 className="text-lg font-medium mb-6">{title}</h1>
            <div className="flex flex-col gap-2">
                {ListItems.map((item) => (
                    <Card key={item.id} className="flex-row items-center justify-between gap-x-2 p-4">
                        <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <CardContent className="p-0 flex-1">
                            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                            <Badge variant="secondary">{item.badge}</Badge>
                        </CardContent>
                        <CardFooter className="p-0">{item.count / 1000}K</CardFooter>
                    </Card>
                ))}
            </div>
        </div >
    )
}


export default CardList