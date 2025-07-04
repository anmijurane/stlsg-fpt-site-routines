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
    }

    try {
      // TODO: Refactor global controller
      const response = await axios.post('http://localhost:3001/api/feedback/emoji', data, { headers });
      return response.data;
    } catch (error) {
      return { error: true }
    }
  }
})
