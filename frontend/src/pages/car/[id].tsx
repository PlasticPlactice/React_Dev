import { GetServerSideProps, GetServerSidePropsContext } from 'next';

interface Car {
    id: string;
    name: string;
    displacements: string;
    handle: string;
    passengers: number;
    doors: number;
    maker_id: string;
    body_type_id: string;
    error?: string;
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const { id } = context.params!;
    const res = await fetch(`http://localhost:3000/api/car?id=${id}`);
    const car: Car = await res.json();

    return {
        props: { car },
    };
};

export default function CarPage({ car }: { car: Car }) {
    if (car.error) {
        return <div>Error: {car.error}</div>;
    }

    return (
        <div>
            <h1>Car Details</h1>
            <p>ID: {car.id}</p>
            <p>Name: {car.name}</p>
            <p>Displacements: {car.displacements}</p>
            <p>Handle: {car.handle}</p>
            <p>Passengers: {car.passengers}</p>
            <p>Doors: {car.doors}</p>
        </div>
    );
}