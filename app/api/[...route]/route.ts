import { handle } from 'hono/vercel';
import api from '@/api';

export const runtime = 'edge';

export const GET = handle(api);
