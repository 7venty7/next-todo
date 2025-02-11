'use client';
import Form from "@/components/input";
import ItemsList from "@/components/list";

export default function Home() {
    const newItem = (item : string) => {

    }

    return (
        <div className="flex justify-center bg-primary0 items-center w-[100vw] h-[100vh]">
            <div className="flex flex-col w-[40vw]">
            <Form onSubmit={newItem}/>
            <ItemsList />
            </div>
        </div>
    );
}
