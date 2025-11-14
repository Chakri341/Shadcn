import AppAreaChart from "@/components/AppAreaChart";
import { AppBarChart } from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";
import App from "next/app";


export default function Home() {


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-primary-foreground rounded-lg md:col-span-2 lg:col-span-1 xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <CardList title={"Last Transactions"}/>
      </div>
      <div className="bg-primary-foreground rounded-lg ">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground rounded-lg">
        <TodoList/>
      </div>
      <div className="bg-primary-foreground rounded-lg md:col-span-2 lg:col-span-1 xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground rounded-lg">
         <CardList  title={"Popular Content"}/>
      </div>
    </div>
  );
}
