import axios from 'axios';
import {TicketStatus} from "../ticket/ticket.types";

const API_BASE_URL = 'http://localhost:3002/api/tickets';

describe('Ticket API Tests', () => {
    let createdTicketId: number;

    // Test 1: Create ticket
    test('Create ticket', async () => {
        const response = await axios.post(
            `${API_BASE_URL}/create`,
            {
                topic: 'Jest topic',
                message: 'Testing with Jest',
            },
        );

        expect(response.status).toBe(201);
        expect(response.data.message).toHaveProperty('id');
        createdTicketId = response.data.message.id; // Сохраняем ID для последующих тестов
    });

    // Test 2: Take ticket in progress
    test('Put ticket in progress', async () => {
        const response = await axios.put(
            `${API_BASE_URL}/progress`,
            {
                id: createdTicketId, // Используем созданный билет
            },
        );

        expect(response.status).toBe(200);
        expect(response.data.message.status).toBe(TicketStatus.IN_PROGRESS);
    });

    // Test 3: Complete ticket
    test('Complete ticket', async () => {
        const resolutionText = 'this is genius resolution';
        const response = await axios.put(
            `${API_BASE_URL}/complete`,
            {
                id: createdTicketId,
                resolution: resolutionText,
            },
        );

        expect(response.status).toBe(200);
        expect(response.data.message.status).toBe(TicketStatus.COMPLETED);
        expect(response.data.message.resolution).toBe(resolutionText);
    });

    // Test 4: Cancel ticket
    test('Cancel ticket', async () => {
        const cancelReason = 'cancelled because i feel bored';
        const response = await axios.put(
            `${API_BASE_URL}/cancel`,
            {
                id: createdTicketId,
                cancelledReason: cancelReason,
            },
        );

        expect(response.status).toBe(200);
        expect(response.data.message.status).toBe(TicketStatus.CANCELLED);
        expect(response.data.message.cancelledReason).toBe(cancelReason);
    });

    // Test 5: Cancel all tickets
    test('Cancel all tickets', async () => {
        const cancelReason = 'all cancel reason is this';
        const response = await axios.put(
            `${API_BASE_URL}/cancel-all`,
            {
                cancelledReason: cancelReason,
            },
        );

        expect(response.status).toBe(200);
        expect(response.data.message.count).toBeGreaterThanOrEqual(0)
    });

    // Test 6: Get tickets filtered by single day
    test('Get tickets filtered by single day', async () => {
        const response = await axios.get(
            `${API_BASE_URL}/`,
            {
                params: {
                    fromDate: '2025-05-21T00:00:00.000Z',
                    toDate: '2025-05-21T23:59:00.000Z',
                },
                headers: {
                    Accept: 'application/json',
                },
            },
        );

        expect(response.status).toBe(200);
        expect(Array.isArray(response.data.message)).toBeTruthy();
    });

    // Test 7: Get tickets filtered by date range
    test('Get tickets filtered by date range', async () => {
        const response = await axios.get(
            `${API_BASE_URL}/`,
            {
                params: {
                    fromDate: '2025-05-10',
                    toDate: '2025-05-30',
                },
                headers: {
                    Accept: 'application/json',
                },
            },
        );

        expect(response.status).toBe(200);
        expect(Array.isArray(response.data.message)).toBeTruthy();
    });
});