import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Car {
    id: number;
    name: string;
    displacements: number;
    handle: string;
    passengers: number;
    doors: number;
    maker_id: number;
    maker_name: string;
    body_type_id: number;
    body_type_name: string;
    fuel_id: number;
    fuel_name: string;
    drive_id: number;
    drive_name: string;
    mission_id: number;
    mission_name: string;
    user_id: number;
    error?: string;
}

type ApiResponse = Car | { error: string };

function isCar(data: ApiResponse): data is Car {
    return (
        typeof data === "object" &&
        data !== null &&
        "id" in data && typeof data.id === "number" &&
        "name" in data && typeof data.name === "string" &&
        "displacements" in data && typeof data.displacements === "number" &&
        "handle" in data && typeof data.handle === "string" &&
        "passengers" in data && typeof data.passengers === "number" &&
        "doors" in data && typeof data.doors === "number" &&
        "maker_id" in data && typeof data.maker_id === "number" &&
        "maker_name" in data && typeof data.maker_name === "string" &&
        "body_type_id" in data && typeof data.body_type_id === "number" &&
        "body_type_name" in data && typeof data.body_type_name === "string" &&
        "fuel_id" in data && typeof data.fuel_id === "number" &&
        "fuel_name" in data && typeof data.fuel_name === "string" &&
        "drive_id" in data && typeof data.drive_id === "number" &&
        "drive_name" in data && typeof data.drive_name === "string" &&
        "mission_id" in data && typeof data.mission_id === "number" &&
        "mission_name" in data && typeof data.mission_name === "string" &&
        "user_id" in data && typeof data.user_id === "number"
    );
}

export default function CarPage() {
    const [car, setCar] = useState<Car | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const { id, endpoint } = router.query;

    useEffect(() => {
        if (typeof endpoint === "string") {
            let url = `/api/car?endpoint=${endpoint}`;
            if (typeof id === "string" && !isNaN(Number(id))) {
                url += `&id=${id}`;
            }

            console.log(url);
            fetch(url)
                .then(async (res) => {
                    console.log(res.status);
                    if (!res.ok) {
                        const errData = await res.json();
                        console.error("Error Data:", errData);
                        throw new Error(`HTTP error! status: ${res.status}, message: ${errData.error}`);
                    }
                    return res.json() as Promise<ApiResponse>;
                })
                .then((data) => {
                    console.log("Response data:", data);
                    if (isCar(data)) {
                        setCar(data);
                    } else {
                        throw new Error("Invalid response format");
                    }
                    setLoading(false);
                })
                .catch((err) => {
                    console.error("Error fetching data:", err);
                    setError("データの取得に失敗しました");
                    setLoading(false);
                });
        }
    }, [id, endpoint]);

    if (loading) {
        return <div>読み込み中...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!car) {
        return <div>データが見つかりません</div>;
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
            <p>Maker: {car.maker_name}</p>
            <p>Body Type: {car.body_type_name}</p>
            <p>Fuel: {car.fuel_name}</p>
            <p>Drive: {car.drive_name}</p>
            <p>Mission: {car.mission_name}</p>
            <p>User ID: {car.user_id}</p>
        </div>
    );
}