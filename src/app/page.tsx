'use client';
import Form from "@/components/input";
import Image from "next/image";

export default function Home() {
    const newItem = (item : string) => {

    }

    return (
        <div className="flex justify-center bg-primary0 items-center w-[100vw] h-[100vh]">
            <Form onSubmit={newItem}/>
        </div>
    );
}
