import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (!id) {
        res.status(400).json({ error: 'Car ID is required' });
        return;
    }

    try {
        const response = await fetch(`http://localhost/backend/car_test.php?id=${id}`);
        const data = await response.json();

        if (response.ok) {
            res.status(200).json(data);
        } else {
            res.status(response.status).json(data);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data from PHP server' });
    }
}