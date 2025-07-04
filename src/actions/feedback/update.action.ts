import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import axios from "axios";

export const UpdateCommentFeedback = defineAction({
  accept: 'json',
  input: z.object({
    id: z.string(),
    comment: z.string(),
  }),
  handler: async ({ id, comment }, { cookies, clientAddress, request }) => {
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

    const data = { comment };

    const headers = {
      'user-context': Buffer.from(JSON.stringify(userContext), 'utf-8').toString('base64'),
      'Content-Type': 'application/json',
    }

    const pathURL = `http://localhost:3001/api/feedback/comment/${id}`;

    try {
      // TODO: Refactor global controller
      const response = await axios.post(pathURL, data, { headers });
      return response.data;
    } catch (error) {
      return { error: true }
    }
  }
});