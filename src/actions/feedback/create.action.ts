import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import axios from "axios";

export const CreateFeedback = defineAction({
  accept: 'json',
  input: z.object({
    emoji: z.enum(['happy', 'neutral', 'sad', "closed"]),
    comment: z.string().optional(),
    page_path: z.string(),
    rejected: z.boolean(),
  }),
  handler: async ({ emoji, comment, page_path, rejected }, { cookies, clientAddress, request }) => {

    const API_URL = process.env.API_URL;
    const API_KEY = process.env.API_KEY;
    const API_USER = process.env.API_USER;
    const URL_BFF = `${API_URL}/api/feedback/emoji`;

    const sedeIdCookie = cookies.get('slug')?.value;
    const sessionId = cookies.get('_a')?.value;
    const userAgent = request.headers.get('User-Agent') || 'Desconocido';

    if (!sedeIdCookie || !sessionId) {
      throw new ActionError({ code: 'UNAUTHORIZED' });
    }

    const userContext = {
      ip: clientAddress,
      session_id: sessionId,
      user_agent: userAgent,
    }

    const data = {
      comment: comment,
      emoji: emoji === 'closed' ? "null" : emoji,
      page_path: page_path,
      rejected: rejected,
      sede_id: sedeIdCookie,
    }

    const headers = {
      'user-context': Buffer.from(JSON.stringify(userContext), 'utf-8').toString('base64'),
      'Content-Type': 'application/json',
      'api-key': `${API_USER}${API_KEY}`
    }

    try {
      // TODO: Refactor global controller
      const response = await axios.post(URL_BFF, data, { headers });
      return response.data;
    } catch (error) {
      return { error: true }
    }
  }
})
