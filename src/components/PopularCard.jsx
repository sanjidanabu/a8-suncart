import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { IoMdStar } from "react-icons/io";


const PopularCard = ({p}) => {
    console.log(p)
    return (
        <Card className="border rounded-xl mt-5">
            <div className="relative w-full aspect-square">
                <Image
                src={p.image}
                fill
                alt="{p.name}"
                className="object-cover rounded-xl"

                />
                <Chip className="absolute right-2 top-2">{p.category}</Chip>
            </div>
            <div>
                <h2 className="font-medium">{p.name}</h2>
            </div>
           <div className="flex gap-2">
             <div>
                <p>$ {p.price}</p>
            </div>
            <Separator orientation="vertical"/>
            <div className="flex items-center gap-2">
                <p><IoMdStar /></p>
                <p>{p.rating}</p>
            </div>
           </div>

          <Link href={`/allproduct/${p.id}`}> <Button variant="outline" className={'w-full'}>View Details</Button></Link>
        </Card>
    );
};

export default PopularCard;