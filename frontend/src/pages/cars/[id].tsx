// 使いません
// コードの保管のために残しておきます

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
        "body_type_id" in data && typeof data.body_type_id === "number" &&
        "fuel_id" in data && typeof data.fuel_id === "number" &&
        "drive_id" in data && typeof data.drive_id === "number" &&
        "mission_id" in data && typeof data.mission_id === "number" &&
        "user_id" in data && typeof data.user_id === "number"
    );
}

export default function CarPage() {
    const [car, setCar] = useState<Car | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (typeof id === "string") {
            fetch(`/api/car/${id}`)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(`HTTP error! status: ${res.status}`);
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
    }, [id]);

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
        </div>
    );
}