// フロントとバックをつなぐAPIです
// 基本いじらないでください

import type { NextApiRequest, NextApiResponse } from 'next';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (!id) {
        res.status(400).json({ error: 'Car ID is required' });
        return;
    }

    try {
        console.log('aaa');
        console.log(`Fetching data for car ID: ${id}`);
        const response = await fetch(`http://nginx/car_test.php?id=${id}`);
        console.log('Response status:', response.status);
        const data = await response.json();
        console.log('Response data:', data);

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